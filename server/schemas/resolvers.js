const User = require("../models/User");
const Listing = require("../models/Listing");
//const multer = require("multer");
const {
  authenticateUser,
  signToken,
  AuthenticationError,
} = require("../utils/auth");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Save uploaded files to the 'uploads' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename
//   },
// });

// const upload = multer({ storage: storage });

const resolvers = {
  Query: {
    user: async (_, { _id }) => {
      return User.findById(_id);
    },
    users: async () => {
      return User.find();
    },
    listing: async (_, { _id }) => {
      return Listing.findById(_id);
    },
    listings: async (_, { filter, sort }) => {
      let query = { active: true };

      if (filter) {
        // Apply filters
        if (filter.price) query.price = filter.price;
        if (filter.size) query.size = filter.size;
        if (filter.gender) query.gender = filter.gender;
        if (filter.category) query.category = filter.category;
      }

      let listings = await Listing.find(query);

      // Apply sorting
      if (sort) {
        const { field, order } = sort;

        switch (field) {
          case "RECENT":
            listings = listings.sort((a, b) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              return order === "ASC" ? dateA - dateB : dateB - dateA;
            });
            break;
          case "PRICE":
            listings = listings.sort((a, b) => {
              return order === "ASC" ? a.price - b.price : b.price - a.price;
            });
            break;
          default:
            break;
        }
      }

      return listings;
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(User);

      return { token, user };
    },
    loginUser: async (_, { email, password }) => {
      try {
        const user = await authenticateUser(email, password);

        const token = signToken(user);

        return {
          token,
          user,
        };
      } catch (error) {
        // Handle authentication errors
        if (error === AuthenticationError) {
          console.error("Authentication failed:", error);
        }
        throw error;
      }
    },
    createListing: async (
      _,
      { title, description, price, size, gender, category, active, pictures },
      { req }
    ) => {
      try {
        // const user = await User.findById(req.userId);

        // if (!user) {
        //   throw new Error("User not found");
        // }

        //const picture = req.files.map((file) => file.path); // Get file paths

        const listing = await Listing.create({
          title,
          description,
          price,
          size,
          gender,
          category,
          active,
          pictures,
        });

        // const userPush = await User.findOneAndUpdate(
        //   { _id },
        //   { $push: { listing: listing } },
        //   { new: true }
        // );
        // return userPush;

        // await listing.save();
        // user.listings.push(listing);
        // await user.save();

        return listing;
      } catch (error) {
        console.error(error);
        throw new Error("Error creating listing");
      }
    },
    editListing: async (
      _,
      {
        _id,
        title,
        description,
        price,
        size,
        gender,
        category,
        pictures,
        active,
      }
    ) => {
      try {
        const updatedListing = await Listing.findByIdAndUpdate(
          _id,
          {
            title,
            description,
            price,
            size,
            gender,
            category,
            pictures,
            active,
          },
          { new: true }
        );

        return updatedListing;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to edit listing");
      }
    },
    addToCart: async (_, { userId, listingId }) => {
      const user = await User.findById(userId);

      // Check if the item is already in the cart
      const existingCartItem = user.cart.find((item) =>
        item.listingId.equals(listingId)
      );

      if (!existingCartItem) {
        // If the item is not in the cart, add it
        user.cart.push({ listingId });
        await user.save();
      }

      return user;
    },

    removeFromCart: async (_, { userId, listingId }) => {
      const user = await User.findById(userId);

      // Remove the item from the cart
      user.cart = user.cart.filter((item) => !item.listingId.equals(listingId));

      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;

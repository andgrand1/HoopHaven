const User = require('../server/models/User.js'); 
const Listing = require('../server/models/Listing.js'); 
const resolvers = {
  Query: {
    getlisting: async (_, { id }) => {
      return Listing.findById(id);
    },
    getUsers: async () => {
      return User.find();
    },
    getListings: async () => {
      return Listing.find();
    },
    getUserCart: async (_, { userId }) => {
      const user = await User.findById(userId).populate('cart.listing');
      return user.cart;
    },
  },
  Mutation: {
    createUser: async (_, { username, email }) => {
      return User.create({ username, email });
    },
    createListing: async (_, listingData) => {
      return Listing.create(listingData);
    },
    editListing: async (_, { id, ...updatedListingData }) => {
      return Listing.findByIdAndUpdate(id, updatedListingData, { new: true });
    },
    addToCart: async (_, { userId, listingId, quantity }) => {
      const user = await User.findById(userId);
      user.cart.push({ listing: listingId, quantity });
      await user.save();
      return user;
    },
    removeFromCart: async (_, { userId, cartItemId }) => {
      const user = await User.findById(userId);
      user.cart = user.cart.filter((item) => item._id.toString() !== cartItemId);
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;

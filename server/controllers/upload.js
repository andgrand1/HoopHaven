const express = require("express");
const router = express.Router();
const multer = require("multer");
const sharp = require("sharp");
const fileType = require("file-type");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename
    },
  }); // Use memory storage to process the file in memory
const upload = multer({ storage: storage });

router.post("/upload", upload.array("images", 5), async (req, res) => {
  const files = req.files;

  // Validate file types and resize images
  const processedFiles = await Promise.all(
    files.map(async (file) => {
      const fileTypeResult = fileType(file.buffer);

      if (
        fileTypeResult &&
        (fileTypeResult.ext === "jpg" || fileTypeResult.ext === "png")
      ) {
        const resizedImageBuffer = await sharp(file.buffer)
          .resize(400, 400)
          .toBuffer();

        return {
          buffer: resizedImageBuffer,
          originalname: file.originalname,
        };
      } else {
        alert("Only .PNG and .JPG files can be uploaded");
        return null;
      }
    })
  );

  res
    .status(200)
    .json({ message: "Files uploaded and processed successfully" });
});

module.exports = router;

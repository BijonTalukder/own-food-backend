const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
let dir = "../../uploads/users";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});

const upload = multer({ storage: storage });

router.post("/uploads", upload.single("avatar"), function (req, res, next) {
  const tempPath = req.file.path;

  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }

  const targetPath = path.join(__dirname, dir, req.file.filename);
  console.log(tempPath, targetPath);
  if (path.extname(req.file.originalname).toLowerCase() === ".png" && ".jpg") {
    fs.rename(tempPath, targetPath, (err) => {
      if (err) {
        res.status(200).json({
          status: "Fail",
          data: err,
        });
      } else {
        res.status(200).json({
          status: "Success",
          data: req.file,
          imgUrl: dir + "/" + req.file.filename,
        });
      }
    });
  } else {
    fs.unlink(tempPath, (err) => {
      if (err) return handleError(err, res);
      res
        .status(200)
        .json({ status: "Fail", data: "Only .png, .jpg files are allowed!" });
    });
  }
});

module.exports = router;

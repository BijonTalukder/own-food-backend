const express = require("express");
const router = require("./src/Routers/API");
const routerImg = require("./src/Routers/ImageUploadAPI");
const app = new express();
const bodyParser = require("body-parser");
const multer = require("multer");

// Security Middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cores = require("cors");
const path = require("path");
const fs = require("fs");
// Database
const mongoose = require("mongoose");

// Env
const dotENV = require("dotenv");
dotENV.config();

// Security Middleware Implement
app.use(helmet());
app.use(mongSanitize());
app.use(xss());
app.use(hpp());
app.use(cores());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "100mb" }));

// BodyParser Implement
app.use(bodyParser.json());

//Rate Limit
const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 3000,
});
app.use(limiter);

// Database Connect

// const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fsp0qs4.mongodb.net/inventory-project?retryWrites=true&w=majority`;

const URL =
  "mongodb+srv://admin:00000000@cluster0.4sjujzo.mongodb.net/OwnFood-DataTable?retryWrites=true&w=majority";

mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(" Mongoose is connected");
  }
);

// Front ENd Tagging API
app.use("/api/v1", router);

// ===================
// const upload = multer({ dest: "uploads/" });
let dir = "./uploads/users";
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

app.post("/upload", upload.single("avatar"), function (req, res, next) {
  const tempPath = req.file.path;

  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }

  const targetPath = path.join(__dirname, dir, req.file.filename);

  if ((path.extname(req.file.originalname).toLowerCase() === ".png", "jpg")) {
    fs.rename(tempPath, targetPath, (err) => {
      if (err) return handleError(err, res);

      res.status(200).json({
        status: "Success",
        data: req.file,
        imgUrl: dir + "/" + req.file.filename,
      });
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

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Undefined Router Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Not Found" });
});

module.exports = app;

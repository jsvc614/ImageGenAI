import express from "express";
import { getImages, newImage } from "../controllers/postController.js";

const Router = express.Router();

Router.route("/").get(getImages);
Router.route("/").post(newImage);

export default Router;

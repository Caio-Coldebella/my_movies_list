import {Router} from "express";
import { getmovies } from "../controllers/getmoviesController.js";

const router = Router();
router.get("/",getmovies);
export default router;
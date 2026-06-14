import { Router } from "express";
import { getRecipe } from "../controllers/recipes/getRecipe";

const router = Router();

router.get('/:id', getRecipe);

export default router;
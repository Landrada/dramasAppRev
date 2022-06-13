import express from "express";
import { getDramas, createDrama, getDrama, deleteDrama, updateDrama } from "../controllers/dramaController.js";

const router = express.Router();
router.get('/',getDramas);
router.post('/',createDrama);
router.get('/:id',getDrama);
router.delete('/:id',deleteDrama);
router.put('/:id',updateDrama);
export default router
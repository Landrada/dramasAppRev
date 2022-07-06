import express from "express";
import { getDramas, createDrama, getDrama, deleteDrama, updateDrama } from "../controllers/dramaController.js";
import {auth} from './../middlewares/auth.js';
import { registerDefinition} from 'swaggiffy';
const router = express.Router();

router.get('/',getDramas);
router.post('/',auth , createDrama);
router.get('/:id',getDrama);
router.delete('/:id',deleteDrama);
router.put('/:id',updateDrama);
registerDefinition(router, { tags: 'Dramas', mappedSchema: 'Drama', basePath: '/drama' });
export default router
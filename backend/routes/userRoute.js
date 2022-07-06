import express from "express";
import { registerDefinition} from 'swaggiffy';
import { signUp, signIn } from "../controllers/userController.js";
const router = express.Router();
router.post('/signup',signUp)
router.post('/signin', signIn);
registerDefinition(router, { tags: 'Users', mappedSchema: 'User', basePath: '/user' });
export default router

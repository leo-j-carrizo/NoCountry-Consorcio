import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/user.controller";

router.get("/", userCtrl.createUser);

export default router;

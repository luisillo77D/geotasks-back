import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getSample,
  createSample,
  deleteSamples,
  updateSamples,
  getallSamples
} from "../controllers/samplesOk.controller.js";
import {createSampleSchema} from '../schemas/sample.schema.js';
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/allsamplesOk", authRequired, getallSamples);
router.get("/samplesOk/:id", authRequired, getSample);
router.post("/samplesOk", authRequired, validateSchema(createSampleSchema), createSample);
router.delete("/samplesOk/:id", authRequired, deleteSamples);
router.put("/samplesOk/:id", authRequired, updateSamples);

export default router;

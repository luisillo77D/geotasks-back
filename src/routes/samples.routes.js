import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getSample,
  getSamples,
  createSample,
  deleteSamples,
  updateSamples,
  getSamplesChecked,
  getallSamples
} from "../controllers/samples.controller.js";
import {createSampleSchema} from '../schemas/sample.schema.js';
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/samples", authRequired, getSamples);
router.get("/allsamples", authRequired, getallSamples);
router.get("/samples/:id", authRequired, getSample);
router.get("/samplescheck/:status", authRequired, getSamplesChecked);
router.post("/samples", authRequired, validateSchema(createSampleSchema), createSample);
router.delete("/samples/:id", authRequired, deleteSamples);
router.put("/samples/:id", authRequired, updateSamples);

export default router;

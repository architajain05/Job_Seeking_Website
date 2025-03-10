import express from 'express';
import {employerGetAllApplications, jobseekerGetAllApplications , jobSeekerDeleteApplication, postAppilcation} from "../controllers/applicationController.js"
import {isAuthorized} from "../middlewares/auth.js";

const router = express.Router();
router.get("/jobseeker/getall", isAuthorized, jobseekerGetAllApplications);
router.get("/employer/getall", isAuthorized, employerGetAllApplications);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication);
router.post("/post", isAuthorized, postAppilcation);

export default router;
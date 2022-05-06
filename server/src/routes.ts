import { Router } from "express"
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter"
import { prismaClient } from "./prismaClient"
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedback-repository"
import { SubmitFeedbackService } from "./services/submitFeedbackService"

const feedbackRoute = Router()

feedbackRoute.get("/api/feedbacks", async (req, res) => {
    const feedbacks = await prismaClient.feedback.findMany()
    res.json(feedbacks)
})

feedbackRoute.post("/api/feedbacks", async (req, res) => {
    const { type, message, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    const postedFeedback = await submitFeedbackService.execute({
        type,
        message,
        screenshot,
    })

    return res.json(postedFeedback)
})

export = feedbackRoute

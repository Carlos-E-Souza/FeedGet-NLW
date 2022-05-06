import { prismaClient } from "../../prismaClient"
import {
    FeedbackCreateData,
    FeedbacksRepository,
} from "../feedbacks-repository"

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, message, screenshot }: FeedbackCreateData) {
        await prismaClient.feedback.create({
            data: {
                type,
                message,
                screenshot,
            },
        })
    }
}

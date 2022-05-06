import { MailAdapter } from "../adapters/mailAdapter"
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackRequest {
    type: string
    message: string
    screenshot?: string
}

export class SubmitFeedbackService {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute(request: SubmitFeedbackRequest) {
        const { type, message, screenshot } = request

        if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot format")
        }

        const feedback = await this.feedbacksRepository.create({
            type,
            message,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: "New Feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Feedback type: ${type}</p>`,
                `<p>Message: ${message}</p>`,
                screenshot ? `<img src=${screenshot} />` : ``,
                `</div>`,
            ].join("\n"),
        })

        return feedback
    }
}

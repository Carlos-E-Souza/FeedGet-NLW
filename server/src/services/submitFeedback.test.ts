import { SubmitFeedbackService } from "./submitFeedbackService"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe("Submit Feedback", () => {
    it("Should be able to submit a feedback", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                message: "test message",
                screenshot: "data:image/png;base64,49877529845782908",
            })
        ).resolves.not.toThrow()
        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it("Should not be able to submit other image format", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                message: "test message",
                screenshot: "data:image/png;bse64,49877529845782908",
            })
        ).rejects.toThrow()
    })
})

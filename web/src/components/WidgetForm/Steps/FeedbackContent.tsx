import React, { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { ArrowLeft, Camera } from "phosphor-react"
import { ClosseBtn } from "../../common/CloseBtn"
import { ScreenshotButton } from "../../common/ScreenshotBtn"
import { api } from "../../../lib/api"
import { Loading } from "../../common/Loading"

interface FeedbackContentProps {
    feedbackType: FeedbackType
    onRestartRequest: () => void
    onFeedbackSend: () => void
}

export function FeedbackContentStep({
    feedbackType,
    onRestartRequest,
    onFeedbackSend,
}: FeedbackContentProps) {
    const feedbackTypeData = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    const handleSubmitFeedback = async (e: FormEvent) => {
        e.preventDefault()
        setIsSendingFeedback(true)
        await api.post("feedbacks", {
            type: feedbackType,
            message: message,
            screenshot: screenshot,
        })
        setIsSendingFeedback(false)
        onFeedbackSend()
    }

    return (
        <React.Fragment>
            <header>
                <ArrowLeft
                    weight="bold"
                    className="w-4 h-4 absolute left-4 top-4 text-txt_seco hover:text-txt_prim"
                    onClick={() => onRestartRequest()}
                />
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeData.image.source}
                        alt={feedbackTypeData.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeData.title}
                </span>
                <ClosseBtn />
            </header>
            <form className="mt-2 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-txt_seco
                            text-txt_prim border-stroke bg-transparent resize-none rounded-md focus:border-brand 
                            focus:ring-brand focus:ring-1  focus:outline-none scrollbar-thumb-surface_seco_hover
                            scrollbar-track-transparent scrollbar-thin"
                    placeholder="Tell us what happened in details..."
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                <footer className="flex gap-2 mt-2 mb-3">
                    <ScreenshotButton
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                    />
                    <button
                        type="submit"
                        className="p-2 w-auto bg-brand rounded-md border-transparent flex-1 flex justify-center items-center 
                            text-sm hover:bg-brand_hover focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-offset-surface_prim focus:ring-brand transition-colors disabled:opacity-50 disabled:hover:bg-brand"
                        disabled={!message || isSendingFeedback ? true : false}>
                        {isSendingFeedback ? <Loading /> : "Send Feedback"}
                    </button>
                </footer>
            </form>
        </React.Fragment>
    )
}

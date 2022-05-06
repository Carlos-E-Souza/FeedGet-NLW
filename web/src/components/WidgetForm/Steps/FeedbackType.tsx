import React from "react"
import { feedbackTypes, FeedbackType } from ".."
import { ClosseBtn } from "../../common/CloseBtn"

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypeStep({
    onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
    return (
        <React.Fragment>
            <header>
                <span className="text-xl leading-6">Send us a feedback</span>
                <ClosseBtn />
            </header>
            <div className="flex items-center w-full gap-2 py-8">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="w-24 flex-1 flex flex-col items-center bg-surface_seco py-5
                                    rounded-lg gap-2 border-2 border-transparent
                                    hover:border-brand focus:border-brand focus:outline-none"
                            key={key}
                            onClick={() =>
                                onFeedbackTypeChange(key as FeedbackType)
                            }>
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

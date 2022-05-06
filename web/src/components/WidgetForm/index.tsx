import { Popover } from "@headlessui/react"
import React, { useState } from "react"

import bugImgUrl from "../../assets/bug.svg"
import ideaImgUrl from "../../assets/idea.svg"
import thoughtImgUrl from "../../assets/thought.svg"
import { FeedbackContentStep } from "./Steps/FeedbackContent"
import { FeedbackSucess } from "./Steps/FeedbackSucess"
import { FeedbackTypeStep } from "./Steps/FeedbackType"

export const feedbackTypes = {
    BUG: {
        title: "Problem",
        image: {
            source: bugImgUrl,
            alt: "bug image",
        },
    },
    IDEA: {
        title: "Idea",
        image: {
            source: ideaImgUrl,
            alt: "lamp image",
        },
    },
    OTHER: {
        title: "Other",
        image: {
            source: thoughtImgUrl,
            alt: "balon image",
        },
    },
}

export type FeedbackType = keyof typeof feedbackTypes

export function FeedbackWidget() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    const restartFeedbackForm = () => {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <Popover.Panel
            className="bg-surface_prim relative rounded-2xl p-4 flex flex-col 
                        items-center shadow-lg w-[calc(100vw-2rem)] mb-4 md:w-auto">
            {feedbackSent ? (
                <FeedbackSucess onRestartRequest={restartFeedbackForm} />
            ) : (
                <React.Fragment>
                    {!feedbackType ? (
                        <FeedbackTypeStep
                            onFeedbackTypeChange={setFeedbackType}
                        />
                    ) : (
                        <FeedbackContentStep
                            onRestartRequest={restartFeedbackForm}
                            feedbackType={feedbackType}
                            onFeedbackSend={() => setFeedbackSent(true)}
                        />
                    )}
                </React.Fragment>
            )}

            <footer className="text-xs text-txt_seco">
                Made By
                <a
                    href="https://github.com/Carlos-E-Souza"
                    className="underline hover:text-brand">
                    @Carlos-E-Souza
                </a>
            </footer>
        </Popover.Panel>
    )
}

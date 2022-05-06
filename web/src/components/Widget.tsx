import { Popover } from "@headlessui/react"
import { ChatTeardropDots } from "phosphor-react"
import { FeedbackWidget } from "./WidgetForm/index"

export function Widget() {
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <FeedbackWidget />
            <Popover.Button className="flex items-center bg-brand rounded-full px-3 h-12 text-txt_prim group hover:bg-brand-hover">
                <ChatTeardropDots className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700 transition-all ease-linear">
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}

import { ClosseBtn } from "../../common/CloseBtn"

import sucessImg from "../../../assets/sucess.svg"

interface FeedbackSucessProps {
    onRestartRequest: () => void
}

export function FeedbackSucess({ onRestartRequest }: FeedbackSucessProps) {
    return (
        <>
            <header>
                <ClosseBtn />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px] ">
                <img src={sucessImg} alt="Sucess" />

                <span className="text-xl mt-2">Thank u for the feedback!</span>

                <button
                    className="py-2 px-6 mt-6 bg-surface_seco rounded-md border-transparent text-sm leading-6
                         hover:bg-surface_seco_hover transition-colors focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-offset-surface_prim focus:ring-brand"
                    onClick={() => onRestartRequest()}>
                    Send Another One
                </button>
            </div>
        </>
    )
}

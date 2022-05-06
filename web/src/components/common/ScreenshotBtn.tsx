import html2canvas from "html2canvas"
import { Camera, Trash } from "phosphor-react"
import { useState } from "react"
import { Loading } from "./Loading"

interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void
    screenshot: string | null
}

export function ScreenshotButton({
    onScreenshotTook,
    screenshot,
}: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    const takeScreenshot = async () => {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector("html")!)
        const base64img = canvas.toDataURL("image/png")

        onScreenshotTook(base64img)
        setIsTakingScreenshot(false)
    }

    if(screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-txt_seco hover:text-txt_prim transition-colors"
                style={{
                    backgroundImage: `url(${ screenshot })`,
                    backgroundPosition: "right bottom",
                    backgroundSize: 180,
                }}
                onClick={() => onScreenshotTook(null)}>
                <Trash weight="fill" />
            </button>
        )
    }

    return (
        <button
            type="button"
            className="p-2 bg-surface_seco rounded-md border-transparent hover:bg-surface_seco_hover transition-colors"
            onClick={() => takeScreenshot()}>
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
    )
}

import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

export function ClosseBtn() {
    return (
        <Popover.Button
            className="right-4 top-4 absolute text-txt_seco hover:text-txt_prim"
            title="Close Menu">
            <X weight="bold" className="w-4 h-4" />
        </Popover.Button>
    )
}

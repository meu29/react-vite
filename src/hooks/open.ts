import { useState } from "react";

export const useOpen = () => {

    const [open, setOpen] = useState(false);

    const on = () => {
        setOpen(() => true);
    }

    const off = () => {
        setOpen(() => false);
    }

    return {
        open,
        on,
        off
    }

}
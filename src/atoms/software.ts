import { atom } from "recoil";

const SOFTWARE_ATOM_KEY = "SOFTWARES";

export const softwareState = atom<Record<string, Software>>({

    key: SOFTWARE_ATOM_KEY,

    default: {},

    effects: [
        ({ setSelf, onSet }) => {

            const json = localStorage.getItem(SOFTWARE_ATOM_KEY);

            if (json !== null) {
                setSelf(JSON.parse(json));
            }

            onSet((newValue, _, isReset) => {
                isReset ? localStorage.removeItem(SOFTWARE_ATOM_KEY) : localStorage.setItem(SOFTWARE_ATOM_KEY, JSON.stringify(newValue));
            });

        }
    ]

})
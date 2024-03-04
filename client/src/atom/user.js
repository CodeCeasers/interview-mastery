const { atom } = require("recoil");

export const userAtom = atom({
    key: "userAtom",
    default: {
        email: "",
        name: "",
        role: ""}
})
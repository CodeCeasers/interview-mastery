const { atom } = require("recoil");

const nameAtom = atom({
    key: "nameAtom",
    default: "Name"
})
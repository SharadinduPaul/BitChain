import React, { Dispatch, SetStateAction } from "react";

interface DefaultData{
    selected: number,
    setSelected: Dispatch<SetStateAction<number>>
}
const defaultData:DefaultData = {
selected: 0,
setSelected: ()=> {}
}

export const MainContext = React.createContext(defaultData)
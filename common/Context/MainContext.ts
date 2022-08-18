import React, { Dispatch, SetStateAction } from "react";

interface DefaultData {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
const defaultData: DefaultData = {
  selected: 0,
  setSelected: () => {},
  active: false,
  setActive: () => {},
};

export const MainContext = React.createContext(defaultData)
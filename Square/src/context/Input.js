import { createContext ,useState } from "react";

export const InputContext = createContext({
  input: "",
  setInput: () => {},
});

 
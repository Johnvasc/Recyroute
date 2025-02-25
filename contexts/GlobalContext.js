import React, { createContext, useState } from 'react';
import g from "../assets/collectsData";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState(g);

  const adicionarItem = (novoItem) => {
    setGlobalData([...globalData, novoItem]);
  };

  const atualizarItem = (itemModificado) => {
    setGlobalData(globalData.map(item => item.key === itemModificado.key ? itemModificado : item));
  };

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData, adicionarItem, atualizarItem }}>
      {children}
    </GlobalContext.Provider>
  );
};
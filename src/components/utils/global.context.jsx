/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    claro: {
      nav: "#A5D6A7",  
      home: "#81C784", 
      footer: "#A5D6A7", 
      font: "#4CAF50", 
    },
    oscuro: {
      nav: "#4CAF50",  
      home: "#388E3C", 
      footer: "#4CAF50", 
      font: "#E0E0E0", 
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);

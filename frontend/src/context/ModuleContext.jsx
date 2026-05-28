import {
  createContext,
  useContext,
  useState
} from "react";

const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {

  const [module, setModule] = useState("placement");

  return (

    <ModuleContext.Provider
      value={{
        module,
        setModule
      }}
    >

      {children}

    </ModuleContext.Provider>

  );

};

export const useModule = () => {

  return useContext(ModuleContext);

};
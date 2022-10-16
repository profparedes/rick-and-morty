import { createContext, useContext, useMemo } from 'react';

interface IContextProps {
  something: string;
}
interface IMyCustomProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const MyCustomProvider: React.FC<IMyCustomProviderProps> = ({
  children,
}) => {
  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          something: '',
        }),
        [],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useMyCustomHook = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    throw new Error('useMyCustomHook must be within MyCustomProvider');
  }

  return context;
};

import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading, refresh, setRefresh }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

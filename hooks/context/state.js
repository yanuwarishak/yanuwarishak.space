import { createContext, useContext, useState } from "react";

const SpotifyContext = createContext();

export function SpotifyWrapper({ children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <SpotifyContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SpotifyContext.Provider>
  );
}

export function useSpotifyContext() {
  return useContext(SpotifyContext);
}

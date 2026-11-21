// lowercased comments per rule 8
// atmospheric state management syncing theme tokens and canvas physics
import React, { createContext, useContext, useEffect, useState } from "react";

export type AtmosphereMode = "abyss" | "solar" | "flux";

interface AtmosphereContextType {
  mode: AtmosphereMode;
  setMode: (mode: AtmosphereMode) => void;
  cycleMode: () => void;
}

const AtmosphereContext = createContext<AtmosphereContextType | undefined>(undefined);

const storageKey = "kartikey_portfolio_atmosphere";

export const AtmosphereProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<AtmosphereMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      if (saved === "abyss" || saved === "solar" || saved === "flux") {
        return saved;
      }
    }
    return "abyss";
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, mode);
    } catch {
      // storage unavailable
    }

    const root = document.documentElement;
    root.classList.remove("theme-abyss", "theme-solar", "theme-flux");
    root.classList.add(`theme-${mode}`);
  }, [mode]);

  const cycleMode = () => {
    setMode((prev) => {
      if (prev === "abyss") return "solar";
      if (prev === "solar") return "flux";
      return "abyss";
    });
  };

  return (
    <AtmosphereContext.Provider value={{ mode, setMode, cycleMode }}>
      {children}
    </AtmosphereContext.Provider>
  );
};

export function useAtmosphere(): AtmosphereContextType {
  const context = useContext(AtmosphereContext);
  if (!context) {
    // safe fallback object instead of throwing fatal exception
    return {
      mode: "abyss",
      setMode: () => {},
      cycleMode: () => {},
    };
  }
  return context;
}

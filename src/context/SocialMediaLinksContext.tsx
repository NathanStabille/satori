"use client";
import { linksData } from "@/data/linksData";
import { createContext, ReactNode, useContext, useState } from "react";

interface ISocialMediaLinksProps {
  children: ReactNode;
}

interface ISocialMediaLinksType {
  // [key: string]: string | ((value: string) => void)

  x: string;
  setX: (x: string) => void;
  ig: string;
  setIg: (ig: string) => void;
  site: string;
  setSite: (site: string) => void;
}

const SocialMediaLinksContext = createContext<ISocialMediaLinksType>({
  x: "",
  setX: () => {},
  ig: "",
  setIg: () => {},
  site: "",
  setSite: () => {},
});

export const SocialMediaLinksProvider = ({
  children,
}: ISocialMediaLinksProps) => {
  const [x, setX] = useState(linksData.playpix.x);
  const [ig, setIg] = useState(linksData.playpix.ig);
  const [site, setSite] = useState(linksData.playpix.site);

  return (
    <SocialMediaLinksContext.Provider
      value={{
        x,
        setX,
        ig,
        setIg,
        site,
        setSite,
      }}
    >
      {children}
    </SocialMediaLinksContext.Provider>
  );
};

export const useSocialMediaLinks = () => useContext(SocialMediaLinksContext);

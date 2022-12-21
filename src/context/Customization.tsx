import { createContext, useContext, useState } from "react";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const initialValues = {
  material: 'leather',
  toggleMaterial: (material: 'leather' | 'fabric') => {},
  legs: 1,
  setLegs: (leg: number) => {},
  chairColors,
  chairColor: chairColors[0],
  setChairColor: (color: { color: string, name: string }) => {},
  cushionColors,
  cushionColor: cushionColors[0],
  setCushionColor: (color: { color: string, name: string }) => {},
}

const CustomizationContext = createContext(initialValues);

export const CustomizationProvider = (props: any) => {
  const [material, setMaterial] = useState(initialValues.material);
  const [legs, setLegs] = useState(initialValues.legs);
  const [chairColor, setChairColor] = useState(initialValues.chairColor);
  const [cushionColor, setCushionColor] = useState(initialValues.cushionColor);

  function toggleMaterial(material: 'leather' | 'fabric') {
    setMaterial(material)
  } 

  return (
    <CustomizationContext.Provider
      value={{
        material,
        toggleMaterial,
        legs,
        setLegs,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
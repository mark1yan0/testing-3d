import { createContext, useContext, useState } from 'react';
import { chairColors, cushionColors } from '../lib/config';
import { IColorItem, TMaterial } from '../lib/interfaces';

interface ICustomization {
  material: TMaterial;
  setMaterial: (material: TMaterial) => void;
  legs: number;
  setLegs: (leg: number) => void;
  chairColors: IColorItem[];
  chairColor: IColorItem;
  setChairColor: (color: IColorItem) => void;
  cushionColors: IColorItem[];
  cushionColor: IColorItem;
  setCushionColor: (color: IColorItem) => void;
}

const initialValues: ICustomization = {
  material: 'leather',
  setMaterial: (material: TMaterial) => {},
  legs: 1,
  setLegs: (leg: number) => {},
  chairColors,
  chairColor: chairColors[0],
  setChairColor: (color: IColorItem) => {},
  cushionColors,
  cushionColor: cushionColors[0],
  setCushionColor: (color: IColorItem) => {},
};

const CustomizationContext = createContext<ICustomization>(initialValues);

export const CustomizationProvider = (props: any) => {
  const [material, setMaterial] = useState(initialValues.material);
  const [legs, setLegs] = useState(initialValues.legs);
  const [chairColor, setChairColor] = useState(initialValues.chairColor);
  const [cushionColor, setCushionColor] = useState(initialValues.cushionColor);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
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

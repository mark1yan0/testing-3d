import React from 'react';
import { useCustomization } from '../context/Customization';
import { IColorItem } from '../lib/interfaces';

const Configurator = () => {
  const {
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
  } = useCustomization();

  return (
    <div className='absolute right-6 top-6 w-80 '>
      <div className='flex flex-col gap-4 bg-white rounded-xl p-6 overflow-y-auto h-[92vh]'>
        <PickerSection title='Chair Material'>
          <TextPicker
            onClick={() => setMaterial('leather')}
            selected={material === 'leather'}
            label='Leather'
          />
          <TextPicker
            onClick={() => setMaterial('fabric')}
            selected={material === 'fabric'}
            label='Fabric'
          />
        </PickerSection>

        <PickerSection title='Chair Color'>
          {chairColors?.map(item => (
            <ColorPicker
              key={item.color}
              onClick={() => setChairColor(item)}
              item={item}
              matcher={chairColor}
            />
          ))}
        </PickerSection>
        <PickerSection title='Cushion Color'>
          {cushionColors?.map(item => (
            <ColorPicker
              key={item.color}
              onClick={() => setCushionColor(item)}
              item={item}
              matcher={cushionColor}
            />
          ))}
        </PickerSection>
        <PickerSection title='Legs'>
          <TextPicker
            onClick={() => setLegs(1)}
            selected={legs === 1}
            label='Design'
          />
          <TextPicker
            onClick={() => setLegs(2)}
            selected={legs === 2}
            label='Classic'
          />
        </PickerSection>
      </div>
    </div>
  );
};

export default Configurator;

interface ISectionProps {
  children: React.ReactNode;
  title: string;
}

const PickerSection = ({ title, children }: ISectionProps) => {
  return (
    <div>
      <h4 className='title mb-2'>{title}</h4>
      <div className='values-container'>{children}</div>
    </div>
  );
};

type IClick = (event: React.MouseEvent<HTMLDivElement>) => void;

interface ITextPicker {
  onClick: IClick;
  selected: boolean;
  label: string;
}

interface IPickerProps extends IGenericProps {
  onClick: IClick;
}

const ColorPicker = ({ onClick, item, matcher }: IPickerProps) => {
  return (
    <div className='picker' onClick={onClick}>
      <Dot item={item} matcher={matcher} />
      <Label item={item} matcher={matcher} />
    </div>
  );
};

const TextPicker = ({ onClick, selected, label }: ITextPicker) => {
  return (
    <div
      className={`picker ${selected ? 'border-b-2 border-black' : ''}`}
      onClick={onClick}
    >
      <p className={`label ${selected ? 'text-black' : ''}`}>{label}</p>
    </div>
  );
};

interface IGenericProps {
  item: IColorItem;
  matcher: IColorItem;
}

const Dot = ({ item, matcher }: IGenericProps) => {
  return (
    <div
      className={`dot ${
        item.color === matcher?.color ? 'border-2 border-black' : ''
      }`}
      style={{ backgroundColor: item.color }}
    />
  );
};

const Label = ({ item, matcher }: IGenericProps) => {
  return (
    <p
      className={`label ${
        item.color === matcher?.color
          ? 'text-black border-b-2 border-black'
          : ''
      }`}
    >
      {item.name}
    </p>
  );
};

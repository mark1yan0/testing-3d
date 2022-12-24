import React from 'react';
import { useCustomization } from '../../context/index.';
import ColorPicker from './ColorPicker';
import PickerSection from './PickerSection';
import TextPicker from './TextPicker';
import SidebarToggle from './Toggle';

const Configurator = ({ close }: { close: Function }) => {
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
    <div className='absolute right-2 top-6 sm:w-80 md:right-6 w-[95vw] '>
      <div className='flex flex-col gap-4 bg-white rounded-xl p-6 overflow-y-auto h-[92vh]'>
        <SidebarToggle toggle={() => close(!open)} />
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

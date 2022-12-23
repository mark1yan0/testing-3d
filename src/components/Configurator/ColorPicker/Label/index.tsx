import { IGenericProps } from '../../../../lib/interfaces';

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

export default Label;

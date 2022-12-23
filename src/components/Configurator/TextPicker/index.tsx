import { IClick } from '../../../lib/interfaces';

interface ITextPicker {
  onClick: IClick;
  selected: boolean;
  label: string;
}

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

export default TextPicker;

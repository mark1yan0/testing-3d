import { IClick, IGenericProps } from '../../../lib/interfaces';
import Dot from './Dot';
import Label from './Label';

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

export default ColorPicker;

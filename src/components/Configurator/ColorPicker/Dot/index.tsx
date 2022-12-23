import React from 'react';
import { IGenericProps } from '../../../../lib/interfaces';

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

export default Dot;

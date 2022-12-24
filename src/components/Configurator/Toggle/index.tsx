import React from 'react';

const SidebarToggle = ({
  toggle,
}: {
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      className='absolute top-2 right-2 bg-white p-1 rounded-full'
      onClick={toggle}
    >
      <SVG />
    </button>
  );
};

export default SidebarToggle;

const SVG = () => {
  return (
    <svg
      viewBox='0 0 100 80'
      width='40'
      height='40'
      fill='#000'
      className='scale-50'
    >
      <rect width='100' height='20'></rect>
      <rect y='30' width='100' height='20'></rect>
      <rect y='60' width='100' height='20'></rect>
    </svg>
  );
};

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

export default PickerSection;

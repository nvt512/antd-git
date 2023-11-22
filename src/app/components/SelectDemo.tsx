import { Select, Space } from 'antd';

const getOptions = (): {
  value: string;
  label: string;
  disabled?: boolean;
}[] => {
  return [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
};

const SelectDemo: React.FC = () => {
  const options = getOptions();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Space wrap>
      <Select
        defaultValue='lucy'
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default SelectDemo;

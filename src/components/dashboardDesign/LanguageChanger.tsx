import { Select, Space } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const LanguageChanger = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: "lucy", label: "English" },
        { value: "jack", label: "Macedonian", disabled: true },
      ]}
    />
  </Space>
);

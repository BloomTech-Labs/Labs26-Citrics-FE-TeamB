import React from "react";
import { Tabs } from "antd";
export default function HousingPane({ rent }) {
  const { TabPane } = Tabs;
  // This list will be the titles of the tabs
  // it also matches the keys in rent (although they're all lowercase in rent)
  const aptTypes = ["Studio", "1BR", "2BR", "3BR", "4BR"];
  return (
    <Tabs defaultActiveKey="0">
      {aptTypes.map((name, idx) => (
        <TabPane key={idx} tab={name} className="rental-price-tab">
          ${rent[name.toLowerCase()]}
        </TabPane>
      ))}
    </Tabs>
  );
}

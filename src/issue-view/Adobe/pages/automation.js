import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Item,
  defaultTheme,
  Provider,
  ToggleButton,
  View,
  Text,
  Flex,
  Button,
} from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import More from "@spectrum-icons/workflow/More";
import Copy from "@spectrum-icons/workflow/Copy";
import FlashOn from "@spectrum-icons/workflow/FlashOn";
import CheckmarkCircleOutline from "@spectrum-icons/workflow/CheckmarkCircleOutline";
import GraphTrend from "@spectrum-icons/workflow/GraphTrend";

import { Rules, AuditLog, Library, Usage } from "./Tabs";

const AutomationAdobe = () => {
  const [theme, setTheme] = useState("dark");
  const isLight = theme === "light";
  const toggleTheme = () => setTheme(isLight ? "dark" : "light");
  const tabs = [
    { key: "Rules", title: "Rules", icon: <FlashOn />, panel: <Rules /> },
    {
      key: "Audit log",
      title: "Audit log",
      icon: <CheckmarkCircleOutline />,
      panel: <AuditLog />,
    },
    { key: "Library", title: "Library", icon: <Copy />, panel: <Library /> },
    { key: "Usage", title: "Usage", icon: <GraphTrend />, panel: <Usage /> },
  ];

  return (
    <View maxWidth={1000} margin="auto">
      <Provider theme={defaultTheme} colorScheme={theme}>
        <View padding={20}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text>
              <h2>Automation</h2>
            </Text>
            <Flex gap={5}>
              <Button variant="cta" children="Create rule" />
              <Button variant="secondary" isQuiet>
                <More />
              </Button>

              <ToggleButton onChange={toggleTheme} aria-label="Icon only">
                {isLight ? <Moon /> : <Light />}
              </ToggleButton>
            </Flex>
          </Flex>
          <Tabs aria-label="History of Ancient Rome">
            <TabList>
              {tabs.map((tab) => (
                <Item key={tab.key}>
                  {tab.icon} <Text children={tab.title} />
                </Item>
              ))}
            </TabList>
            <TabPanels UNSAFE_style={{ paddingTop: 20 }}>
              {tabs.map((tab) => (
                <Item key={tab.key} children={tab.panel} />
              ))}
            </TabPanels>
          </Tabs>
        </View>
      </Provider>
    </View>
  );
};

export { AutomationAdobe };

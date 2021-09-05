import { useState } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
  display: flex;
  gap: 2rem;
  height: 20px;
  padding: 20px 0;
`;

const Tab = styled.button<{ active?: boolean }>`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme, active }) => (active ? theme.colors.blackStroke : theme.colors.inactive)};
  font-size: 2rem;
  line-height: 2rem;
`;

export const TabPanel: React.FC<{ hidden: Boolean }> = ({ children, hidden }) => {
  const attrs = hidden ? { hidden: true } : {};
  return <div {...attrs}>{children}</div>;
};

type TabsConfigI = { label: string; Component: () => JSX.Element }[];

export const Tabs: React.FC<{ config: TabsConfigI }> = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabsWrapper>
        {config.map(({ label }, index) => (
          <Tab key={label} active={activeTab === index} onClick={() => setActiveTab(index)}>
            {label}
          </Tab>
        ))}
      </TabsWrapper>
      {config.map(({ label, Component }, index) => (
        <TabPanel key={label} hidden={activeTab !== index}>
          <Component />
        </TabPanel>
      ))}
    </>
  );
};

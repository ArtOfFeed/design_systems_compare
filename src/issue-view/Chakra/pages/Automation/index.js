import React from 'react';
import {
    ChakraProvider,
    extendTheme,
    Container,
    Flex,
    Box,
    Heading,
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Spacer,
    IconButton,
    Text,
} from '@chakra-ui/react';
import {
    BsThreeDots,
    BsLightning,
    BsGraphUp,
} from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoMdCopy } from 'react-icons/io';

import { RulesTab } from './tabs/rules';
import { AuditLogTab } from './tabs/audit';
import { UsageTab } from './tabs/usage';
import { LibraryTab } from './tabs/library';

export const ChakraAutomation = () => {
  const theme = extendTheme({
    colors: {
      primary: '#0052CC',
      link: '#476dbe',
    },
    indents: {
      base: '4px',
    },
    sizes: {
      avatars: {
        sm: '28px'
      }
    },
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1536px',
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'>
        <Flex>
          <Heading>Automation</Heading>
            <Spacer />
            <Box>
              <Button
                bg={theme.colors.primary}
                color='white'
                _hover={{
                  background: '#0065FF'
                }}
                mr='8px'
              >
                Create rule
              </Button>
              <IconButton
                icon={<BsThreeDots />}
              />
            </Box>
        </Flex>
        <Tabs>
          <TabList>
            <Tab><BsLightning /> <Text marginLeft={theme.indents.base}>Rules</Text></Tab>
            <Tab><AiOutlineCheckCircle /> <Text marginLeft={theme.indents.base}>Audit log</Text></Tab>
            <Tab><BsGraphUp /> <Text marginLeft={theme.indents.base}>Usage</Text></Tab>
            <Tab><IoMdCopy /> <Text marginLeft={theme.indents.base}>Library</Text></Tab>
          </TabList>
          <TabPanels>
            <TabPanel><RulesTab /></TabPanel>
            <TabPanel><AuditLogTab /></TabPanel>
            <TabPanel><UsageTab /></TabPanel>
            <TabPanel><LibraryTab /></TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ChakraProvider>
  );
};
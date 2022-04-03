import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { MdAutorenew, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const TRow = ({ date, rule, projects, status, duration }) => {
  const theme = useTheme();

  return (
    <Tr>
      <Td>
        <Text fontSize='12'>{date}</Text>
      </Td>
      <Td><Link href='#' cursor='pointer' textColor={theme.colors.link} fontSize='14'>{rule}</Link></Td>
      <Td>
        <HStack spacing={2}>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_map_of_Ukraine_from_2014.png/800px-Flag_map_of_Ukraine_from_2014.png'
            boxSize={theme.sizes.avatars.sm}
          />
          <Text fontSize='14'>{projects}</Text>
        </HStack>
      </Td>
      <Td><Tag size='sm' variant='solid' colorScheme='purple'>{status}</Tag></Td>
      <Td>{duration}</Td>
      <Td><Link fontSize='14' href='#'>Show more</Link></Td>
    </Tr>
  );
};

export const AuditLogTab = () => (
  <Box>
    <HStack>
      <Text>1-6</Text>
      <Spacer />
      <HStack>
        <IconButton icon={<MdKeyboardArrowLeft />} />
        <Button>1</Button>
        <IconButton icon={<MdKeyboardArrowRight />} />
        <MdAutorenew />
      </HStack>
    </HStack>
    <TableContainer>
      <Table variant='unstyled'>
        <Thead borderBottom='1px' borderBottomColor='gray.100' fontSize='10' textColor='gray.400' fontWeight='600'>
          <Tr>
            <Th>Date</Th>
            <Th>Rule</Th>
            <Th>Projects</Th>
            <Th>Status</Th>
            <Th>Duration</Th>
            <Th>Operations</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TRow
            date='28/03/22 11:23:47 am(7167271982)'
            rule='When all stories are completed → then close epic'
            projects='Business Systems Development'
            status='CONFIG CHANGE'
            duration=''
          />
          <TRow
            date='28/03/22 11:23:47 am(7167271982)'
            rule='When epic is completed → then close all the stories present'
            projects='Business Systems Development'
            status='CONFIG CHANGE'
            duration=''
          />
          <TRow
            date='28/03/22 11:23:47 am(7167271982)'
            rule='When an issue is transitioned → then automatically assign'
            projects='Business Systems Development'
            status='CONFIG CHANGE'
            duration=''
          />
        </Tbody>
      </Table>
    </TableContainer>
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <AccordionIcon />
          <Text>What different statuses mean?</Text>
        </AccordionButton>
        <AccordionPanel>
          <Text textAlign='start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Box>
);
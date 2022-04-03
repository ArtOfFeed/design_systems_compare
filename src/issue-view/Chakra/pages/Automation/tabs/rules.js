import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Input,
  Link,
  Switch,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useTheme,
} from '@chakra-ui/react';
import { AiOutlineGlobal, AiOutlinePlusCircle } from 'react-icons/ai';
import { SiPagekit } from 'react-icons/si';

const RulesOption = ({ icon, text }) => {
  const theme = useTheme();

  return (
    <HStack marginY='8px' marginLeft='8px' cursor='pointer' textColor={theme.colors.link} _hover={{textDecoration: 'underline'}}>
      {icon}
      <Text>{text}</Text>
    </HStack>
  );
};

const TRow = ({ name, owner, project }) => {
  const theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Tr>
      <Td><Link href='#' cursor='pointer' textColor={theme.colors.link} fontSize='14'>{name}</Link></Td>
      <Td>
        <Flex>
          <Avatar
            name={owner}
            src='https://memepedia.ru/wp-content/uploads/2018/10/pikachu-mem-hd.jpg'
            marginRight={theme.indents.base}
            boxSize={theme.sizes.avatars.sm}
          />
          <Text fontSize='14'>{owner}</Text>
        </Flex>
      </Td>
      <Td>
        <Flex>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag-map_of_Australia.svg/2195px-Flag-map_of_Australia.svg.png'
            marginRight={theme.indents.base}
            boxSize={theme.sizes.avatars.sm}
          />
          <Text fontSize='14'>{project}</Text>
        </Flex>
      </Td>
      <Td>
        <Switch size='md' isChecked={isEnabled} onChange={() => setIsEnabled(!isEnabled)} />
      </Td>
    </Tr>
  );
}

export const RulesTab = () => (
  <Flex>
    <Box width='20%'>
      <Input placeholder='Filter rules' />
      <RulesOption icon={<SiPagekit />} text='All rules' />
      <RulesOption icon={<AiOutlineGlobal />} text='Global rules' />
      <RulesOption icon={<AiOutlinePlusCircle />} text='Add rules' />
    </Box>
    <Box width='calc(80% - 16px)' marginLeft='16px'>
      <TableContainer>
      <Table variant='unstyled'>
        <Thead borderBottom='1px' borderBottomColor='gray.100' fontSize='10' textColor='gray.400' fontWeight='600'>
          <Th>Name</Th>
          <Th>Owner</Th>
          <Th>Projects</Th>
          <Th>Enable</Th>
        </Thead>
        <Tbody>
          <TRow
            name='Bulk sub-tasks'
            owner='Anonymous'
            project='Tacos'
          />
          <TRow
            name='Test sub-task'
            owner='Anonymous'
            project='Octopus Team'
          />
          <TRow
            name='When all stories are complited → then close epic'
            owner='Anonymous'
            project='Business Systems Development'
          />
          <TRow
            name='When all stories are complited → then close epic'
            owner='Anonymous'
            project='Aircraft Platform'
          />
          <TRow
            name='When an issue is transitioned → then automatically assign'
            owner='Anonymous'
            project='Be healthy'
          />
          <TRow
            name='When an issue is transitioned → then automatically assign'
            owner='Anonymous'
            project='LaLaLa'
          />
          <TRow
            name='Test sub-task'
            owner='Anonymous'
            project='Developer 3000'
          />
          <TRow
            name='When epic is complited → then close all the stories present'
            owner='Anonymous'
            project='Ecomm Platform Dev'
          />
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
  </Flex>
);
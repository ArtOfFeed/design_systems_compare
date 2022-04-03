import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Link,
  Progress,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Image,
  useTheme,
} from '@chakra-ui/react';
import { RiInformationFill } from 'react-icons/ri';

const Card = ({children}) => (
  <Box
    w='45%'
    paddingX='20px'
    paddingY='24px'
    border='2px'
    borderColor='gray.200'
    borderStyle='solid'
    borderRadius='3px'
  >
    {children}
  </Box>
);

export const UsageTab = () => {
  const theme = useTheme();
  return (
    <Box>
      <Flex justify='space-between' marginBottom='20px'>
        <Card>
          <Flex>
            <Text
              textTransform='uppercase'
              textColor='gray.400'
              fontSize='12'
              fontWeight='600'
            >
                executions available
            </Text>
            <Spacer />
            <Flex align='center'>
              <Text fontSize='12' textColor={theme.colors.link} marginRight={theme.indents.base}><Link href='#'>View details</Link></Text>
              <RiInformationFill style={{ cursor: 'pointer' }} />
            </Flex>
          </Flex>
          <Text align='left'>1,000 <Badge ml='8px' variant='solid' colorScheme='blue' textTransform='uppercase'>standart</Badge></Text>
          <Text
              marginTop='8px'
              align='left'
              textColor='gray.400'
              fontSize='12'
              fontWeight='500'
            >
              Rules will trigger until you reach your monthly limit. <br />
              Your monthly limit esets on October 8, 2020 <br />
              Single project rules are not counted towards your limit.
            </Text>
        </Card>
        <Card>
          <Flex>
            <Text
              textTransform='uppercase'
              textColor='gray.400'
              fontSize='12'
              fontWeight='600'
            >
                executions used
            </Text>
            <Spacer />
            <Text fontSize='12' textColor={theme.colors.link}><Link href='#'>How is my usage calculated?</Link></Text>
          </Flex>
          <Flex align='center'>
            <Text marginRight={theme.indents.base}>5</Text>
            <Text textColor='gray.400' fontSize='12'>/ 1000</Text>
          </Flex>
          <Box marginTop='12px'>
            <Progress marginY={theme.indents.base} value={0.5} colorScheme='cyan' />
            <Progress marginY={theme.indents.base} value={24} colorScheme='gray' />
          </Box>
        </Card>
      </Flex>
      <TableContainer>
        <Table variant='unstyled'>
          <Thead borderBottom='1px' borderBottomColor='gray.100'>
            <Tr fontSize='10' textColor='gray.400' fontWeight='600'>
              <Th isNumeric><Text>Executions</Text></Th>
              <Th><Text>Name</Text></Th>
              <Th><Text>Owner</Text></Th>
              <Th><Text>Project</Text></Th>
            </Tr>
          </Thead>
          <Tbody borderBottom='1px' borderBottomColor='gray.100'>
            <Tr>
              <Td>1</Td>
              <Td><Link href='#' textColor={theme.colors.link} fontSize='14'>Reopen issue when a customer comments on it</Link></Td>
              <Td>
                <Flex align='center'>
                  <Avatar marginRight={theme.indents.base} name='Christian Nwamba' src='https://bit.ly/code-beast' boxSize={theme.sizes.avatars.sm} />
                  <Text fontSize='14'>Joshua Williams</Text>
                </Flex>
              </Td>
              <Td>
                <Flex align='center'>
                  <Image marginRight={theme.indents.base} src='https://icon-library.com/images/hills-icon/hills-icon-28.jpg' boxSize={theme.sizes.avatars.sm} />
                  <Text fontSize='14'>InfrastructureChange Management</Text>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td><Link href='#' textColor={theme.colors.link} fontSize='14'>Prompt customer for comment</Link></Td>
              <Td>
                <Flex align='center'>
                  <Avatar marginRight={theme.indents.base} name='Ryan Florence' src='https://bit.ly/ryan-florence' boxSize={theme.sizes.avatars.sm} />
                  <Text fontSize='14'>Donald Stephens</Text>
                </Flex>
              </Td>
              <Td>
                <Flex align='center'>
                  <Image marginRight={theme.indents.base} src='https://images.vexels.com/media/users/3/135860/isolated/preview/589b95e1c5ecedb721b4ae6b69d9d57a-drill-round-icon.png' boxSize={theme.sizes.avatars.sm} />
                  <Text fontSize='14'>Finance Service Desk</Text>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
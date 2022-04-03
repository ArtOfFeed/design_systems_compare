import React from 'react';
import {
  Box,
  Heading,
  Center,
  Flex,
} from '@chakra-ui/react';
import { FaAtlassian, FaArrowRight } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';

const LibrarySection = ({ title, children }) => (
  <Box marginBottom='16px'>
    <Heading textAlign='start'>{title}</Heading>
    <Flex flexWrap='wrap'>
      {children}
    </Flex>
  </Box>
);

const LibraryCard = ({ text }) => (
  <Box
    width='calc(25% - 24px)'
    height='200px'
    margin='12px'
    border='1px solid gray'
    borderRadius='4px'
    cursor='pointer'
    _hover={{background: 'gray.100'}}
  >
    <Center height='50%' bg='gray.400'>
      <FaAtlassian />
      <FaArrowRight />
      <BiGitBranch />
    </Center>
    <Center height='50%' bg='inherit'>{text}</Center>
  </Box>
);

export const LibraryTab = () => (
  <Box>
    <LibrarySection title='Software'>
      <LibraryCard
        text='Close duplicate issues'
      />
      <LibraryCard
        text='Link issues that are mentioned in the comments'
      />
      <LibraryCard
        text='Close duplicate issues'
      />
      <LibraryCard
        text='Link issues that are mentioned in the comments'
      />
      <LibraryCard
        text='Close duplicate issues'
      />
      <LibraryCard
        text='Link issues that are mentioned in the comments'
      />
      <LibraryCard
        text='Close duplicate issues'
      />
      <LibraryCard
        text='Link issues that are mentioned in the comments'
      />
    </LibrarySection>

    <LibrarySection title='DevOps'>
      <LibraryCard
        text='When a commit is made → then move issue to in progress'
      />
      <LibraryCard
        text='When a commit is made → then move issue to in progress'
      />
    </LibrarySection>
  </Box>
);
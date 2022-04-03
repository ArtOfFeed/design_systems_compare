import React from 'react';

import { Textarea, Badge, Flex, Text, Box, Avatar } from '@chakra-ui/react';

const Comments = () => {
    return (
        <Flex mt="30px">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" mr="15px" mt="5px" w="35px" h="35px" />
            <Box w="100%">
                <Textarea
                    placeholder="Add a comment..."
                    size="lg"
                    minH="unset"
                    resize="none"
                />
                <Text mt="5px"><b>Pro tip:</b> press <Badge fontSize="14px">M</Badge> to comment</Text>
            </Box>
        </Flex>
    );
};

export default Comments;
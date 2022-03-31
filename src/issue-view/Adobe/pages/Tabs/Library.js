import { Flex, Text, View } from "@adobe/react-spectrum";
import ArrowRight from "@spectrum-icons/workflow/ArrowRight";
import Branch1 from "@spectrum-icons/workflow/Branch1";
import ViewSingle from "@spectrum-icons/workflow/ViewSingle";

const Square = ({ icon = <ViewSingle /> }) => {
  return (
    <View
      borderWidth={2}
      borderRadius="large"
      borderColor="gray-300"
      backgroundColor="gray-50"
      padding={10}
      UNSAFE_style={{ boxShadow: "0 2px 5px lightgrey" }}
    >
      <Flex alignItems={"center"} children={icon} />
    </View>
  );
};

const Card = () => {
  return (
    <View
      borderWidth={2}
      borderRadius="medium"
      overflow="hidden"
      borderColor="gray-400"
      minWidth={268}
      width={268}
      height={218}
      backgroundColor="gray-50"
    >
      <View backgroundColor={"gray-100"} padding={20}>
        <Flex alignItems={"center"} gap={5}>
          <Square />
          <ArrowRight />
          <Square icon={<Branch1 />} />
        </Flex>
      </View>

      <View padding={20}>
        <Text children="When all sub-tasks are done → move parent to done" />
      </View>
    </View>
  );
};

const Library = () => {
  return (
    <Flex direction={"column"}>
      <View>
        <Text>
          <h2>Software</h2>
        </Text>
        <Flex gap={15} wrap>
          <Card />
          <Card />
          <Card />
        </Flex>
      </View>
      <View>
        <Text>
          <h2>DevOps</h2>
        </Text>
        <Flex gap={15} wrap>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </View>
    </Flex>
  );
};

export default Library;

import {
  Cell,
  Column,
  Flex,
  Link,
  Meter,
  ProgressBar,
  Row,
  TableBody,
  TableHeader,
  TableView,
  Text,
  View,
} from "@adobe/react-spectrum";
import ChevronDown from "@spectrum-icons/workflow/ChevronDown";
import { Tag } from "./AuditLog";
import { ImageWithText } from "./Rules";

const Card = ({ title, link, content, footer }) => {
  return (
    <Flex flex={1}>
      <View
        borderWidth={2}
        borderRadius="medium"
        overflow="hidden"
        borderColor="gray-400"
        height={150}
        width={"100%"}
        minWidth={400}
        padding={25}
      >
        <Flex justifyContent={"space-between"}>
          <Text children={title} />

          {link}
        </Flex>

        <Flex direction={"column"} gap={5} marginTop={5}>
          {content}
          {footer}
        </Flex>
      </View>
    </Flex>
  );
};

const Table = () => {
  const columns = ["Executions", "Name", "Owner", "Project"];
  const rows = [
    "Bulk sub-tasks",
    "When all stories are completed -> then close epic",
  ];

  return (
    <TableView
      overflowMode="wrap"
      isQuiet
      aria-label="Example table with static contents"
    >
      <TableHeader>
        {columns.map((col) => (
          <Column children={col} />
        ))}
      </TableHeader>
      <TableBody>
        {[...rows].map((row) => (
          <Row>
            <Cell></Cell>
            <Cell>
              <Link isQuiet>
                <a href={row} target="_blank" rel="noreferrer">
                  {row}
                </a>
              </Link>
            </Cell>
            <Cell>
              <ImageWithText rounded text="Ievgen Golubiev" />
            </Cell>
            <Cell>
              <ImageWithText text="Teams in space" />
            </Cell>
          </Row>
        ))}
      </TableBody>
    </TableView>
  );
};

const FirstCard = () => {
  return (
    <Card
      title={"Executions available"}
      content={
        <Flex justifyContent={"start"} alignItems={"center"} gap={10}>
          <Text>
            <strong>70,000,500</strong>
          </Text>
          <Tag text={"PREMIUM"} />
        </Flex>
      }
      link={
        <Link isQuiet>
          <a href={"fdsa"} target="_blank" rel="noreferrer">
            <Flex alignItems={"center"}>
              <Text children={"View details"} />
              <ChevronDown />
            </Flex>
          </a>
        </Link>
      }
      footer={
        <Text children="*For a limited time, your execution limit is not being enforced." />
      }
    />
  );
};

const SecondCard = () => {
  return (
    <Card
      title={"Executions used"}
      content={
        <Flex justifyContent={"start"} alignItems={"center"} gap={10}>
          <Text>
            <strong>0</strong> / 70,000,500
          </Text>
        </Flex>
      }
      link={
        <Link isQuiet>
          <a href={"fdsa"} target="_blank" rel="noreferrer">
            <Flex alignItems={"center"}>
              <Text children={"How is my usage calculated?"} />
            </Flex>
          </a>
        </Link>
      }
      footer={
        <Flex direction={"column"} width="100%" flex={1} gap={5}>
          <ProgressBar UNSAFE_style={{ width: "100%" }} value={100} />
          <Meter
            variant="warning"
            UNSAFE_style={{ width: "100%" }}
            value={90}
          />
        </Flex>
      }
    />
  );
};

const Usage = () => {
  return (
    <View marginTop={10}>
      <Flex justifyContent={"space-between"} wrap="wrap" gap={40}>
        <FirstCard />
        <SecondCard />
      </Flex>
      <View>
        <Text>
          <h3>Usage in the last 30 days</h3>
        </Text>
        <Text children="These are the top rules that count towards your execution limit. The counts are for the last 30 days and not for the current billing period." />
      </View>
      <Table />
    </View>
  );
};

export default Usage;

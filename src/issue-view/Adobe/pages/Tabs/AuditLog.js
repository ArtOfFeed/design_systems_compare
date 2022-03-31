import {
  Flex,
  View,
  TableView,
  TableHeader,
  TableBody,
  Row,
  Column,
  Cell,
  Link,
  Text,
  ActionButton,
} from "@adobe/react-spectrum";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import Refresh from "@spectrum-icons/workflow/Refresh";
import { ImageWithText } from "./Rules";

export const Tag = ({ text, color }) => {
  return (
    <View
      UNSAFE_style={{
        color: "black",
        fontWeight: "bold",
        backgroundColor: color || "#EAE6FF",
        whiteSpace: "nowrap",
        fontSize: "0.8em",
        textAlign: "center",
      }}
      borderRadius="small"
      paddingX={5}
    >
      <Text children={text} />
    </View>
  );
};

const AuditLog = () => {
  const columns = [
    "Date",
    "Rule",
    "Projects",
    "Status",
    "Duration",
    "Operations",
  ];
  const rows = [
    "Bulk sub-tasks",
    "When all stories are completed -> then close epic",
  ];

  const addProps = (columnName) => {
    if (columnName === "Duration") return { width: "11%" };
    if (columnName === "Projects") return { width: "30%" };
    if (columnName === "Operations") return { width: "12%" };
    return {};
  };

  return (
    <View>
      <Flex alignItems="center" justifyContent="space-between">
        <Text UNSAFE_style={{ fontWeight: "bold" }} children="1-3" />
        <Flex>
          <Flex>
            <ActionButton variant="secondary" isQuiet>
              <ChevronLeft />
            </ActionButton>
            <ActionButton children="1" />
            <ActionButton variant="secondary" isQuiet>
              <ChevronRight />
            </ActionButton>
          </Flex>
          <ActionButton variant="secondary" isQuiet>
            <Refresh />
          </ActionButton>
        </Flex>
      </Flex>
      <TableView
        overflowMode="wrap"
        isQuiet
        aria-label="Example table with static contents"
      >
        <TableHeader>
          {columns.map((col) => (
            <Column {...addProps(col)} children={col} />
          ))}
        </TableHeader>
        <TableBody>
          {[...rows, ...rows, ...rows, ...rows].map((row) => (
            <Row>
              <Cell>
                <Flex direction="column">
                  <Text children="28/03/22" />
                  <Text children="11:23:47" />
                  <Text children="(7167271982)" />
                </Flex>
              </Cell>
              <Cell>
                <Link isQuiet>
                  <a href={row} target="_blank" rel="noreferrer">
                    {row}
                  </a>
                </Link>
              </Cell>
              <Cell>
                <ImageWithText text="Business Systems development" />
              </Cell>
              <Cell>
                <Tag text={"CONFIG CHANGE"} />
              </Cell>
              <Cell></Cell>
              <Cell>Show more</Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </View>
  );
};

export default AuditLog;

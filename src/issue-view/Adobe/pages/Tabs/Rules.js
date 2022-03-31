import {
  Flex,
  Grid,
  TextField,
  View,
  Image,
  Text,
  TableView,
  TableHeader,
  TableBody,
  Row,
  Column,
  Cell,
  Link,
  Switch,
} from "@adobe/react-spectrum";

export const ImageWithText = ({ src, text, rounded }) => {
  const avatarSrc =
    src ??
    "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5bcdda4a359ddf204e8c530b/eb97144f-5d87-44f9-b560-c9a5bca90baf/48";
  const avatarSize = 30;
  return (
    <Link isQuiet variant="secondary">
      <a href={"f"} target="_blank" rel="noreferrer">
        <Flex alignItems="center" gap={10}>
          <View
            UNSAFE_style={{ ...(rounded && { borderRadius: "100%" }) }}
            overflow="hidden"
            width={avatarSize}
            height={avatarSize}
          >
            <Image src={avatarSrc} alt="avatar" />
          </View>
          <Text>{text}</Text>
        </Flex>
      </a>
    </Link>
  );
};

const Table = () => {
  const columns = ["Name", "Owner", "Projects", "Enabled"];
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
        {[...rows, ...rows, ...rows, ...rows].map((row) => (
          <Row>
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
            <Cell>
              <Switch />
            </Cell>
          </Row>
        ))}
      </TableBody>
    </TableView>
  );
};

const Rules = () => {
  const categories = ["All rules", "Global rules"];

  return (
    <Grid
      areas={["search rules", "categories rules"]}
      columns={["1fr", "4fr"]}
      rows={["auto", "1fr"]}
    >
      <View
        margin={20}
        gridArea="search"
        justifySelf={"center"}
        alignSelf={"center"}
      >
        <TextField placeholder="Filter rules" />
      </View>
      <View gridArea="categories" padding={20}>
        <Flex direction="column" gap={5}>
          {categories.map((a) => (
            <ImageWithText text={a} rounded />
          ))}
          <ImageWithText text={"Add label"} rounded />
        </Flex>
      </View>
      <View gridArea="rules">
        <Table />
      </View>
    </Grid>
  );
};

export default Rules;

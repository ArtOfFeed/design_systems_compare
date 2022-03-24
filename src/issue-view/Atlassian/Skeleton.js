import { useState } from "react";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";
import HipchatChevronUpIcon from "@atlaskit/icon/glyph/hipchat/chevron-up";

export const Flex = ({ children, style, ...props }) => (
  <div {...props} style={{ display: "flex", ...style }}>
    {children}
  </div>
);
export const Column = ({ children, style, ...props }) => (
  <div
    {...props}
    style={{ display: "flex", flexDirection: "column", ...style }}
  >
    {children}
  </div>
);

const DetailsRow = ({ name, children }) => {
  const isString = typeof children === "string";
  return (
    <Flex style={{ margin: "5px 5px ", alignItems: "center" }}>
      <b style={{ flex: 2, fontSize: 12 }}>{name}</b>
      <div style={{ flex: 3, ...(isString && { paddingLeft: 20 }) }}>
        {children || "[ value ]"}
      </div>
    </Flex>
  );
};

const DetailsContent = ({ fields = [] }) => {
  return (
    <Column>
      {fields.map((field) => (
        <DetailsRow key={field.value} name={field.value}>
          {field.label}
        </DetailsRow>
      ))}
    </Column>
  );
};

export const ActivityItem = ({ avatar, content }) => {
  return (
    <Flex style={{ flex: 1, alignItems: "center" }}>
      <div style={{ marginRight: 10 }}>{avatar}</div>
      <Column style={{ flex: 1, marginTop: 10 }}>{content}</Column>
    </Flex>
  );
};

const Accordion = ({ text, expanded = false, fields = [], children }) => {
  const [isOpen, setOpen] = useState(expanded);
  const borderStyle = "1px solid lightgray";
  const fieldNames = fields
    .map((f) => f.value)
    .join(",")
    .slice(0, 23);

  const containerStyle = {
    cursor: "pointer",
    padding: 10,
    justifyContent: "space-between",
    ...(isOpen && { borderBottom: borderStyle }),
  };

  const handleClick = () => {
    if (!fields.length) return;
    setOpen(!isOpen);
  };

  return (
    <div style={{ marginTop: 10, border: borderStyle, borderRadius: 5 }}>
      <Flex style={containerStyle} onClick={handleClick}>
        <b>{text} </b>
        {!isOpen && (
          <div style={{ color: "gray" }}>
            {fieldNames && fieldNames + "..."}
          </div>
        )}
        {isOpen ? <HipchatChevronUpIcon /> : <HipchatChevronDownIcon />}
      </Flex>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export const Activity = ({
  commentTextField = "[ Comment field ]",
  avatar = "[ Avatar ]",
}) => {
  return (
    <Flex style={{ justifyContent: "space-between" }}>
      <Flex>
        <div>
          <Flex>
            <div>{avatar}</div>

            <div>
              <div> {commentTextField}</div>
              <small>
                <strong>Pro tip:</strong> press M to comment
              </small>
            </div>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
};

export const ThemeWrapper = ({style,children}) => <div style={{maxWidth: 1200, margin: 'auto', ...style} } >{children}</div>

const Skeleton = ({
  activityTabs = "[ tabs ]",
  attachButton = "[ attach ]",
  createSubtaskButton = "[ Create subtask ]",
  linkIssueButton = "[ Link issue ]",
  moreButton = "[ more ]",
  headerIcon = "[ icon ]",
  headerIssuePath = "[ issue path ]",
  metaActionsFeedback = "[ feedback ]",
  metaActionsWatch = "[ watch ]",
  metaActionsLike = "[ like ]",
  metaActionsShare = "[ share ]",
  metaActionsMore = "[ more ]",
  metaActionsClose = "[ close ]",
  issueStateDropdown = "[ issue state dropdown ]",
  configureIcon = "[ Icon ]",
  descriptionTextArea = "Text issue description",
  detailsFields = [],
  moreFields = [],
}) => {
  return (
    <ThemeWrapper>
    <div style={{ padding: "20px 60px" }}>
      <Column>
        <Flex style={{ justifyContent: "space-between", paddingBottom: 20 }}>
          <div>{headerIcon} DP-9</div>
          <Flex style={{ gap: 5 }}>
            <div>{metaActionsFeedback}</div>
            <div>{metaActionsWatch}</div>
            <div>{metaActionsLike}</div>
            <div>{metaActionsShare}</div>
            <div>{metaActionsMore}</div>
            <div>{metaActionsClose}</div>
          </Flex>
        </Flex>

        <Flex>
          <div style={{ flex: 2 }}>
            <Column style={{ gap: 5, paddingRight: 40 }}>
              <b style={{ fontSize: 20 }}>Test issue</b>

              <Flex style={{ gap: 5 }}>
                <div>{attachButton}</div>
                <div>{createSubtaskButton}</div>
                <div>{linkIssueButton}</div>
                <div>{moreButton}</div>
              </Flex>

              <div style={{ margin: "20px 0 " }}>
                <b>Description</b>
                <div style={{ marginTop: 10 }}>{descriptionTextArea}</div>
              </div>

              <div style={{ margin: "20px 0 " }}>
                <b>Activity</b>
              </div>

              <div>{activityTabs}</div>
            </Column>
          </div>

          <Column style={{ flex: 1 }}>
            <div>{issueStateDropdown}</div>
            <Accordion expanded text="Details" fields={detailsFields}>
              <DetailsContent fields={detailsFields} />
            </Accordion>

            <Accordion text="More fields" fields={moreFields}>
              <DetailsContent fields={moreFields} />
            </Accordion>
            <small
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Column style={{ gap: 5 }}>
                <small>Created 27 August 2019, 10:49</small>
                <small>Updated 27 August 2019, 10:49</small>
              </Column>
              <small style={{ display: "flex", alignItems: "center" }}>
                {configureIcon} Configure
              </small>
            </small>
          </Column>
        </Flex>
      </Column>
    </div>
    </ThemeWrapper>
  );
};

export default Skeleton;

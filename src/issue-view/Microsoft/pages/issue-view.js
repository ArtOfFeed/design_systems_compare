import { useState } from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Facepile } from "@fluentui/react/lib/Facepile";
import {
  CommandBarButton,
  ActionButton,
  IconButton,
} from "@fluentui/react/lib/Button";
import { Pivot, PivotItem } from "@fluentui/react/lib/Pivot";
import { TagPicker, NormalPeoplePicker } from "@fluentui/react/lib/Pickers";
import { Dropdown } from "@fluentui/react/lib/Dropdown";
import { Toggle } from "@fluentui/react";

import { Label } from "@fluentui/react/lib/Label";

import { Icon } from "@fluentui/react/lib/Icon";

import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";

import { ThemeProvider, createTheme } from "@fluentui/react/lib/Theme";

import Skeleton, { ActivityItem, Column, Flex, ThemeWrapper } from "../../Atlassian/Skeleton";
import { labels, fluentLightTheme, fluentDarkTheme, regions, states, users, THEMES } from "../../Atlassian/utils";

const Button = ({ style, children, ...props }) => (
  <CommandBarButton
    style={{ padding: 10, ...style }}
    text={children}
    {...props}
  />
);

const Tag = ({ style, ...props }) => (
  <Label
    style={{
      backgroundColor: "lightgrey",
      display: "inline",
      padding: "0px 5px",
      ...style,
    }}
    {...props}
  />
);

const Avatar = () => (
  <Facepile
    personaSize={1}
    personas={[{ imageInitials: "AV" }]}
    ariaDescription="To move through the items use left and right arrow keys."
    ariaLabel="Example list of Facepile personas"
  />
);

const translateColor = (color) => {
  if (color === "blue") return "#bee3f8";
  if (color === "green") return "#c6f6d5";
  return "#edf2f7";
};

const ActivityTabs = () => {
  const history = [
    {
      name: "Mykhailo Petrenko",
      action: "updated",
      subject: "Region",
      time: "1 hour ago",
      tag: "HISTORY",
      from: "None",
      to: "mordor",
    },
  ];
  return (
    <Flex>
      <Pivot
        style={{ width: "100%" }}
        aria-label="Links of Tab Style Pivot Example"
        linkFormat="tabs"
      >
        <PivotItem headerButtonProps={{}} headerText="All">
          Pivot #1
        </PivotItem>
        <PivotItem headerText="Comments">
          <ActivityItem
            avatar={<Avatar />}
            content={
              <>
                <TextField
                  multiline
                  resizable={false}
                  placeholder="Add a comment..."
                  style={{ width: "100%" }}
                />
                <small>
                  <strong>Pro tip:</strong> press M to comment
                </small>
              </>
            }
          />
        </PivotItem>
        <PivotItem headerText="History">
          {history.map((item) => (
            <ActivityItem
              key={item.action}
              avatar={<Avatar />}
              content={
                <Column>
                  <Flex style={{ gap: 5 }}>
                    <strong>{item.name}</strong>
                    {item.action} the <strong>{item.subject}</strong>
                    {item.time}
                    <Tag children={item.tag} />
                  </Flex>
                  <div>
                    {item.from} -> {item.to}
                  </div>
                </Column>
              }
            />
          ))}
        </PivotItem>
        <PivotItem headerText="Work log" he>
          Pivot #4
        </PivotItem>
      </Pivot>
    </Flex>
  );
};

const DropdownMenu = ({ trigger, options }) => {
  const onRenderOption = (option) => {
    return (
      <Tag
        style={{ backgroundColor: option.data.color }}
        children={option.text}
      />
    );
  };
  return (
    <Dropdown
      style={{ width: "100px", backgroundColor: translateColor() }}
      placeholder={"Backlog"}
      onRenderOption={onRenderOption}
      options={options}
    />
  );
};

const priorities = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

const onResolveSuggestionsText = (items) => () => items.map((i) => ({ text: i.value }))
const onResolveSuggestionsName = (items) => () => items.map((i) => ({ name: i.value }))

const detailsFields = [
  {
    value: "Approvers",
    label: (
      <NormalPeoplePicker onResolveSuggestions={onResolveSuggestionsText(users)} />
    ),
  },
  {
    value: "Assignee",
    label: (
      <NormalPeoplePicker onResolveSuggestions={onResolveSuggestionsText(users)} />
    ),
  },
  {
    value: "Reporter",
    label: (
      <NormalPeoplePicker onResolveSuggestions={onResolveSuggestionsText(users)} />
    ),
  },
  {
    value: "Development",
    label: (
      <ActionButton iconProps={{ iconName: "BranchFork2" }} allowDisabledFocus>
        Development
      </ActionButton>
    ),
  },
  {
    value: "Labels",
    label: (
      <TagPicker onResolveSuggestions={onResolveSuggestionsName(labels)} />
    ),
  },
  {
    value: "Region",
    label: (
      <TagPicker onResolveSuggestions={onResolveSuggestionsName(regions)} />
    ),
  },
  { value: "Checkbox", label: <Tag children="first" /> },
  {
    value: "Priority",
    label: (
      <TagPicker onResolveSuggestions={onResolveSuggestionsName(priorities)} />
    ),
  },
];

const moreFields = [
  { value: "Points", label: <Tag children={3} /> },
  {
    value: "Tracking",
    label: (
      <div>
        <ProgressIndicator label="No time logged" percentComplete={0} />
      </div>
    ),
  },
  { value: "Estimate", label: <Tag children={6} /> },
];

const Microsoft = () => {
  return (
    <div>
      <Skeleton
        activityTabs={<ActivityTabs />}
        attachButton={
          <Button iconProps={{ iconName: "Attach" }} children="Attach" />
        }
        createSubtaskButton={
          <Button
            iconProps={{ iconName: "Boards" }}
            children="Create subtask"
          />
        }
        linkIssueButton={
          <Button
            menuProps={{
              items: [
                { key: "1", text: "Issue 1", iconProps: { iconName: "NumberField" }, },
              ],
            }}
            iconProps={{ iconName: "Link" }}
            children="Link issue"
          />
        }
        moreButton={<Button iconProps={{ iconName: "More" }} />}
        headerIcon={
          <Button
            iconProps={{ iconName: "SingleBookmark" }}
            style={{ backgroundColor: "lightgreen", padding: 5 }}
          />
        }
        metaActionsFeedback={
          <Button
            iconProps={{ iconName: "MegaphoneSolid" }}
            children="Give feedback"
          />
        }
        metaActionsWatch={
          <Button iconProps={{ iconName: "RedEye" }} children="1" />
        }
        metaActionsLike={<IconButton iconProps={{ iconName: "Like" }} />}
        metaActionsShare={<IconButton iconProps={{ iconName: "Share" }} />}
        metaActionsMore={<IconButton iconProps={{ iconName: "More" }} />}
        metaActionsClose={
          <IconButton iconProps={{ iconName: "ChromeClose" }} />
        }
        descriptionTextArea={
          <TextField
            placeholder="Text issue description"
            style={{ width: "100%" }}
          />
        }
        issueStateDropdown={
          <DropdownMenu
            trigger="Backlog"
            options={states.map((s) => ({
              text: s.label,
              data: { color: translateColor(s.color) },
            }))}
          />
        }
        configureIcon={<Icon iconName="Settings" />}
        detailsFields={detailsFields}
        moreFields={moreFields}
      />
    </div>
  );
};

const ThemedMicrosoft = () => {
  const [theme, setTheme] = useState(THEMES.light);
  const toggleTheme = () => setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light)

  return (
    <ThemeWrapper>
      <Toggle inlineLabel label="light" onText="dark" offText="dark" onChange={toggleTheme} />
      <ThemeProvider theme={createTheme(theme === THEMES.dark ? fluentDarkTheme : fluentLightTheme)} >
        <Microsoft />
      </ThemeProvider>
    </ThemeWrapper>)
}

export { ThemedMicrosoft as MicrosoftIssue };

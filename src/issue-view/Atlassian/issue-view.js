import { useState } from "react";

import TextArea from "@atlaskit/textarea";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import InlineEdit from "@atlaskit/inline-edit";
import Select from "@atlaskit/select";
import ADropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

import Tag from "@atlaskit/tag";
import Group from "@atlaskit/tag-group";

import FilterIcon from "@atlaskit/icon/glyph/filter";
import AttachmentIcon from "@atlaskit/icon/glyph/attachment";
import SubtaskIcon from "@atlaskit/icon/glyph/subtask";
import LinkIcon from "@atlaskit/icon/glyph/link";
import MoreIcon from "@atlaskit/icon/glyph/more";
import FeedbackIcon from "@atlaskit/icon/glyph/feedback";
import WatchIcon from "@atlaskit/icon/glyph/watch";
import ShareIcon from "@atlaskit/icon/glyph/share";
import LikeIcon from "@atlaskit/icon/glyph/like";
import EditorCloseIcon from "@atlaskit/icon/glyph/editor/close";
import SettingsIcon from "@atlaskit/icon/glyph/settings";
import HipchatChevronDoubleUpIcon from "@atlaskit/icon/glyph/hipchat/chevron-double-up";
import HipchatChevronUpIcon from "@atlaskit/icon/glyph/hipchat/chevron-up";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";
import BitbucketBranchesIcon from "@atlaskit/icon/glyph/bitbucket/branches";

import Story16Icon from "@atlaskit/icon-object/glyph/story/16";

import ProgressBar from "@atlaskit/progress-bar";

import Skeleton, { ActivityItem, Column, Flex } from "./Skeleton";
import { labels, regions, states, users } from "./utils";

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
      <Tabs
        onChange={(index) => console.log("Selected Tab", index + 1)}
        id="default"
        defaultSelected={2}
      >
        <TabList>
          <b style={{ display: "flex", alignItems: "center" }}>Show:</b>
          <Tab>
            <Button size="10">All</Button>
          </Tab>
          <Tab>
            <Button size="10" isSelected>
              Comments
            </Button>
          </Tab>
          <Tab>
            <Button size="10">History</Button>
          </Tab>
          <Tab>
            <Button size="10">Work log</Button>
          </Tab>
          <Flex
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            Newest first
            <div style={{ cursor: "pointer" }}>
              <FilterIcon />
            </div>
          </Flex>
        </TabList>
        <TabPanel>{/* This is for "Show:" element in TabList */}</TabPanel>
        <TabPanel>One</TabPanel>
        <TabPanel>
          <ActivityItem
            avatar={<Avatar />}
            content={
              <>
                <TextArea
                  maxHeight="40px"
                  name="area"
                  placeholder="Add a comment..."
                  style={{ width: "100%" }}
                />
                <small>
                  <strong>Pro tip:</strong> press M to comment
                </small>
              </>
            }
          />
        </TabPanel>
        <TabPanel>
          {history.map((item) => (
            <ActivityItem
              avatar={<Avatar />}
              content={
                <Column>
                  <Flex style={{ gap: 5 }}>
                    <strong>{item.name}</strong>
                    {item.action} the <strong>{item.subject}</strong>
                    {item.time} <Tag color="grey" text={item.tag} />
                  </Flex>
                  <div>
                    {item.from} -> {item.to}
                  </div>
                </Column>
              }
            />
          ))}
        </TabPanel>
        <TabPanel>Four</TabPanel>
      </Tabs>
    </Flex>
  );
};

const DropdownMenu = ({ trigger, options }) => {
  return (
    <ADropdownMenu trigger={trigger}>
      <DropdownItemGroup>
        {options.map((option) => (
          <DropdownItem key={option.value}>{option.label}</DropdownItem>
        ))}
      </DropdownItemGroup>
    </ADropdownMenu>
  );
};

const Priority = ({ color, text }) => {
  const getIcon = (color) => {
    if (color === "red") return HipchatChevronDoubleUpIcon;
    if (color === "orange") return HipchatChevronUpIcon;
    return HipchatChevronDownIcon;
  };

  const Icon = getIcon(color);
  return (
    <Flex style={{ alignItems: "center" }}>
      <Icon primaryColor={color} />
      {text}
    </Flex>
  );
};

const priorities = [
  {
    label: <Priority color="red" text="High" />,
    value: <Priority color="red" text="High" />,
  },
  {
    label: <Priority color="orange" text="Medium" />,
    value: <Priority color="orange" text="Medium" />,
  },
  {
    label: <Priority color="blue" text="Low" />,
    value: <Priority color="blue" text="Low" />,
  },
];

const InlineEditReadViewWrapper = ({ children }) => (
  <div style={{ padding: "5px 10px" }}>{children}</div>
);

const MultiItemPicker = ({ selectOptions }) => {
  const [editValue, setEditValue] = useState([]);

  const onConfirm = (value) => {
    if (!value) return;
    setEditValue(value);
  };

  return (
    <div style={{}}>
      <InlineEdit
        defaultValue={editValue}
        editView={(fieldProps) => (
          <div>
            <Select
              {...fieldProps}
              options={selectOptions}
              isMulti
              autoFocus
              openMenuOnFocus
            />
          </div>
        )}
        readView={() =>
          editValue && editValue.length === 0 ? (
            <InlineEditReadViewWrapper children="None" />
          ) : (
            <Group>
              {editValue &&
                editValue.map((option) => (
                  <Tag text={option.label} key={option.label} />
                ))}
            </Group>
          )
        }
        onConfirm={onConfirm}
      />
    </div>
  );
};

const SingleItemPicker = ({ selectOptions }) => {
  const [editValue, setEditValue] = useState("");

  const onConfirm = (value) => {
    if (!value) return;
    setEditValue(value.value);
  };

  return (
    <div style={{}}>
      <InlineEdit
        defaultValue={editValue}
        hideActionButtons
        editView={(fieldProps) => (
          <div>
            <Select
              {...fieldProps}
              options={selectOptions}
              autoFocus
              openMenuOnFocus
              blurInputOnSelect
            />
          </div>
        )}
        readView={() =>
          editValue ? (
            <InlineEditReadViewWrapper children={editValue} />
          ) : (
            <InlineEditReadViewWrapper children="None" />
          )
        }
        onConfirm={onConfirm}
      />
    </div>
  );
};

const detailsFields = [
  { value: "Approvers", label: <MultiItemPicker selectOptions={users} /> },
  { value: "Assignee", label: <SingleItemPicker selectOptions={users} /> },
  { value: "Reporter", label: <SingleItemPicker selectOptions={users} /> },
  {
    value: "Development",
    label: (
      <Button style={{ textAlign: "center" }} appearance="link">
        <Flex style={{ alignItems: "center" }}>
          <BitbucketBranchesIcon /> Development
        </Flex>
      </Button>
    ),
  },
  { value: "Labels", label: <MultiItemPicker selectOptions={labels} /> },
  { value: "Region", label: <SingleItemPicker selectOptions={regions} /> },
  { value: "Checkbox", label: <Tag isRemovable={false} text="first" /> },
  { value: "Priority", label: <SingleItemPicker selectOptions={priorities} /> },
];

const moreFields = [
  { value: "Points", label: <Tag isRemovable={false} text={3} /> },
  {
    value: "Tracking",
    label: (
      <div>
        <ProgressBar value={0} /> <span children="No time logged" />
      </div>
    ),
  },
  { value: "Estimate", label: <Tag isRemovable={false} text={6} /> },
];

const AtlassianIssueViev = () => {
  return (
    <div>
      <Skeleton
        activityTabs={<ActivityTabs />}
        attachButton={
          <Button iconBefore={<AttachmentIcon />} children="Attach" />
        }
        createSubtaskButton={
          <Button iconBefore={<SubtaskIcon />} children="Create subtask" />
        }
        linkIssueButton={
          <>
            <Button
              style={{ borderRight: "1px solid lightgray" }}
              iconBefore={<LinkIcon />}
              children="Link issue"
            />
            <DropdownMenu
              trigger=""
              options={[{ label: "issue1", value: "issue1" }]}
            />
          </>
        }
        moreButton={<Button iconBefore={<MoreIcon />} />}
        headerIcon={<Story16Icon />}
        metaActionsFeedback={
          <Button
            appearance="subtle"
            iconBefore={<FeedbackIcon />}
            children="Give feedback"
          />
        }
        metaActionsWatch={
          <Button appearance="subtle" iconBefore={<WatchIcon />} children="1" />
        }
        metaActionsLike={
          <Button appearance="subtle" iconBefore={<LikeIcon />} />
        }
        metaActionsShare={
          <Button appearance="subtle" iconBefore={<ShareIcon />} />
        }
        metaActionsMore={
          <Button appearance="subtle" iconBefore={<MoreIcon />} />
        }
        metaActionsClose={
          <Button appearance="subtle" iconBefore={<EditorCloseIcon />} />
        }
        descriptionTextArea={
          <TextArea
            placeholder="Text issue description"
            style={{ width: "100%" }}
          />
        }
        issueStateDropdown={
          <DropdownMenu
            trigger="Backlog"
            options={states.map((s) => ({
              ...s,
              label: <Tag isRemovable={false} color={s.color} text={s.label} />,
            }))}
          />
        }
        configureIcon={<SettingsIcon />}
        detailsFields={detailsFields}
        moreFields={moreFields}
      />
    </div>
  );
};

export {AtlassianIssueViev};

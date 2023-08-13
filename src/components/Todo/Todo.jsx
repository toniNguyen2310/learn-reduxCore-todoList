import React from "react";
import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodoStatus } from "../../redux/actions";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};
function Todo(props) {
  const dispatch = useDispatch();
  const { id, name, priority, completed } = props;
  const [checked, setChecked] = useState(completed);
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}

export default Todo;

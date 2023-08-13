import React, { useState } from "react";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todosRemaining } from "../../redux/selectors";
function TodoList(props) {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemaining);

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    let data = {
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    };
    dispatch(addTodo(data));
    setTodoName("");
    setPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                name={todo.name}
                priority={todo.priority}
                completed={todo.completed}
                id={todo.id}
              />
            );
          })}
      </Col>
      <Col span={24}>
        <Space style={{ display: "flex" }} compact="true">
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => setPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space>
      </Col>
    </Row>
  );
}

export default TodoList;

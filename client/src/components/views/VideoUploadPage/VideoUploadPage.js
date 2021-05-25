import React, { useState } from "react";
import { Typography, Button, Form, message, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";

const { Title } = Typography;
const TextArea = Input;
const PrivateOptions = [
  { value: 0, label: "Private" },
  { value: 0, label: "Public" },
];

const CategoryOptions = [
  { value: 0, label: "Film & Animation" },
  { value: 1, label: "Autos & Vehicles" },
  { value: 2, label: "Music" },
  { value: 3, label: "Pets & Animals" },
];

const Private_ = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];

const Catogory_ = [
  { value: 0, label: "Film & Animation" },
  { value: 0, label: "Autos & Vehicles" },
  { value: 0, label: "Music" },
  { value: 0, label: "Pets & Animals" },
  { value: 0, label: "Sports" },
];

function VideoUploadPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Private, setPrivate] = useState(0);
  const [Category, setCategory] = useState("Film & Animation");

  const onTitleHandler = (e) => {
    setVideoTitle(e.target.value);
  };

  const onDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const onPrivateHandler = (e) => {
    setPrivate(e.target.value);
  };

  const onCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>
      <Form onSubmit>
        <div stype={{ display: "flex", justifyContent: "space-between" }}>
          <Dropzone onDrop Multple>
            {({ getRootProps, getInptProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getInptProps}
              >
                <PlusOutlined style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>
          <div>
            <img src alt></img>
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleHandler} value={VideoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionHandler} value={Description} />
        <br />
        <br />

        <select onChange={onPrivateHandler}>
          {PrivateOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <select onChange={onCategoryHandler}>
          {CategoryOptions.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;

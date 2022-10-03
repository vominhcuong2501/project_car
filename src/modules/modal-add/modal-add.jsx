import React, { useState } from "react";
import { Form, Input, Select, Button, Image } from "antd";
import "./modal-add.scss";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

export default function ModalAdd() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImage(e.target.result);
      setFile(file);
    };
  };
  return (
    <div>
      {/* Web */}
      <div className="web">
        <Form
          layout="vertical"
          initialValues={{
            name: "",
            status: "",
            desc: "",
          }}
          className="row"
        >
          <div className="col-12" style={{ height: "200px" }}>
            <h6 className="form-title">Brand Logo</h6>
            <Form.Item
              validateTrigger={["onChange"]}
              rules={[
                { required: true, message: "Hình ảnh không được bỏ trống" },
              ]}
            >
              <Input type="file" onChange={handleChangeImage} />
              <div className="form-image text-center mb-2">
                <p className="mt-4 mb-0">+</p>
                <span>Brand Logo</span>
              </div>
            </Form.Item>
            <Image src={image} className="image" />
          </div>
          <div className="col-12">
            <h6 className="form-title">Brand Details</h6>
          </div>
          <div className="col-sm-7 col-12">
            <Form.Item label="Brand Name" name="name">
              <Input placeholder="Input content" />
            </Form.Item>
          </div>
          <div className="col-sm-5 col-12">
            <Form.Item label="Brand Status" name="status">
              <Select>
                <Select.Option value="Active">
                  <i className="fa-regular fa-circle-dot"></i> Active
                </Select.Option>
                <Select.Option value="Inactive">
                  <i className="fa-regular fa-circle-dot"></i> Inactive
                </Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="col-12">
            <Form.Item label="Brand Description" name="desc">
              <TextArea placeholder="Input content" allowClear rows={3} />
            </Form.Item>
          </div>
          <div className="col-12 text-right">
            <Form.Item>
              <Button
                className="mt-4 mr-2"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #B4B4B4",
                  padding: "9px 16px",
                  width: "83px",
                  borderRadius: "4px",
                  height: "40px",
                }}
              >
                Cancel
              </Button>
              <Button
                className="mt-4 text-light"
                style={{
                  backgroundColor: "#0F5EDD",
                  border: "1px solid #0F5EDD",
                  padding: "9px 16px",
                  width: "127px",
                  borderRadius: "4px",
                  height: "40px",
                }}
                htmlType="submit"
              >
                Create Brand
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>

      {/* Mobile */}
      <div className="mobile">
        <div className="mobile-title">
          <p className="text-center m-0">
            <i
              className="fa-solid fa-x"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin")}
            ></i>
            Add Car Brand
          </p>
        </div>
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            name: "",
            type: "",
            desc: "",
            image: "",
          }}
          className="row"
        >
          <div className="col-12 p-0 " style={{ height: "170px" }}>
            <h6 className="form-title">Brand Logo</h6>
            <Form.Item name="image">
              <Input type="file" onChange={handleChangeImage} />
              <div className="form-image text-center mb-2">
                <p className="mt-4 mb-0">+</p>
              </div>
            </Form.Item>
            <Image src={image} className="image" />
            {file == undefined ? (
              ""
            ) : (
              <div style={{ position: "relative" }}>
                <Input
                  type="file"
                  onChange={handleChangeImage}
                  style={{
                    position: "absolute",
                    top: "-75px",
                    left: "0px",
                  }}
                />
                <p
                  style={{
                    color: "#0F5EDD",
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: "500",
                    position: "absolute",
                    top: "-40px",
                    left: "10px",
                  }}
                >
                  Edit Logo
                </p>
              </div>
            )}
          </div>
          <div className="col-12 p-0">
            <h6 className="form-title mb-0">Brand Details</h6>
          </div>
          <div className="col-12 p-0">
            <Form.Item
              name="name"
              validateTrigger={["onChange"]}
              rules={[
                {
                  required: true,
                  message: "Please input your brand name!",
                },
              ]}
            >
              <Input placeholder="Brand Name" />
            </Form.Item>
          </div>
          <div className="col-12 p-0">
            <Form.Item
              name="type"
              validateTrigger={["onChange"]}
              rules={[
                {
                  required: true,
                  message: "Please input your models!",
                },
              ]}
            >
              <Input placeholder="Total Models" />
            </Form.Item>
          </div>
          <div className="col-12 p-0">
            <Form.Item
              name="desc"
              validateTrigger={["onChange"]}
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              <Input placeholder="Description" />
            </Form.Item>
          </div>
          <div className="col-12 p-0">
            <Form.Item shouldUpdate>
              {() => {
                return (
                  <>
                    <Button
                      className="mt-4 text-light btn-create"
                      htmlType="submit"
                      block
                      disabled={
                        !form.isFieldsTouched() ||
                        form
                          .getFieldsError()
                          .some((ele) => ele.errors.length > 0)
                      }
                    >
                      Create Brand
                    </Button>
                  </>
                );
              }}
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

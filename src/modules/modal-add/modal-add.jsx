import React from "react";
import { Form, Image, Input, Select, Button } from "antd";
import "./modal-add.scss";
const { TextArea } = Input;

export default function ModalAdd() {
  return (
    <Form
      layout="vertical"
      initialValues={{
        name: "",
        status: "",
        desc: "",
      }}
      className="row"
    >
      <div className="col-12">
        <h6 className="form-title">Brand Logo</h6>
        <div className="form-image text-center mb-2">
          <p className="mt-4 mb-0">+</p>
          <span>Brand Logo</span>
        </div>
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
          <TextArea placeholder="Input content" allowClear rows={3}/>
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
  );
}

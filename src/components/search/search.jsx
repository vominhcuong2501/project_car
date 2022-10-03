import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Button, Form, Input } from "antd";
import "./search.scss";
const typeArray = [
  "Bus",
  "Lory",
  "SUV",
  "Classic Car",
  "MVP",
  "Trush",
  "Couple",
  "Pickup",
  "Van (Passenger)",
  "Convertible",
  "Sedan",
  "Van (Goods)",
  "Hatchback",
  "Sport Car",
  "Wagon",
];
const status = (
  <Menu
    items={[
      {
        label: (
          <div
            style={{ padding: "24px 32px 0px 24px" }}
            className="d-flex align-items-center"
          >
            <input type="radio" name="status" style={{ marginRight: "10px" }} />
            <span>New cars (Authorised Dealer)</span>
          </div>
        ),
        key: "0",
      },
      {
        label: (
          <div
            style={{ padding: "24px 32px 24px 24px" }}
            className="d-flex align-items-center"
          >
            <input type="radio" name="status" style={{ marginRight: "10px" }} />
            <span>New cars (Parallel Importer)</span>
          </div>
        ),
        key: "1",
      },
      {
        label: (
          <div
            style={{ padding: "0px 32px 24px 24px" }}
            className="d-flex align-items-center"
          >
            <input type="radio" name="status" style={{ marginRight: "10px" }} />
            <span>Used cars</span>
          </div>
        ),
        key: "2",
      },
    ]}
  />
);
const price = (
  <Menu
    items={[
      {
        label: (
          <div style={{ padding: "10px 12px", width: "400px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                marginBottom: "16px",
              }}
            >
              Price Range
            </h4>
            <Form layout="vertical">
              <div
                className="d-flex align-items-center"
                style={{
                  paddingBottom: "24px",
                  borderBottom: "1px solid #E3E3E3",
                }}
              >
                <div
                  style={{
                    border: "1px solid #E3E3E3",
                    width: "170px",
                    height: "62px",
                    borderRadius: "5px",
                    padding: "8px 16px",
                  }}
                >
                  <Form.Item label="Min" name="min">
                    <Input
                      style={{
                        padding: 0,
                        border: "none",
                        paddingBottom: "-30px",
                      }}
                      placeholder="S$ 20,000"
                    />
                  </Form.Item>
                </div>
                <div style={{ margin: "0 16px" }}>-</div>
                <div
                  style={{
                    border: "1px solid #E3E3E3",
                    width: "160px",
                    height: "62px",
                    borderRadius: "5px",
                    padding: "8px 16px",
                  }}
                >
                  <Form.Item label="Max" name="max">
                    <Input
                      style={{
                        padding: 0,
                        border: "none",
                        marginBottom: "-30px",
                      }}
                      placeholder="S$ 500,000"
                    />
                  </Form.Item>
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  marginTop: "24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                <Form.Item>
                  <Button
                    className="p-0"
                    style={{ border: "none", color: "#B4B4B4" }}
                  >
                    Clear
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      backgroundColor: "#EE1B24",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      borderRadius: "5px",
                      width: "73px",
                      height: "40px",
                    }}
                  >
                    Save
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        ),
        key: "0",
      },
    ]}
  />
);
const type = (
  <Menu
    items={[
      {
        label: (
          <div style={{ padding: "10px 12px", width: "473px", height: "370px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                marginBottom: "16px",
              }}
            >
              Vehicle Type
            </h4>
            <div
              className="row"
              style={{
                paddingBottom: "24px",
                borderBottom: "1px solid #E3E3E3",
              }}
            >
              {typeArray.map((ele, index) => {
                return (
                  <div
                    className="col-4 pr-0 d-flex"
                    key={index}
                    style={{ padding: "11px " }}
                  >
                    <input type="checkbox" style={{ marginRight: "8px" }} />
                    <p className="m-0">{ele}</p>
                  </div>
                );
              })}
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                marginTop: "24px",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              <Form.Item>
                <Button
                  className="p-0"
                  style={{ border: "none", color: "#B4B4B4" }}
                >
                  Clear
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#EE1B24",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    width: "73px",
                    height: "40px",
                  }}
                >
                  Save
                </Button>
              </Form.Item>
            </div>
          </div>
        ),
        key: "0",
      },
    ]}
  />
);
export default function Search() {
  return (
    <div style={{ position: "relative", paddingLeft: "76px" }}>
      <div className="search">
        <div className="row">
          <div className="status col-sm-3 col-12">
            <p className="search-title">New/Used</p>
            <Dropdown overlay={status} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  New Cars
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="price col-sm-4 col-12">
            <p className="search-title">Price Range</p>
            <Dropdown overlay={price} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p className="dropdown-price m-0">
                    <i className="fa-solid fa-dollar-sign"></i> $10.000 -
                    <i className="fa-solid fa-dollar-sign ml-1"></i> $100.000
                  </p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="type col-sm-3 col-12">
            <p className="search-title">Vehicle Type</p>
            <Dropdown overlay={type} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Duplex
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="btn-search col-sm-2 col-12">
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

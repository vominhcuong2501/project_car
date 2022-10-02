import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Input, Button, Modal } from "antd";
import React, { useState } from "react";
import "./table-logo.scss";
import { SearchOutlined } from "@ant-design/icons";
import ModalAdd from "../modal-add/modal-add";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { brandDetailAction } from "../../store/actions/brandActions";

export default function TableLogo() {
  const navigate = useNavigate();
  const { brandList } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  const menu = (
    <Menu
      items={[
        {
          label: <a href="#">All</a>,
          key: "0",
        },
        {
          label: <a href="#">Last Updated</a>,
          key: "1",
        },
        {
          label: <a href="#">Brand Name</a>,
          key: "2",
        },
        {
          label: <a href="#">Number of Models</a>,
          key: "3",
        },
      ]}
    />
  );

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="menu">
      {/* Navbar */}
      <div
        className="d-flex justify-content-between"
        style={{
          padding: "34px 24px 0 42px",
        }}
      >
        <div className="d-flex align-items-center">
          <h5 className="carList">CAR BRANDS LIST</h5>
          <Dropdown overlay={menu} trigger={["click"]} className="btn-view">
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined className="icon" />
                View All
              </Space>
            </a>
          </Dropdown>
          <Input
            placeholder="Search car brand"
            prefix={<SearchOutlined />}
            className="input-search"
            // onSearch={onSearch}
          />
        </div>
        <div>
          <Button className="btn-add" onClick={showModal}>
            + Add Brand
          </Button>
        </div>
      </div>

      {/* List logo */}
      <div className="table">
        {brandList.map((ele, index) => {
          return (
            <div
              key={ele.id}
              className="d-flex logo-item justify-content-center align-items-center"
            >
              <div className="col-1 p-0 checkbox">
                <input type="radio" name="1" />
              </div>
              {ele.status === "Inactive" ? (
                <div
                  className="col-1 image-logo"
                  style={{ borderRight: "2px solid #5F5F5F" }}
                >
                  <img
                    src={require(`./../../Assets/images/logo/${ele.image}`)}
                    alt={ele.image}
                  />
                </div>
              ) : (
                <div
                  className="col-1 image-logo"
                  style={{ borderRight: "2px solid #0FC97B" }}
                >
                  <img
                    src={require(`./../../Assets/images/logo/${ele.image}`)}
                    alt={ele.image}
                  />
                </div>
              )}
              <div className="col-5 name-logo">
                <a href="#">{ele.name}</a>
                <p>
                  {ele.desc}
                  <span>{ele.type}</span>
                </p>
              </div>
              <div className="col-2 date-updated">
                <p>Last Updates</p>
                <span>{ele.date}</span>
              </div>
              {ele.status === "Active" ? (
                <div
                  className="col-1 status"
                  style={{ color: "#1F7B4D", padding: "0" }}
                >
                  <span>
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span>{ele.status}</span>
                </div>
              ) : (
                <div
                  className="col-1 status"
                  style={{ color: "#5F5F5F", padding: "0" }}
                >
                  <span>
                    <i className="fa-solid fa-circle"></i>
                  </span>
                  <span>{ele.status}</span>
                </div>
              )}
              <div className="col-2 ">
                <Button
                  className="btn-view"
                  onClick={() => {
                    navigate(`/admin/${ele.id}`);
                    dispatch(brandDetailAction(`${ele.id}`));
                  }}
                >
                  View Detail
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal create brand */}
      <Modal
        title="Add Car Brand"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ModalAdd />
      </Modal>
    </div>
  );
}

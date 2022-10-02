import React, { Fragment, useEffect, useState } from "react";
import { Form, Input, Select, Button } from "antd";
import "./brand-detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const { TextArea } = Input;

export default function BrandDetail() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { brandSelected } = useSelector((state) => state.carReducer);
  const param = useParams();
  useEffect(() => {
    if (brandSelected) {
      form.setFieldsValue({
        ...brandSelected,
      });
    }
  }, [brandSelected]);
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      {visible ? (
        <div className="container-fluid p-0 brand-detail">
          <a
            className="brand-detail-title d-flex align-items-center"
            onClick={() => navigate("/admin")}
          >
            <i className="fa-solid fa-chevron-left"></i>
            <p className="m-0">Brand Details</p>
          </a>
          <Form
            layout="vertical"
            form={form}
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
                <img
                  src={require(`../../Assets/images/logo/${param.brandId}.png`)}
                  alt={param.brandId}
                />
                <div className="overlay d-flex flex-column justify-content-center">
                  <p>CHANGE</p>
                  <p>LOGO</p>
                </div>
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
                <TextArea placeholder="Input content" allowClear rows={3} />
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#0F5EDD",
                    border: "1px solid #0F5EDD",
                    padding: "9px 16px",
                    width: "145px",
                    borderRadius: "4px",
                    height: "40px",
                    color: "#FFFFFF",
                  }}
                  onClick={() => setVisible(!visible)}
                >
                  Save Changes
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      ) : (
        <div className="container-fluid p-0 brand-detail">
          <a
            className="brand-detail-title d-flex align-items-center"
            onClick={() => navigate("/admin")}
          >
            <i className="fa-solid fa-chevron-left"></i>
            <p className="m-0">Brand Details</p>
          </a>
          <Form
            layout="vertical"
            form={form}
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
                <img
                  src={require(`../../Assets/images/logo/${param.brandId}.png`)}
                  alt={param.brandId}
                />
                <div className="overlay d-flex flex-column justify-content-center">
                  <p>CHANGE</p>
                  <p>LOGO</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h6 className="form-title">Brand Details</h6>
            </div>
            <div className="col-sm-7 col-12">
              <Form.Item label="Brand Name" name="name">
                <p className="view-detail">{brandSelected.name}</p>
              </Form.Item>
            </div>
            <div className="col-sm-5 col-12">
              <Form.Item label="Brand Status" name="status">
                <span className="view-select">
                  <i className="fa-regular fa-circle-dot"></i>{" "}
                  {brandSelected.status}
                </span>
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item label="Brand Description" name="desc">
                <p className="view-detail">{brandSelected.desc}</p>
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item>
                <Button
                  style={{
                    backgroundColor: "#0F5EDD",
                    border: "1px solid #0F5EDD",
                    padding: "9px 16px",
                    width: "145px",
                    borderRadius: "4px",
                    height: "40px",
                    color: "#FFFFFF",
                  }}
                  onClick={() => setVisible(!visible)}
                >
                  Edit Information
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      )}
    </Fragment>
  );
}

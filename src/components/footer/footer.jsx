import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import "./footer.scss";
const about = (
  <Menu
    items={[
      {
        label: <a>About Us</a>,
        key: "0",
      },
      {
        label: <a>Contact Us</a>,
        key: "1",
      },
      {
        label: <a>Careers</a>,
        key: "3",
      },
    ]}
  />
);
const services = (
  <Menu
    items={[
      {
        label: <a>Buy Used Cars</a>,
        key: "0",
      },
      {
        label: <a>Buy New Cars</a>,
        key: "1",
      },
      {
        label: <a>Be a Dealer with UCARS</a>,
        key: "3",
      },
    ]}
  />
);
const resources = (
  <Menu
    items={[
      {
        label: <a>News</a>,
        key: "0",
      },
      {
        label: <a>Sell My Car</a>,
        key: "1",
      },
      {
        label: <a>COE Prices</a>,
        key: "3",
      },
    ]}
  />
);
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-sm-4 col-12 footer-contact">
            <div className="image">
              <img
                className="carbuyer"
                src={require("../../Assets/images/logo/Carbuyer Logo 2.png")}
                alt="Logo"
              />
            </div>
            <ul>
              <li></li>
              <li>
                <div className="contact-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <a href="tel:+65 8808 7905">
                      71 Ayer Rajah Crescent, #06-14, Singapore 139951
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <a className="contact-item" href="#">
                      +65 8808 7905
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <div>
                    <a href="mailto:hello@carbuyer.com.sg">
                      hello@carbuyer.com.sg
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-sm-1 col-12 about">
            <h6>About</h6>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Carrers</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-12 services">
            <h6>Services</h6>
            <ul>
              <li>
                <a href="#">Buy Used Cars</a>
              </li>
              <li>
                <a href="#">Buy New Cars</a>
              </li>
              <li>
                <a href="#">Be a Dealer with UCARS</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-1 col-12 resources">
            <h6>Resources</h6>
            <ul>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Sell My Car</a>
              </li>
              <li>
                <a href="#">COE Prices</a>
              </li>
            </ul>
          </div>
          <div className="col-12 responsive-dropdown">
            <div className="dropdown-item">
              <Dropdown overlay={about} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    About
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="dropdown-item">
              <Dropdown overlay={services} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Services
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="dropdown-item">
              <Dropdown overlay={resources} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Resources
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="dropdown-item">
              <Dropdown overlay={about} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Legal
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="col-sm-4 col-12 email">
            <p className="title">
              Get the <span style={{ color: "#EE1B24" }}>latest</span>{" "}
              automotive news sent to your inbox!
            </p>
            <div className="input-group" style={{ marginBottom: "24px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center icon">
              <p className="m-0">Follow us</p>
              <ul className="d-flex align-items-center mb-0">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-paper-plane"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div>
            <span>Advertising Terms and Conditions </span>
            <span>Platform Terms and Conditions </span>
            <span>Privacy Policy</span>
          </div>
          <p>© 2022. All rights reserved.</p>
        </div>
        <div className="footer-bottom">
          <img
            src={require("../../Assets/images/logo/UCARS Logo.png")}
            alt="Logo"
          />
          <span>
            CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
            by UCARS Pte Ltd
          </span>
        </div>
        <div className="responsive-copyright">
          <div className="row">
            <div className="col-2 mt-2">
              <img
                src={require("../../Assets/images/logo/UCARS Logo.png")}
                alt="Logo"
              />
            </div>
            <div className="col-10 text-center">
              <span>
                CarBuyer Pte Ltd and the CarBuyer Singapore brand <br /> are
                wholly owned by UCARS Pte Ltd
              </span>
            </div>
          </div>
          <div className="copyright">
            <p>© 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
      <nav className="footer-mobile">
        <ul>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-newspaper"></i>
              <p>News</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-user"></i>
              <p>Profile</p>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

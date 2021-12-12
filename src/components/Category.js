import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import "./Category.css";
const Category = ({ category }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            {category.CategoyHeading}
          </label>
          <button
            style={{ border: "none", float: "right", backgroundColor: "white" }}
            onClick={() => setShow(!show)}
          >
            {show ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
          </button>
        </div>
        {!show ? (
          <div>
            <hr />
            <div>
              <p>{category.CategoyText}</p>
              <table>
                <thead>
                  <tr>
                    <th>Plugins</th>
                    <th>Block/Enable</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {category.PluginList.map((plugin) => (
                    <>
                      <tr>
                        <td>{plugin.ComplianceType}</td>
                        <td>
                          {" "}
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                        <td>
                          <span style={{ textDecoration: "underline" }}>
                            <a
                              href={
                                category.optOutExternalLink
                                  ? category.optOutExternalLink
                                  : ""
                              }
                              style={{ color: "grey" }}
                            >
                              Go To Site
                            </a>
                          </span>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Category;

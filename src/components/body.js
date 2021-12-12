import React from "react";
import "./body.css";
import Header from "./header";
const Body = () => {
  return (
    <div className="body">
      <Header />
      <div>
        <p>
          we and our partners use technologies such as cookies , and process
          personal data,such as IP address and cokie identifiers, to personalize
          adds and content based on your interests, measure the performance of
          ads and content, and derive insights about the audience who saw ads
          and content , and derive insights about the audience who saw ads and
          content
        </p>
        <p>
          Click below to consent to the use of this technology and the
          processing of your personal data for these purposes you can change
          your mind and change your consent choices at any time by returning to
          this site
        </p>
        <p>
          You can familiarize with our{" "}
          <strong style={{ textDecoration: "underline" }}>
            Privacy Policy
          </strong>
        </p>
      </div>
      <div className="buttons">
        <button type="button" class="btn btn-success">
          Accept All
        </button>
        <button type="button" class="btn btn-light">
          Save Settings
        </button>
        <div class="btn-group dropup">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropup
          </button>
          <ul class="dropdown-menu"></ul>
        </div>
      </div>
    </div>
  );
};

export default Body;

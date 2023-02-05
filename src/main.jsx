import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import * as AWS from "aws-sdk";
import { ConfigurationOptions } from "aws-sdk";

const configuration = {
  region: "ap-southeast-1",
  secretAccessKey: "LY7WOKnxbCXqTtzWIkGLvaMvGWCL0Lg9paAnXHhs",
  accessKeyId: "AKIAWER6UBRTADMGMTQG",
};

AWS.config.update(configuration);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

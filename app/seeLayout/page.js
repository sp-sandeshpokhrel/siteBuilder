"use client";

import LayoutFlex from "@components/LayoutFlex";
import { useState } from "react";

export default function SeeLayout() {
  const flexJSON2 = {
    type: "row",
    id: "4f54de49-bf0b-42b8-ae1b-7c20f0ae3efd",
    flex: 1,
    data: null,
    children: [
      {
        type: "col",
        id: "ba6f7cc3-1c30-4d77-bbd3-4ab31db05513",
        flex: "1",
        data: "",
        children: [],
      },
      {
        type: "col",
        id: "67f07175-001c-4131-85d9-eff7ceaa1c1b",
        flex: "2",
        data: "",
        children: [],
      },
    ],
  };

  const flexJSON = {
    type: "row",
    flex: 1,
    data: null,
    children: [
      {
        type: "col",
        flex: 8,
        data: null,
        children: [
          {
            type: "row",
            flex: 4,
            data: null,
            children: [
              {
                type: "col",
                flex: 1,
                children: [],
                data: {
                  type: "Image",
                  ext: "png",
                  value:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png",
                },
              },
              {
                type: "col",
                flex: 3,
                children: [],
                data: {
                  type: "Video",
                  ext: "mp4",
                  value: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
                },
              },
            ],
          },
          {
            type: "row",
            flex: 4,
            children: [],
            data: {
              type: "Image",
              ext: "png",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png",
            },
          },
          {
            type: "row",
            flex: 2,
            data: {
              type: "Video",
              ext: "mp4",
              value: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
            },
            children: [],
          },
        ],
      },
      {
        type: "col",
        flex: 2,
        children: [],
        data: {
          type: "Url",
          ext: "text",
          value: "https://slashplus.com.np/",
        },
      },
    ],
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setJson(JSON.parse(e.target.result));
    };
    console.log("json", json);
  };

  const [json, setJson] = useState({});
  return (
    <div>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <LayoutFlex json={json} />
      {/* <TryFlex /> */}
    </div>
  );
}

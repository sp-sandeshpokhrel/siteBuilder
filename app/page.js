"use client";
import Flex from "@components/Flex";
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

export default function Home() {
  const [flexJSON, setFlexJSON] = useState({
    type: "row",
    id: uuidV4(),
    flex: 1,
    data: null,
    children: [],
  });
  const [currentData, setCurrentData] = useState({
    row: 0,
    column: 0,
    flexforRow: [],
    flexforColumn: [],
  });
  const [currentID, setCurrentID] = useState(flexJSON.id);
  console.log(uuidV4());

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "row") {
      setCurrentData((prev) => ({ ...prev, [name]: value }));
      setCurrentData((prev) => ({ ...prev, column: 0, flexforColumn: [] }));
    } else if (name === "column") {
      setCurrentData((prev) => ({ ...prev, [name]: value }));
      setCurrentData((prev) => ({ ...prev, row: 0, flexforRow: [] }));
    }
    if (name === "flexforRow" || name === "flexforColumn") {
      setCurrentData((prev) => ({ ...prev, [name]: value.split(",") }));
    } else {
      setCurrentData((prev) => ({ ...prev, [name]: value }));
    }
    console.log(currentData);
  }

  async function handleAddChild(e) {
    e.preventDefault();
    await setFlexJSON((prev) => addJson(prev));
    console.log(flexJSON);
    await setCurrentData({
      row: 0,
      column: 0,
      flexforRow: [],
      flexforColumn: [],
    });
  }

  function handleClick(e, id) {
    e.preventDefault();
    setCurrentID(id);
    console.log(id);
  }

  //recursive function to add to specific id
  function addJson(json) {
    console.log("Here am i");
    if (currentID === json.id) {
      const len = currentData.row != 0 ? currentData.row : currentData.column;
      if (
        currentData.flexforRow.length != len &&
        currentData.flexforColumn.length != len
      ) {
        alert("Please input flex for all the cells you want to create");
        return json;
      }
      for (let i = 0; i < len; i++) {
        console.log("Here am i 2");
        json.data = null;
        json.children.push({
          type: currentData.row != 0 ? "row" : "col",
          id: uuidV4(),
          flex:
            currentData.row != 0
              ? currentData.flexforRow[i]
              : currentData.flexforColumn[i],
          data: "",
          children: [],
        });
      }
    } else {
      json.children.map((child) => {
        return addJson(child);
      });
    }
    return json;
  }

  const exportData = () => {
    const json = removeID(flexJSON);
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(json)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  const removeID = (json) => {
    delete json.id;
    json.children.map((child) => {
      return removeID(child);
    });
    return json;
  };

  return (
    <div>
      <form className="small-form" onSubmit={handleAddChild}>
        <label htmlFor="Row">Row(Number of rows)</label>
        <input
          style={{ width: "80%", marginLeft: "10px" }}
          type="text"
          name="row"
          value={currentData?.row}
          onChange={handleChange}
          placeholder="Input number of row you want to create for selected cell"
        />
        <br />
        <label htmlFor="flexforRow">Flex-size for Row</label>
        <input
          style={{ width: "80%", marginLeft: "10px" }}
          type="text"
          name="flexforRow"
          value={currentData?.flexforRow}
          onChange={handleChange}
          placeholder="eg: 1,2,3(should match number of row)"
        />
        <br />
        <label htmlFor="Column">Column(Number of Columns)</label>
        <input
          style={{ width: "80%", marginLeft: "10px" }}
          type="text"
          name="column"
          value={currentData?.column}
          onChange={handleChange}
          placeholder="Input number of column you want to create for selected cell"
        />
        <br />

        <label htmlFor="flexforColumn">Flex-size for Column</label>
        <input
          style={{ width: "80%", marginLeft: "10px" }}
          type="text"
          name="flexforColumn"
          value={currentData?.flexforColumn}
          onChange={handleChange}
          placeholder="eg: 1,2,3(should match number of column)"
        />
        <br />
        <button className="button" type="submit">
          See layout
        </button>
      </form>

      <br />
      <h1>Click on cells for further add rows or columns to them </h1>
      {"  "}
      <h3>
        Not required to click on first flex add, and use export data to get JSON
        file for your flex
      </h3>
      <button className="button" type="button" onClick={exportData}>
        Export Data
      </button>
      {"  "}
      <a href="/seeLayout">
        <button className="button">See Layout for JSON</button>
      </a>
      <Flex key={flexJSON.id} json={flexJSON} handleClick={handleClick} />
    </div>
  );
}

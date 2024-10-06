import React, { useEffect, useState } from "react";
import Spiner from "../../components/main/Spiner";
import { api } from "../../http/api";

const Tool = () => {
  const [data, setData] = useState([]);
  const [dataFill, setDataFill] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/accreditation"); // Using axios with full URL
      setData(data);
    } catch (error) {
      console.error("Error fetching accreditation data", error);
    }
  };

  const fetchFiles = async () => {
    try {
      const { data: datafil } = await api.get("/files"); // Using axios with full URL
      setDataFill(datafil);
      console.log(datafil, "Fetched files");
    } catch (error) {
      console.error("Error fetching files data", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFiles();
    fetchData();
  }, []);

  const fill = data.filter((el) => el.which_accred === "Институционалдык");

  const handleFileClick = (file) => {
    if (file.file) {
      window.open(file.file, "_blank"); // Open file link in new tab
    }
  };

  return (
    <section id="tool" style={{ minHeight: "75vh" }}>
      <div className="container">
        <div className="tool-general">
          <h1 className="tool-general__title">
            Институционалдык акккредитация
          </h1>
          <div className="tool-general__block">
            {fill.length > 0 ? (
              fill.map((el, index) => (
                <div key={index}>
                  <button onClick={() => handleFileClick(dataFill[index])}>
                    {dataFill
                      .map(
                        (file, fileIndex) =>
                          file.file && (
                            <span key={fileIndex}  >{file.name_file}</span>
                          )
                      )
                      .shift()}
                  </button>
                </div>
              ))
            ) : (
              <Spiner />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tool;
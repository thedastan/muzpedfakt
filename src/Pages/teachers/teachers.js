import React, { useEffect, useState } from "react";
import { api } from "../../http/api";
import Spiner from "../../components/main/Spiner";

const Teachers = () => {
	const [teacher, setTeacher] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);
		api("/teacher").then(({ data }) => {
			setTeacher(data);
		});
	}, []);
	console.log(teacher);


  const handleFileClick = (fileUrl) => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };

	return (
		<section id="teach" style={{ minHeight: "75vh", padding: "150px 0" }}>
			<div className="container">
				<div className="tech-general">
					<h1 className="teach-general__title">
						Профессордук-окутуучулук курам
					</h1>
					{teacher.length > 0 ? (
						<div className="teach-general__block">
							{teacher?.map((el) => {
								return (
									<div className="teach-general__block__square" key={el.id}>
										<div className="teach-general__block__square__img">
											<img src={el?.image} alt="img" />
										</div>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
											}}>
											<h1>{el?.full_name}</h1>
											<p>{el?.lesson}</p>
											<p>{el?.experience}</p>
											<button
												style={{
													border: "none",
													fontSize: "22px",
													background: "white",
													cursor: "pointer",
												}}
												onClick={() => handleFileClick(el.file)}>
												PDF file
											</button>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<div style={{ marginTop: "150px" }}>
							<Spiner />
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Teachers;

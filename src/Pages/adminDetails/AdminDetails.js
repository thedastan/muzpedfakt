import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../http/api";
import "../../styles/CategoryDetails/categoryDetails.scss";
import Spiner from "../../components/main/Spiner";

const AdminDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	console.log(data);

	useEffect(() => {
		api
			.get(`/administration/${id}`)
			.then(({ data }) => {
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching detail data", error);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
			<div style={{ padding: "200px" }}>
				<Spiner />
			</div>
		);
	}

	if (!data) {
		return <div style={{ padding: "200px" }}>No data found</div>;
	}

	const handleFileClick = (fileUrl) => {
		if (fileUrl) {
			window.open(fileUrl, "_blank");
		}
	};

	return (
		<section
			id="CategoryDetail"
			style={{ minHeight: "80vh", padding: "150px 0" }}>
			<div className="container">
				<div className="block">
					<h1>{data.fullname}</h1>

					<div   className="cards">
						{/* {data.filefield_administration.map((el, index) => ( */}
							<div   className="box">
								<div className="card">
									<h2>{data.fullname}</h2>
									<button
										style={{
											border: "none",
											fontSize: "22px",
											background: "white",
											cursor: "pointer",
										}}
										onClick={() => handleFileClick(data.file)}>
										PDF file
									</button>
								</div>
							</div>
						{/* ))} */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminDetails;

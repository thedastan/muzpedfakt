import img from "../../../images/homeimg.jpg";
import { media } from "../../media";

const Hero = () => {
	return (
		<section id="hero">

			<div className="hero_img">
				<img src={img} alt="img" />
			</div>
			<div className="block_hero">
				<div className="container">
					<div className="hero-general">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<h1
								className="hero-general__title"
								style={{
									fontSize: media(60, 45),
									marginBottom: media(20, 60),
								}}>
								🎵 "Педагогиканын күчү, музыканын сыйкыры, психологиянын
								тереңдиги – жаркын келечек үчүн!" ✨📖🎶
							</h1>
							{/* <p
								className="hero-general__desc"
								style={{ fontSize: media(15, 20) }}>
								Келечегинди биз менен башта!
							</p> */}

							<a href="#onas" className="hero-general__block">
								<div />
								<h1>Биздин факультет</h1>
								<span>
									<i className="fa-solid fa-arrow-right-long" />
								</span>
							</a>
						</div>
						<div>
							{/* <img src={home} alt="img" className="hero-general__img"/> */}
						</div>
						<a
							style={{ display: "flex", justifyContent: "center" }}
							href="#info">
							<button
								className="hero-general__btn"
								style={{
									width: media(200, 343),
									fontSize: media(18, 23),
									height: media(50, 65),
								}}>
								Биздин факультет
							</button>
						</a>
					</div>
					<div id="onas" />
				</div>
			</div>
		</section>
	);
};

export default Hero;

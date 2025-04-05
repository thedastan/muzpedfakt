import React from "react";
import logo from "./../../images/logo-music.png";
import { media } from "../media";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="footer-general">
					<div>
						<img
							src={logo}
							alt=""
							style={{ width: "100px", height: "100px", borderRadius: "50%" }}
						/>
						 
						<div
							className="footer-general__contact"
							style={{ paddingTop: media(10, 40) }}>
							<span>
								<i className="fa-solid fa-phone" />
							</span>
							<a href="tel:+996 505 011 902">+996 505 011 902</a>
						</div>
					</div>
					<div className="footer-general__center">
						<a href="mailto:oshmpumuzpedfak@gmail.com">oshmpumuzpedfak@gmail.com</a>
					</div>
					<div className="footer-general__seti">
						<h1>Соц тармактар</h1>
						<span>
							{" "}
							<a target={"_blank"} href="https://www.instagram.com/oshmpu.muz_ped_fak?igsh=ZjVsYWFrdjVocXI=">
								<span style={{ fontSize: media(15, 20) }}>
									<i className="fab fa-instagram" />
								</span>
							</a>
						</span>
						<span>
							{" "}
							<a target={"_blank"} href="https://wa.me/996505011902">
								<span style={{ fontSize: media(15, 20) }}>
									<i className="fab fa-whatsapp" />
								</span>
							</a>
						</span>
						<span>
							{" "}
							<a target={"_blank"} href="https://t.me/+996505011902">
								<span style={{ fontSize: media(15, 20) }}>
									<i className="fab fa-telegram" />
								</span>
							</a>
						</span>
					</div>
				</div>

				<div className="footer-general2">
					<div className="footer-general2__width" />
					<div className="footer-general2__gen">
						<div>
							<p>Все права защищены - 2025</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

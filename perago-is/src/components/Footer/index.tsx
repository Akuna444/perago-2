// components/Footer.js
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-secondary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-start">
        <div className="footer-links">
          <div>
            <a href="../#" className="mr-4">
              <img src="/logo.png" alt="Logo" width={100} height={100} />
            </a>
          </div>
          <div className="flex gap-3 mt-3 text-right">
            <FaFacebook className="text-[White] size-[24px]" />
            <FiInstagram className="text-[White] size-[24px]" />
            <PiTelegramLogoBold className="text-[White] size-[24px]" />
            <FaSquareXTwitter className="text-[White] size-[24px]" />
          </div>
          <br />
          <a href="#" className="mr-4">
            &copy; 2024 PeragoSystems. All Rights Reserved!
          </a>
        </div>

        {/* Company Information */}
        <div className="footer-company-info">
          {" "}
          <ul>
            <li className="mb-1">Eamil: info@peragosystems.com</li>
            <li className="mb-1">Phone: +251 955232323</li>
            <li className="mb-1">
              Address: Noah Building,4th Floor, Arround 22, Addis Ababa,
              Ethiopia
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import logo from "./../assets/logo-ironhack-blue.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
@@ -8,24 +9,27 @@ function Navbar() {

          {/* Home Button (Logo) */}
          <button className="flex items-center text-l py-1">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <Link to='/'>
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </button>
        </div>

        <div className="flex justify-center w-1/2">
        <span className="text-xl">
          <span className="text-xl">
            Cohort Tools
          </span>
        </div>

        <div className="w-1/4 flex justify-end mr-4">
          {/* User Profile Button */}
          <button className="flex items-center text-l py-1">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
              alt="Logo"
              className="h-10 w-auto border-solid border border-white rounded-3xl p-1"
            />
            <Link to='/profile'>
              <img
                src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
                alt="Logo"
                className="h-10 w-auto border-solid border border-white rounded-3xl p-1" />
            </Link>
          </button>

        </div>

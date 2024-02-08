import logo from "./../assets/logo-ironhack-blue.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
@@ -7,9 +8,11 @@ function Navbar() {
        <div className="flex items-center space-x-2 w-1/4">

          {/* Home Button (Logo) */}
          <button className="flex items-center text-l py-1">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </button>
          <NavLink to="/">
            <button className="flex items-center text-l py-1">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </button>
          </NavLink>
        </div>

        <div className="flex justify-center w-1/2">
@@ -20,13 +23,15 @@ function Navbar() {

        <div className="w-1/4 flex justify-end mr-4">
          {/* User Profile Button */}
          <button className="flex items-center text-l py-1">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
              alt="Logo"
              className="h-10 w-auto border-solid border border-white rounded-3xl p-1"
            />
          </button>
          <NavLink to="/profile">
            <button className="flex items-center text-l py-1">
              <img
                src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
                alt="Logo"
                className="h-10 w-auto border-solid border border-white rounded-3xl p-1"
              />
            </button>
          </NavLink>

        </div>
      </div>

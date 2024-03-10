import logo from "./../assets/logo-ironhack-blue.png";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="logo-container">
          {/* Home Button (Logo) */}
          <button className="logo-button">
            <img src={logo} alt="Logo" className="logo-image" />
          </button>
        </div>

        <div className="title-container">
          <span className="title-text">Cohort Tools</span>
        </div>

        <div className="profile-container">
          {/* User Profile Button */}
          <button className="profile-button">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
              alt="Profile"
              className="profile-image"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import HomeButton from "./HomeButton";
import UserProfileButton from "./UserProfileButton";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">
        <div className="flex items-center space-x-2 w-1/4">
          {/* Home Button (Logo) */}
          <HomeButton />
        </div>

        <div className="flex justify-center w-1/2">
          <span className="text-xl">Cohort Tools</span>
        </div>

        <div className="w-1/4 flex justify-end mr-4">
          {/* User Profile Button */}
          <UserProfileButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

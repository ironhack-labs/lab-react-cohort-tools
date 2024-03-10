import React from 'react';

function UserProfilePage() {
  const userProfile = {
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png",
    name: "Jane Doe",
    email: "janed@example.com",
    role: "Lead Teacher",
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile Page</h1>
      <div className="profile-card">
        {userProfile && (
          <>
            <img
              src={userProfile.image}
              alt="Profile"
              className="profile-photo"
            />
            <h1 className="profile-name">{userProfile.name}</h1>

            <div className="profile-details">
              <p>
                <strong>Email:</strong> {userProfile.email}
              </p>
              <p>
                <strong>Role:</strong> {userProfile.role}
              </p>
            </div>
          </>
        )}

        {/* Back button */}
        <button className="back-button">Back</button>
      </div>
    </div>
  );
}

export default UserProfilePage;

import placeholderImage from "../assets/profile-icon.png";

function StudentCard({
  _id,
  firstName,
  lastName,
  email,
  phone,
  program,
  image,
  className,
}) {
  return (
    <div
      className={`student-card-container flex justify-between items-center p-3 mb-2 bg-white shadow-sm rounded border border-gray-200 hover:bg-gray-50 ${className}`}
    >
      <span className="student-card-image-container">
        <img
          src={image || placeholderImage}
          alt={`${firstName} ${lastName}`}
          className="student-card-image rounded-full w-10 h-10 object-cover border-2 border-gray-300"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = placeholderImage;
          }}
        />
      </span>
      <span className="student-card-name">
        {firstName} {lastName}
      </span>
      <span className="student-card-program">{program}</span>
      <span className="student-card-email">{email}</span>
      <span className="student-card-phone">{phone}</span>
    </div>
  );
}

export default StudentCard;

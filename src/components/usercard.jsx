import React from 'react';

const Usercard = () => {
  // Static data for user details
  const profilePhoto = 'https://randomuser.me/api/portraits/men/10.jpg'; // Example profile photo
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const phone = '+1 234 567 890';
  const address = '1234 Elm Street, Springfield, IL, 62701';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard__photo" />
      <div className="usercard__details">
        <h2 className="usercard__name">{name}</h2>
        <p className="usercard__email">Email: {email}</p>
        <p className="usercard__phone">Phone: {phone}</p>
        <p className="usercard__address">Address: {address}</p>
      </div>
    </div>
  );
}

export default Usercard;

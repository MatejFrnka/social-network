import React from "react";
import Image from "next/image";

function Profile_Header_Content() {
  return (
      <>
        <div className="profile-header-content">
          <div className="profile-header-img">
            <Image
                src="/images/profile_picture.png"
                alt="Background Image"
                width={500}
                height={500}
            />
          </div>
          <div className="profile-header-info">
            <h4 className="m-t-10 m-b-5">John Doe</h4>
            <p className="m-b-10">Web And Frontend Developer</p>
            <a href="#" className="btn btn-xs btn-success">
              Edit Profile
            </a>
          </div>
        </div>
      </>
  );
};
export default Profile_Header_Content;
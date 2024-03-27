import Link from "next/link";
import React from "react";

function Nav() {
  return (
      <>
        <ul className="profile-header-tab nav nav-tabs">
          <li className="nav-item">
            <Link href="../profile_with_timeline_posts">
              Timeline Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link href="../profile_about">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link href="../profile_photos">
              PHOTOS
            </Link>
          </li>
          <li className="nav-item">
            <Link href="../profile_videos">
              VIDEOS
            </Link>
          </li>
          <li className="nav-item">
            <Link href="../profile_friend_list">
              FRIENDS
            </Link>
          </li>
        </ul>
      </>
  );
};
export default Nav;
import React from 'react';
import Image from 'next/image';
import profileImage from '../../public/images/profile_picture.png';
import '../styles/Index_Page_Home_style.css';
import Link from "next/link";


export default function IndexPage() {
  return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Index Page - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            rel="stylesheet"
        />
      </head>
      <body>
      <header className="header1">
        <a href="#" className="logo">
          DeveloperHub
        </a>
        <nav className="navigation">
          <Link href="/profile_about">
            My Profile
          </Link>
          <Link href="/#Messages">
            Messages
          </Link>
          <Link href="/#Notifications">
            Notifications
          </Link>
        </nav>
      </header>
      <br/>
      <div className="container">
        <div className="profile-env">
          <section className="profile-feed">
            <form className="profile-post-form" method="post">
                <textarea
                    className="form-control1"
                    placeholder="What's on your mind?"
                ></textarea>
              <div className="form-options">
                <div className="post-type">
                  <a
                      href="#"
                      className="tooltip-primary"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="Upload a Picture"
                  >
                    <i className="entypo-camera"></i>
                  </a>
                  <a
                      href="#"
                      className="tooltip-primary"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="Attach a file"
                  >
                    <i className="entypo-attach"></i>
                  </a>
                  <a
                      href="#"
                      className="tooltip-primary"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="Check-in"
                  >
                    <i className="entypo-location"></i>
                  </a>
                </div>
                <div className="post-submit">
                  <button type="button" className="btn btn-primary">
                    POST
                  </button>
                </div>
              </div>
            </form>

            <div className="profile-stories">
              <article className="story">
                <aside className="user-thumb">

                  <Image
                      src={profileImage}
                      alt="Profile Image"
                      width={44}
                      height={44}
                      className="img-circle"
                  />
                </aside>
                <div className="story-content">
                  <header>
                    <div className="publisher">
                      <a href="#">Marting flowtlhrow</a> posted a status
                      update <em>3 hours ago</em>
                    </div>
                    <div className="story-type">
                      <i className="entypo-feather"></i>
                    </div>
                  </header>
                  <div className="story-main-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nunc faucibus turpis quis tincidunt luctus. Nam
                      sagittis dui in nunc consequat, in imperdiet nunc
                      sagittis.
                    </p>
                  </div>

                  <footer>
                    <a href="#" className="liked">
                      <i className="entypo-heart"></i>
                      Liked <span>(8)</span>
                    </a>
                    <a href="#">
                      <i className="entypo-comment"></i>
                      Comment <span>(12)</span>
                    </a>


                    <ul className="comments">
                      <li>
                        <div className="user-comment-thumb">
                          <Image
                              src={profileImage}
                              alt="Profile Image"
                              width={44}
                              height={44}
                              className="img-circle"
                          />
                          <img
                              src="../../public/images/profile_picture.png"
                              alt=""
                              className="img-circle"
                              width="30"
                          />
                        </div>
                        <div className="user-comment-content">
                          <a href="#" className="user-comment-name">
                            John doe
                          </a>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc faucibus turpis quis tincidunt luctus. Nam
                          sagittis dui in nunc consequat, in imperdiet nunc
                          sagittis.
                          <div className="user-comment-meta">
                            <a href="#" className="comment-date">
                              January 4 at 1:11am
                            </a>
                            -{' '}
                            <a href="#">
                              <i className="entypo-heart"></i> Like{' '}
                              <span>(2)</span>
                            </a>{' '}
                            -{' '}
                            <a href="#">
                              <i className="entypo-comment"></i> Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="user-comment-thumb">
                          <Image
                              src={profileImage}
                              alt="Profile Image"
                              width={44}
                              height={44}
                              className="img-circle"
                          />
                          <img
                              src="../../public/images/profile_picture.png"
                              alt=""
                              className="img-circle"
                              width="30"
                          />
                        </div>
                        <div className="user-comment-content">
                          <a href="#" className="user-comment-name">
                            John doe
                          </a>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc faucibus turpis quis tincidunt luctus. Nam
                          sagittis dui in nunc consequat, in imperdiet nunc
                          sagittis.
                          <div className="user-comment-meta">
                            <a href="#" className="comment-date">
                              January 3 at 6:42pm
                            </a>
                            -{' '}
                            <a href="#" className="liked">
                              <i className="entypo-heart"></i> Liked
                            </a>{' '}
                            -{' '}
                            <a href="#">
                              <i className="entypo-comment"></i> Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="user-comment-thumb">
                          <Image
                              src={profileImage}
                              alt="Profile Image"
                              width={44}
                              height={44}
                              className="img-circle"
                          />
                          <img
                              src="../../public/images/profile_picture.png"
                              alt=""
                              className="img-circle"
                              width="30"
                          />
                        </div>
                        <div className="user-comment-content">
                          <a href="#" className="user-comment-name">
                            John doe
                          </a>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc faucibus turpis quis tincidunt luctus. Nam
                          sagittis dui in nunc consequat, in imperdiet nunc
                          sagittis.
                          <div className="user-comment-meta">
                            <a href="#" className="comment-date">
                              January 2 at 3:25pm
                            </a>
                            -{' '}
                            <a href="#">
                              <i className="entypo-heart"></i> Like
                            </a>{' '}
                            -{' '}
                            <a href="#">
                              <i className="entypo-comment"></i> Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="comment-form">
                        <div className="user-comment-thumb">
                          <Image
                              src={profileImage}
                              alt="Profile Image"
                              width={44}
                              height={44}
                              className="img-circle"
                          />
                          <img
                              src="../../public/images/profile_picture.png"
                              alt=""
                              className="img-circle"
                              width="30"
                          />
                        </div>
                        <div className="user-comment-content">
                            <textarea
                                className="form-control2 autogrow"
                                placeholder="Write a comment..."
                            ></textarea>
                          <button className="btn">
                            <i className="entypo-chat"></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </footer>
                  <hr/>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
      </body>
      </html>
  );
};
import React from 'react';
import Image from 'next/image';
import './profile_videos_style.css';
import Nav from "@/app/components/Nav";
import Profile_Header_Content from "@/app/components/Profile-Header-Content";

export default function profile_videos() {
  return (
      <>
        <meta charSet="utf-8" />
        <title>profile videos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link href="profile_videos_style.css" rel="stylesheet" />
        <div className="container">
          <div id="content" className="content p-0">
            <div className="profile">
              <div className="profile-header">
                <div className="profile-header-cover" />
                <Profile_Header_Content/>
                <Nav/>
              </div>
            </div>
            <div className="profile-container">
              <div className="row row-space-20">
                <div className="col-md-8">
                  <div className="tab-content p-0">
                    <div className="tab-pane active show" id="profile-videos">
                      <div className="m-b-10">
                        <b>Videos (15)</b>
                      </div>
                      <div className="row row-space-2">
                        <div className="col-sm-8">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/3Kf-FlECN7M?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/izsjRpcgfmk?showinfo=0"
                            />
                          </div>
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/j876xgnTVUg?showinfo=0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row row-space-2">
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/wUqH_5memWY?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/wXmu-EYAmKU?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/xS1DghfzuMc?showinfo=0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row row-space-2">
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/v3ZkCLUFrys?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/toPm-L7Ib44?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/qD8OnPC1fLI?showinfo=0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row row-space-2">
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/Guo7gR0XyaU?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/ADfIlLfs5Bk?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/8Wg1MYjOguI?showinfo=0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row row-space-2">
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/LbpHB9wbDhY?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/oVWBFkaXMyw?showinfo=0"
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="embed-responsive embed-responsive-16by9 m-b-2">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/90PRvlhOLSk?showinfo=0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 hidden-xs hidden-sm">
                  <ul className="profile-info-list">
                    <li className="title">PERSONAL INFORMATION</li>
                    <li>
                      <div className="field">Occupation:</div>
                      <div className="value">UXUI / Frontend Developer</div>
                    </li>
                    <li>
                      <div className="field">Skills:</div>
                      <div className="value">
                        C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap,
                        Bootstrap, Angular JS, Angular JS, Asp.net
                      </div>
                    </li>
                    <li>
                      <div className="field">Birth of Date:</div>
                      <div className="value">1989/11/04</div>
                    </li>
                    <li>
                      <div className="field">Country:</div>
                      <div className="value">San Francisco</div>
                    </li>
                    <li>
                      <div className="field">Address:</div>
                      <div className="value">
                        <address className="m-b-0">
                          Twitter, Inc.
                          <br />
                          1355 Market Street, Suite 900
                          <br />
                          San Francisco, CA 94103
                        </address>
                      </div>
                    </li>
                    <li>
                      <div className="field">Phone No.:</div>
                      <div className="value">(123) 456-7890</div>
                    </li>
                    <li className="title">FRIEND LIST (9)</li>
                    <li className="img-list">
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                      <a href="#" className="m-b-5">
                        <Image
                              src="/images/profile_picture.png"
                              alt="Background Image"
                              width={500}
                              height={500}
                          />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

  );
};



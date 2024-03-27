import React from 'react';
import Image from 'next/image';
import '../profile_friend_list/profile_friend_list_style.css';
import Nav from "@/app/components/Nav";
import Profile_Header_Content from "@/app/components/Profile-Header-Content";

export default function profile_friend_list() {
  return (
      <>
        <meta charSet="utf-8"/>
        <title>profile friend list</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link href="profile_friend_list_style.css" rel="stylesheet"/>
        <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="content" className="content content-full-width">
                <div className="profile">
                  <div className="profile-header">
                    <div className="profile-header-cover"/>
                    <Profile_Header_Content/>
                    <Nav/>
                  </div>
                </div>
                <div className="profile-content">
                  <div className="tab-content p-0">
                    <div
                        className="tab-pane fade in active show"
                        id="profile-friends"
                    >
                      <h4 className="m-t-0 m-b-20">Friend List (14)</h4>
                      <div className="row row-space-2">
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">James Pittman</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                      aria-expanded="false"
                                  />
                                  <ul
                                      className="dropdown-menu dropdown-menu-right"
                                      x-placement="bottom-end"
                                      style={{
                                        position: "absolute",
                                        willChange: "transform",
                                        top: 0,
                                        left: 0,
                                        transform: "translate3d(101px, 34px, 0px)"
                                      }}
                                  >
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Mitchell Ashcroft</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Ella Cabena</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                      aria-expanded="false"
                                  />
                                  <ul
                                      className="dropdown-menu dropdown-menu-right"
                                      x-placement="top-end"
                                      style={{
                                        position: "absolute",
                                        willChange: "transform",
                                        top: 0,
                                        left: 0,
                                        transform: "translate3d(101px, -2px, 0px)"
                                      }}
                                  >
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Declan Dyson</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">George Seyler</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Patrick Musgrove</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Taj Connal</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Laura Pollock</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Dakota Mannix</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Timothy Woolley</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Benjamin Congreve</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Mariam Maddock</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Blake Gerrald</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 m-b-2">
                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <Image
                                    src="/images/profile_picture.png"
                                    alt="Background Image"
                                    width={500}
                                    height={500}
                                />
                              </a>
                              <div className="media-body valign-middle">
                                <b className="text-inverse">Gabrielle Bunton</b>
                              </div>
                              <div className="media-body valign-middle text-right overflow-visible">
                                <div className="btn-group dropdown">
                                  <a href="javascript:;" className="btn btn-default">
                                    Friends
                                  </a>
                                  <a
                                      href="javascript:;"
                                      data-toggle="dropdown"
                                      className="btn btn-default dropdown-toggle"
                                  />
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                      <a href="javascript:;">Action 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 2</a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">Action 3</a>
                                    </li>
                                    <li className="divider"/>
                                    <li>
                                      <a href="javascript:;">Action 4</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

  );
};



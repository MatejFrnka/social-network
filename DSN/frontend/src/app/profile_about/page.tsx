import React from 'react';
import Image from 'next/image';
import './profile_about_style.css';
import Nav from "@/app/components/Nav";
import Profile_Header_Content from "@/app/components/Profile-Header-Content";

export default function page() {
  return (
      <>
        <meta charSet="utf-8"/>
        <title>profile about</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />
        <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
        />
        <link href="profile_about_style.css" rel="stylesheet"/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
                              id="profile-about"
                          >
                            <div className="table-responsive">
                              <table className="table table-profile">
                                <thead>
                                <tr>
                                  <th/>
                                  <th>
                                    <h4>
                                      John Doe <small>Lorraine Stokes</small>
                                    </h4>
                                  </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="divider">
                                  <td colSpan={2}/>
                                </tr>
                                <tr>
                                  <td className="field">Mobile</td>
                                  <td>
                                    <i className="fa fa-mobile fa-lg m-r-5"/> +420
                                    00000000{" "}
                                    <a href="javascript:;" className="m-l-5">
                                      Edit
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="field">Home</td>
                                  <td>
                                    <a href="javascript:;">Add Number</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="field">Office</td>
                                  <td>
                                    <a href="javascript:;">Add Number</a>
                                  </td>
                                </tr>
                                <tr className="divider">
                                  <td colSpan={2}/>
                                </tr>
                                <tr className="highlight">
                                  <td className="field">About Me</td>
                                  <td>
                                    <a href="javascript:;">Add Description</a>
                                  </td>
                                </tr>
                                <tr className="divider">
                                  <td colSpan={2}/>
                                </tr>
                                <tr>
                                  <td className="field">Country/Region</td>
                                  <td>
                                    <select
                                        className="form-control input-inline input-xs"
                                        name="region"
                                    >
                                      <option value="US">
                                        United State
                                      </option>
                                      <option value="AF">Afghanistan</option>
                                      <option value="AL">Albania</option>
                                      <option value="DZ">Algeria</option>
                                      <option value="AS">American Samoa</option>
                                      <option value="AD">Andorra</option>
                                      <option value="AO">Angola</option>
                                      <option value="AI">Anguilla</option>
                                      <option value="AQ">Antarctica</option>
                                      <option value="AG">
                                        Antigua and Barbuda
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="field">City</td>
                                  <td>Los Angeles</td>
                                </tr>
                                <tr>
                                  <td className="field">Website</td>
                                  <td>
                                    <a href="javascript:;">Add Webpage</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="field">Gender</td>
                                  <td>
                                    <select
                                        className="form-control input-inline input-xs"
                                        name="gender"
                                    >
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="field">Birthdate</td>
                                  <td>
                                    <select
                                        className="form-control input-inline input-xs"
                                        name="day"
                                    >
                                      <option value={"04"}>
                                        04
                                      </option>
                                    </select>
                                    -
                                    <select
                                        className="form-control input-inline input-xs"
                                        name="month"
                                    >
                                      <option value={11}>
                                        11
                                      </option>
                                    </select>
                                    -
                                    <select
                                        className="form-control input-inline input-xs"
                                        name="year"
                                    >
                                      <option value={1989}>
                                        1989
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="field">Language</td>
                                  <td>
                                    <select
                                        className="form-control input-inline input-xs"
                                        name="language"
                                    >
                                      <option value="">
                                        English
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr className="divider">
                                  <td colSpan={2}/>
                                </tr>
                                <tr className="highlight">
                                  <td className="field">&nbsp;</td>
                                  <td className="p-t-10 p-b-10">
                                    <button
                                        type="submit"
                                        className="btn btn-primary width-150"
                                    >
                                      Update
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-white btn-white-without-border width-150 m-l-5"
                                    >
                                      Cancel
                                    </button>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
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



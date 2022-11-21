import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./infor.css";

function Information() {
  const [Studentinfo, setStudentinfo] = useState();
  const [Staffinfo, setStaffinfo] = useState();
  const [Publicinfo, setPublicinfo] = useState();

  const fetchdata = async () => {
    const response_staff = await fetch(
      "https://drc-server.onrender.com/Staff_notice"
    );
    const Staff_data = await response_staff.json();

    const response_Student = await fetch(
      "https://drc-server.onrender.com/Student_notice"
    );
    const Stud_data = await response_Student.json();

    const response_public = await fetch(
      "https://drc-server.onrender.com/Public_notice"
    );
    const Public_data = await response_public.json();

    if (Stud_data) {
      setStudentinfo(Stud_data.slice(0, 8));
    }
    if (Staff_data) {
      setStaffinfo(Staff_data.slice(0, 8));
    }
    if (Public_data) {
      setPublicinfo(Public_data.slice(0, 8));
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="bg-white pb-4 ">
        <div className="quick_links flex flex-row items-center justify-center text-center text-white font-bold  ">
          <span className=" uppercase w-full font-bold text-base md:text-2xl">
            Information Section
          </span>
        </div>
        {/* content/body/messages */}
        <div className="flex xl:flex-row flex-col items-center   mb-5 mt-8 lg:justify-between   ml-14 mr-10 ">
          <div className=" bg-[#d3d3d3] w-[350px] rounded-lg h-[500px] md:h-[600px] font-semibold mb-5  ml-5 mr-10 ">
            <span className="bg-[#000080] rounded-t-lg flex flex-row text-sm md:text-base justify-center z-10 text-white pb-2  px-4 ">
              <span className="mt-3">Notice for Students</span>
            </span>
            <div className="text-xs md:text-base ">
              {Studentinfo &&
                Studentinfo.map((curElem) => {
                  const {
                    _id,
                    title,
                    file_mimetype,
                    file_path,
                    new_,
                    date_exp,
                  } = curElem;
                  let date_e = null;
                  let exp_date;
                  if (date_exp !== null) {
                    date_e = date_exp.split("/");
                    exp_date = new Date(date_e[2], date_e[1] - 1, date_e[0]);
                  }
                  const cur_date = new Date();
                  const diffTime = Math.abs(exp_date) - Math.abs(cur_date);
                  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  var path2 = file_path.replace(/\\/g, "/");
                  var path = path2.slice(19);
                  return (
                    <>
                      {file_mimetype !== "text/link" ? (
                        <>
                          <a href={path} target="_blank" key={_id}>
                            <div className="flex items-center   ">
                              <span className="information  hover:font-semibold hover:text-blue-600 text-justify   ml-4 text-sm mb-1 mt-4">
                                {title}
                                {diffTime > 0 && new_ && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-xs bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </div>
                          </a>
                        </>
                      ) : (
                        <>
                          <a href={file_path} key={_id} target="_blank">
                            <div className="flex items-center ">
                              <span className="information   hover:font-semibold hover:text-blue-600 text-justify   ml-2 text-sm mb-1 mt-4">
                                {title}
                                {new_ && diffTime > 0 && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-xs bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </div>
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
              <Link
                to="/Student_Zone/Student_Notice"
                className="text-xs text-[#000080] flex justify-end mr-2 mt-1 "
              >
                ...read more
              </Link>
            </div>
          </div>
          <div className=" bg-[#d3d3d3] w-[350px] rounded-lg h-[500px] md:h-[600px] font-semibold mb-5  ml-5 mr-10 ">
            <span className="bg-[#000080] rounded-t-lg flex flex-row text-sm md:text-base justify-center z-10 text-white pb-2  px-4 ">
              <span className="mt-3">Notice for Staff</span>
            </span>
            <div className="text-xs md:text-base ">
              {Staffinfo &&
                Staffinfo.map((curElem) => {
                  const {
                    _id,
                    title,
                    file_mimetype,
                    file_path,
                    new_,
                    date_exp,
                  } = curElem;
                  let date_e = null;
                  let exp_date;
                  if (date_exp !== null) {
                    date_e = date_exp.split("/");
                    exp_date = new Date(date_e[2], date_e[1] - 1, date_e[0]);
                  }
                  const cur_date = new Date();
                  const diffTime = Math.abs(exp_date) - Math.abs(cur_date);
                  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  var path2 = file_path.replace(/\\/g, "/");
                  var path = path2.slice(19);
                  return (
                    <>
                      {file_mimetype !== "text/link" ? (
                        <>
                          <a href={path} target="_blank" key={_id}>
                            <div className="flex items-center   ">
                              <span className="information  hover:font-semibold hover:text-blue-600 text-justify   ml-4 text-sm mb-2 mt-4">
                                {title}
                                {diffTime > 0 && new_ && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-xs bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </div>
                          </a>
                        </>
                      ) : (
                        <>
                          <a href={file_path} key={_id} target="_blank">
                            <div className="flex items-center ">
                              <span className="information   hover:font-semibold hover:text-blue-600 text-justify  ml-4   text-sm mb-2 mt-4">
                                {title}
                                {new_ && diffTime > 0 && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-xs bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </div>
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
              <Link
                to="/StaffZone/Notices"
                className="text-sm text-[#000080] flex justify-end mr-2 mt-1 ml-64 "
              >
                ...read more
              </Link>
            </div>
          </div>
          <div className=" bg-[#d3d3d3] w-[350px] rounded-lg h-[500px] md:h-[600px] font-semibold mb-5  ml-5 mr-10 ">
            <span className="bg-[#000080] rounded-t-lg flex flex-row text-sm md:text-base justify-center z-10 text-white pb-2  px-4 ">
              <span className="mt-3">Notice for Public</span>
            </span>
            <div className="text-xs md:text-base ">
              {Publicinfo &&
                Publicinfo.map((curElem) => {
                  const {
                    _id,
                    title,
                    file_mimetype,
                    file_path,
                    new_,
                    date_exp,
                  } = curElem;
                  let date_e = null;
                  let exp_date;
                  if (date_exp !== null) {
                    date_e = date_exp.split("/");
                    exp_date = new Date(date_e[2], date_e[1] - 1, date_e[0]);
                  }
                  const cur_date = new Date();
                  const diffTime = Math.abs(exp_date) - Math.abs(cur_date);
                  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  var path2 = file_path.replace(/\\/g, "/");
                  var path = path2.slice(19);
                  return (
                    <>
                      {file_mimetype !== "text/link" ? (
                        <>
                          <a href={path} target="_blank" key={_id}>
                            <div className="flex items-center   ">
                              <span className="information  hover:font-semibold hover:text-blue-600 text-justify   ml-4 text-sm mb-2 mt-4">
                                {title}
                                {diffTime > 0 && new_ && (
                                  <sup className="font-extrabold text-transparent  bg-clip-text text-xs bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </div>
                          </a>
                        </>
                      ) : (
                        <>
                          <a href={file_path} key={_id} target="_blank">
                            <div className="flex items-center ">
                              <span className="information  hover:font-semibold hover:text-blue-600 text-justify   ml-4 text-sm mb-2 mt-4">
                                {title}
                                {new_ && diffTime > 0 && (
                                  <sup className="font-extrabold  text-transparent  bg-clip-text text-xs bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                                    new
                                  </sup>
                                )}
                              </span>
                            </div>
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
              <Link
                to="/Public_Notice"
                className="text-sm text-[#000080] flex justify-end mr-2 mt-1 ml-64 "
              >
                ...read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;

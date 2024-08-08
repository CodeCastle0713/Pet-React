import "./style.css";

const Sidebar = (props) => {
  const progressAddClass = {
    dotClassName: "progress-dot-active",
    dotFontClassName: "progress-dot-font-active",
  };
  const progress = [
    ["Pet basics", 1, 2],
    ["Pet details", 3, 4],
    ["Confirm", 5],
  ];

  let sidebar = "";

  if (props.petPage === 1) sidebar = "sidebar-catwalkimg";
  else if (props.petPage === 2) sidebar = "sidebar-dogimg";
  else if (props.petPage === 3) sidebar = "sidebar-catimg";
  else if (props.petPage === 4) sidebar = "sidebar-pugimg";
  else sidebar = "sidebar-puppyimg";
  return (
    <div
      className={`sidebar d-flex flex-column justify-content-between ${sidebar}`}
    >
      <div>
        <div className="d-flex align-items-center pb-5" href="#">
          <img src="./asset/img/logo-2.png" alt="none" />
          <span className="text-white">PAWTASTIC</span>
        </div>
        <div className="ps-2 pt-5">
          {progress.map((value, key) => {
            return (
              <div key={key}>
                <div className="d-flex">
                  <div className="dot-container">
                    <div
                      className={`progress-dot ${
                        props.petPage === value[1] || props.petPage === value[2]
                          ? progressAddClass.dotClassName
                          : ""
                      }`}
                    ></div>
                  </div>
                  <div
                    className={`ps-3 d-flex align-items-center progress-dot-font ${
                      props.petPage === value[1] || props.petPage === value[2]
                        ? progressAddClass.dotFontClassName
                        : ""
                    }`}
                  >
                    {value[0]}
                  </div>
                </div>
                {progress.length - 1 !== key ? (
                  <div className="vertical-line"></div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="extra-font">Save and exit</div>
    </div>
  );
};

export default Sidebar;

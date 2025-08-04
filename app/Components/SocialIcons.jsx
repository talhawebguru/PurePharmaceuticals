import React from "react";

const SocialIcons = (props) => {
  return (
    <>
      <a href="#" target="_blank">
        <div className={`w-[40.45px] h-[40.45px] text-[#cccccc] hover:shadow-xl hover:scale-110 hover:text-white bg-[#f4f4f4] hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300`}>
          {props.icon}
        </div>
      </a>
    </>
  );
};

export default SocialIcons;
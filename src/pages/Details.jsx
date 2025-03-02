import React from "react";
import Squares from "../animated/Sqaures";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsFolder } from "react-icons/bs";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuMessageSquareDot } from "react-icons/lu";
import Dock from "../animated/Dock";
import InfiniteScroll from "../animated/InfiniteScroll";
import NITLOGO from "../assets/nit.png";
import SYMLOGO from "../assets/symstech.png";
import BBDLOGO from "../assets/bbd.jpeg";
import CODELOGO from "../assets/codehop.jpeg";

export const Details = () => {
  const navigate = useNavigate();
  const itemsInfinite = [
    {
      content: (
        <div className="bg-white w-full">
          <div className="flex">
            <img src={SYMLOGO} alt="" className="h-20 w-20" />

            <h3>Symstech Faridabad, Haryana</h3>
          </div>
          <div>Fullstack Developer Intern</div>
          <div>January 2025 - Present</div>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-white w-full">
          <div className="flex">
            <img src={CODELOGO} alt="" className="h-20 w-20" />

            <h3>Codehop Interfusion Private Limited</h3>
          </div>
          <div>SDE Intern</div>
          <div>January 2024 - July 2024</div>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-white w-full">
          <div className="flex">
            <img src={NITLOGO} alt="" className="h-20 w-20" />

            <h3>National Institute Of Technology Kurukshetra</h3>
          </div>
          <div>Master of Computer Application</div>
          <div>2022-25</div>
        </div>
      ),
    },

    {
      content: (
        <div className="bg-white w-full">
          <div className="flex">
            <img src={BBDLOGO} alt="" className="h-20 w-20" />

            <h3>Babu Banarasi Das University Lucknow</h3>
          </div>
          <div>Bachelor of Computer Application</div>
          <div>2018-21</div>
        </div>
      ),
    },

 

    
  ];
  const items = [
    {
      icon: <GoHome color="white" />,
      label: "Home",
      onClick: () => navigate("/profile"),
    },
    {
      icon: <BsFolder color="white" />,
      label: "My Projects",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <LuMessageSquareDot color="white" />,
      label: "Reach Me",
      onClick: () => navigate("/contact"),
    },
    {
      icon: <HiOutlineDocumentArrowDown color="white" />,
      label: "Download Resume",
      onClick: () => alert("Settings!"),
    },
  ];
  return (
    <div className="h-[100vh] bg-black relative overflow-hidden">

      <div
        style={{ height: "500px" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <InfiniteScroll
          items={itemsInfinite}
          isTilted={true}
          tiltDirection="right"
          autoplay={true}
          autoplaySpeed={0.5}
          autoplayDirection="up"
          pauseOnHover={true}
        />
      </div>

      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      />
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

import React from "react";
import Folder from "../animated/Folder";
import Squares from "../animated/Sqaures";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsFolder } from "react-icons/bs";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuMessageSquareDot } from "react-icons/lu";
import Dock from "../animated/Dock";
import ScrollVelocity from "../animated/ScrollVelocity";
import resume from '../assets/resume.pdf'


 const SkillsPage = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Deepak_Kumar_Resume.pdf'; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
      onClick: () => navigate("/skills"),
    },
  ];
  return (
    <div className="h-[100vh] bg-black relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<ScrollVelocity
  texts={['React    Java    React Native    SpringBoot  Javascript', 'Python    Data structures and algorithms  Docker', 'HTML  CSS  Microservices   Typescript']} 
  velocity={50} 
  className="custom-scroll-text text-white"
/>
</div>


      <div
        style={{ height: "500px" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={()=>handleDownload()}
      >
        <Folder size={2} color="#6b7380" className="custom-folder" />
      
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

export default SkillsPage;

import React from "react";
import "./Profile.css";
import profile_image from "../Images/new.jpg";

const Profile = () => {
  return (
    <div className="main">
      <div className="top"></div>
      <div className="profile-down">
        <img src={profile_image} alt="" />
        <div className="profile-title">Matichai Pomkaew</div>
        <div className="profile-text">
          รหัสนักศึกษา: 6304837 อายุ: 22 ปี คณะ: วิศวกรรมศาสตร์ สาขาคอมพิวเตอร์
          <p>งานอดิเรก: ฟังเพลง,เล่นเกม,ดูหนัง</p> 
        </div>
        <div className="profile-button">
          <a href="#">CPE499 React</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
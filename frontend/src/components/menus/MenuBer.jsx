import React from "react";
import "./menubar.css";
function MenuBer({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="menubar-profile-pic">
            <img
              src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/470165617_122217698162071636_4601785674515343949_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tYqd1t27suoQ7kNvgFpBHou&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=A11U11-eIMPL2cTWU0jjYc-&oh=00_AYD7wK_wNoqcYBPfB5Th-pBES_LkPE-EN_1_FqVaVb3vwA&oe=676F6B1F"
              alt="profile pic"
            />
          </div>
        </>
      ) : (
        <>
          <h1>On</h1>
        </>
      )}
    </>
  );
}

export default MenuBer;

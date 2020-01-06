import React, { useState, useEffect, useRef } from "react";

const UserMenu = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', hideMenu)

    return () => {
      document.removeEventListener('click', hideMenu)
    }
  })

  const hideMenu = (e) => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if(e.target !== avatarRef.current) {
      setMenuVisible(false)
    }
  }

  const toggleMenu = () => {
    setMenuVisible(prevState => ({
      menuVisible: !prevState.menuVisible
    }))


  };

  return (
    <div className="UserMenu">
      <img
        className="UserAvatar"
        alt="User avatar"
        src={props.currentUser.avatar}
        onClick={toggleMenu}
        ref={avatarRef}
      />
      {menuVisible && (
        <ul>
          <li onClick={props.onLogout}>Logout</li>
        </ul>
      )}
    </div>
  )

}


export default UserMenu;

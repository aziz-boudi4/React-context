import React, { useState, useEffect, useRef } from "react";
import UserContext from './UserContext';

const UserMenu = () => {
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
    <UserContext.Consumer>
    {({ user, onLogout }) =>
      <div className="UserMenu">
        <img
          className="UserAvatar"
          alt="User avatar"
          src={user.avatar}
          onClick={toggleMenu}
          ref={avatarRef}
        />
        {menuVisible && (
          <ul>
            <li onClick={onLogout}>Logout</li>
          </ul>
        )}
      </div>
    }
    </UserContext.Consumer>
  )

}


export default UserMenu;

import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="user image"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello, how are you?</p>
        {/* <img
          src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="user image"
        /> */}
      </div>
    </div>
  );
}

export default Message
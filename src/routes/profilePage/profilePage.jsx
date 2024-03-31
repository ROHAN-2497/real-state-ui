const profilePage = () => {
  return (
    <div>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Useer Information</h1>
            <button>Update Profile</button>
            <div className="info">
              <span>
                Avatar:
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />{" "}
              </span>
              <span>
                UserName : <b>John Doe</b>
              </span>
              <span>
                E-mail : <b>john@gmail.com</b>
              </span>
            </div>{" "}
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default profilePage;

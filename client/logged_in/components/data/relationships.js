  {/* IF USER IS A MENTOR */}
  {user.isMentor ? (
    <div className="mentor-block">
      <p className="profile-mentees">Your Mentees:</p>
      <div>
        {user.Mentees.length ? (
          <div>
            {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
            <ul>
              {user.Mentees.map((person) => (
                <li key={person.id}>
                  {person.firstName + " " + person.lastName}

                  <img
                    style={{ width: "200px" }}
                    src={person.profilePic}
                  />
                  <Button
                    // color="inherit"
                    // size="medium"
                    variant="contained"
                    onClick={() =>
                      this.props.history.push("/users/chat")
                    }
                  >
                    {user.isMentor
                      ? "Chat with your Mentees!"
                      : "Chat with your Mentor"}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            {/* IF MENTOR HAS NOT YET BEEN ASSIGNED MENTEES */}
            <h1>Check back soon to meet your new mentees!</h1>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="mentor-block">
      {/* IF USER IS A MENTEE */}
      <p className="profile-mentees">Your Mentor:</p>
      <div className="mentor-profile-list">
        {/* IF USER HAS BEEN ASSIGNED A MENTOR */}
        {user.Mentors.length ? (
          <div className="mentor-profile-list">
            {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
            <ul>
              {user.Mentors.map((person) => (
                <li key={person.id}>
                  <h3>
                    {person.firstName + " " + person.lastName}
                  </h3>
                  <p>
                    {person.jobTitle + " at " + person.employer}
                  </p>
                  <img
                    className="mentor-image"
                    src={person.profilePic}
                  />
                  <br />
                  <Button
                    // className="button"
                    // color="inherit"
                    // size="medium"
                    // onClick={() =>
                    //   this.props.history.push("/users/chat")
                    // }
                    component={Link}
                    to={"/users/chat"}
                    variant="contained"
                  >
                    {user.isMentor
                      ? "Chat with your Mentees!"
                      : "Chat with your Mentor"}
                  </Button>
                  {/* <Button
                  className='button'
                  component={Link}
                  type='button'
                  to={'/mentor/:mentorid'}
                >
                  See Mentor Profile
                </Button> */}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            {/* IF USER HAS NOT YET BEEN ASSIGNED A MENTOR */}
            <span className="no-mentor">
              No mentors assigned yet. Click{" "}
              <Link to={`/users/mentors/${user.intakeScore}`}>
                here
              </Link>
              to connect.
            </span>
          </div>
        )}
      </div>
    </div>
  )}

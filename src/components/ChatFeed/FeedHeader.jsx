import React, { useState, useEffect } from "react";
import { Card, CardHeader, Tooltip, Avatar } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    backgroundColor: "white",
  },
  avatar: {
    backgroundColor: blue[500],
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: 600,
  },
}));

const FeedHeader = (props) => {
  const classes = useStyles();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(props.people);
  }, [props.people]);

  const renderPopup = (person) => (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          person.person.avatar ? (
            <img
              className={classes.avatar}
              src={person.person.avatar}
              alt={person.person.avatar}
            />
          ) : (
            <Avatar className={classes.avatar}>
              {person?.person?.username?.substring(0, 2).toUpperCase()}
            </Avatar>
          )
        }
        title={
          <div className={classes.name}>
            {`${person.person.first_name} ${person.person.last_name}`}
          </div>
        }
      />
    </Card>
  );

  return (
    <div className="chat-title-container">
      <div className="chat-title">{props.title}</div>
      <div className="chat-subtitle">
        {people.map((person, index) => (
          <Tooltip title={renderPopup(person)} key={index}>
            <span>{`| ${person.person.username} `}</span>
          </Tooltip>
        ))}
      </div>
      <hr style={{ margin: "10px 0" }} />
    </div>
  );
};

export default FeedHeader;

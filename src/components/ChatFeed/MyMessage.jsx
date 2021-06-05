import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="Attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="my-message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
      }}
    >
      {message.text}
    </div>
  );
};
export default MyMessage;

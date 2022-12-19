import GitHubCalendar from "react-github-calendar";

import React from "react";

const Github = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
        padding:"0px 1rem"
      }}
    >
      <h2 style={{ marginBottom: "30px", color: "rgb(77,181,255)" }}>
        My Github Calender
      </h2>
      <GitHubCalendar
        username="A-Hore"
        blockSize={15}
        blockMargin={5}
        fontSize={15}
        color={"green"}
      />
     
    </div>
  );
};

export default Github;

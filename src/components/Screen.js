import React from "react";

const Screen = ({value}) => {
  return (
    <div className="flex justify-end items-center h3 pa3 mb2 br3 b white bg-mid-gray f2">
        <p>{value}</p>
    </div>
  );
};

export default Screen;

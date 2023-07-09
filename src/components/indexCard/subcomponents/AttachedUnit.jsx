import React from "react";

const AttachedUnit = () => {
  return (
    <div>
      <div className="indexCard__attached-unit">Attached unit</div>
      <p className="font-rules">
        If a <span className="font-negrita">Character</span> unit from your army
        with the Leader ability can be attached to a{" "}
        <span className="font-negrita">Devastator Squad</span>, it can instead
        be attached to this unit
      </p>
    </div>
  );
};

export default AttachedUnit;

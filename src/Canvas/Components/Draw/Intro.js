import React from "react";

function HeaderAndIntro(props) {
  return (
    <div className="px-4">
      <p>
        Video call your partner.{" "}
        <strong>
          Draw what your partner's describing (but don't show them your
          progress).
        </strong>{" "}
        At the end, guess what object your partner was describing and share your
        screen to see if you were right.
      </p>
      <hr />
    </div>
  );
}

export default HeaderAndIntro;

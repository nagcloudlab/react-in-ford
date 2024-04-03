import React from "react";

import styles from "./Foo.module.css";

function Foo(props: any) {
  return (
    <div
      //   style={{
      //     backgroundColor: "lightblue",
      //     padding: "10px",
      //     margin: "10px",
      //   }}
      // className="my-style"
      className={styles["my-style"]}
    >
      im Foo component
    </div>
  );
}

export default Foo;

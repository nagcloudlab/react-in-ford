import React from "react";

function LoginPageLayout(props: any) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Auth Layout</h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default LoginPageLayout;

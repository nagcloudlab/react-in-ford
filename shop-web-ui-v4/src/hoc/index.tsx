export function withCard(InputComponent: any) {
  const OutputComponent = function (props: any) {
    return (
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <InputComponent {...props} />
        </div>
      </div>
    );
  };
  return OutputComponent;
}

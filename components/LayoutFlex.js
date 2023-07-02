export default function LayoutFlex({ json }) {
  const { children } = json;
  console.log(json.data);
  console.log(json.type);
  console.log(children);
  return (
    <>
      {json.data === null ? (
        <div className={`${json.type}`} style={{ flex: json.flex }}>
          {children.map((child) => {
            return <LayoutFlex key={json.id} json={child} />;
          })}
        </div>
      ) : (
        <div className={`${json.type}i`} style={{ flex: json.flex }}></div>
      )}
    </>
  );
}

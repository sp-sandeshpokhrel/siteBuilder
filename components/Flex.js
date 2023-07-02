export default function Flex({ json, handleClick }) {
  const { children } = json;
  console.log(json.data);
  console.log(json.type);
  console.log(children);
  return (
    <>
      {json.data === null ? (
        <div className={`${json.type}`} style={{ flex: json.flex }}>
          {children.map((child) => {
            return (
              <Flex key={child.id} json={child} handleClick={handleClick} />
            );
          })}
        </div>
      ) : (
        <div
          className={`${json.type}i`}
          style={{ flex: json.flex }}
          onClick={(e) => handleClick(e, json.id)}
        ></div>
      )}
    </>
  );
}

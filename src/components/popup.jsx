function PopUp(props) {
  console.log(`work`);
  return props.trigger ? (
    <>
      <div>{props.children}</div>
    </>
  ) : (
    ""
  );
}
export default PopUp;

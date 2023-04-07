import rocket_loader from "/assets/img/rocket-loader.gif";

const Loading = () => {
  return (
    <>
      <div className="rocketLoader">
        <img src={rocket_loader} alt="loader_rocket" />
      </div>
    </>
  );
};

export default Loading;

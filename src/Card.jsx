const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "300px",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
      }}
    >
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <h2>Card Title</h2>
      <p>Card Description</p>
    </div>
  );
};

export default Card;

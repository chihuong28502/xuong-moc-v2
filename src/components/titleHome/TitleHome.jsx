function TitleHome({ title, colorText }) {
  return (
    <div>
      <div className="slide-product">
        <h4
          style={{
            textTransform: "uppercase",
            fontSize: "2rem",
            marginBottom: "2rem",
            fontWeight: "700",
            color: `${colorText}`,
          }}
        >
          {title}
        </h4>
      </div>
    </div>
  );
}

export default TitleHome;

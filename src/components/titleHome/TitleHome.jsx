import './titleHome.css'
function TitleHome({ title, colorText }) {
  return (
    <div>
      <div className="slide-product">
        <h4 className='textTitle'
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

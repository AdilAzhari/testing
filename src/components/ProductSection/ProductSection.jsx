import LinkButton from "./LinkButton";
import "./ProductSection.css";
import apexgame from "../../assets/apexgame.png";
import apexcarnival from "../../assets/apexcarnival.png";

const ProductCard = ({
  borderLinkStyle,
  borderArrowStyle,
  cover_image,
  title,
  summary,
  link,
  colour,
}) => {
  return (
    <figure>
      <img src={cover_image} alt='product image' />
      <figcaption>
        <h3>{title}</h3>
        <p>{summary}</p>
        <LinkButton
          borderLinkStyle={borderLinkStyle}
          borderArrowStyle={borderArrowStyle}
          link={link}
          label={"Learn More"}
          dynamicColor={`121.76deg, ${colour} 15.41%, ${colour} 81.48%`}
        />
      </figcaption>
    </figure>
  );
};

function ProductSection() {
  return (
    <section className='product_section'>
      <hr />
      <div className='product_header_container'>
        <div>
          <h5>OUR PRODUCTS</h5>
          <h3>
            Some Of The <span>Products We Offer</span>
          </h3>
        </div>
        <LinkButton
          link={"/"}
          borderLinkStyle={"1px solid #f60"}
          borderArrowStyle={"1px solid #f60"}
          label={"Connect Wallet"}
          dynamicColor={"121.76deg, #ffde59 15.41%, #ff1616 81.48%"}
        />
      </div>
      <div className='product-card-container'>
        <ProductCard
          borderLinkStyle={"1px solid #DCB105"}
          borderArrowStyle={"1px solid #DCB105"}
          cover_image={apexgame}
          title={"APEX Games"}
          summary={
            "APEX Games has redefined the gaming landscape by integrating cryptocurrency, creating a unique and innovative business model."
          }
          link={"/"}
          colour={"#DCB105"}
        />
        <ProductCard
          borderLinkStyle={"1px solid #004AAD"}
          borderArrowStyle={"1px solid #004AAD"}
          cover_image={apexcarnival}
          title={"APEX Carnival"}
          summary={
            "Apex carnival is a social MMO (massively multiplayer online) game set in a vibrant, virtual casino environment. Players can customize their avatars..."
          }
          link={"/"}
          colour={"#004AAD"}
        />
      </div>
    </section>
  );
}

export default ProductSection;

import { Link } from "react-router-dom";
import rocketIcon from "../../assets/rocket.svg";

function LinkButton({
  link,
  label,
  dynamicColor,
  borderLinkStyle,
  borderArrowStyle,
}) {
  return (
    <div className='link-btn-group'>
      <Link
        to={link}
        className='product_card_link'
        style={{ border: borderLinkStyle }}>
        {label}
      </Link>
      <span
        style={{
          background: `linear-gradient(${dynamicColor})`,
          border: borderArrowStyle,
        }}>
        <img src={rocketIcon} alt='rocket icon' />
      </span>
    </div>
  );
}

export default LinkButton;

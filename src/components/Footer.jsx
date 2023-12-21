
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer"
    >
      <div>&copy; The awesome Recipe App {currentYear}&nbsp;</div>

    </div>
  );
}

export default Footer;

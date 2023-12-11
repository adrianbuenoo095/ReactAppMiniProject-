import recipeBook from "../assets/recipeBook.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container1">
                <div className="appName">
                    <img src={recipeBook} />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;

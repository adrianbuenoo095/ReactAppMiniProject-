import recipeBook from "../assets/recipeBook.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container-one">
                <div className="appName">
                    <img src={recipeBook} alt="Recipe Book" />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;

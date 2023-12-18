import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <h1>Project Description</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem non nisi cursus volutpat non consectetur tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu efficitur ipsum. Ut faucibus facilisis turpis non porttitor. Proin molestie nisi et turpis finibus varius. Donec leo nisl, interdum nec nibh id, blandit condimentum erat. Quisque id ante finibus, ullamcorper leo ac, tristique sem. Cras eget vulputate erat. Nulla imperdiet vestibulum imperdiet. Vivamus mauris nisl, porttitor vitae eros in, vestibulum semper purus.</p>
            <div className="firstStudent">
                <h2>Prabeshika Koirala</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem non nisi cursus volutpat non consectetur tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu efficitur ipsum. </p>
                <li>
                    <Link>Github</Link>
                    <Link>Linkedln</Link>
                </li>
            </div>
            <div className="secondStudent">
                <h2>Adrian L Bueno</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sem non nisi cursus volutpat non consectetur tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu efficitur ipsum. </p>
                <li>
                    <Link>Github</Link>
                    <Link>Linkedln</Link>
                </li>
            </div>
        </>
    );
}

export default AboutPage;
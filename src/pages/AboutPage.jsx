import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/prabeshikaProfile.jpg";
import ProfileCard from "../components/ProfileCard";

const linkedinLink = (
    <Link href="https://www.linkedin.com/in/prabeshikakoirala/" target="_blank">
        <FontAwesomeIcon className="w-[25px]" icon={faLinkedin} />
    </Link>
)

const githubLink = (
    <Link href="https://github.com/Prabeshikak" target="_blank">
        <FontAwesomeIcon className="w-[25px]" icon={faGithub} />
    </Link>
)

const firstStudentBio = "Hi I'm Prabeshika Koirala. I have an experience working as a former Salesforce professional but now eager to broaden my skill set and explore new horizons, I have currently embraced the world of full stack development. I hope this transition helps me to opens doors to the new fields of technology."

const AboutPage = () => {
    return (
        <>
            <div className="bg-black">
                <ProfileCard fullname="Prabeshika Koirala" profileImage={profileImage} aboutMe={firstStudentBio} linkedin={linkedinLink} github={githubLink} />
            </div>


            {/* <ProfileCard /> */}

        </>
    );
}

export default AboutPage;
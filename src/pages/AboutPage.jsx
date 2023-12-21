import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";


const profileImageOne = "./assets/images/prabeshikaProfile.jpg";

const linkedinLink = (
    <Link href="https://www.linkedin.com/in/prabeshikakoirala/" target="_blank">
        <FontAwesomeIcon className="w-[25px]" icon={faLinkedin} />
    </Link>
)

const githubLink = (
    <Link href="https://github.com/Prabeshikak?tab=repositories" target="_blank">
        <FontAwesomeIcon className="w-[25px]" icon={faGithub} />
    </Link>
)

const firstStudentBio = "Hi I'm Prabeshika Koirala. I have an experience working as a former Salesforce professional but now eager to broaden my skill set and explore new horizons, I have currently embraced the world of full stack development. I hope this transition helps me to opens doors to the new fields of technology."

const AboutPage = () => {
    return (
        <>
            <div className="firstStudent">
                <ProfileCard fullname="Prabeshika Koirala" profileImage={profileImageOne} aboutMe={firstStudentBio} linkedinLink={linkedinLink} gitGublink={githubLink} />
            </div>
            <div className="secondStudent">
                <ProfileCard />
            </div>
        </>
    );
}

export default AboutPage;
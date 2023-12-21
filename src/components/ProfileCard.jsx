

const ProfileCard = ({ fullname, profileImage, gitGublink, aboutMe, linkedinLink }) => {
    return (
        <>
            <div>
                <div>
                    <h1>{fullname}</h1>
                    <div>
                        <img src={profileImage} />
                    </div>
                    <p>
                        {aboutMe}
                    </p>
                    <div>
                        <span>{gitGublink}</span>
                        <span>{linkedinLink}</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileCard;
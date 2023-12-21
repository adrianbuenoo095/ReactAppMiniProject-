

const ProfileCard = ({ fullname, profileImage, github, aboutMe, linkedin }) => {
    return (
        <div className="p-5 border rounded text-center text-gray-900 ">
            <img className="w-32 h-32 rounded-full mx-auto" src={profileImage} alt="Profile Picture" />
            <div className="text-sm mt-5">
                <h1 className="text-center text-2xl font-semibold mt-3">{fullname}</h1>
            </div>
            <p className="text-gray-600 mt-2">
                {aboutMe}
            </p>
            <div className="flex mt-4 justify-center">
                <span >{github}</span>
                <span >{linkedin}</span>
            </div >
        </div>
    );
}

export default ProfileCard;



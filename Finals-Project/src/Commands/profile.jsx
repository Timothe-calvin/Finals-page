import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
  return (
    <>
        <Link to="/">Home</Link>
        <button onClick={() => {navigate(-1)}}>Back</button>
        <button onClick={() => {navigate('/')}}>Home</button>
        <div>Profile</div>
    </>
  )
}

export default Profile
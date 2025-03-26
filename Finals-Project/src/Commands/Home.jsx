import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
    return (
    <>
        <button onClick={() => {navigate('/profile')}}>Profile</button>
        <div>Home</div>
    </>
  )
}

export default Home;
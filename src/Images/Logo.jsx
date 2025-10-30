const Logo = ({ color }) => {
  return(
    <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="50" fill={color}/>
      <path d="M10 10 H 90 V 90 H 10 Z" fill="white"/>
    </svg>
  )
};

export default Logo;

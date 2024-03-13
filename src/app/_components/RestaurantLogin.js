
const RestaurantLogin = () => {
  return (
    <div>
      <h3>Login Page</h3>
      <div>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter email id" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="password" placeholder="Enter password" />
        </div>

        <div className="input-wrapper" >
          <button className="button">Login</button>
        </div>

      </div>
    </div>
  )
}

export default RestaurantLogin;


const RestaurantSignup = () => {
  return (
    <div>

      <h3>SignUp Page</h3>
      <div>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter email id" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="password" placeholder="Enter password" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="password" placeholder="Confirm password" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter Restarunt Name" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter city" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter address" />
        </div>
        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Enter contact No." />
        </div>

        <div className="input-wrapper" >
          <button className="button">SignUp</button>
        </div>

      </div>

    </div>
  )
}

export default RestaurantSignup;
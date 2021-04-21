const RegistrationForm = () => {
  return (
    <form>
      <label>Name:</label>
      <input type="text" />
      <br/>

      <label>Email:</label>
      <input type="email" />
      <br/>

      <label>Password:</label>
      <input type="password" />
      <br/>

      <label>Retype Password:</label>
      <input type="password" />
      <br/>

      <select>
        <option>Customer</option>
        <option>Specialist</option>
      </select>
    </form>
  )
}

export { RegistrationForm };
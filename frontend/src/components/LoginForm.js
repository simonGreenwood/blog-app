const LoginForm = () => {
  return (
    <div>
      <h2>Log in</h2>
      <form>
        <div>username <input type="text" id="username-input"/></div>
        <div>password <input type="password" id="password-input"/></div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}
export default LoginForm
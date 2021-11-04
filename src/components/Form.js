const Form = ({
  name,
  handleNameChange,
  email,
  handleEmailChange,
  password1,
  password2,
  handlePasswordChange,
  handleSubmit,
  handlePasswordConfirm,
}) => {
  <form onSubmit={handleSubmit}>
    <h1>Create Account</h1>
    <h2>Name</h2>
    <input
      placeholder="Jean Dupont"
      value={name}
      onChange={handleNameChange}
      type="text"
    />
    <h2>email</h2>
    <input
      placeholder="@"
      value={email}
      onChange={handleEmailChange}
      type="email"
    />
    <div>
      {}
      <h2>Password</h2>
      <input
        type="password"
        placeholder="un vrai mot de passe, pas genre 'azerty'"
        value={password1}
        onChange={handlePasswordChange}
      />
      <h2>Confirm Password</h2>
      <input
        type="password"
        placeholder="un vrai mot de passe, pas genre 'azerty'"
        value={password2}
        onChange={handlePasswordConfirm}
      />
    </div>

    <button onClick={handleSubmit}>Register</button>
  </form>;
};

export default Form;

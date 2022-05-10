import React, { useState, useEffect } from "react";

function LoginForm(props) {
  return (
    <form>
      <input type="text" name="email" placeholder="EMAIL" />
      <input type="password" name="password" placeholder="PASSWORD" />
      <a href="#">forgot password?</a>
      <button>log in</button>
    </form>
  );
}

export default LoginForm;

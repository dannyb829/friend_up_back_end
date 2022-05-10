import React, { useState, useEffect } from "react";

function RegistrationForm(props) {
  return (
    <form>
      <label>
        first name
        <input type="text" name="firstName" />
      </label>
      <label>
        last name
        <input type="text" name="lastName" />
      </label>
      <label>
        email
        <input type="text" name="email" />
      </label>
      <label>
        password
        <input type="password" name="password" />
        <ul>
          <li>has 8 or more characters</li>
          <li>has both uppercase and lowercase letters</li>
          <li>has both letters and numbers</li>
          <li>has at least one special character</li>
        </ul>
      </label>
      <label>
        password confirmation
        <input type="password" name="passwordConfirmation" />
        <ul>
          <li>matches password</li>
        </ul>
      </label>
      <button>submit</button>
    </form>
  );
}

export default RegistrationForm;

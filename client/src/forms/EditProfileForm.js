import React, { useState } from "react";

function EditProfileForm({ user, setUser, setIsModal, setModalContent }) {
  // Default Form Values
  const defaultForm = {
    first: user.first_name,
    last: user.last_name,
    email: user.email,
    phone: user.phone_number || "",
    image_url: user.image_url || "",
  };

  // State and Variable Declaration
  const [formData, setFormData] = useState(defaultForm);
  const { first, last, email, phone, image_url } = formData;

  // Reset formData to default values
  const resetForm = () => setFormData(defaultForm);

  // Handles form onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: first,
        last_name: last,
        email: email,
        phone_number: phone,
        image_url: image_url,
      }),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setUser(updatedUser);
        setModalContent(null);
        setIsModal(false);
      })
      .catch((error) => console.log(error.message));

    resetForm();
  };

  const onChangePasswordClick = () => {
    alert("you cannot change your password you FOOL!!!");
  };

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({ target: { type, name, value, checked } }) => {
    const newValue = type === "checkbox" ? checked : value;
    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  };

  return (
    <>
      <h3>Edit Profile</h3>
      <button onClick={onChangePasswordClick}>change password</button>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input onChange={handleFormChange} name="first" value={first} />
        </label>
        <label>
          Last Name
          <input onChange={handleFormChange} name="last" value={last} />
        </label>
        <label>
          Email
          <input onChange={handleFormChange} name="email" value={email} />
        </label>
        <label>
          Phone
          <input onChange={handleFormChange} name="phone" value={phone} />
        </label>
        <label>
          Profile Image URL
          <input
            onChange={handleFormChange}
            name="image_url"
            value={image_url}
          />
        </label>
        <button>submit</button>
      </form>
    </>
  );
}

export default EditProfileForm;

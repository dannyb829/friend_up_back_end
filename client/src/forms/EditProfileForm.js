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
      <div className="lr-cont">
        <h3>Edit Profile</h3>
        <button className="link-button" onClick={onChangePasswordClick}>
          change password
        </button>
      </div>
      <hr></hr>
      <form className="form-cont" onSubmit={handleSubmit}>
        <div className="f-col">
          <label>First Name</label>
          <input onChange={handleFormChange} name="first" value={first} />
        </div>
        <div className="f-col">
          <label>Last Name</label>
          <input onChange={handleFormChange} name="last" value={last} />
        </div>
        <div className="f-col">
          <label>Email</label>
          <input onChange={handleFormChange} name="email" value={email} />
        </div>
        <div className="f-col">
          <label>Phone</label>
          <input onChange={handleFormChange} name="phone" value={phone} />
        </div>
        <div className="f-col">
          <label>Profile Image URL</label>
          <input
            onChange={handleFormChange}
            name="image_url"
            value={image_url}
          />
        </div>
        <div className="f-center">
          <button className="btn">Submit</button>
        </div>
      </form>
    </>
  );
}

export default EditProfileForm;

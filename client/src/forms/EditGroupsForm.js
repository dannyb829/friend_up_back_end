import React from "react";
import GroupFormItem from "./GroupFormItem";

function EditGroupsForm({ user, setUser, setModalContent, setIsModal }) {
  console.log("editform user:", user);
  console.log("editform user.groups:", user.groups);
  const groupsList = user.groups.map((group) => {
    return (
      <GroupFormItem
        key={group.id}
        group={group}
        setUser={setUser}
        user={user}
        setModalContent={setModalContent}
        setIsModal={setIsModal}
      />
    );
  });
  return (
    <div>
      <h3>Your Groups:</h3>
      {groupsList}
    </div>
  );
}

export default EditGroupsForm;

import React from "react";
import GroupFormItem from "./GroupFormItem";

function EditGroupsForm({ groups, setUser, setModalContent, setIsModal }) {
  const groupsList = groups.map((group) => {
    return <GroupFormItem key={group.id} group={group} setUser={setUser} />;
  });
  return (
    <div>
      <h3>Your Groups:</h3>
      {groupsList}
    </div>
  );
}

export default EditGroupsForm;

import React, { useState } from "react";
import GroupFormItem from "./GroupFormItem";
import NewGroupForm from "./NewGroupForm";

function EditGroupsForm({ user, setUser, setModalContent, setIsModal }) {
  const [isAddingGroup, setIsAddingGroup] = useState(false);
  const [newGroupInput, setNewGroupInput] = useState("");

  const resetModal = (updatedUser) => {
    setModalContent(
      <EditGroupsForm
        user={updatedUser}
        setUser={setUser}
        setModalContent={setModalContent}
        setIsModal={setIsModal}
      />
    );
  };

  const groupsList = user.groups.map((group) => {
    return (
      <GroupFormItem
        key={group.id}
        group={group}
        setUser={setUser}
        resetModal={resetModal}
      />
    );
  });

  const onNewGroupInputChange = (e) => {
    setNewGroupInput(e.target.value);
  };

  const toggleAddingGroup = () => {
    setIsAddingGroup((cur) => !cur);
    setNewGroupInput("");
  };

  return (
    <div>
      <h3>Your Groups:</h3>
      {isAddingGroup ? (
        <NewGroupForm
          newGroupInput={newGroupInput}
          onNewGroupInputChange={onNewGroupInputChange}
          toggleAddingGroup={toggleAddingGroup}
          setUser={setUser}
          resetModal={resetModal}
        />
      ) : (
        <button onClick={toggleAddingGroup}>➕ Add Group</button>
      )}
      <hr />
      {groupsList}
    </div>
  );
}

export default EditGroupsForm;

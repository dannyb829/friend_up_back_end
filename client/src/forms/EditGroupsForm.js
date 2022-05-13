import React, { useState } from "react";
import GroupFormItem from "./GroupFormItem";
import NewGroupForm from "./NewGroupForm";
import { ImPlus } from "react-icons/im";

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
      <div className="lr-cont align-base">
        <h3>Your Groups:</h3>
        <button
          className="btn"
          onClick={toggleAddingGroup}
          disabled={isAddingGroup}
        >
          <ImPlus /> Add Group
        </button>
      </div>
      <hr />
      {isAddingGroup && (
        <NewGroupForm
          newGroupInput={newGroupInput}
          onNewGroupInputChange={onNewGroupInputChange}
          toggleAddingGroup={toggleAddingGroup}
          setUser={setUser}
          resetModal={resetModal}
        />
      )}
      {groupsList}
    </div>
  );
}

export default EditGroupsForm;

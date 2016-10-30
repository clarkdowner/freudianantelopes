var CreateGroupButton = props => {
  // opens form to create a new group when clicked

  if (props.createGroupClicked) {

    return (
      <div>
        <button className='createGroupButton btn btn-primary' onClick={props.openCreateGroupForm}>Create New Group</button>
        <CreateGroup addToGroups={props.addToGroups} currentUser={props.currentUser} openCreateGroupForm={props.openCreateGroupForm}/>
      </div>
    );

  } else {
  
    return (
      <div>
        <button className='createGroupButton btn btn-primary' onClick={props.openCreateGroupForm}>Create New Group</button>
      </div>
    );
    
  }

};

window.CreateGroupButton = CreateGroupButton;

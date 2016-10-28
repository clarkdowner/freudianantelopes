class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createGroupClicked: false
    };
  }

  openCreateGroupForm() {
    console.log('openCreateGroupForm called');
    this.setState({createGroupClicked: !this.state.createGroupClicked});
  }

  render(props) {
    return (
      <div className='sidebar'>
     
        <CreateGroupButton addToGroups={this.props.addToGroups} currentUser={this.props.currentUser} createGroupClicked={this.state.createGroupClicked} openCreateGroupForm={this.openCreateGroupForm.bind(this)}/>
  
        <div className='sidebar-groups-header'>Your groups:</div>
        <div className='sidebar-groups'>
          {this.props.groups.map(groupName => <Group currentUser={this.props.currentUser} name={groupName} clickHandler={this.props.groupClickHandler} />)}
        </div>
      </div>
    );
  }
}

window.Sidebar = Sidebar;
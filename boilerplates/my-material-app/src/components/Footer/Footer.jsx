import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// import './Footer.scss';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer className="Footer">
      <strong>Davaen Production</strong>
      <BottomNavigation value={value} onChange={handleChange}>
        {/* <BottomNavigation value={value} onChange={handleChange} className={classes.root}> */}
        <BottomNavigationAction label="Project" value="project" icon={<HomeWorkIcon />} />
        <BottomNavigationAction label="Works" value="works" icon={<BuildIcon />} />
        <BottomNavigationAction label="Bank" value="bank" icon={<AccountBalanceIcon />} />
        <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </footer>
  );
}

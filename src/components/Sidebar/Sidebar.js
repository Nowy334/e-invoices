import classes from './Sidebar.module.scss';
import logo from '../../access/Logo@2x.png';

const Sidebar = () => {
  return(
    <nav className={classes.sidebar}>
      <div>
        <img src={logo} alt='logo'/>
      </div>
      <ul>
        
      </ul>
    </nav>
  );
}

export default Sidebar;
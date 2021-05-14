import classes from './Sidebar.module.scss';
import logo from '../../access/Logo@2x.png';
import SidebarItem  from './SidebarItem';

const bookmarks = [
  {
    name: 'Moje centrum',
    svg: '#icon-home'
  },
  {
    name: 'Moje faktury',
    svg: '#icon-file'
  },
  {
    name: 'Moje zużycie',
    svg: '#icon-params'
  },
  {
    name: 'Wiadomości',
    svg: '#icon-mail'
  },
  {
    name: 'Ustawienia',
    svg: '#icon-settings'
  },

];

const elements = bookmarks.map((element, index) => {
  return <SidebarItem name={element.name} svg={element.svg} key={index} id={index}/>
})

const Sidebar = () => {
  return(
    <nav className={classes.sidebar}>
      <div className={classes.sidebar__img}>
        <img src={logo} alt='logo' className={classes.sidebar__img}/>
      </div>
      <ul className={classes.sidebar__list}>
        {elements}
      </ul>
    </nav>
  );
}

export default Sidebar;
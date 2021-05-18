import classes from './Menu.module.scss';
import MenuElements from './MenuElements';

const Menu = (props) => {

  const Elemnts = props.data.map((element, index) => {
    return <MenuElements content = {element} key = {index} click={props.click} id={index}/>;
  });

  return(
    <main className={classes.container}>
      {Elemnts}
    </main>
  );
}

export default Menu;
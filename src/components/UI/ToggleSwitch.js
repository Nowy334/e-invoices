import classes from './ToggleSwitch.module.scss';

const ToggleSwitch = (props) => {
  return(
    <div className={classes.container}>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}></label>
    </div>
    
  );
}

export default ToggleSwitch;
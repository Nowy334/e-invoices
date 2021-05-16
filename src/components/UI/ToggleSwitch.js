import classes from './ToggleSwitch.module.scss';

const ToggleSwitch = (props) => {

  let input;

  if(props.id !== 8) {
    input = <input type="checkbox" id={props.id} className='active'/>;
  }else{
    input = <input type="checkbox" id={props.id} checked={props.isToggled} onChange={props.onToggle}/>
  }

  return(
    <div className={classes.container}>
      {input}
      <label htmlFor={props.id}></label>
    </div>
    
  );
}

export default ToggleSwitch;
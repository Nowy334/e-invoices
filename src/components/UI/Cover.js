import classes from './Cover.module.scss';

const Cover = (props) => {

  return (
    <div className={classes.cover +' '+  props.className}>{props.children}</div>
  )
}

export default Cover;
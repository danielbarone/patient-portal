import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dynamicIcon: (props) => ({
    ...(props.type ? theme.icons[props.type] : 'default'),
    color: theme.colors.text[props.color || 'primary'],
  }),
}));

export default useStyles;

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { string } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    margin: 6,
    padding: 6
  },
  paragraph: {
    margin: 6,
    padding: 6
  }
}))

const Header = props => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h5' className={classes.title}>
        {props.title}
      </Typography>
      <Typography variant='subtitle2' className={classes.title}>
        {props.subtitle}
      </Typography>
      {props.paragraphs.split('|').map((paragraph, index) => (
        <div key={index} className={classes.paragraph}>
          <Typography variant='body1'>{paragraph}</Typography>
        </div>
      ))}
    </>
  )
}

Header.propTypes = {
  title: string,
  subtitle: string,
  paragraphs: string
}

export default Header

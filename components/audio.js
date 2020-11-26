import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import PlayCircleFilledWhiteTwoToneIcon from '@material-ui/icons/PlayCircleFilledWhiteTwoTone';
import Typography from '@material-ui/core/Typography'
import { string } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
    width: '100%',
    margin: 3
  }
}))

const Audio = props => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar>
            <img src={props.avatar} height={48} />
          </Avatar>
        }
        action={
          <IconButton onClick={() => window.open(props.url, '_blank')}>
            <PlayCircleFilledWhiteTwoToneIcon  />
          </IconButton>
        }
        title={<Typography variant='subtitle2'>{props.title}</Typography>}
      />
    </Card>
  )
}

Audio.propTypes = {
  avatar: string,
  title: string,
  url: string
}

export default Audio

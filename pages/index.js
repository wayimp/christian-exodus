import Link from 'next/link'
import Head from '../components/head'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Audio from '../components/audio'
import Header from '../components/header'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 8,
    flexGrow: 1,
    width: '100%'
    //backgroundImage: 'url(./blue-snow.png)',
    //backgroundPosition: 'center',
    //backgroundRepeat: 'repeat'
  },
  paper: {
    margin: 6,
    padding: 10,
    backgroundColor: '#FAFAFF'
  }
}))

const page = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
    >
      <Grid item lg={4} xs={12}>
        <Paper className={classes.paper}>
          <img src='/logo.png' style={{ margin: 8 }} />
          <Header
            title='Forsake the Empire, Seek the Kingdom!'
            paragraphs='Modern American Christians have largely been seduced by the lie that the national government can be reformed to serve their interests. Meanwhile they have failed to establish righteous governance at the local level: over their own selves, their families, their churches, and their communities.|
Jesus Christ is the sole embodiment of divine authority on the earth, and it is to him alone that we owe our allegiance. When we walk with him, we face similar adversaries, be they tyrants or Pharisees; and we must not fear to disentangle ourselves from the corrupting influences of earthly powers to reclaim our heritage of glorious freedom as Sons of God.|
God preserves a remnant of people for himself who refuse to bow the knee to the demonic idols of oppression. When local officials righteously refuse to comply with unjust orders, this is what we call the interposition of the lesser magistrate. This might be a Sheriff, Mayor, Judge, Pastor or Father who simply says no to an intolerable evil, and takes a stand against the oppressor.|
We seek to grow a network of independent Christian communities, where people can live and work together with others of like mind. We welcome large families who homeschool their children, and try to live by their own initiative, free from consumer debt and government assistance.'
          />
          <Link href='/inquire'>
            <Button variant='contained' color='primary' style={{ margin: 10 }}>
              Submit Inquiry
            </Button>
          </Link>
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper className={classes.paper}>
          <Header
            title='Pastor John Weaver'
            subtitle='Freedom Ministries'
            paragraphs='Pastor John Weaver has been teaching the doctrine of interposition
              for decades, providing a sound theological foundation for
              resistance to tyranny.'
          />
          <Audio
            title='Authority 1 of 2'
            url='https://www.sermonaudio.com/sermon/62620174283010'
            avatar='./john-weaver.png'
          />
          <Audio
            title='Authority 2 of 2'
            url='https://www.sermonaudio.com/sermon/7420246374415'
            avatar='./john-weaver.png'
          />
          <Audio
            title='The Doctrine of Interposition'
            url='https://www.sermonaudio.com/sermon/1019152134126'
            avatar='./john-weaver.png'
          />
          <Audio
            title='Tyranny and Self-Defense'
            url='https://www.sermonaudio.com/sermon/1019151554171'
            avatar='./john-weaver.png'
          />
        </Paper>
        <Paper className={classes.paper}>
          <Header
            title='Pastor Matt Trewhella'
            subtitle='Mercy Seat Christian Church'
            paragraphs='Pastor Matt Trewhella has been teaching the doctrine of the lesser magistrate, encouraging true men to due their duty and take a stand against ever-encroaching tyranny.'
          />
          <Audio
            title='(Pt 1) A White Lie and Black Death: Why Does the Church Believe the COVID19 Lie?'
            url='https://www.sermonaudio.com/sermon/1112201830406695'
            avatar='./matt-trewhella.jpg'
          />
          <Audio
            title='(Pt 2) A White Lie and Black Death: Why Does the Church Believe the COVID19 Lie?'
            url='https://www.sermonaudio.com/sermon/111220183484272'
            avatar='./matt-trewhella.jpg'
          />
          <Audio
            title='Kyle Rittenhouse: Right to Life, Self-Defense, and Defense of Others'
            url='https://www.sermonaudio.com/sermon/102202120292175'
            avatar='./matt-trewhella.jpg'
          />
          <Audio
            title='Pacifism & Warfare Judges 3:1-11'
            url='https://www.sermonaudio.com/sermon/1111201851254721'
            avatar='./matt-trewhella.jpg'
          />
        </Paper>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Paper className={classes.paper}>
          <Header
            title='Pastor Chuck Baldwin'
            subtitle='Liberty Fellowship'
            paragraphs='Pastor Chuck Baldwin has undertaken a Chrisitan Exodus to Montana with his extended family and supporters, where he preaches to dispell the illusions of American Christianity, and advance the principles of liberty.'
          />
          <Audio
            title='Why Christians Have Capitulated Their Convictions To The Coronavirus'
            url='https://www.youtube.com/watch?v=yQxrUIzP8Y4&ab_channel=LibertyFellowshipMT'
            avatar='./chuck-baldwin.jpg'
          />
          <Audio
            title='Living Outside The Beastly System And Fearing Not'
            url='https://www.youtube.com/watch?v=43zw-h5Xpx0&ab_channel=LibertyFellowshipMT'
            avatar='./chuck-baldwin.jpg'
          />
          <Audio
            title='How To Face A National Crisis'
            url='https://www.youtube.com/watch?v=bdR3WrrUSmw&ab_channel=LibertyFellowshipMT'
            avatar='./chuck-baldwin.jpg'
          />
          <Audio
            title='It Is Better To Trust In The Lord Than To Put Confidence In Politicians'
            url='https://www.youtube.com/watch?v=5H69dtlSvPE&ab_channel=LibertyFellowshipMT'
            avatar='./chuck-baldwin.jpg'
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default page

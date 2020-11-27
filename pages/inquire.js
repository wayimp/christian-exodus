import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from '../components/head'
import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Select from 'react-select'
import ModalImage from 'react-modal-image'
import { useSnackbar } from 'notistack'
import axiosClient from '../private/axiosClient'

const selectStyles = {
  menu: base => ({
    ...base,
    zIndex: 100
  })
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    margin: 6,
    padding: 10,
    backgroundColor: '#FAFAFF'
  },
  textField: {
    margin: 2,
    padding: 2
  },
  checkbox: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    padding: 6
  }
}))

const page = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [inquiry, setInquiry] = useState({})
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  const changeValue = async (name, value) => {
    const updated = {
      ...inquiry,
      [name]: value
    }
    setInquiry(updated)
  }

  const changeDate = date => {
    const fieldName = 'date'
    const fieldValue = date
    changeValue(fieldName, fieldValue)
  }

  const changeField = event => {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    changeValue(fieldName, fieldValue)
  }

  const changeCheckbox = event => {
    const updated = {
      ...inquiry,
      [event.target.name]: event.target.checked
    }
    setInquiry(updated)
  }

  const selectOption = (fieldName, option) => {
    let value = ''
    if (!option) return
    if (Array.isArray(option)) {
      value = option.map(o => o.value).join(',')
    } else {
      value = option.value
    }
    changeValue(fieldName, value)
  }

  const submit = async () => {
    await axiosClient
      .post('/inquiry', inquiry)
      .then(res => {
        enqueueSnackbar('Inquiry sent', {
          variant: 'success'
        })
        router.push('/')
      })
      .catch(err => {
        enqueueSnackbar('Error sending inquiry', {
          variant: 'error'
        })
      })
  }

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction='row'
      justify='center'
    >
      <Grid item xs={3}>
        <Paper />
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <img src='/logo.png' style={{ margin: 8 }} />
          <Box width={1}>
            <TextField
              variant='outlined'
              name='name'
              label='Name or Alias'
              onChange={changeField}
            />
            &nbsp;&nbsp;
            <TextField
              variant='outlined'
              name='email'
              label='Email Address'
              onChange={changeField}
            />
            <br />
            <FormControl component='fieldset' style={{ margin: 10 }}>
              <FormLabel component='legend'>
                Are you willing to relocate?
              </FormLabel>
              <RadioGroup
                row
                name='relocate'
                value={inquiry.relocate}
                onChange={changeField}
              >
                <FormControlLabel
                  value='yes'
                  control={<Radio />}
                  label='Yes'
                  labelPlacement='start'
                />
                <FormControlLabel
                  value='no'
                  control={<Radio />}
                  label='No'
                  labelPlacement='start'
                />
                <FormControlLabel
                  value='maybe'
                  control={<Radio />}
                  label='Maybe'
                  labelPlacement='start'
                />
              </RadioGroup>
            </FormControl>
            <br />
            <ModalImage
              small={'./regions-small.png'}
              large={'./regions.png'}
              alt='Cultural Regions'
            />
            <br />
            <Typography style={{ margin: 6 }}>
              Which region(s) do you live in or near, or would you consider
              relocation to?
            </Typography>
            <Select
              styles={selectStyles}
              className='itemsSelect'
              classNamePrefix='select'
              name='region'
              isClearable={true}
              isMulti={true}
              onChange={option => selectOption('region', option)}
              options={[
                { label: 'Any', value: 'Any' },
                { label: 'Alaska', value: 'Alaska' },
                { label: 'Appalachia', value: 'Appalachia' },
                { label: 'California Coast', value: 'California Coast' },
                { label: 'Cascadia', value: 'Cascadia' },
                { label: 'Deep South', value: 'Deep South' },
                { label: 'Great Lakes', value: 'Great Lakes' },
                { label: 'Hawaii', value: 'Hawaii' },
                { label: 'New England', value: 'New England' },
                { label: 'NYC', value: 'NYC' },
                { label: 'Ohio River Valley', value: 'Ohio River Valley' },
                { label: 'Prairies', value: 'Prairies' },
                { label: 'Rocky Mountains', value: 'Rocky Mountains' },
                { label: 'Southern Florida', value: 'Southern Florida' },
                { label: 'Southwest', value: 'Southwest' },
                { label: 'Puerto Rico', value: 'Puerto Rico' },
                { label: 'Costa Rica', value: 'Costa Rica' },
                { label: 'Panama', value: 'Panama' },
                { label: 'Other', value: 'Other' }
              ]}
            />
            <Typography style={{ margin: 6 }}>
              How large is your family living together as a unit?
            </Typography>
            <Select
              styles={selectStyles}
              className='itemsSelect'
              classNamePrefix='select'
              name='family'
              isClearable={true}
              onChange={option => selectOption('family', option)}
              options={[
                { label: 'Single', value: 'Single' },
                { label: 'Married Couple', value: 'Married Couple' },
                {
                  label: 'Three or Fewer Children',
                  value: 'Three or Fewer Children'
                },
                {
                  label: 'Four or More Children',
                  value: 'Four or More Children'
                },
                {
                  label: 'Three or More Generations',
                  value: 'Three or More Generations'
                }
              ]}
            />
            <br />
            <FormControl component='fieldset' style={{ margin: 6 }}>
              <FormLabel component='legend'>
                Are you involved or interested in homeschooling?
              </FormLabel>
              <RadioGroup
                row
                name='homeschooling'
                value={inquiry.relocate}
                onChange={changeField}
              >
                <FormControlLabel
                  value='yes'
                  control={<Radio />}
                  label='Yes'
                  labelPlacement='start'
                />
                <FormControlLabel
                  value='no'
                  control={<Radio />}
                  label='No'
                  labelPlacement='start'
                />
                <FormControlLabel
                  value='maybe'
                  control={<Radio />}
                  label='Maybe'
                  labelPlacement='start'
                />
              </RadioGroup>
            </FormControl>
            <Typography style={{ margin: 6 }}>
              What sort of area would you prefer to live in?
            </Typography>
            <Select
              styles={selectStyles}
              className='itemsSelect'
              classNamePrefix='select'
              name='area'
              onChange={option => selectOption('area', option)}
              isMulti={true}
              isClearable={true}
              options={[
                { label: 'Urban', value: 'Urban' },
                { label: 'Suburban', value: 'Suburban' },
                {
                  label: 'Rural/Agricultural',
                  value: 'Rural/Agricultural'
                },
                {
                  label: 'Remote/Off Grid',
                  value: 'Remote/Off Grid'
                }
              ]}
            />
            <Typography style={{ margin: 6 }}>
              How much would you consider spending on real estate?
            </Typography>
            <Select
              styles={selectStyles}
              className='itemsSelect'
              classNamePrefix='select'
              name='spending'
              onChange={option => selectOption('spending', option)}
              isClearable={true}
              options={[
                { label: 'Less than $100k', value: 'Less than $100k' },
                { label: 'Between $100k-$250k', value: 'Between $100k-$250k' },
                {
                  label: 'More than $250k',
                  value: 'More than $250k'
                }
              ]}
            />
            <br />
            <ModalImage
              small={'./denominations-small.png'}
              large={'./denominations.png'}
              alt='Christian Denominations'
            />
            <br />
            <Typography style={{ margin: 6 }}>
              What is the general background of your Christian faith?
            </Typography>
            <Select
              styles={selectStyles}
              className='itemsSelect'
              classNamePrefix='select'
              name='faith'
              onChange={option => selectOption('faith', option)}
              isClearable={true}
              isMulti={true}
              options={[
                { label: 'Roman Catholic', value: 'Roman Catholic' },
                { label: 'Eastern Orthodox', value: 'Eastern Orthodox' },
                { label: 'Lutheran', value: 'Lutheran' },
                { label: 'Reformed', value: 'Reformed' },
                { label: 'Presbyterian', value: 'Presbyterian' },
                { label: 'Anabaptist', value: 'Anabaptist' },
                { label: 'Mennonite', value: 'Mennonite' },
                { label: 'Amish', value: 'Amish' },
                { label: 'Anglican', value: 'Anglican' },
                { label: 'Episcopalian', value: 'Episcopalian' },
                { label: 'Baptist', value: 'Baptist' },
                { label: 'Southern Baptist', value: 'Southern Baptist' },
                {
                  label: 'Seventh-Day Adventist',
                  value: 'Seventh-Day Adventist'
                },
                { label: 'Quaker', value: 'Quaker' },
                { label: 'Congregational', value: 'Congregational' },
                { label: 'Methodist', value: 'Methodist' },
                { label: 'Salvation Army', value: 'Salvation Army' },
                { label: 'Pentecostal', value: 'Pentecostal' },
                { label: 'Assemblies of God', value: 'Assemblies of God' },
                { label: 'Charismatic', value: 'Charismatic' },
                { label: 'Other', value: 'Other' }
              ]}
            />
            <Typography style={{ margin: 6 }}>
              Do you have your own career, trade or business? How do you earn a
              living?
            </Typography>
            <TextField
              variant='outlined'
              name='livlihood'
              label='Livlihood'
              onChange={changeField}
            />
            <Typography style={{ margin: 6 }}>
              Are there any additional preferences you have for the community
              you are looking for?
            </Typography>
            <TextField
              variant='outlined'
              name='notes'
              multiline
              label='Additional Preferences'
              onChange={changeField}
            />
            <br />
            <Button
              variant='contained'
              color='primary'
              style={{ margin: 20 }}
              onClick={submit}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper />
      </Grid>
    </Grid>
  )
}

export default page

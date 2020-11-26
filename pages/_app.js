import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {
  createMuiTheme,
  ThemeProvider,
  useTheme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../private/theme'
import App from 'next/app'
import { SnackbarProvider } from 'notistack'

class ceApp extends App {
  getInitialProps = async ({ Component, ctx }) => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname
      }
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Christian Exodus</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={2000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default ceApp

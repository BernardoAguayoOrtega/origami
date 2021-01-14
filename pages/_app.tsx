import '../styles/styles.css'
import React, { ReactElement } from 'react'

interface appInterface {
  Component: React.FC,
  pageProps: any
}

const App:React.FC<appInterface> = ({Component, pageProps}): ReactElement =>{
  return <Component {...pageProps} />
}

export default App




import React, { createContext, useState } from 'react'
import List from './components/List'
import Block from './components/Block';
import store from './redux';
import { Provider } from 'react-redux';


export default function App() {


  console.log('RENDER APP');
  return (
    <Provider store={store}>
      <div>
        <Block />
      </div>

    </Provider>

  )
}

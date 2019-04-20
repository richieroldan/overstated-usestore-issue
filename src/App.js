import { Store, useStore } from 'overstated';
import React from 'react';
import './App.css';

class ModalStore extends Store{
  state={
    open:false
  }

  openModal = ()=>{
    this.setState({open:true})
  }

  closeModal = ()=>{
    this.setState({open:false})
  }
}

const Modal = ()=>{
  const {state,closeModal} = useStore(ModalStore,store=>({
    closeModal : store.closeModal,
    state : store.state
  })) 

  // Uncomment this to try single state value
  // const {open,closeModal} = useStore(ModalStore,store=>({
  //   closeModal : store.closeModal,
  //   open : store.state.open
  // })) 
  return (
      <div>
        {/* <h1>IsOpen : {JSON.stringify(open)}</h1> */}
        <h1>IsOpen : {JSON.stringify(state)}</h1>
        <button onClick={closeModal}>Close Modal</button>
      </div>
  )
}

const App = ()=>{
  const {openModal} = useStore(ModalStore,store=>({
    openModal : store.openModal
  })) 
  return (
      <div className="App">
          <Modal />
          <button onClick={openModal}>Open Modal</button>
      </div>
  )
}

export default App;

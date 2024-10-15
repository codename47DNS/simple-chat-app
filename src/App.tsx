import ChatWindow from "./components/ChatWindow"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <ChatWindow />
      </Provider>
    </>
  )
}

export default App

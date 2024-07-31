import { Provider } from 'react-redux';
import './App.css';
import './environment/styles/default.css'
import { store } from './redux/store';
import TopBar from './components/bars/topBar/topBar.jsx'

function App({ content }) {
  return (
    <div className="App">
      <Provider store={store}>
        <TopBar />
        {content}
      </Provider>
    </div>
  );
}

export default App;

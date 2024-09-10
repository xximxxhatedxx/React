import './App.css';
import ProfileContainer from './components/ProfileContainer.jsx';
import PageHeader from './components/PageHeader.jsx';
import PageFooter from './components/PageFooter.jsx';

function App() {
  return (
    <div class="app">
      <PageHeader/>
      <ProfileContainer/>
      <PageFooter/>
    </div>
  );
}

export default App;

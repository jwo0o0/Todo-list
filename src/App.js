import { Amplify, API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

import awsconfig from './aws-exports';
Amplify.configure({
  API: {
    endpoints: [
      {
        name: "todolistServerApi",
        endpoint: "https://19xppq3qld.execute-api.ap-northeast-2.amazonaws.com/dev/api/todos/"
      }
    ]
  }
});

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default withAuthenticator(App)
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';
import config from './config';
import Home from './Home';
import Messages from './Messages';
import Navbar from './Navbar';
import SideNavigation from './SideNavigation';
import Profile from './Profile';
import CorsErrorModal from './CorsErrorModal';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const [corsErrorModalOpen, setCorsErrorModalOpen] = React.useState(false);
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Navbar {...{ setCorsErrorModalOpen }} />
      <CorsErrorModal {...{ corsErrorModalOpen, setCorsErrorModalOpen }} />
      <Container text style={{ marginTop: '7em', width: '100%' }}>
        <div>
          <div style={{ width: '50%', position: 'absolute' }}>
            <SideNavigation style={{ marginTop: '-3em' }} />
          </div>
          <div style={{ width: '50%', position: 'absolute' }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login/callback" component={LoginCallback} />
              <SecureRoute path="/messages" component={Messages} />
              <SecureRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </Container>
    </Security>
  );
};

export default App;

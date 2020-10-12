import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Navigation from './Navigation';
import VideoLibrariesPage from './VideoLibrariesPage';
import { Container, Row, Col } from 'reactstrap';
import Home from './Home';
import SelectMedia from './admin/SelectMedia';
import AdminPanel from './admin/AdminPanel';
import StandaloneMedia from './StandaloneMedia';
import RandomVideo from './RandomVideo';
import NewVideosPage from './NewVideos';
import { MediaEdit } from './Media/Edit';

class App extends Component<{}> {
  render() {
    return [
      <Navigation />,
      <Container>
        <Row>
          <Switch>
            <Route path="/random" component={RandomVideo} />
            <Route path="/media/new" component={NewVideosPage} exact />
            <Route path="/media/edit/:id" component={MediaEdit} exact />
            <Route path="/media/:media" component={StandaloneMedia} exact />
          </Switch>
        </Row>
        <Row />
        <Row>
          <Route
            path="/videos/:library?/:video?"
            component={VideoLibrariesPage}
          />
        </Row>
        <Row>
          <Col>
            <Route exact path="/" component={Home} />
          </Col>
        </Row>
        <Route exact path="/admin" component={AdminPanel} />
        <Route
          exact
          path="/admin/select-media/:library"
          component={SelectMedia}
        />
      </Container>
    ];
  }
}

export default App;

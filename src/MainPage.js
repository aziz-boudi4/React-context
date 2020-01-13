import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { EmailConsumer } from './EmailContext';
import MessageViewer from './MessageViewer';

const MainPage = () => (
  <EmailConsumer>
    {({ currentEmail }) => (
      <main>
        <Header />
        {currentEmail ? <MessageViewer /> : <MessageList />}
      </main>
    )}
  </EmailConsumer>
);

export default MainPage;

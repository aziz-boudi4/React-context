import React from 'react';
import { UserConsumer } from './UserContext';
import { EmailConsumer } from './EmailContext';

const MessageList = () => (
  <UserConsumer>
  {({ user }) => (
    <EmailConsumer>
    {({ loading, emails, onSelectEmail }) => (
      <div className="MessageList">
        {loading
        ?
          <div className="no-messages"> ...Loading</div>
        :
          emails.length === 0
          ?
            <div className="no-messages">
              Your mailbox is empty, {user.firstName}! 🎉
            </div>
          :
            <ul>
              {
                emails.map(email =>
                  <Email
                    key={email.id}
                    email={email}
                    onClick={() => onSelectEmail(email)}
                  />
                )
              }
            </ul>
        }

        <div className="no-messages">
          Your mailbox is empty, {user.firstName}! 🎉
        </div>
      </div>
    )}
    </EmailConsumer>
  )}
  </UserConsumer>
);


const Email = ({email, onClick}) => {
  console.log('email', email)
  return (
    <li onClick={onClick}>
      <div>{email.subject}</div>
      <div>{email.preview}</div>
    </li>
  )
}

export default MessageList

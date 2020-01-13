import React, { useState, useEffect } from "react";
import { fetchEmails } from "./api";

const { Provider, Consumer } = React.createContext();

const EmailProvider = (props) => {
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchEmails()
      .then(emails => {
        console.log('.........................');

        console.log('emails', emails);
        setLoading(false);
        setEmails(emails)
      })
      .catch(error => {
        setLoading(false);
        setError(error)
      })
  }, [])

  const handleSelectEmail = (email) => {
    setCurrentEmail(email)
  }

  return (
    <Provider value={{
      emails,
      currentEmail,
      error,
      loading,
      onSelectEmail: handleSelectEmail
    }}>
      {props.children}
    </Provider>
  )
}

export { EmailProvider, Consumer as EmailConsumer }

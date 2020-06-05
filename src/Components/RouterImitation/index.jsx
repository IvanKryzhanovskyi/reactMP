import React, { useState } from 'react';
import { CoursesPage, LoginPage } from '../../pages/';
import { AuthContext } from '../../utils';

export const RouterImitation = () => {

  const [isUserAuthorized, setAuthStatus] = useState(false);

  return (
    <>
      <AuthContext.Provider
        value={{
          isUserAuthorized,
          setAuthStatus
        }}>
        {!isUserAuthorized &&
        <LoginPage
          isUserAuthorized={isUserAuthorized}
          setAuthStatus={setAuthStatus}
        />}

        {isUserAuthorized &&
        <CoursesPage
          isUserAuthorized={isUserAuthorized}
          setAuthStatus={setAuthStatus}
        />}
      </AuthContext.Provider>
    </>
  );
};



import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import { Tab, Tabs, CircularProgress } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import ViewChallenge from './ViewChallenge';
import ModifyUser from './ModifyUser';
import ManageChallenge from './ManageChallenge';
import NotAuthorized from '../../NotAuthorized';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [userChallengeList, setUserChallengList] = useState([]);
  const [userCreateChallengeList, setUserCreateChallengList] = useState([]);
  const userToken = localStorage.getItem('token');

  const fetchUserChallenges = async () => {
    try {
      const res = await axios.get(
        'https://api.samseburn.site/user/challenges',
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      if (res.status === 200) setUserChallengList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUserCreateChallenge = async () => {
    try {
      const res = await axios.get(
        'https://api.samseburn.site/user/challenges/create',
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      if (res.status === 200) setUserCreateChallengList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    fetchUserChallenges();
    fetchUserCreateChallenge();
    setLoading(false);
  }, []);

  const StyledTabs = muiStyled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 100,
      width: '100%',
      backgroundColor: '#EB3901',
    },
  });

  const StyledTab = muiStyled((props) => <Tab disableRipple {...props} />)({
    fontFamily: ['Lato'],
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#000000',
    '&.Mui-selected': {
      color: '#EB3901',
    },
  });

  return (
    <>
      {userToken ? (
        loading ? (
          <SpinnerContainer>
            <CircularProgress size={70} color="warning" />
          </SpinnerContainer>
        ) : (
          <Wrapper>
            <Row>
              <StyledTabs
                value={selectedTab}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab label="챌린지 정보" />
                <StyledTab label="회원 정보 수정" />
                <StyledTab label="개설한 챌린지 관리" />
              </StyledTabs>
            </Row>

            <Row>
              {selectedTab === 0 && (
                <ViewChallenge
                  userToken={userToken}
                  userChallengeList={userChallengeList}
                />
              )}
              {selectedTab === 1 && <ModifyUser userToken={userToken} />}
              {selectedTab === 2 && (
                <ManageChallenge
                  userCreateChallengeList={userCreateChallengeList}
                />
              )}
            </Row>
          </Wrapper>
        )
      ) : (
        <NotAuthorized />
      )}
    </>
  );
};

export default Main;

const Wrapper = styled.section`
  width: 104rem;
  margin: 0 auto;
  flex: 1;
`;

const Row = styled.div``;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

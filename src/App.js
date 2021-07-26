import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './globalStyle';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {
  LoadSection,
  Section,
  Title,
  Underline,
  JobsCenter,
  BtnContainer,
  JobBtn,
  JobInfo,
  JobDate,
  JobDesc,
  JobIcon
} from './Styling'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <LoadSection className="section loading">
        <h1>loading...</h1>
      </LoadSection>
    )
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <GlobalStyle />
      <Section className="section">
        <Title>
          <h2>experience</h2>
          <Underline />
        </Title>
        <JobsCenter>
          {/** btn container */}
          <BtnContainer>
            {
              jobs.map((item, index) => {
                return (
                  <JobBtn key={item.id} onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active'}`}>
                    {item.company}
                  </JobBtn>
                )
              })
            }
          </BtnContainer>
          {/** job info */}
          <JobInfo>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <JobDate>{dates}</JobDate>
            {
              duties.map((duty, index) => {
                return (
                  <JobDesc key={index}>
                    <JobIcon>
                      <FaAngleDoubleRight />
                    </JobIcon>
                    <p>{duty}</p>
                  </JobDesc>
                )
              })
            }
          </JobInfo>
        </JobsCenter>
      </Section>
    </>
  )
}

export default App

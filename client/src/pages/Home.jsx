// @flow
import React from 'react';
import { Table } from 'reactstrap';
import '../css/Home.css';

// Add image files here
import yousef from '../utils/images/yousef_ahmed.jpg';

function Home() {
  const people = [
    {
      Aaron: {
        link: '/aaron',
        image: yousef,
      },
      Anthony: {
        link: '/anthony',
        image: yousef,
      },
      Eesha: {
        link: '/eesha',
        image: yousef,
      },
    },
    {
      Ellie: {
        link: '/ellie',
        image: yousef,
      },
      Grace: {
        link: '/grace',
        image: yousef,
      },
      Jessica: {
        link: '/jessica',
        image: yousef,
      },
    },
    {
      Ashwin: {
        link: '/ashwin',
        image: yousef,
      },
      Danielle: {
        link: '/danielle',
        image: yousef,
      },
    },
  ];

  return (
    <>
      <h1 id="home-heading" style={{ marginBottom: 40, fontSize: 60 }}>
        Academy Sandbox
      </h1>
      <p id="regular-text" style={{ marginBottom: 40, fontSize: 20 }}>
        a place to practice what you learn
      </p>

      <p>
        {people.forEach((row) => (
          <div>HIII {console.log(row)}</div>
        ))}
      </p>

      <Table>
        <tbody>
          <tr>
            {Object.keys(people[0]).map((name) => (
              <td key={name} style={{ textAlign: 'center' }}>
                <img
                  id="profile"
                  alt={name}
                  src={people[0][name]['image']}
                  width="120"
                  height="120"
                />
                <br />
                <a id="profile-name" href={people[0][name]['link']}>
                  {name}
                </a>
              </td>
            ))}
          </tr>
          <tr>
            {Object.keys(people[1]).map((name) => (
              <td key={name} style={{ textAlign: 'center' }}>
                <img
                  id="profile"
                  alt="Avatar"
                  src={people[1][name]['image']}
                  width="120"
                  height="120"
                />
                <br />
                <a id="profile-name" href={people[1][name]['link']}>
                  {name}
                </a>
              </td>
            ))}
          </tr>
          <tr>
            {Object.keys(people[2]).map((name) => (
              <td key={name} style={{ textAlign: 'center' }}>
                <img
                  id="profile"
                  alt="Avatar"
                  src={people[2][name]['image']}
                  width="120"
                  height="120"
                />
                <br />
                <a id="profile-name" href={people[2][name]['link']}>
                  {name}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Home;

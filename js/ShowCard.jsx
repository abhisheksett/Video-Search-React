// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: {
  poster: string,
  title: string,
  year: string,
  description: string,
  imdbID: string
}) => {

  const { poster, title, year, description, imdbID } = props;

  return (
    <Wrapper>
      <Link to={`/details/${imdbID}`}>
        <div>
          <Image alt='' src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

export default ShowCard;

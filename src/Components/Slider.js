import React from 'react';
import styled from 'styled-components';

const cardsData = [
  { id: 1, imageUrl: 'https://nest-frontend.netlify.app/assets/imgs/shop/cat-13.png', text: 'Cake & Milk' },
  { id: 2, imageUrl: 'https://nest-frontend.netlify.app/assets/imgs/shop/cat-12.png', text: 'Oganic Kiwi' },
  { id: 3, imageUrl: 'https://nest-frontend.netlify.app/assets/imgs/shop/cat-11.png', text: 'Peach' },
  { id: 4, imageUrl: 'https://nest-frontend.netlify.app/assets/imgs/shop/cat-9.png', text: 'Red Apple' },
  { id: 5, imageUrl: 'https://nest-frontend.netlify.app/assets/imgs/shop/cat-3.png', text: 'Snack' },
  { id: 6, imageUrl: 'https://nest-frontend.netlify.app/assets/imgs/shop/cat-1.png', text: 'Vegetables' },
];

// Define an array of custom colors for the cards
const customColors = [
  '#3BB77E',
  '#ffdfba',
  '#baffc9',
  '#bae1ff',
  '#e1baff',
  '#ffd9ba',
];

// Styled component for the card
const StyledCard = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center; /* Center the text */

`;
const CardText = styled.p`
  margin-top: 5px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1.2vw;
  color: #253D4E;
`;
const Heading = styled.h2`
  margin-top: 5px;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  color: #253D4E;
  margin-top: 20px;
`;

function Slider() {
  return (
    <div className="container">
      <Heading>Featured Categories</Heading>
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={card.id} className="col-2 mt-2">
            <StyledCard bgColor={customColors[index % customColors.length]}>
              <img src={card.imageUrl} className="card-img-top" alt="Card" />
            <CardText>{card.text}</CardText>

            </StyledCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

import React from 'react';
import { Card } from 'semantic-ui-react';

export const RecipeCard = ({  title, method, category, ingredients, publishDate }) => {

  const formatDate = (publishDate) => {
    const day = publishDate.getUTCDate();
    const month = publishDate.getUTCMonth() + 1;
    const year = publishDate.getFullYear();
    const dateString = `${month}/${day}/${year}`;

    return dateString;
  }

  return (
    <Card>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>Published: {formatDate(publishDate)}</Card.Meta>
      <Card.Meta>{category}</Card.Meta>
      <br/>
      <Card.Header>Method</Card.Header>
      <Card.Description>
        {method}
      </Card.Description>
      <br/>
      <Card.Header>Ingredients</Card.Header>
      <Card.Description>
        {ingredients}
      </Card.Description>
    </Card.Content>
    </Card>
  )
}

import React from 'react';
import { Card } from 'semantic-ui-react';

export const RecipeCard = ({ key, title, method, category, ingredients, publishDate }) => {
  return (
    <Card fluid>
    <Card.Content key={key}>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{publishDate}</Card.Meta>
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

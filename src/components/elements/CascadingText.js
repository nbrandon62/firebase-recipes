import React from "react";
import { Grid } from "semantic-ui-react";

const CascadingText = ({ text }) => {
  return (
    <div>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <p className="casc-p1">{text.p1}</p>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <p className="casc-p2">{text.p2}</p>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <p className="casc-p3">{text.p3}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CascadingText;

import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import photo from "../images/headstand.png";

const ProfileCard = () => (
  <Card>
    <Image src={photo} wrapped ui={false} height={400} />
    <Card.Content>
      <Card.Header>Tristan Bower</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2021</span>
      </Card.Meta>
      <Card.Description>
        Calisthenics athlete from Ontario, Canada.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default ProfileCard;

import React from "react";
import { Feed, Icon } from "semantic-ui-react";
import james from "../images/james.png";
import julia from "../images/julia.png";
import platter from "../images/platter.png";
import dawn from "../images/dawn.png";
import tristan from "../images/tristan.jpeg";

const HomeFeed = () => (
  <Feed style={{ fontSize: 18 }}>
    <Feed.Event>
      <Feed.Label>
        <img src={james} />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>James Flaherty</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={julia} />
      <Feed.Content>
        <Feed.Summary>
          <a>Julia Maine</a> added <a>2 new photos</a>
          <Feed.Date>1 Day Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src={platter} height={108} />
          </a>
          <a>
            <img src={dawn} height={108} width={360} />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />
            11 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={julia} />
      <Feed.Content>
        <Feed.Summary
          date="2 Days Ago"
          user="Julia Maine"
          content="add you as a friend"
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={tristan} />
      <Feed.Content>
        <Feed.Summary>
          <a>You</a> made a post
          <Feed.Date>3 Days Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Havn't felt this great in a long time! Just finished a dopamine detox,
          now I'm ready to seize the day! 😈
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default HomeFeed;

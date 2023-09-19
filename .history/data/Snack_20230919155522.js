import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Card = () => (
  <Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
);

export default Card;
import React from 'react';

import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, IpuntIcon } from './styles';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Apolônio Serafim"
          date="17/06/2020"
          content="Hoje é um grande dia"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <IpuntIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;
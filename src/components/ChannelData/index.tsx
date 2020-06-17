import React, { useRef, useEffect } from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, IpuntIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Apolônio Serafim"
            date="17/06/2020"
            content="Hoje é um grande dia"
          />
        ))}
        
        <ChannelMessage
          author="Guilherme Rodz"
          date="17/06/2020"
          content={
            <>
              <Mention>@Apolônio Serafim</Mention>, aprenda por favor.
            </>
          }
          hasMention
          isBot
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
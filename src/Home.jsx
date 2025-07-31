import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
  color: #fff;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: url('/3.jpeg') center/cover;
  box-shadow: 0 0 30px #00ff00;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 50px #00ff00;
  }
`;

const Greeting = styled.h3`
  color: #00ff00;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.h2`
  color: #00ff00;
  margin-bottom: 2rem;
`;

const CVButton = styled.button`
  padding: 1rem 2rem;
  margin: 2rem 0;
  background: linear-gradient(45deg, #00ff00, #008000);
  border: none;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px #00ff00;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00ff00;
    transform: translateY(-2px);
  }
    
`;
const BlackGradientBox = styled.div`
  background: linear-gradient(145deg, #000000, #1a1a1a);
  border-radius: 25px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const TypingText = styled.div`
  color: #00ff00;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  min-height: 3em;
`;

function Home() {
 const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  const fullText = "An Electrical Engineer passionate about drones, RC planes, and integrated circuit (IC) design. I thrive on turning innovative ideas into real-world tech, blending hardware with creativity.";

  useEffect(() => {
    if (!started) return;

    let cancelled = false;

    async function typeWithSound() {
      let currentIndex = 0;

      while (currentIndex < fullText.length && !cancelled) {
        setDisplayText(prev => prev + fullText[currentIndex]);

        const keyAudio = new Audio('/spa.mp3');
        keyAudio.play();
        setTimeout(() => keyAudio.pause(), 100);

        await new Promise(resolve => setTimeout(resolve, 100));
        currentIndex++;
      }
    }

    typeWithSound();

    return () => {
      cancelled = true;
    };
  }, [started]);

  return (
    <div>
      {!started && (
        <div
          onClick={() => setStarted(true)}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            background: 'black',
            color: 'white',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          Tap to Enter
        </div>
      )}
      <Container>
        <LeftSection>
          <Greeting>Hello, it's me</Greeting>
          <Name>Muhammad Abdullah Khan</Name>
          <Role>Electrical Engineer</Role>
          <BlackGradientBox>
            <TypingText>{displayText}</TypingText>
          </BlackGradientBox>
          <CVButton onClick={() => window.open('/2.docx')}>
            Download CV
          </CVButton>
          <SocialIcons>
            <IconLink href="https://github.com/Abdullah-creative477" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/muhammad-abdullah-khan-a62599355/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
            <IconLink href="https://twitter.com/yourusername" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </IconLink>
          </SocialIcons>
        </LeftSection>
        <RightSection>
          <ProfileImage />
        </RightSection>
      </Container>
    </div>
  );
}
export default Home;
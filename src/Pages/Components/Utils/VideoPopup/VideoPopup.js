import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

// Styled Components
const VideoModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #f95d9b;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const VideoPopup = ({ videoId, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Popup"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 5,
        },
        content: {
          border: 'none',
          background: 'none',
          padding: 0,
          top: 'unset',
          left: 'unset',
          right: 'unset',
          bottom: 'unset',
        },
      }}
    >
      <VideoModalContainer>
        <VideoModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <YouTube videoId={videoId} />
        </VideoModalContent>
      </VideoModalContainer>
    </Modal>
  );
};

export default VideoPopup;

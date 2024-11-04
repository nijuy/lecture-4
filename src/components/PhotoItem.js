import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} />
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default PhotoItem;

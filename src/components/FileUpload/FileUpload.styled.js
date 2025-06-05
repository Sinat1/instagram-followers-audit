import styled from 'styled-components';

export const UploadTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const UploadContainer = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed
    ${({ $isDragging }) => ($isDragging ? '#7aa7ff' : '#add8e6')};
  /* #ceca */
  border-radius: 1rem;
  width: 100%;
  height: 234px;
  padding-bottom: 50px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ $isDragging }) =>
    $isDragging ? '#eef5ff' : '#f9f9f9'};
  color: #565656;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    width: 60px;
    height: 60px;
    fill: #9b9b9b;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 12px;
    color: #565656;
  }
`;

// export const HiddenInput = styled.input`
//   display: none;
// `;

// export const HiddenInput = styled.input.attrs(({ $webkit, $dir }) => ({
//   type: 'file',
//   multiple: true,
//   ...(!!$webkit && { webkitdirectory: 'true' }),
//   ...(!!$dir && { directory: 'true' }),
// }))`
//   display: none;
// `;

export const HiddenInput = styled.input.attrs(({ $webkit, $dir }) => ({
  type: 'file',
  multiple: true,
  ...(!!$webkit && { webkitdirectory: 'true' }),
  ...(!!$dir && { directory: 'true' }),
}))`
  display: none;
`;

import styled from 'styled-components';
import Label from '../Label';

const InputImageBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font: ${({ theme }) => theme.fonts.regularSemiBold};
  color: ${({ theme }) => theme.colors.ligthText};

  ::-webkit-file-upload-button {
    margin: 1rem 1rem 0 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    font: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.ligthText};
    ${({ theme }) => theme.elevation[1]};
  }
`;

type InputImageProps = {
  name: string;
  label?: string;
  required?: boolean;
  onChange?: any;
};

const InputImage: React.FC<InputImageProps> = ({ label, name, onChange }) => {
  const handleChange = () => {};

  return (
    <InputImageBlock>
      <Label>{label}</Label>
      <StyledInput
        type="file"
        accept="image/**"
        name={name}
        onChange={handleChange}
      />
    </InputImageBlock>
  );
};
export default InputImage;

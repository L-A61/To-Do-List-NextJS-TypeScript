import kitchn, {
  Container,
  convertRGBToRGBA,
  Image,
  Text,
  Link,
  useBreakpoint,
} from "kitchn";
import ToDoList from "./ToDoList";

const IndexPage = () => {
  const { isMobile } = useBreakpoint();
  return (
    <ToDoList/>
  );
};

const Card = kitchn(Container)`
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  }
`;

const Centered = kitchn(Container)`
  position: relative;

  &::before, &::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  &::before {
    background: linear-gradient(
      to bottom right,
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0)},
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.3)}
    );
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  &::after {
    background: radial-gradient(
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0.4)}, 
      ${({ theme }) => convertRGBToRGBA(theme.colors.accent.primary, 0)}
    );
    width: 240px;
    height: 180px;
    z-index: -1;
  }
`;

const TonightPassLogo = kitchn(Image)`
  filter: brightness(0);
  @media (prefers-color-scheme: dark) {
    filter: brightness(0) invert(1);
  }
`;

const KitchnTypo = kitchn(Image)`
  @media (prefers-color-scheme: dark) {
    filter: brightness(0) invert(1);
  }
`;

const KitchnIcon = kitchn(Image)`
  @media (prefers-color-scheme: dark) {
    filter: brightness(0) invert(1);
  }
`;

export default IndexPage;

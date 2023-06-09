import { Loader } from "./Loader.styled";
import { ThreeCircles } from 'react-loader-spinner';


export const Loading = () => (
  <Loader>
    <ThreeCircles type="ThreeDots" color="#3f51b5" height={80} width={80} />
  </Loader>
);

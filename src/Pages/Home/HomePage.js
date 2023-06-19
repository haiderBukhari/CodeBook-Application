import { Header } from "./Header";
import { FeatureBook } from "./FeatureBook";
import {Review} from './Review'
import { Faq } from "./Faq";
import { DynamicTitile } from "../../DynamicPageTitle";
export const HomePage = () => {
  DynamicTitile('eBook Galaxy')
  return (
    <>
      <Header/>
      <FeatureBook/>
      <Review/>
      <Faq/>
    </>
  );
}

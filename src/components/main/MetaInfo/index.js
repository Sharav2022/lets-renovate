import Head from "next/head";
import { COMPANY_NAME } from "../../../globals/mock";

const MetaInfo = (
  title = `Transform Your Space with ${COMPANY_NAME}'s Expert Renovation Services`,
  description = `Discover top-notch renovation services at ${COMPANY_NAME}. Our experts bring craftsmanship and innovation to every project. Transform your home with us`
) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`icons/logo.svg`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaInfo;

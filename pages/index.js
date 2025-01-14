import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"></Image>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text  fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2} </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertyForSale, propertyForRent}) {
  console.log(propertyForSale, propertyForRent);

  return (
    <>
          <meta name = "author" content = "Advanced Dynamic Content Project" />
          <meta property = "title" content = "FindAPlace" />
          <meta property="description" content="FindAPlace showcases live real estate listings that can be sorted in all sorts of ways!" />
          <link rel="icon" href="/favicon.ico" />

        <Box>
          <Banner
            id="RentAHomeBanner"
            purpose="Rent A Home"
            title1="Rental Homes For"
            title2="Everyone"
            desc1="Explore Apartments, Villas, Homes"
            desc2="and more"
            buttonText="Explore Renting"
            linkName="/search?purpose=for-rent"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          />
          <Flex flexWrap="wrap">
            {propertyForRent.map((property) => <Property property={property} key={property.id}/>)}
          </Flex>
          <Banner 
            purpose="Buy A Home"
            title1="Find, Buy & Own Your"
            title2="Dream Home"
            desc1="Explore Apartments, Villas, Homes"
            desc2="and more"
            buttonText="Explore Buying"
            linkName="/search?purpose=for-rent"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          />
          <Flex flexWrap="wrap">
          {propertyForSale.map((property) => <Property property={property} key={property.id}/>)}
          </Flex>
        </Box>
    </>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
}

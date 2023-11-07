// Define the interface in your data.tsx file
export interface Category {
    title: string;
    image: string;
  }
  
  // Your categories array with the type annotation
  export const categories: Category[] = [
      {
          title: 'Hats',
          image: "https://i.ibb.co/cvpntL1/hats.png",
      },
      {
          title: 'Jackets',
          image: "https://i.ibb.co/px2tCc3/jackets.png",
      },
      {
          title: 'Sneakers',
          image: "https://i.ibb.co/0jqHpnp/sneakers.png",
      },
      {
          title: 'Womens',
          image: "https://i.ibb.co/GCCdy8t/womens.png",
      },
      {
          title: 'Mens',
          image: "https://i.ibb.co/R70vBrQ/men.png",
      }
  ];
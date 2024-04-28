import React, { useState } from 'react';
import Carousel from './Carousel';
import WishList from '@/app/(root)/wishlist/page';
import { ProductProps } from '@/Data/Dummy'; 

const Parent = () => {
    const [wishlistItems, setWishlistItems] = useState<ProductProps[]>([]);
    const addToWishlistHandler = (item: ProductProps) => {
        setWishlistItems([...wishlistItems, item]);
    };

    return (
        <div>
            <Carousel addToWishlistHandler={addToWishlistHandler} image={''} product_name={''} price={''} discount_price={''} rating={0} num_reviews={0} stock_status={''} />
            <WishList wishlistItems={wishlistItems} />
        </div>
    );
};

export default Parent;

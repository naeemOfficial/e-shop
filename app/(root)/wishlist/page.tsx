import React from 'react';
import { ProductProps } from '@/Data/Dummy';

interface WishListProps {
    wishlistItems: ProductProps[];
}

const WishList: React.FC<WishListProps> = ({ wishlistItems }) => {
    if (!wishlistItems || wishlistItems.length === 0) {
        return <div>No items in the wishlist</div>;
    }

    return (
        <div>
            <h2>Wishlist</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistItems.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.image} alt="" /></td>
                            <td>{item.product_name}</td>
                            <td>{item.price}</td>
                            <td>{item.stock_status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default WishList;

export interface Book {
    id: string;
    picture: string;
    name: string;
    author: string[];
    publisher: string;
    date: string;
    description: string;
    onWishlist: boolean;
}
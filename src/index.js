import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const booksList = [
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
        bookName: "Atomic Habits",
        author: "James Clear",
        publish: "30 October 2018",
        category: "Healthy Living & Wellness",
        price: "486",
        saving: "Save ₹317 (40%)"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX258_BO1,204,203,200_.jpg",
        bookName: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        publish: "1 February 2015",
        category: "Power of Your Mind",
        price: "225",
        saving: "Save ₹100 (50%)"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/418iyUMT5tL._SX258_BO1,204,203,200_.jpg",
        bookName: "Memory: How To Develop, Train, And Use It",
        author: "William Walker Atkinson",
        publish: "1 June 2019",
        category: "Power of Your Brain",
        price: "358",
        saving: "Save ₹51 (34%)"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/41wKll7ITyL._SX362_BO1,204,203,200_.jpg",
        bookName: "Who Will Cry When You Die?",
        author: "Robin Sharma",
        publish: "15 June 2006",
        category: "Life Changing",
        price: "532",
        saving: "Save ₹317 (40%)"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/41iMAA7eBNS._SX460_BO1,204,203,200_.jpg",
        bookName: "Think & Grow Rich",
        author: "Napoleon Hill",
        publish: "1 March 2016",
        category: "Life Changing",
        price: "465",
        saving: "Save ₹32 (10%)"
    }
]


function BestBooks() {
    return (
        <>
            {booksList.map((e, index) => {
                return <Books img={e.img} author={e.author} bookName={e.bookName} publish={e.publish} category={e.category} price={e.price} saving={e.saving} key={index} />
            })}
        </>
    )
}

const Books = (props) => {
    return (
        <div className='head'>
            <header>
                <img src={props.img} />
            </header>
            <div className='main'>
                <h3>{props.bookName}</h3>
                <div className='author'>
                    <small>by</small> <h5 className='authorname'>{props.author}</h5> <span>|</span>
                    <h5 className='publish'>{props.publish}</h5>
                </div>
                <div className="category">
                    <span>Category:</span> <h5 className='cat'>{props.category}</h5>
                </div>
                <div className="pricesave">
                    <h4 className='price'><sup>₹</sup>{props.price}</h4>
                    <h4 className='save'>{props.saving}</h4>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(<BestBooks />, document.getElementById('root'))
import React, { useEffect, useState } from "react";
import "./News.css"

const News = () => {

    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c98958af7bbd45ff9b4c49f03f31462c");
        
        let data = await response.json();
        setMyNews(data.articles)
    }



    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
        <div className="mainDiv">

        {
                mynews.map((ele) => {
                    console.log(ele)
                    return (
                        <>
                            
                            <div class="card" style={{ width: "350px", height: "400px", marginLeft: "5rem", marginTop: "5rem"}}>

                                <img src={ele.author =="CNET" ? "https://www.cnet.com/a/img/resize/294ab071db9bf1506c37e936ed336466600d56b5/hub/2024/08/20/51f494dc-acab-4f95-bd9b-81e96161726d/labor-day-hero.png?auto=webp&width=1200": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Axios" ? "https://images.axios.com/IaHLh80iUqqqFOvbD0D-9KhMInE=/0x81:7371x4227/1366x768/2024/08/30/1725032910645.jpg?w=1366": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Yahoo Sports" ? "https://s.yimg.com/ny/api/res/1.2/aeePpu3UmMJa2pFj1otWiw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/the_independent_us_sports_articles_270/eb7a1a54c642097d97bcab52edc4ea48": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="BBC.com" ? "https://ichef.bbci.co.uk/news/800/cpsprodpb/b716/live/20bcc200-66e5-11ef-947d-738e55252445.jpg.webp": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Deadline" ? "https://deadline.com/wp-content/uploads/2024/08/Danneel-Ackles-Hilarie-Burton-Sophia-Bush-Bevin-Prince.png?w=681&h=383&crop=1": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Spaceflight Now" ? "https://spaceflightnow.com/wp-content/uploads/2024/01/20240118-Starlink-File-Photo-Feature-Image.jpg": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Reuters" ? "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FP2W6YOYHRRPFXELWMQJJIUSGIY.jpg?auth=05dcca0263b4073887f909a04a6bb8eecd89ee4490d064313ef241f5ace38b7f&width=960&quality=80": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="CBS News" ? "https://assets2.cbsnewsstatic.com/hub/i/r/2024/08/31/2a7f7781-f884-4d21-8085-8ff65b9a5496/thumbnail/620x414g2/4ad226671e395da9d1394c444a6b869b/gettyimages-2168274420.jpg?v=25685eaa472b1a5dbb5bd46ae506d232": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Fox News" ? "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/08/720/405/nasa-astronauts.jpg?ve=1&tl=1": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Associated Press" ? "https://dims.apnews.com/dims4/default/1892d81/2147483647/strip/true/crop/2059x1373+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F49%2F1b%2F1518bb27c12ba5109c84c759da5f%2Fc83557365aa845d384146c1aebac2698": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="CNN" ? "https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-1928388814.JPG?c=16x9&q=w_1280,c_fill": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Hill" ? "https://thehill.com/wp-content/uploads/sites/2/2024/08/AP24236713811461-e1725070925724.jpg?w=320&h=180&crop=1": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="BBC.com" ? "": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Associated Press" ? "": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Guardian US" ? "https://i.guim.co.uk/img/media/1c5986767baa0035191369ce37ec2e925c1bd39a/0_194_3000_1800/master/3000.jpg?width=620&dpr=1&s=none": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Boston Globe" ? "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/CCBO55Y5PWHS65COTGJOG5T3WY.jpg?auth=35a32d81b31951d55a2ccd32b80ad2884ced1eee0e0914f293430c6c02ffb990&width=1440": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="CNN" ? "": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Hill" ? "": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="The Independent" ? "https://static.independent.co.uk/2024/08/30/09/2024-08-30T023609Z_913523557_RC21Q9AN4GEX_RTRMADP_3_USA-ELECTION-TRUMP.jpg?quality=75&width=1200&auto=webp&quality=75&width=640&auto=webp": ele.urlToImage} class="card-imgs-top" alt="..." />
                                <img src={ele.author =="Fox Baltimore" ? "https://www.foxbaltimore.com/resources/media2/16x9/1280/648/center/90/e9ebcb63-053d-413b-b246-02b60f0fa6d1-THUMBNAIL14.jpeg": ele.urlToImage} class="card-imgs-top" alt="..." />
                                
                                


                                    <div class="card-body">
                                        <h5 class="card-title">{ele.author}</h5>
                                        <p class="card-text">{ele.title}</p>
                                        <a href={ele.url} target="_blank" class="btn btn-primary">Read More</a>
                                    </div>
                            </div>

                            

                        </>
                    );
                })}


        </div>
        </>

    );
};

export default News
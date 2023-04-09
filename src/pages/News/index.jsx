import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import instance from "../../api"

const News = () => {

    const [data, setData] = useState([])
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const navigate = useNavigate()

    useEffect(() => {
        const customPosts = 'user/getCustomPosts'
        const randomPosts = 'user/getRandomPosts'
        instance.post(isLoggedIn === 'true' ? customPosts : randomPosts)
        .then(res => {
          setData(res.data.data.successResult)
        })
    }, [])

    return(
        <div className="news">
            <div className="news_body">
                <p className="news_titleMain">News</p>
                {data.length > 0 && data.map((item, index) => {
                    return(
                        <div className="news_card" key={index}>
                            <div className="news_img">
                                <img src={item.headings[0].mediaUrl} alt="image" />
                            </div>
                            <p className="news_title" onClick={() => navigate('/newssingle', {state: {index: index}})}>{item.caption}</p>
                            <p className="news_desc">{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News
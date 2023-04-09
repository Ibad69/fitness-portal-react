import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import instance from "../../api"
import 'bootstrap/dist/css/bootstrap.min.css'

const NewsSingle = () => {

    const [data, setData] = useState([])
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const location = useLocation();

    // useEffect(() => {
    //     instance.post('user/getCustomPosts')
    //     .then(res => {
    //         setData(res.data.data.successResult[location.state.index])
    //     })
    // }, [])
    const arrayTemp = []
    data?.headings?.forEach((item, ind) => {
        let obj = {}
        obj.postContentCaption = item.postContentCaption
        obj.mediaUrl = item.mediaUrl
        obj.postContentId = item.postContentId
        obj.additionalDescription = item.additionalDescription?.split('<br>')
        obj.description = item.description?.split('<br>')
        arrayTemp.push(obj)
    })
    useEffect(() => {
        if (location.state.id)
        {
            // const customPosts = 'user/getCustomPosts'
            // const randomPosts = 'user/getRandomPosts'
            instance.post('user/getPostsByDiseases', {diseaseId: location.state.id})
            .then(res => {
              setData(res.data.data.successResult[location.state.index])
            })
        }
        else
        {
            const customPosts = 'user/getCustomPosts'
            const randomPosts = 'user/getRandomPosts'
            instance.post(isLoggedIn === 'true' ? customPosts : randomPosts)
            .then(res => {
              setData(res.data.data.successResult[location.state.index])
            })
        }
    }, [])

    console.log('data', data);

    return(
        <div className="single">
            {data.id && <div className="single_body">
                <p className="single_title">{data.title}</p>
                <p className="single_caption">{data.caption}</p>
                <div className="single_slider">
                    <Carousel interval={5000} >
                        {data.slider.map((item, index) => {
                            return(
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={item.fileURL}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
                {arrayTemp?.map((item, index) => {
                    return(
                        <div className="single_item">
                            <p className="single_heading">{item.postContentCaption}</p>
                            <div className="single_img">
                                <img src={item.mediaUrl} alt="" />
                            </div>
                            {item.description?.map((item, index) => (  
                            <p className="single_description">{item}</p>
                                ))}
                            <ul>
                                {item.additionalDescription.map((item, index) => (
                                    <li className="single_description2"><a href={item} target="_blank" >{item ? item : null}</a></li>
                                ))}                                
                            </ul>
                        </div>
                    )
                })}
                <div className="single_summary">
                    <p>{data.summary}</p>
                </div>
            </div>}
        </div>
    )
}

export default NewsSingle
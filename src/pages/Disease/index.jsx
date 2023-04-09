import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import instance from "../../api"

const Disease = () => {
    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [id, setId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (id)
        {
            instance.post('user/getPostsByDiseases', {diseaseId: id})
            .then(res => {
                setData(res.data.data.successResult)
            })
        }
    }, [id])

    useEffect(() => {
        instance.post('user/getDiseases')
        .then(res => {
            setList(res.data.data.successResult)
        })
    }, [])

    return(
        <div className="news">
            <div className="news_body">
                <p className="news_titleMain">DISEASES</p>
                <p className="news_title2">Select Disease from a list to see post</p>
                <div className="news_select">
                    <select defaultValue={'DEFAULT'} onChange={(e) => setId(e.target.value)}>
                        <option default={'DEFAULT'}>SELECT DISEASE</option>
                        {list.map((item, index) => {
                            return(
                                <option value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="news_body">
                {data.length > 0 && data.map((item, index) => {
                    return(
                        <div className="news_card" key={index}>
                            <div className="news_img">
                                <img src={item.headings[0].mediaUrl} alt="image" />
                            </div>
                            <p className="news_title" onClick={() => navigate('/newssingle', {state: {id: id, index: index}})}>{item.caption}</p>
                            <p className="news_desc">{item.title}</p>
                        </div>
                    )
                })}
                {id && data.length === 0 && <p>NO POST IN THIS CATEGORY SELECT ANOTHER CATEGORY</p>}
                {/* <div className="news_card">
                    <div className="news_img">
                        <img src={''} alt="image" />
                    </div>
                    <p className="news_title" onClick={() => navigate('/newssingle', {state: {index: 1}})}>dsasa</p>
                    <p className="news_desc">dsaasa</p>
                </div> */}
            </div>
        </div>
    )
}

export default Disease
import { useEffect, useState } from "react"
import instance from "../../../api"

const ExerciseCounter = ({setCaloriesBurned, setExcercises}) => {

    const [data, setData] = useState([])
    const [selectedDiets, setSelectedDiets] = useState([])
    const [selectedDietsCal, setSelectedDietsCal] = useState(0)
    const [search, setSearch] = useState('')
    const updatedList = search ? data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : data

    useEffect(() => {
        instance.post('user/getExcercises')
        .then(res => {
            const array = []
            const result = res.data.data.successResult
            result.forEach(item => {
                const obj = item
                obj.quantity = 1
                array.push(obj)
            })
            setData(array)
        })
    },[])

    useEffect(() => {
        const array = []
        selectedDiets.forEach(item => {
            const obj = {}
            obj.excerciseId = item.id
            array.push(obj)
        })
        setExcercises(array)
    }, [selectedDiets])

    useEffect(() => {
        setCaloriesBurned(selectedDietsCal)
    }, [selectedDietsCal])

    const handleDiet = (index) => {
        const alreadyExist = selectedDiets.some(e => e.name === data[index].name)
        if(!alreadyExist)
        {
            setSelectedDiets(prevState => [...prevState, data[index]])
            setSelectedDietsCal(prevState => prevState + (data[index].calorieBurned * data[index].quantity))
        }
    }    

    const plusQuantity = (index) => {
        const tempData = selectedDiets
        tempData[index].quantity = tempData[index].quantity+1
        setSelectedDiets([...tempData])
        setSelectedDietsCal(prevState => prevState+selectedDiets[index].calorieBurned)
    }

    const minusQuantity = (index) => {
        const tempData = selectedDiets
        tempData[index].quantity = tempData[index].quantity-1
        setSelectedDiets([...tempData])
        setSelectedDietsCal(prevState => prevState-selectedDiets[index].calorieBurned)
    }

    const removeDiet = (paramIndex) => {
        const arr = selectedDiets.filter((item, index) => index !== paramIndex)
        setSelectedDiets(arr)
        setSelectedDietsCal(prevState => prevState - (selectedDiets[paramIndex].calorieBurned*selectedDiets[paramIndex].quantity))
    }

    return(
        <div className="diet">
            <div className="diet_right">
                <h1 className="diet_title">ADD EXERCISE</h1>
                <input type="search" placeholder="Try 'Cycling'" className="calories_search" onChange={(e) => setSearch(e.target.value)} />
                <div className="calories_list">
                    <ul>
                        {updatedList.map((item, index) => {
                            return(
                                <li
                                    key={index}
                                    onClick={() => handleDiet(index)}
                                >
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="diet_left">
                <h1 className="diet_title">EXERCISE CALCULATOR</h1>
                {selectedDiets.map((item, index) => {
                    return(
                        <div className="diet_item" key={index}>
                            <span>{item.name}</span>|<span>{item.calorieBurned} <span>X {item.quantity}</span></span>
                            <div className="diet_itemBot">
                                <span className="diet_remove" onClick={() => removeDiet(index)}>Remove</span>
                                <div>
                                    <span className={item.quantity === 1 ? 'diet_disable diet_minus' : 'diet_minus'} onClick={() => minusQuantity(index)}>&#8722;</span>
                                    <span className="diet_plus" onClick={() => plusQuantity(index)}>+</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <p className="diet_result">TOTAL CALORIES BURN <b>{selectedDietsCal}</b></p>
            </div>
        </div>
    )
}

export default ExerciseCounter
import { useState, useEffect } from "react"
import instance from "../../../api"

const DietCounter = ({setCaloriesIntake, setDietPlan}) => {

    const [data, setData] = useState([])
    const [selectedDiets, setSelectedDiets] = useState([])
    const [selectedDietsCal, setSelectedDietsCal] = useState(0)
    const [search, setSearch] = useState('')
    const updatedList = search ? data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : data

    useEffect(() => {
        instance.post('user/getDietItems')
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
            obj.dietItemId = item.id
            array.push(obj)
        })
        setDietPlan(array)
    }, [selectedDiets])

    useEffect(() => {
        setCaloriesIntake(selectedDietsCal)
    }, [selectedDietsCal])

    const handleDiet = (index) => {
        const alreadyExist = selectedDiets.some(e => e.name === data[index].name)
        if(!alreadyExist)
        {
            setSelectedDiets(prevState => [...prevState, data[index]])
            setSelectedDietsCal(prevState => prevState + (data[index].calories * data[index].quantity))
        }
    }

    const removeDiet = (paramIndex) => {
        const arr = selectedDiets.filter((item, index) => index !== paramIndex)
        setSelectedDiets(arr)
        setSelectedDietsCal(selectedDietsCal - (selectedDiets[paramIndex].calories * selectedDiets[paramIndex].quantity))
    }

    const plusQuantity = (index) => {
        const tempData = selectedDiets
        tempData[index].quantity = tempData[index].quantity+1
        setSelectedDiets([...tempData])
        setSelectedDietsCal(prevState => prevState+selectedDiets[index].calories)
    }

    const minusQuantity = (index) => {
        const tempData = selectedDiets
        tempData[index].quantity = tempData[index].quantity-1
        setSelectedDiets([...tempData])
        setSelectedDietsCal(prevState => prevState-selectedDiets[index].calories)
    }

    return(
        <div className="diet">
            <div className="diet_right">
                <h1 className="diet_title">ADD ITEMS TO YOUR DIET</h1>
                <input type="search" placeholder="Try 'Egg'" className="calories_search" onChange={(e) => setSearch(e.target.value)} />
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
                <h1 className="diet_title">DIET CALCULATOR</h1>
                {selectedDiets.map((item, index) => {
                    return(
                        <div className="diet_item" key={index}>
                            <span>{item.name}</span>|<span>{item.calories} <span>X {item.quantity}</span></span>
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
                <p className="diet_result">TOTAL CALORIES <b>{selectedDietsCal}</b></p>
            </div>
        </div>
    )
}

export default DietCounter
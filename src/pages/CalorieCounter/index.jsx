import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import instance from '../../api'

import DietCounter from './DietCounter'
import ExerciseCounter from './ExerciseCounter'

const CalorieCounter = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState('')
    const [feet, setFeet] = useState('')
    const [inch, setInch] = useState('')
    const [caloriesIntake, setCaloriesIntake] = useState(0)
    const [caloriesBurned, setCaloriesBurned] = useState(0)
    const [dietPlan, setDietPlan] = useState([])
    const [excercises, setExcercises] = useState([])
    const [err, setErr] = useState('')
    const [already, setAlready] = useState(false)
    const [age, setAge] = useState(0)
    toast.configure()

    useEffect(() => {
        instance.post('user/checkUserDetails')
        .catch(err => {
            const result = err.response
            if (result.data.data.errorResult === ' you have already added your health details ')
            {
                setAlready(true)
            }
        })
    }, [])

    const handleSubmit = () => {
        const body = {gender, weight, age, height: `${feet} ${inch}`, caloriesIntake, caloriesBurned, excercises, dietPlan}
        if (!body.caloriesIntake)
        {
            setErr('Add Diet Items')
        }
        else if (!body.caloriesBurned)
        {
            setErr('Add Exercises')
        }
        else if (!body.gender)
        {
            setErr('Select Gender')
        }
        else if (!feet)
        {
            setErr('Enter Height')
        }
        else if (!body.weight)
        {
            setErr('Enter Weight')
        }
        else if (!body.age)
        {
            setErr('Enter Age')
        }
        else
        {
            instance.post('user/addUserHealthDetails', body)
            .then(res => {
                setErr('')
                if (res.data.success === true)
                {
                    toast.success('Recommendation Added', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        }
    }

    return(
        <div className="calories">
            {already && <div className='calories_inner'>
                <p className="calories_title">YOU ALREADY HAVE ADDED YOUR HEALTH DETAILS</p>
            </div>}
            {isLoggedIn !== 'true' && <div className='calories_inner'>
                <p className="calories_title">LOGIN FIRST TO GET RECOMMENDATIONS</p>
                <Link to="/login"><button>LOGIN</button></Link>
            </div>}
            {!already && isLoggedIn === 'true' && <div className="calories_formMain">
                <div className="calories_form">
                    <div className="calories_field">
                        <label>Select Gender</label>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setGender(e.target.value)}>
                            <option value={'DEFAULT'} disabled>SELECT GENDER</option>
                            <option>MALE</option>
                            <option>FEMALE</option>
                        </select>
                    </div>
                    {/* <div className="calories_field">
                        <label>Select Goal</label>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setGoal(e.target.value)}>
                            <option value={'DEFAULT'} disabled>SELECT GOAL</option>
                            <option value={'weightGain'}>GAIN WEIGHT</option>
                            <option value={'weightLose'}>LOSE WEIGHT</option>
                            <option value={'stayFit'}>STAY FIT</option>
                        </select>
                    </div> */}
                    <div className="calories_field">
                        <label>Height in Feet</label>
                        <input type="text" placeholder='5' onChange={(e) => setFeet(e.target.value)} />
                    </div>
                    <div className="calories_field">
                        <label>Height in Inches</label>
                        <input type="text" placeholder='5' onChange={(e) => setInch(e.target.value)} />
                    </div>
                    <div className="calories_field">
                        <label>Weight In KG</label>
                        <input type="number" min={0} placeholder='50' onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className="calories_field">
                        <label>Age</label>
                        <input type="number" min={0} placeholder='23' onChange={(e) => setAge(e.target.value)} />
                    </div>
                </div>
            </div>}
            {!already && isLoggedIn === 'true' && <DietCounter setDietPlan={setDietPlan} setCaloriesIntake={setCaloriesIntake}/>}
            {!already && isLoggedIn === 'true' && <ExerciseCounter setExcercises={setExcercises} setCaloriesBurned={setCaloriesBurned}/>}
            {!already && isLoggedIn === 'true' && <div className="calories_formMain">
                {err && <p className='calories_err'>{err}</p>}
                <button className='calories_btn' onClick={handleSubmit}>GET RECOMMNEDATION</button>
            </div>}
        </div>
    )
}

export default CalorieCounter
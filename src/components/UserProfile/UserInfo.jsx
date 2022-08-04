export default function UserInfo({ user, setUser }) {
    
    console.log("user: ", user)

    /*========================================
            Functions
    ========================================*/
    const updateUserData = () => {
        console.log("I'm sending the updated Data!");
        
    }

    const handleChange = (e) => {

        console.log(`${e.target.name} os being changed!`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("I'm being submitted!")
    }
    // end functions

    return (
        <div>
            {console.log(user)}
            <h2>Manage your personal information below</h2>
            <form onSubmit={handleSubmit}>
                <div className="personal-info">
                    <h3>Personal Information:</h3>
                    <fieldset>
                        <label>First name:</label> <input
                            onChange={handleChange}
                            name="name_first"
                            type="text"
                            value={user.name_first}
                            />
                        <label>Middle name:</label> <input
                            onChange={handleChange}
                            name="name_middle"
                            type="text"
                            />
                        <label>Last name:</label> <input
                            onChange={handleChange}
                            name="name_last"
                            type="text"
                            value={user.name_last}
                            />
                    </fieldset>
                    <fieldset>
                        <label>Date of Birth:</label> <input
                            onChange={handleChange}
                            name="DOB"
                            type="Date"
                            />
                        <label>SNN:</label> <input
                            onChange={handleChange}
                            name="SSN"
                            type="text"
                            />
                    </fieldset>
                    <fieldset>
                        <label>Phone number:</label> <input
                            onChange={handleChange}
                            name="phone_number"
                            type="text"
                            />
                    </fieldset>
                </div>
                <div className="residential-info">
                    <h3>Residential Information:</h3>
                    <fieldset>
                        <label>Current Address:</label> <input
                            onChange={handleChange}
                            name="address"
                            type="text"
                            />
                        <label>City:</label> <input
                            onChange={handleChange}
                            name="city"
                            type="text"
                            />
                    </fieldset>
                    <fieldset>
                        <label>State:</label> <select 
                        name="state" id="">
                            <option name="state" value=""></option>
                        </select>
                        <label>Zip code:</label> <input
                            onChange={handleChange}
                            name="zipCode"
                            type="text"
                        />
                    </fieldset>
                    <button className="btn no-margin-left">Save changes</button>
                </div>
            </form>
        </div>
    )
}

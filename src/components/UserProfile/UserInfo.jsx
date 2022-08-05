export default function UserInfo({ tempUserData, setTempUserData, allowEdit, setAllowEdit }) {

    /*========================================
            Functions
    ========================================*/
    const updateUserData = () => {
        console.log("I'm sending the updated Data!");

    }

    const handleChange = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`)
        setTempUserData({
            ...tempUserData, [e.target.name]: e.target.value
        })
    }
    // end functions

    return (
        <div>
            {console.log(tempUserData)}
            <h2>Manage your personal information below</h2>
            <form>
                <div className="personal-info">
                    <h3>Personal Information:</h3>
                    <fieldset>
                        <label>First name:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="name_first"
                            type="text"
                            value={tempUserData.name_first}
                        />
                        <label>Middle name:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="name_middle"
                            type="text"
                            value={tempUserData.name_middle}
                        />
                        <label>Last name:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="name_last"
                            type="text"
                            value={tempUserData.name_last}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Date of Birth:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="DOB"
                            type="Date"
                            value={tempUserData.DOB ? tempUserData.DOB : ""}
                        />
                        <label>SNN:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="SSN"
                            type="text"
                            value={tempUserData.SSN}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Phone number:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="phone_number"
                            type="text"
                            value={tempUserData.phone_number}
                        />
                    </fieldset>
                </div>
                <div className="residential-info">
                    <h3>Residential Information:</h3>
                    <fieldset>
                        <label>Current Address:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="address"
                            type="text"
                            value={tempUserData.address}
                        />
                        <label>City:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="city"
                            type="text"
                            value={tempUserData.city}
                        />
                    </fieldset>
                    <fieldset>
                        <label>State:</label> <select
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="state" 
                            id=""
                            value={tempUserData.state}
                            >
                            <option name="state" value=""></option>
                        </select>
                        <label>Zip code:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="zipCode"
                            type="text"
                            value={tempUserData.zipCode}
                        />
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

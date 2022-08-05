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
                            value={tempUserData.name_middle}
                            name="name_middle"
                            type="text"
                        />
                        <label>Last name:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            value={tempUserData.name_last}
                            name="name_last"
                            type="text"
                            // value={user.name_last}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Date of Birth:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            value={tempUserData.DOB}
                            name="DOB"
                            type="Date"
                        />
                        <label>SNN:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            value={tempUserData.SSN}
                            name="SSN"
                            type="text"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Phone number:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            value={tempUserData.phone_number}
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
                            disabled={!allowEdit}
                            value={tempUserData.address}
                            name="address"
                            type="text"
                        />
                        <label>City:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            value={tempUserData.city}
                            name="city"
                            type="text"
                        />
                    </fieldset>
                    <fieldset>
                        <label>State:</label> <select
                            onChange={handleChange}
                            disabled={!allowEdit}
                            value={tempUserData.state}
                            name="state" id="">
                            <option name="state" value=""></option>
                        </select>
                        <label>Zip code:</label> <input
                            onChange={handleChange}
                            disabled={!allowEdit}
                            name="zipCode"
                            type="text"
                        />
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

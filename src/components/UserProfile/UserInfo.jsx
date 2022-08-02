export default function UserInfo() {
    return (
        <div>
            <h2>Manage your personal information below</h2>
            <form>
                <div className="personal-info">
                    <h3>Personal Information:</h3>
                    <fieldset>
                        <label>First name:</label> <input type="text" />
                        <label>Middle name (optional):</label> <input type="text" />
                        <label>Last name:</label> <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label>Date of Birth:</label> <input type="Date" />
                        <label>SNN:</label> <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label>Phone number:</label> <input type="text" />
                    </fieldset>
                </div>
                <div className="residential-info">
                    <h3>Residential Information:</h3>
                    <fieldset>
                        <label>Current Address:</label> <input type="text" />
                        <label>City:</label> <input type="text" />
                    </fieldset>
                    <fieldset>
                        <label>State:</label> <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <label>Zip code:</label> <input type="text" />
                    </fieldset>
                </div>

            </form>
        </div>
    )
}

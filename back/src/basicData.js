const basicData = () => {
    return (
        <div>
            <h2>User Information Form</h2>
            <form >
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="role">Select Role:</label>
                <select id="role" name="role" required>
                    <option value="">-- Select Role --</option>
                    <option value="student">Student</option>
                    <option value="artist">Artist</option>
                    <option value="educator">Educator</option>
                    <option value="other">Other</option>
                </select>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default basicData;
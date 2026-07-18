import react, { useState } from "react";
function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
        >
            <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input

                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />

            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="students">Student</option>
                <option value="faculty">Faculty</option>
            </select>

            <button type="submit">Register</button>

        </form>

    );
}



            
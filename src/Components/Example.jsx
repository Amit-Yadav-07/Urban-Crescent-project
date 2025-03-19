import React from "react";
import { useForm } from "react-hook-form";

const Example = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="container text-black">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                    />
                    <p className="error">{errors.name?.message}</p>
                </div>

                {/* Email Field */}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>

                {/* Password Field */}
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Must be at least 6 characters" },
                        })}
                    />
                    <p className="error">{errors.password?.message}</p>
                </div>

                {/* Gender Field */}
                <div>
                    <label>Gender:</label>
                    <label>
                        <input type="radio" value="Male" {...register("gender", { required: "Gender is required" })} /> Male
                    </label>
                    <label>
                        <input type="radio" value="Female" {...register("gender", { required: "Gender is required" })} /> Female
                    </label>
                    <label>
                        <input type="radio" value="Other" {...register("gender", { required: "Gender is required" })} /> Other
                    </label>
                    <p className="error">{errors.gender?.message}</p>
                </div>

                {/* Hobbies Field */}
                <div>
                    <label>Hobbies:</label>
                    <label>
                        <input type="checkbox" value="Reading" {...register("hobbies", { required: "Select at least one hobby" })} /> Reading
                    </label>
                    <label>
                        <input type="checkbox" value="Gaming" {...register("hobbies", { required: "Select at least one hobby" })} /> Gaming
                    </label>
                    <label>
                        <input type="checkbox" value="Traveling" {...register("hobbies", { required: "Select at least one hobby" })} /> Traveling
                    </label>
                    <p className="error">{errors.hobbies?.message}</p>
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Example;

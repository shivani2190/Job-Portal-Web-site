import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3,"Job title must contain at least 3 characters!"],
        maxLength: [50, "Job title cannot exceed 50 characters!"],
    },
    description: {
        type: String,
        required: [true, "Please provide job description"],
        minLength: [3,"Job title must contain at least 3 characters!"],
        maxLength: [100, "Job title cannot exceed 50 characters!"],
    },
    category: {
        type: String,
        required: [true, "Job category is required!"]
    },
    country: {
        type: String,
        required: [true, "Job country is required!"]
    },
    city: {
        type: String,
        required: [true, "Job city is required!"]
    },
    location: {
        type: String,
        required: [true, "Please  provide  exact location!"],
        minLength: [20, "Job location must contain at least 50 characters!"]
    },
    fixedSalary: {
        type: Number,
        maxLength: [4, "Fixed salary must contain at least 4 digits!"],
        minLength: [9, "Fixed salary cannot exceed 9 digits!"],
    },
    salaryFrom: {
        type: Number,
        maxLength: [4, "Salary from must contain at least 4 digits!"],
        minLength: [9, "Salary from cannot exceed 9 digits!"],
    },
    salaryTo: {
        type: Number,
        maxLength: [4, "Salary to must contain at least 4 digits!"],
        minLength: [9, "Salary to cannot exceed 9 digits!"],
    },
    expired: {
        type: Boolean,
        default: false,
    },
    JobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);
import React, { useState } from 'react';
import axios from 'axios';

const divisions = {
    "Dhaka": ["Dhaka", "Gazipur", "Narayanganj", "Tangail"],
    "Chittagong": ["Chittagong", "Cox's Bazar", "Comilla", "Feni"],
    "Rajshahi": ["Rajshahi", "Bogra", "Natore", "Pabna"],
    "Khulna": ["Khulna", "Jessore", "Satkhira", "Bagerhat"],
    "Barisal": ["Barisal", "Bhola", "Patuakhali", "Jhalokathi"],
    "Sylhet": ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
    "Rangpur": ["Rangpur", "Dinajpur", "Thakurgaon", "Kurigram"],
    "Mymensingh": ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
};

const PostCrimeForm = () => {
    const [selectedDivision, setSelectedDivision] = useState("");
    const [districts, setDistricts] = useState([]);

    const handleDivisionChange = (e) => {
        const division = e.target.value;
        setSelectedDivision(division);
        setDistricts(divisions[division] || []);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const division = form.division.value;
        const district = form.district.value;
        const image = form.image.files[0];
        const postTime = form.postTime.value;
        const crimeTime = form.crimeTime.value;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('division', division);
        formData.append('district', district);
        formData.append('image', image);
        formData.append('postTime', postTime);
        formData.append('crimeTime', crimeTime);

        axios.post('https://yourapiendpoint.com/post-crime', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(response => {
            console.log('Crime post successful:', response.data);
        })
        .catch(error => {
            console.error('There was an error posting the crime!', error);
        });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Post a Crime</h1>
                    <form onSubmit={handleSubmitForm} className="card-body">
                        <div className="form-control">
                            <label className="label">Title</label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">Description</label>
                            <textarea name="description" placeholder="Description" className="textarea textarea-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">Division</label>
                            <select name="division" className="select select-bordered" onChange={handleDivisionChange} required>
                                <option value="">Select Division</option>
                                {Object.keys(divisions).map((division) => (
                                    <option key={division} value={division}>{division}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">District</label>
                            <select name="district" className="select select-bordered" required disabled={!selectedDivision}>
                                <option value="">Select District</option>
                                {districts.map((district) => (
                                    <option key={district} value={district}>{district}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">Image</label>
                            <input type="file" name="image" className="file-input file-input-bordered" accept="image/*" required />
                        </div>
                        <div className="form-control">
                            <label className="label">Post Time</label>
                            <input type="datetime-local" name="postTime" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">Crime Time</label>
                            <input type="datetime-local" name="crimeTime" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Post Crime</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostCrimeForm;

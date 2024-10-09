import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    return (
        <div class="main1">
        <div className="container">
            <form action="/submit" method="post">
                {/* Question 1: Annual Income */}
                <label htmlFor="annual_income">What is your annual income?</label>
                <input type="number" id="annual_income" name="annual_income" required />

                <label htmlFor="age">What is your age?</label>
                <input type="number" id="age" name="age" required />

                <label htmlFor="community">Community</label>
                <select id="community" name="community" required>
                    <option value="OC">OC</option>
                    <option value="BC">BC</option>
                    <option value="MBC">MBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="Other">Other</option>
                </select>

                {/* Question 2: Residence */}
                <label htmlFor="residence">Where do you reside?</label>
                <select id="residence" name="residence" required>
                    <option value="Rural">Rural</option>
                    <option value="Semiurban">Semiurban</option>
                    <option value="Urban">Urban</option>
                </select>

                <label htmlFor="gender">What is your gender?</label>
                <select id="gender" name="gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                {/* Question 3: Health Conditions */}
                <label htmlFor="health_conditions">
                    Do you or any family member suffer from mental disorders, disabilities, or pre-existing health conditions?
                </label>
                <select id="health_conditions" name="health_conditions" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Question 4: Sole Earner */}
                <label htmlFor="sole_earner">Are you the sole earner in your household?</label>
                <select id="sole_earner" name="sole_earner" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Question 5: Female-Headed Household */}

                {/* Question 6: Government Job */}
                <label htmlFor="govt_job">Do you  work in a government job?</label>
                <select id="govt_job" name="govt_job" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Question 7: Aadhar and Survey */}
                <label htmlFor="aadhar_survey">Do you possess Aadhar card and were you included in the Socio-Economic Survey 2011 for National Food Security?</label>
                <select id="aadhar_survey" name="aadhar_survey" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Question 8: Agricultural Land */}
                <label htmlFor="agri_land">Do you own more than 5 acres of agricultural land or possess a Kisan card?</label>
                <select id="agri_land" name="agri_land" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Question 9: Land or Property Ownership */}
                <label htmlFor="land_property">Do you own any land or property, and do you or a family member own a vehicle/refrigerator/landline phone?</label>
                <select id="land_property" name="land_property" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Question 10: Employment and Occupation */}
                <label htmlFor="employment">What is your occupation?</label>
                <input type="text" id="employment" name="employment" required /><br></br>

                {/* Submit button */}
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    );
};

export default Form;

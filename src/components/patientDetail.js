import React from 'react';

export const PatientDetail = (props) => {

    const {patient} = props;
    return (
        <div>
            <div>
                <label>Name: </label><span>{patient.name}</span>
            </div>
            <div>
                <label>Joined: </label><span>{patient.joined}</span>
            </div>
            <div>
                <label>Last Visit: </label><span>{patient.last_visit_date}</span>
            </div>
            <div>
                <label>Complete: </label><span>{patient.is_completed? 'Yes': 'No'}</span>
            </div>
        </div>
    )
}
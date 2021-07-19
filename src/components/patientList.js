import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../commons/card-component';
import { PatientDetail } from "./patientDetail";

export const PatientList = () => {

    let patient = useSelector(state => {
        console.log(state);
        return state.patient.patientList
    });

    patient = patient.reduce((acc, current) => {
        if (acc[current.type]) {
            acc[current.type].push(current);
        } else {
            acc[current.type] = [current];
        }
        return acc;
    }, {});

    return (
        <div className="patient-container">
            <h2>Patients</h2>
            {patient && Object.keys(patient).length > 0 && Object.keys(patient).map(eachPatientGroup =>
               // <PatientDetail patient={eachPatient}></PatientDetail>
               <div>
               <div className="sub-header">{eachPatientGroup.replace('_','-').toUpperCase()}</div>
               {patient[eachPatientGroup].map(patient =><Card color="#f5f4f4"><PatientDetail patient={patient}></PatientDetail></Card>)}
               </div>
            )}
        </div>
    )
}
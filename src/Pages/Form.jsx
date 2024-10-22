import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForumbee } from '@fortawesome/free-brands-svg-icons'

import { useNavigate } from 'react-router-dom'

const Form = () => {

    const nav = useNavigate()

    const handleFormSubmit = () => {
        // Pass the parameters to the Download.jsx or /download url
    }

    return (
    <>
        <div className='pageBody'>
            <div className="topBody">
                <FontAwesomeIcon icon={faForumbee} />
            </div>
            <div className='midBody'>
                <h1>Main Form</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <form className="formBody">
                <div className="formSections">
                    <h2>Service Details</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>Service ID<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Work Order<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Date Issued<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="date" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Date Completed<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="date" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Contractors/Technicians<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                </div>

                <div className="formSections">
                    <h2>Location Details</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>General Location: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Equipment ID<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>SubLocation<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Model<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Manufacturer<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Refrigerant<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Unit Type<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Full Kgs<span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                </div>

                <div className="formSections">
                    <h2>Service</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>Service Request <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Service Description: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <textarea placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup checkInputs' style={{paddingTop:'75px'}}>
                        <p>Options <span>*</span></p>
                        <div>
                            <ul>
                                <li>
                                    <input type="checkbox" name="IsolatedLeak" id="IsolatedLeak" />
                                    <label htmlFor="IsolatedLeak">Isolated Leak</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="RefrigerantConversion" id="RefrigerantConversion" />
                                    <label htmlFor="RefrigerantConversion">Refrigerant Conversion</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="MajorMaintenance" id="MajorMaintenance" />
                                    <label htmlFor="MajorMaintenance">Major Maintenance</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="DisposeofUnit" id="DisposeofUnit" />
                                    <label htmlFor="DisposeofUnit">Dispose of Unit</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="LeakTest" id="LeakTest" />
                                    <label htmlFor="LeakTest">Leak Test</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="MinorMaintenance" id="MinorMaintenance" />
                                    <label htmlFor="MinorMaintenance">Minor Maintenance</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="RecoveryStopped" id="RecoveryStopped" />
                                    <label htmlFor="RecoveryStopped">Recovery Stopped (Air)</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="TransferedTo" id="TransferedTo" />
                                    <label htmlFor="TransferedTo">Transferred to receiver / condenser / pump out unit</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Notes <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                </div>

                <div className="formSections">
                    <h2>Refrigerant</h2>
                    <hr />
                    <div className='formTextGroup tableInputs'>
                        <p>Recovered <span>*</span></p>
                        <div>
                            <input type="text" placeholder='Cylinder ID'
                            required/>
                            <input type="text" placeholder='Type'
                            required/>
                            <input type="text" placeholder='Condition'
                            required/>
                            Weight =
                            <input type="text" placeholder='Kg'
                            required/>
                            <input type="text" placeholder='grm'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup tableInputs'>
                        <p>Added (No cylinder ID if contractor Supplied)</p>
                        <div>
                            <input type="text" placeholder='Cylinder ID' />
                            <input type="text" placeholder='Type' />
                            <input type="text" placeholder='Condition' />
                            Weight =
                            <input type="text" placeholder='Kg' />
                            <input type="text" placeholder='grm' />
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>New unit start-up charge</p>
                        <div style={{height:'30px'}}>
                            <input type="text" placeholder='Kg'
                            required/>
                            <input type="text" placeholder='grm'
                            required/>
                        </div>
                    </div>
                </div>

                <div className="formSections">
                    <h2>Leaks</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>Leak Found: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="date" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Leak Repaired: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="date" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Initial Leak Verification Test: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="date" placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Test done after repair before charging: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='type method here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Follow-up Verification Test: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='type method here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Test done with unit running under normal load: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='type method here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Leak Notes: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <textarea placeholder='id here...'
                            required/>
                        </div>
                    </div>
                </div>

                <div className="formSections" style={{marginTop:'75px'}}>
                    <h2>Trace Gas Used</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>Type of gas: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type='text' placeholder='type here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Cylinder ID: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type='text' placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Quantity: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type='text' placeholder='volume here...'
                            required/>
                        </div>
                    </div>
                </div>

                <div className="formSections">
                    <h2>Accidental Release</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>Description: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <textarea placeholder='id here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup' style={{marginTop:'75px'}}>
                        <p>Estimated Amount Released: <span>*</span></p>
                        <div>
                            <input type='text' placeholder='Kg' required/>
                            <input type='text' placeholder='grm' required/>
                        </div>
                    </div>
                    <div className='formTextGroup'>
                        <p>Percent loss from Unit: <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type='text' placeholder='% here...'
                            required/>
                        </div>
                    </div>
                    
                </div>

                <div className="formSections">
                    <h2>Others</h2>
                    <hr />
                    <div className='formTextGroup'>
                        <p>Leak Tester Make
                        Model <span>*</span></p>
                        <div>
                            <FontAwesomeIcon icon={faForumbee} />
                            <input type="text" placeholder='model here...'
                            required/>
                        </div>
                    </div>
                    <div className='formTextGroup imageInputs'>
                        <p>Accoustic Image - AHU-FGFL-1-ID-D2 <span>*</span></p>
                        <div>
                            <input type="file" required/>
                        </div>
                    </div>
                    <div className='formTextGroup imageInputs'>
                        <p>Accoustic Image - AHU-FGFL-1-OD-D2 <span>*</span></p>
                        <div>
                            <input type="file" required/>
                        </div>
                    </div>
                </div>

                <button className='sumbitButton' onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form
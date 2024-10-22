import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Download = ({ userinput }) => {

    const downloadPDF = () => {
        const input = document.getElementById('pdf-content');
        html2canvas(input, { scale: 5 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 20;

            const borderMargin = 10; 
            pdf.rect(borderMargin, borderMargin, imgWidth - 2 * borderMargin, pageHeight - 2 * borderMargin);

            pdf.addImage(imgData, 'PNG', borderMargin, position, imgWidth - 2 * borderMargin, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.rect(borderMargin, borderMargin, imgWidth - 2 * borderMargin, pageHeight - 2 * borderMargin);
                pdf.addImage(imgData, 'PNG', borderMargin, position, imgWidth - 2 * borderMargin, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('service-order-form.pdf');
        });
    };

    return (
        <>
            <div id='pdf-content' style={{ marginTop: '80px' }}>
                <h1 className='report-h1'>IFF Refrigerant Service Order Form</h1>

                <div className='row-1'>
                    <div className='col-1'>
                        <p><strong>Service Id:</strong>{ }</p>
                        <p><strong>Word order:</strong>{ }</p>
                        <p><strong>Date issue:</strong>{ }</p>
                        <p><strong>Completed date:</strong>{ }</p>
                        <p><strong>Contractors / Technicians:</strong>{ }</p>
                    </div>
                    <div className='col-2'>
                        <h3>Abx Ltd., Sricity</h3>
                        <p><strong>General Location:</strong>{ }</p>
                        <div className="inline-fields">
                            <p><strong>Manufacturer:</strong>{ }</p>
                            <p><strong>Unit type:</strong>{ }</p>
                        </div>
                        <div className="inline-fields">
                            <p><strong>Refrigerant:</strong>{ }</p>
                            <p><strong>Charge:</strong>{ }</p>
                        </div>
                        <p><strong>Kgs :</strong>{ }</p>
                    </div>
                </div>

                <div className='row-2'>
                    <p><strong>Service request:</strong>{ }</p>
                </div>

                <div className='row-3'>
                    <p><strong>Service description:</strong>{ }</p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '20px' }}>
                    <p ><strong>Notes:</strong>{ }</p>
                </div>

                <div className="table-container">
                    <table className="refrigerant-table">
                        <thead>
                            <tr>
                                <th>Refrigerant</th>
                                <th>Cylinder ID</th>
                                <th>Type</th>
                                <th>Condition</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Recovered</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>- Kg &nbsp; - grm</td>
                            </tr>
                            <tr>
                                <td>Added (No cylinder ID# if contractor Supplied)</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>- Kg &nbsp; - grm</td>
                            </tr>
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center' }}>New unit start-up charge</td>
                                <td>-Kg &nbsp; -grm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="leak-container">
                    <div className="leak-details">
                        <h2>Leaks</h2>
                        <p><strong>Leak found:</strong> date { }</p>
                        <p><strong>Leak repaired:</strong> date { }</p>
                        <p><strong>Initial Leak Verification Test:</strong> date { }</p>
                        <p><strong>Test done after repair before charging:</strong> method { }</p>
                        <p><strong>Follow-up Verification Test:</strong> method { }</p>
                        <p><strong>Test done with unit running under normal load:</strong> method { }</p>
                    </div>

                    <div className="leak-notes">
                        <p><strong>Leak notes:</strong></p>
                        <p>NA</p>
                    </div>
                </div>

                <div className='row-6'>
                    <h2>Trace gas used:</h2>
                    <p><strong>Type:</strong>{ }</p>
                    <p><strong>Cylinder id:</strong>{ }</p>
                    <p><strong>Quantity:</strong>{ }</p>
                </div>

                <div className='row-6'>
                    <h2>Accidental Release Occurred </h2>
                    <p><strong>Description:</strong>{ }</p>
                    <p><strong>Estimated Amount Released:</strong>{ }</p>
                    <p><strong>Percent loss from Unit:</strong>{ }</p>

                </div>

                <div className='row-6'>
                    <h2>Leak Tester Make</h2>
                    <p><strong>Model:</strong>{ }</p>
                </div>

                <div className="image-container">
                    <div className="image-section">
                        <h3>AHU-FGFL-1-ID-D2</h3>
                        <img src="" alt="First Image" className="comparison-image" />
                    </div>
                    <div className="image-section">
                        <h3>AHU-FGFL-1-OD-D2</h3>
                        <img src="" alt="Second Image" className="comparison-image" />
                    </div>
                </div>
            </div>

            <div className="button-container">
                <button className='btn' onClick={downloadPDF}>Download as PDF</button>
            </div>
        </>
    );
};

export default Download;
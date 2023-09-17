import React from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../PDF/Rajkumar_Resume.pdf'

const PdfViewer = () => {
    const pdfUrl = pdf;
    return (
        <div>
            {/* If using a custom PDF viewer library (e.g., react-pdf) */}
            <Document file={pdfUrl}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default PdfViewer
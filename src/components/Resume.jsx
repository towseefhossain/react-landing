import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
const pdfFile = './resume.pdf'

export default () => {
    return (
        <div className="page-section" id="resume">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Resume</h2>
                    <h3 className="section-subheading text-muted">A quick run-down of what I've been up to</h3>
                </div>
                <div className="row text-center" style={{ justifyContent: 'center' }}>
                    <Document
                        file={pdfFile}
                    >
                        <Page
                            pageNumber={1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}></Page>
                    </Document>
                </div>
            </div>
        </div>
    );
}
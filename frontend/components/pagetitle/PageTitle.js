import React from 'react'
import BShap1 from '/public/images/flower-shape.png'
import BShap2 from '/public/images/star-shape.png'
import Image from 'next/image'

const PageTitle = (props) => {
    return (
        <div className="breadcrumb-section section-bg-2">
            <div className="container-fluid">
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: `url(${'/images/breadcrumb-bg.jpg'})`}}>
                    <div className="flower-shape">
                        <Image src={BShap1} alt="img" />
                    </div>
                    <div className="star-shape">
                        <Image src={BShap2} alt="img" />
                    </div>
                    <div className="container">
                        <div className="page-heading center">
                            <h6>{props.pageTitle}</h6>
                            <h1>{props.pagesub}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;



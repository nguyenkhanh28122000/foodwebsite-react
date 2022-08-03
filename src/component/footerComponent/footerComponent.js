import FooterItem from "./footerBody/footerItem"
import FooterVer from "./footerVer/footerVer"

import "./footerBody.css"

function FooterComponent({ dataFooters, footerVerData }) {
    return(
        <>
            <div className="footer-body">
            {
                dataFooters.map((dataFooter, index)=>(
                    <FooterItem
                        key={index}
                        footerDatas={dataFooter}
                    />
                ))
            }
            </div>
            <FooterVer 
                version={footerVerData.version}
                nameWeb={footerVerData.name}
            />
        </>
    )
}

export default FooterComponent
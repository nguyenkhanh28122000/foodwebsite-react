import "./footerVer.css"

function FooterVer({ version, nameWeb }) {
    return (
        <div class="footer-version">
            <span class="footer-version-name">{version}</span>
            <span class="footer-name-web">{nameWeb}</span>
        </div>
    )
}

export default FooterVer
import FooterItemSmall from "./footerItemSmall"

function FooterItem( {footerDatas} ) {
    return (
        <div class="footer__item">
            <h3 class="footer__item--title">{footerDatas.title}</h3>
            <ul class="footer__item--list">
               {
                   footerDatas.listContents.map((listContent, index)=>(
                       <FooterItemSmall 
                            key={index}
                            href={listContent.href}
                            content={listContent.content}
                       />
                   ))
               }
            </ul>
        </div>
    )
}

export default FooterItem
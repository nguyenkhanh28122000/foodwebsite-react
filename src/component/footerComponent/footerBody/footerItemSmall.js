function FooterItemSmall({ href,content }) {
    return (
        <li>
            <a href={`#${href}`}>{content}</a>
        </li>
    )
}

export default FooterItemSmall
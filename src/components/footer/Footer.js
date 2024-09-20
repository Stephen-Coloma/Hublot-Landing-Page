import styles from "../footer/footer.module.css"

export default function Footer(){
    const textsArray = ["NEWSLETTER", "JOBS", "PRESS", "CONTACT US", "SITEMAP", "SERVICES","TRACK AN ORDER", "PRIVACY", "LEGAL NOTICE & TERMS OF USE", "WEBSITE TERMS AND CONDITIONS", "ETHICAL COMMITMENT", "MSA TRANSPARENCY"]
    const iconsArray = [
        {
            iconPath: '/assets/facebook.svg',
            socialLink: 'https://www.facebook.com/Hublot'
        },
        {
            iconPath: '/assets/instagram.svg',
            socialLink: 'https://www.instagram.com/hublot'
        },
        {
            iconPath: '/assets/pinterest.svg',
            socialLink: 'https://ph.pinterest.com/hublot/'
        },
        {
            iconPath: '/assets/twitter.svg',
            socialLink: 'https://x.com/Hublot'
        },
        {
            iconPath: '/assets/weibo.svg',
            socialLink: 'https://weibo.com/hublotgeneve'
        },
        {
            iconPath: '/assets/youtube.svg',
            socialLink: 'https://www.youtube.com/Hublot'
        },
        {
            iconPath: '/assets/linkedin.svg',
            socialLink: 'https://www.linkedin.com/company/hublot/'
        },
        
    ]
  
    return(
        <>
            <div className={styles.topPart}>
                <h1>KEEP ME UPDATED</h1>
                <h2>I want to stay up tp date with the latest Hublot news.</h2>
                <button>SIGN UP</button>
            </div>

            <div className={styles.bottomPart}>
                <div className={styles.contentContainer}>
                    <img src="/assets/hublot-logo-footer.svg"></img>
                    <div className={styles.texts}>
                        {textsArray.map((text, index) => (
                            <h1 key={index}>{text}</h1>
                        ))}
                    </div>

                    <div className={styles.links}>
                        {iconsArray.map((social, index) => (
                            <div key={index} className={styles.imageContainer}>
                                <a href={social.socialLink} target="_blank"><img src={social.iconPath}></img></a>
                            </div>
                        ))}
                    </div>
                    <h1>© 2024 Hublot - All intellectual property rights reserved</h1>
                    
                </div>
            </div>
        </>
    )
}
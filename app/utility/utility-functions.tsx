import { DownloadLogo, GithubLogo, LinkedInLogo, MailLogo } from "./svgs"

export const RenderLinkSvg = ( type : string, className : string ) => {

    if ( type === 'Linkedin' ) {
        
        return (
            <LinkedInLogo 
                {
                    ...{
                        className
                    }
                }
            />
        );

    }

    if ( type === 'GitHub' ) {
        
        return (
            <GithubLogo 
                {
                    ...{
                        className
                    }
                }
            />
        );

    }

    if ( type === 'Mail' ) {
        
        return (
            <MailLogo 
                {
                    ...{
                        className
                    }
                }
            />
        );

    }

    if ( type === 'Download' ) {
        
        return (
            <DownloadLogo 
                {
                    ...{
                        className
                    }
                }
            />
        );

    }

}
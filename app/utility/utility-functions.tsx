import { DownloadLogo, GithubLogo, LinkedInLogo, MailLogo } from '@/app/utility/svgs';

export const focusTrap = ( id : string ) => {
    const focusableSelectors = `
    a[href],
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    select:not([disabled]),
    [tabindex]:not([tabindex="-1"])
    `;

    const container = document.getElementById( id );

    const focusableEls = document.getElementById( id )?.querySelectorAll( focusableSelectors );

    const firstEl = focusableEls?.[ 0 ] as HTMLInputElement;

    const lastEl = focusableEls?.[ focusableEls?.length - 1 ] as HTMLInputElement;

    function handleKeyDown( e: KeyboardEvent ) {
    
        if ( e.key !== 'Tab' ) return;
    
        if ( e.shiftKey ) {

            // Shift + Tab
            if ( document.activeElement === firstEl ) {
                e.preventDefault();
                lastEl?.focus();
            }

        } else {

            // Tab
            if ( document.activeElement === lastEl ) {
                e.preventDefault();
                firstEl?.focus();
            }

        }
    
    }

    container?.addEventListener('keydown', ( e ) => handleKeyDown( e ));

    firstEl?.focus();

    return (): void => {
      container?.removeEventListener('keydown', handleKeyDown);
    };

}

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
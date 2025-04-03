import Logo from '@/public/logo-white.png';
import Wave from '@/public/footer-wave.png';

export const Footer = () => {
    
    return (
        <footer className='relative'>
            <img src={ Wave.src } alt="" className='lg:h-28 h-10 w-full' />
            <div className='bg-primary-green'>
                <div className='lg:pt-4 sm:pt-14 pt-12 pb-24 wrapper-custom flex flex-col items-center'>
                    <img 
                        {
                            ...{
                                src : Logo?.src,
                                alt : '',
                                className : 'w-20 h-auto'
                            }
                        }
                    />
                    <p className='description-custom text-white font-semibold text-center'>
                        Created & Designed by <span className='whitespace-nowrap'>Lester Yiu</span>
                    </p>
                </div>
            </div>
        </footer>

    );

}

export default Footer;
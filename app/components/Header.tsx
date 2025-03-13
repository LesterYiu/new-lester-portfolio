interface Link {
    title : string;
    link : string;
  }

interface HeaderProps {
    title : string;
    navigationCollection : {
        items : [ Link ];
    }
}

const Header = ({
    navigationCollection
} : HeaderProps ) => {
    
    const { items } = navigationCollection;

    return( 
        <header>
            { items &&
                items.map( ( i, key ) => {
                    console.log( i, key )
                    return (
                        <a key={ key }
                            {
                                ...{
                                    href: i.link,
                                }
                            }
                        >
                            { i.title }
                        </a>
                    )
                })
            }
        </header>
    )
}

export default Header;
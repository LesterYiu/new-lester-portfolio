export interface ResultObj {
    type : string
    [ key: string ]: any
}

export interface Link {
    title : string;
    link : string;
    svg : string;
    target : string;
}

export interface PropsObj {
    [ key: string ]: any
}

export interface ImageObj {
    type : string;
    url : string;
    [ key: string ]: any
}

export interface FeatureObj {
	title : string;
	description : string;
	image : ImageObj;
	[ key: string ]: any;
    labels: [ string ];
    setIsFeatureOpen? : React.Dispatch<React.SetStateAction<boolean>>;
}
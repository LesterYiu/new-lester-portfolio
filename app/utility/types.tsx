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
}

export interface RichText {
    json : any
}

export interface FeatureObj {
	title? : string;
	featureDescription? : RichText;
	image? : ImageObj;
    labels?: [ string ];
    tags? : [ string ];
    previewImageDesktop? : ImageObj;
    previewImageMobile? : ImageObj;
    previewLink? : Link;
    sourceLink? : Link;
    setFeatureNum : React.Dispatch<React.SetStateAction<number>>;
    setIsFeatureOpen? : React.Dispatch<React.SetStateAction<boolean>>;
	isFeatureOpen : boolean;
    arrayKey : number;
}
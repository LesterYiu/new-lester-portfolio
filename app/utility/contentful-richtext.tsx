import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const Bold = ({ children } : any) => <span className="font-semibold">{ children }</span>;

const Text = ({ children } : any) => <p className="font-jost">{ children }</p>;

export const options : any = {
  renderMark: {
    [MARKS.BOLD]: (text : string) => <Bold>{ text }</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node : any, children : any) => <Text>{ children }</Text>,
  },
};
import { FC } from "react";

type QuoteProps = {
  text: string;
};

const Quote: FC<QuoteProps> = ({ text }) => {
  return (
    <div className="px-3 mb-10">
      <h4 className="italic text-lg text-center font-semibold">„{text}”</h4>
    </div>
  );
};


export default Quote;

import { carattere, raleway } from "../env/fonts";


export default function Introduction() {
  return (
    <div className="text-justify pt-10 px-3 mb-20 md:px-96">
      <span className={carattere.className}>
        <h1 className="text-5xl mb-7">
          Welcome Honey
        </h1>
      </span>
      <span className={raleway.className}>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          incidunt ex, minus fugit vero accusantium rem illo, ad, quia fugiat
          dicta eos sunt? Voluptatibus, enim odio. Quo nulla impedit ea! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione
          odit id quo rem est impedit possimus distinctio doloribus, totam modi
          amet quod laborum dolore? Maiores quod sunt assumenda ea.
        </p>
        <p className="font-medium text-lg">Happy Valentines Day, my love 😘</p>
      </span>
    </div>
  );
}

const items = "FRONTEND · BACKEND · REACT · NODE.JS · PROBLEM SOLVER · COFFEE ADDICT · ";
const repeated = items.repeat(4);

const Ticker = () => (
  <div className="w-full overflow-hidden border-y border-border/20 py-4 mt-20">
    <div className="animate-ticker whitespace-nowrap">
      <span className="font-mono text-sm uppercase text-muted-foreground tracking-widest">
        {repeated}
      </span>
    </div>
  </div>
);

export default Ticker;

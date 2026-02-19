const partners = [
  "Insulet", "MASCO", "MOODY'S", "abbvie", "align",
  "BUNGE", "DISCOVER", "ESSEX", "HOLOGIC"
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs font-medium text-muted-foreground border border-border rounded-full px-4 py-1.5 w-fit mx-auto">
          Trusted Partners Worldwide for Success
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="mx-8 lg:mx-12 text-xl lg:text-2xl font-heading font-bold text-foreground/20 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;

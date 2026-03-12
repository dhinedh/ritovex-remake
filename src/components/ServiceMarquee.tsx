import { ArrowUpRight, Star } from "lucide-react";

const services = [
    "Web Design",
    "Product Design",
    "Digital Marketing",
    "UI/UX Design",
    "Brand Identity",
];

const ServiceMarquee = () => {
    return (
        <section className="bg-foreground py-4 overflow-hidden">
            <div className="flex animate-marquee-slow whitespace-nowrap">
                {[...services, ...services, ...services, ...services].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 mx-1">
                        <div className="flex items-center gap-1.5">
                            <span className="text-sm md:text-xl font-heading font-bold text-background border border-background/20 rounded-full px-4 py-1 hover:bg-background hover:text-foreground transition-all duration-300 cursor-default">
                                {item}
                            </span>
                            <div className="w-6 h-6 rounded-full border border-background/20 flex items-center justify-center text-background hover:bg-accent hover:border-accent transition-colors duration-300">
                                <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </div>
                        <Star className="w-3 h-3 text-background fill-background/20" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceMarquee;

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color?: "primary" | "secondary" | "accent";
  index: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  features,
  color = "primary",
  index,
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    primary: "from-primary to-blue-400",
    secondary: "from-secondary to-purple-400",
    accent: "from-accent to-cyan-400",
  };

  const borderColors = {
    primary: "border-primary/30",
    secondary: "border-secondary/30",
    accent: "border-accent/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-strong rounded-3xl p-8 group relative overflow-hidden rounded-2xl border border-white/20 hover:border-opacity-100 transition-all duration-500"
    >
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "rgba(231, 236, 235, 0.06)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      {/* Animated gradient background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} blur-2xl`}
      />

      <div className="relative z-10">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 border-2",
            borderColors[color],
            `bg-gradient-to-br ${colorClasses[color]}`
          )}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <ul className="space-y-3">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
              className="flex items-start gap-3 group/item"
            >
              <motion.div
                whileHover={{ scale: 1.5 }}
                className={cn(
                  "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                  `bg-gradient-to-r ${colorClasses[color]}`
                )}
              />
              <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Shine effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
      />
    </motion.div>
  );
};

export default FeatureCard;

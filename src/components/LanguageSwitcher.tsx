import { useLanguage, Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  const Btn = ({ code, label }: { code: Language; label: string }) => (
    <button
      type="button"
      onClick={() => setLanguage(code)}
      className={cn(
        "px-2 py-1 text-xs font-medium uppercase tracking-wider transition-colors",
        language === code
          ? "text-accent"
          : "text-muted-foreground hover:text-accent"
      )}
      aria-pressed={language === code}
    >
      {label}
    </button>
  );

  return (
    <div className={cn("inline-flex items-center gap-1 border border-border rounded-md px-1", className)}>
      <Btn code="ru" label="Ru" />
      <span className="text-border">|</span>
      <Btn code="en" label="En" />
    </div>
  );
};

export default LanguageSwitcher;

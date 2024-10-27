import { cn } from '@/lib/utils';

interface TextDividerProps {
  className?: string;
}

function TextDivider({ className }: TextDividerProps) {
  return (
    <div
      className={cn(
        'h-[3px] w-14 bg-gradient-to-r from-blue-tertiary from-50% to-blue-primary to-50% md:h-[6px] md:w-20',
        className,
      )}
    />
  );
}

export { TextDivider };

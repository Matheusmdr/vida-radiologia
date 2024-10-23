import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WhatsappButtonProps {
  className?: string;
}

function WhatsappButton({ className }: WhatsappButtonProps) {
  return (
    <a href="#" target="_blank" rel="noreferrer noopener">
      <Button
        className={cn(
          'text-blue-primary rounded-3xl bg-white text-xl font-bold hover:bg-white',
          className,
        )}
      >
        <span> Agende seu exame!</span>
      </Button>
    </a>
  );
}

export { WhatsappButton };

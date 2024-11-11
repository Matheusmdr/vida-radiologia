import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

interface WhatsappButtonProps {
  className?: string;
}

function WhatsappButton({ className }: WhatsappButtonProps) {
  return (
    <Link href="/unidades" target="_blank" rel="noreferrer noopener">
      <Button
        className={cn(
          'rounded-3xl bg-white text-xl font-bold text-blue-primary hover:bg-white',
          className,
        )}
      >
        <span> Agende seu exame!</span>
      </Button>
    </Link>
  );
}

export { WhatsappButton };

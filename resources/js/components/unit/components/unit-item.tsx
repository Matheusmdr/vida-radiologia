import { Button } from '@/components/ui/button';

interface UnitItemProps {
  unit: {
    title: string;
    cover?: string;
    address: string;
    phone?: string;
    whatsapp?: string;
    gmaps_link?: string;
  };
}

function UnitItem({ unit }: UnitItemProps) {
  const { title, cover, address, phone, whatsapp, gmaps_link } = unit;

  return (
    <div className="flex h-full flex-col items-center gap-4 md:gap-8">
      <h3 className="text-base font-semibold text-blue-primary md:text-4xl">
        {title}
      </h3>
      <img
        src={cover}
        alt={`Foto da unidade ${title}`}
        className="h-[300px] w-10/12 max-w-4xl rounded-2xl object-cover"
      />
      <div className="flex max-w-2xl flex-col gap-4 md:flex-row">
        {phone?.trim() && (
          <Button className="h-full basis-full whitespace-normal break-words rounded-[40px] !bg-[#203861] text-xs font-bold text-white hover:bg-white md:px-10">
            CLIQUE PARA LIGAR
          </Button>
        )}
        {whatsapp?.trim() && (
          <Button className="h-full basis-full whitespace-normal break-words rounded-[40px] !bg-[#47C756] text-xs font-bold text-white hover:bg-white md:px-10">
            ENVIAR MENSAGEM NO WHATSAPP
          </Button>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-center text-sm font-normal text-gray-500 md:text-2xl">
          {address}
        </span>
        <span className="text-sm font-normal text-gray-500 md:text-2xl">
          {phone?.trim() && `FONE: ${phone} `}
          {whatsapp?.trim() && `| WHATSAPP: ${whatsapp}`}
        </span>
      </div>

      {gmaps_link?.trim() && (
        <iframe
          src={gmaps_link}
          className="min-h-64 w-10/12 max-w-4xl"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        />
      )}
    </div>
  );
}

export { UnitItem };

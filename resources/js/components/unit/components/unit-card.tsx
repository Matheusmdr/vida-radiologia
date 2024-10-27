import { ArrowRightCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

interface UnitCardProps {
  unit: {
    title: string;
    address: string;
    phone?: string;
    whatsapp?: string;
  };
}

function UnitCard({ unit }: UnitCardProps) {
  const { title, address, phone, whatsapp } = unit;
  const formatPhoneNumber = (phoneNumber: string) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');

    const countryCode = '55';

    return `${countryCode}${digitsOnly}`;
  };

  const formattedPhone = formatPhoneNumber(phone ?? '');
  const formattedWhatsapp = formatPhoneNumber(whatsapp ?? '');

  return (
    <Card className="h-full border-gray-300 bg-transparent">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-center text-[10px] font-semibold text-gray-400 md:text-3xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 p-0 px-2 pb-4 md:gap-6 md:p-6 md:pt-0">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/imgs/pin-gps.png"
            alt="Pin GPS"
            className="h-4 w-auto md:h-10"
          />
          <p className="w-[80%] text-center text-[10px] font-normal text-gray-400 md:text-2xl">
            {address}
          </p>
        </div>
        {phone?.trim() && (
          <a
            href={`tel:${formattedPhone}`}
            className="flex items-center justify-center gap-2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ArrowRightCircle className="h-4 w-4 text-blue-primary md:h-10 md:w-10" />
            <p className="text-center text-[10px] font-semibold text-gray-400 md:text-2xl">
              {phone}
            </p>
          </a>
        )}
        {whatsapp?.trim() && (
          <a
            href={`https://wa.me/${formattedWhatsapp}`}
            className="flex items-center justify-center gap-2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/imgs/whatsapp-logo.png"
              alt="Logo Whatsapp"
              className="h-4 w-4 md:h-10 md:w-10"
            />
            <p className="text-center text-[10px] font-semibold text-gray-400 md:text-2xl">
              {whatsapp}
            </p>
          </a>
        )}
      </CardContent>
    </Card>
  );
}

export { UnitCard };

import { CreateAndEditBanners } from '@/components/forms';
import Authenticated from '@/layouts/authenticated-layout';
import { PageProps } from '@/types';
import { Banners } from '@/types/banners';

interface Props extends PageProps {
  banner: Banners;
}

export default function Page({ auth, banner }: Props) {
  return (
    <Authenticated user={auth.user}>
      <CreateAndEditBanners data={banner} />
    </Authenticated>
  );
}

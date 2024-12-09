import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OrderView } from 'src/sections/orders/view/order-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Orders - ${CONFIG.appName}`}</title>
      </Helmet>

      <OrderView />
    </>
  );
}

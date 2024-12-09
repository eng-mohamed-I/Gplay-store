import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AccountView } from 'src/sections/accounts/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Accounts - ${CONFIG.appName}`}</title>
      </Helmet>

      <AccountView />
    </>
  );
}

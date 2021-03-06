// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import keyringOptionInstance from '.';

describe('KeyringOption', () => {
  it('should not allow initOptions to be called more than once', () => {
    const state = {};
    // first call
    keyringOptionInstance.init(state as any);

    // second call
    expect(() => {
      keyringOptionInstance.init(state as any);
    }).toThrowError('Unable to initialise options more than once');
  });
});

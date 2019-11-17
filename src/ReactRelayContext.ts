/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
const React = require('react');

const {
    __internal: { createRelayContext },
} = require('relay-runtime');

export default createRelayContext(React);
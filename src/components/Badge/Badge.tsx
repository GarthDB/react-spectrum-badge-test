/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import {classNames, useStyleProps} from '@react-spectrum/utils';
import {SpectrumBadgeProps} from './index.d.ts';
import styles from '@spectrum-css/label/dist/index-vars.css';

export function Badge(props: SpectrumBadgeProps) {
  let {
    size = 'M',
    variant = 'grey',
    children,
    role,
    ...otherProps
  } = props;
  let {styleProps} = useStyleProps(otherProps);

  return (
    <span
      {...styleProps}
      role="status"
      className={classNames(
        styles,
        'spectrum-Label',
        `spectrum-Label--${variant}`,
        {
          'spectrum-Label--small': size === 'S',
          'spectrum-Label--large': size === 'L',
        },
        styleProps.className
      )}>
      {children}
    </span>
  );
}

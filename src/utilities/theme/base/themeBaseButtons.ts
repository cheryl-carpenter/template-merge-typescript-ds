/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

export const themeBaseButtons = {
  disabledStyle: (disabled = false) => css`
    opacity: ${disabled ? 0.6 : ''};
    cursor: ${disabled && `default`};
  `,
};

export default themeBaseButtons;

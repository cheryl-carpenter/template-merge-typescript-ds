export const COLORS = {
  HCH_GREEN: '#ADDC91',
  HCH_PLUMB: '#830065',
  HCH_TEAL: '#00A7B5',
  HCH_AQUA: '#86C8BC',
  HCH_LT_GRAY: '#D9D9D6',
  HCH_DK_GRAY: '#3D3935',
  HCH_MD_GRAY: '#63666A',
} as const;
export type COLORS_TYPE = keyof typeof COLORS;

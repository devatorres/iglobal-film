import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SystemModeIcon from '@mui/icons-material/SettingsBrightness'

export const THEME_LIST: any = [
  {
    code: 'light',
    name: 'Claro',
    alt: 'Light',
    icon: <LightModeIcon />
  },
  {
    code: 'dark',
    name: 'Oscuro',
    alt: 'Dark',
    icon: <DarkModeIcon style={{ width: '24px', height: '24px' }} />
  },
  {
    code: 'system',
    name: 'Sistema',
    alt: 'System',
    icon: <SystemModeIcon style={{ width: '24px', height: '24px' }} />
  }
]

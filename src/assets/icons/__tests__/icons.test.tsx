import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import * as React from 'react'
import * as Icons from '../index'

// All named exports from the icons index should be React function components
// produced by makeIcon(). This test verifies the index is complete and each
// icon renders an <svg> element without errors.

const EXPECTED_ICONS = [
  // Hero section
  'MonitorIcon',
  'HeadphoneIcon',
  'HeartIcon',
  'MusicIcon',
  'CameraIcon',
  'TurntableIcon',
  'PortfolioIcon',
  'WebsiteIcon',
  'PaletteIcon',
  'HomeIcon',
  'TravelIcon',
  'BicycleIcon',
  'NotebookIcon',
  'AustraliaIcon',
  'SydneyIcon',
  'KoalaIcon',
  'SpeakerIcon',
  'PianoIcon',
  'FloralIcon',
  'GuitarIcon',
  // Projects section
  'WrenchIcon',
  'RubikIcon',
  'BlueprintIcon',
  'AtomIcon',
  'PuzzleIcon',
  'CloudIcon',
  'FolderIcon',
  'GearsIcon',
  'GraphicsIcon',
  'Notebook2Icon',
  'WorkflowIcon',
  'CalculatorIcon',
  'ChipIcon',
  'CompassIcon',
  'ProgrammingIcon',
  // About section
  'CoffeeIcon',
  'ReadingIcon',
  'SunglassesIcon',
  'WineIcon',
  'PhotoIcon',
  'BooksIcon',
  'PawIcon',
  'DogIcon',
  'FlowerIcon',
  // Contact section
  'AgendaIcon',
  'CheckListIcon',
  'EmailIcon',
  'PhoneIcon',
  'IDCardIcon',
  'MapIcon',
  'MessageIcon',
  'SendIcon',
  'PostItIcon',
] as const

describe('icons/index', () => {
  it('exports all expected icon components', () => {
    for (const name of EXPECTED_ICONS) {
      expect(Icons).toHaveProperty(name)
    }
  })

  it('exports icon components as functions (React components)', () => {
    for (const name of EXPECTED_ICONS) {
      const Icon = Icons[name as keyof typeof Icons]
      expect(typeof Icon).toBe('function')
    }
  })

  it('each icon renders an svg element without throwing', () => {
    for (const name of EXPECTED_ICONS) {
      const Icon = Icons[name as keyof typeof Icons]
      const { container } = render(React.createElement(Icon as React.FC))
      expect(container.querySelector('svg')).not.toBeNull()
    }
  })
})

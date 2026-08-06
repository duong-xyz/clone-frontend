import React from 'react';
import { Menu, usePlaybackRateOptions } from '@vidstack/react';
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlaybackSpeedCircleIcon,
  PlayIcon,
} from '@vidstack/react/icons';
import './sub.css'; // File CSS thuần bên dưới

// ==========================================
// 1. MENU PHỤ CHỈNH TỐC ĐỘ PHÁT
// ==========================================
export function SpeedSubmenu() {
  const options = usePlaybackRateOptions();
  const hint = options.selectedValue == 1 ? 'Thường' : `${options.selectedValue}x`;

  return (
    <Menu.Root className="vds-submenu-root">
      <SubmenuButton
        label="Tốc độ phát"
        hint={hint}
        disabled={options.disabled}
        icon={PlaybackSpeedCircleIcon}
      />
      <Menu.Content className="vds-submenu-content">
        <Menu.RadioGroup className="vds-radio-group" value={options.selectedValue.toString()}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio
              className="vds-radio-item"
              value={value.toString()}
              onSelect={select}
              key={value}
            >
              <CheckIcon className="vds-icon-check" />
              <div className="vds-icon-placeholder" />
              <span className="vds-radio-label">{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

// ==========================================
// 2. MENU PHỤ CHỈNH TỈ LỆ KHUNG HÌNH
// ==========================================
const ASPECT_RATIO_OPTIONS = [
  { label: 'Mặc định (Fit)', value: 'contain' },
  { label: 'Tràn viền (Cover)', value: 'cover' },
  { label: 'Bóp giãn (Fill)', value: 'fill' },
];

export function AspectRatioSubmenu({ currentRatio, onRatioChange }) {
  const currentOption = ASPECT_RATIO_OPTIONS.find(opt => opt.value === currentRatio);
  const hint = currentOption ? currentOption.label : 'Mặc định';

  return (
    <Menu.Root className="vds-submenu-root">
      <SubmenuButton
        label="Tỉ lệ khung hình"
        hint={hint}
        disabled={false}
        icon={PlayIcon}
      />
      <Menu.Content className="vds-submenu-content">
        <Menu.RadioGroup className="vds-radio-group" value={currentRatio}>
          {ASPECT_RATIO_OPTIONS.map(({ label, value }) => (
            <Menu.Radio
              className="vds-radio-item"
              value={value}
              onSelect={() => onRatioChange(value)}
              key={value}
            >
              <CheckIcon className="vds-icon-check" />
              <div className="vds-icon-placeholder" />
              <span className="vds-radio-label">{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

// ==========================================
// THÀNH PHẦN NÚT BẤM MENU PHỤ CHUNG
// ==========================================
function SubmenuButton({ label, hint, icon: Icon, disabled }) {
  return (
    <Menu.Button className="vds-submenu-button" disabled={disabled}>
      <ChevronLeftIcon className="vds-icon-left" />
      <div className="vds-icon-main-wrapper">
        {Icon && <Icon className="vds-icon-main" />}
      </div>
      <span className="vds-button-label">{label}</span>
      <span className="vds-button-hint">{hint}</span>
      <ChevronRightIcon className="vds-icon-right" />
    </Menu.Button>
  );
}

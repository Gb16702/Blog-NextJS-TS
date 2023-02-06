import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#fff",
  "--black": "#000",
  "--gray": "#18181b",
  "--blue": "#8cd3ff",
  "--purple": "#713bdb",
  "--lightPurple": "#CBB7F2",
  "--red": "#db4427",
  "--yellow": "#f4b400",
  "--green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  "--gray": props["--gray"],
  "--gray-base": props["--gray"],

  "--component-bg": props["--gray"],
  "--component-text-color": props["--white"],
  "--brand-primary": props["--purple"],

  "--default-button-color": props["--gray"],
  "--default-button-primary-color": props["--lightPurple"],
  "--default-button-success-color": props["--green"],
  "--default-button-warning-color": props["--yellow"],
  "--default-button-danger-color": props["--red"],

  "--state-info-color": props["--purple"],
  "--state-success-color": props["--green"],
  "--state-warning-color": props["--yellow"],
  "--state-danger-color": props["--red"],

  "--main-navigation-color": props["--gray"],
  "--main-navigation-color--inverted": props["--white"],

  "--focus-color": props["--lightPurple"],
});

# Changelog

All notable changes to `v-siema` will be documented in this file.

## 0.0.6
### Fixed
- Upgrade `webpack-dev-server` to `^3.1.14` due to security vulnerability in `<3.1.11` (https://nvd.nist.gov/vuln/detail/CVE-2018-14732). As a result the following packages had to be updated: `vue-loader@^14.2.2`, `webpack@^4.29.0`. Also added `webpack-cli` as a dev dependency.

## 0.0.5
### Changed
- Moved repo to [robbinworks/v-siema/](https://github.com/robbinworks/v-siema).

## 0.0.4
### Fixed
- Add object as valid prop on `perPage`. [Example](https://codepen.io/pawelgrzybek/pen/LbgoVK)

## 0.0.3
### Fixed
- Fix typo in `Siema.insert` ([e84e2be](https://github.com/robbinworks/v-siema/commit/e84e2be017ca8e6243bda20a767ce65de9994e1c))

## 0.0.2
### Fixed
- Fix issue with npm listing wrong package dependencies

## 0.0.1
- Initial release :tada:

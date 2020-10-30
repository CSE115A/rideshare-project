module.exports = {
    plugins: ["stylelint-declaration-use-variable"],
    extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
    rules: {
      "at-rule-disallowed-list": [
        "import", // Prefer @use as directed in Sass documentation: https://sasscss.org/documentation/at-rules/import
      ],
      "custom-property-empty-line-before": null,
      "declaration-empty-line-before": null,
      "declaration-colon-newline-after": null,
      "declaration-no-important": true,
      "max-nesting-depth": 1,
      "scss/at-function-pattern": "^[a-z0-9]+(-[a-z0-9]+)*$",
      "scss/at-mixin-pattern": "^[a-z0-9]+(-[a-z0-9]+)*$",
      "scss/dollar-variable-pattern": "^[a-z0-9]+(-[a-z0-9]+)*$",
      "scss/no-duplicate-dollar-variables": true,
      "scss/selector-no-redundant-nesting-selector": true,
      "selector-class-pattern": [
        // CSS classes use the BEM naming convention. For an introduction, see: https://css-tricks.com/bem-101/
        "^([A-Z][a-zA-Z0-9]+(__[a-z][a-zA-Z0-9]+)?(--[a-z][a-zA-Z0-9]+)*|u-[a-z][a-zA-Z0-9]+)$",
        {
          resolveNestedSelectors: true,
          message:
            "Classes must be in BEM form like `MyComponent__element--variant`",
        },
      ],
      "selector-max-compound-selectors": 1,
      "selector-max-id": 0,
      "selector-no-qualifying-type": true,
      "string-quotes": "double",
      "value-list-comma-newline-after": null,
    },
  };
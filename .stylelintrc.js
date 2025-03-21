'use strict';

module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-standard-scss',
  ],
  overrides: [
    {
      files: ["**/*.scss"],
    }
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
	rules: {
		'annotation-no-unknown': true,
		'at-rule-no-unknown': true,
		'comment-no-empty': true,
		'function-no-unknown': true,
		'media-query-no-invalid': null,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: ['use', 'forward'],
			},
		],
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-if-no-null': true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
		'scss/comment-no-empty': true,
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/function-quote-no-quoted-strings-inside': null,
		'scss/function-unquote-no-unquoted-strings-inside': true,
		'scss/load-no-partial-leading-underscore': true,
		'scss/load-partial-extension': 'never',
		'scss/no-duplicate-mixins': true,
		'scss/no-global-function-names': true,
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'color-named': "always-where-possible",
    'declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': 4,
    'order/order': [
			'custom-properties',
			'declarations',
		],
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ['global'],
			},
		],
		'order/properties-order': [
			'container',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      '-webkit-box-sizing',
      '-moz-box-sizing',
      'box-sizing',
      '-webkit-appearance',
      'flex',
      'flex-direction',
      'flex-flow',
      'flex-order',
      'flex-pack',
      'flex-align',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'gap',
      'row-gap',
      'column-gap',
      'grid',
      'grid-template-rows',
      'grid-auto-rows',
      'grid-row-start',
      'grid-row-end',
      'grid-template-columns',
      'grid-auto-columns',
      'grid-column-start',
      'grid-column-end',
      'grid-auto-flow',
      'grid-template',
      'grid-template-areas',
      'grid-template-rows',
      'grid-template-columns',
      'grid-area',
      'overflow',
      'overflow-x',
      'overflow-y',
      '-webkit-overflow-scrolling',
      '-ms-overflow-x',
      '-ms-overflow-y',
      '-ms-overflow-style',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      '-webkit-hyphens',
      '-moz-hyphens',
      'hyphens',
      'line-height',
      'color',
      'text-align',
      '-webkit-text-align-last',
      '-moz-text-align-last',
      '-ms-text-align-last',
      'text-align-last',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-decoration',
      'text-indent',
      'text-justify',
      'text-outline',
      '-ms-text-overflow',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-shadow',
      'text-transform',
      'text-wrap',
      '-webkit-text-size-adjust',
      '-ms-text-size-adjust',
      'letter-spacing',
      '-ms-word-break',
      'word-break',
      'word-spacing',
      '-ms-word-wrap',
      'word-wrap',
      '-moz-tab-size',
      '-o-tab-size',
      'tab-size',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'pointer-events',
      '-ms-touch-action',
      'touch-action',
      'cursor',
      'visibility',
      'zoom',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      '-webkit-user-select',
      '-moz-user-select',
      '-ms-user-select',
      '-o-user-select',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      'background',
      'background-color',
      'background-image',
      'filter',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      '-webkit-background-clip',
      '-moz-background-clip',
      'background-clip',
      'background-origin',
      '-webkit-background-size',
      '-moz-background-size',
      '-o-background-size',
      'background-size',
      'border',
      'border-color',
      'border-style',
      'border-width',
      'border-top',
      'border-top-color',
      'border-top-style',
      'border-top-width',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      '-webkit-border-image',
      '-moz-border-image',
      '-o-border-image',
      'border-image',
      '-webkit-border-image-source',
      '-moz-border-image-source',
      '-o-border-image-source',
      'border-image-source',
      '-webkit-border-image-slice',
      '-moz-border-image-slice',
      '-o-border-image-slice',
      'border-image-slice',
      '-webkit-border-image-width',
      '-moz-border-image-width',
      '-o-border-image-width',
      'border-image-width',
      '-webkit-border-image-outset',
      '-moz-border-image-outset',
      '-o-border-image-outset',
      'border-image-outset',
      '-webkit-border-image-repeat',
      '-moz-border-image-repeat',
      '-o-border-image-repeat',
      'border-image-repeat',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      '-webkit-box-shadow',
      '-moz-box-shadow',
      'box-shadow',
      'opacity',
      '-ms-interpolation-mode',
      '-webkit-transition',
      '-moz-transition',
      '-ms-transition',
      '-o-transition',
      'transition',
      '-webkit-transition-delay',
      '-moz-transition-delay',
      '-ms-transition-delay',
      '-o-transition-delay',
      'transition-delay',
      '-webkit-transition-timing-function',
      '-moz-transition-timing-function',
      '-ms-transition-timing-function',
      '-o-transition-timing-function',
      'transition-timing-function',
      '-webkit-transition-duration',
      '-moz-transition-duration',
      '-ms-transition-duration',
      '-o-transition-duration',
      'transition-duration',
      '-webkit-transition-property',
      '-moz-transition-property',
      '-ms-transition-property',
      '-o-transition-property',
      'transition-property',
      '-webkit-transform',
      '-moz-transform',
      '-ms-transform',
      '-o-transform',
      'transform',
      '-webkit-transform-origin',
      '-moz-transform-origin',
      '-ms-transform-origin',
      '-o-transform-origin',
      'transform-origin',
      '-webkit-animation',
      '-moz-animation',
      '-ms-animation',
      '-o-animation',
      'animation',
      '-webkit-animation-name',
      '-moz-animation-name',
      '-ms-animation-name',
      '-o-animation-name',
      'animation-name',
      '-webkit-animation-duration',
      '-moz-animation-duration',
      '-ms-animation-duration',
      '-o-animation-duration',
      'animation-duration',
      '-webkit-animation-play-state',
      '-moz-animation-play-state',
      '-ms-animation-play-state',
      '-o-animation-play-state',
      'animation-play-state',
      '-webkit-animation-timing-function',
      '-moz-animation-timing-function',
      '-ms-animation-timing-function',
      '-o-animation-timing-function',
      'animation-timing-function',
      '-webkit-animation-delay',
      '-moz-animation-delay',
      '-ms-animation-delay',
      '-o-animation-delay',
      'animation-delay',
      '-webkit-animation-iteration-count',
      '-moz-animation-iteration-count',
      '-ms-animation-iteration-count',
      '-o-animation-iteration-count',
      'animation-iteration-count',
      '-webkit-animation-direction',
      '-moz-animation-direction',
      '-ms-animation-direction',
      '-o-animation-direction',
      'animation-direction',
		],
  }
};

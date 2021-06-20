module.exports = {
  rules: {
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'arrow-parens': ['warn', 'always'],
    curly: ['warn', 'multi-line'],
    'default-case': 'error',
    'default-case-last': 'warn',
    'dot-notation': 'warn',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-console': 'warn',
    'no-const-assign': 'error',
    'no-constant-condition': 'warn',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'warn',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['warn', { boolean: false }],
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'req', // for Express requests
          'res', // for Express responses
          'staticContext', // for ReactRouter context
        ],
      },
    ],
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'default', // use `export default` to provide a default export
          'then', // this will cause tons of confusion when your module is dynamically `import()`ed
        ],
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-restricted-syntax': ['error', "CallExpression[callee.name='debug']"],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': ['warn', { terms: ['todo'], location: 'start' }],
    'no-with': 'error',
    'object-shorthand': [
      'warn',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
        allowSeparatedGroups: false,
      },
    ],
    'symbol-description': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    yoda: 'error',
  },
};

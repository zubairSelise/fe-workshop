module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'dev',
        'stg',
        'prod',
        'seed',
        'build',
        'release',
        'cnc',
        'docs',
        'feature',
        'fix',
        'perf',
        'refactor',
        'revert',
        'test',
        'chore',
        'style',
      ],
    ],
  },
};

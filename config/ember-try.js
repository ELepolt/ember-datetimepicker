/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'default',
      npm: {
        devDependencies: {
          'ember-hash-helper-polyfill': '0.1.0'
        }
      },
      bower: {
        dependencies: {
          'ember': '^1.0.0'
        },
        resolutions: {
          'ember': '^1.0.0'
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};

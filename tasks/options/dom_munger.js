module.exports = {
  distEmber: {
    options: {
      update: {
        selector:'script[src="/vendor/ember/index.js"]',
        attribute:'src',
        value:'/vendor/ember-prod/index.js'
      }
    },
    src: 'tmp/public/index.html'
  },
  distEmberData: {
    options: {
      update: {
        selector:'script[src="/vendor/ember-data/index.js"]',
        attribute:'src',
        value:'/vendor/ember-data-prod/index.js'
      }
    },
    src: 'tmp/public/index.html'
  },
  distHandlebars: {
    options: {
      update: {
        selector:'script[src="/vendor/handlebars/handlebars.js"]',
        attribute:'src',
        value:'/vendor/handlebars/handlebars.runtime.js'
      }
    },
    src: 'tmp/public/index.html'
  }
};

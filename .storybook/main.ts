import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-css-modules",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Правило для CSS модулей
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    auto: true,
                    localIdentName: '[local]__[hash:base64:5]',
                  },
                },
              },
            ],
          },
          // Правило для SCSS файлов
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: { implementation: require.resolve('sass') },
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, '../src/styles/variables/colors.scss'),
                },
              }
              
            ],
          },
          
        ],
      },
    },
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true
      }
    },
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
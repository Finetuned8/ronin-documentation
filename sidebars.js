/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  sidebar: [
    // Ronin Network basics
    {
      type: 'category',
      label: 'Basics',
      link: {
        type: 'generated-index',
        title: 'Ronin basics',
        description: 'Everything you need to know about Ronin.',
        slug: '/basics',
      },
      items: [
        // Introduction to Ronin
        {
          type: 'doc',
          label: 'Introduction to Ronin',
          id: 'basics/introduction',
        },
        // Key concepts
        {
          type: 'doc',
          label: 'Key concepts',
          id: 'basics/key-concepts',
        },
        // White paper
        'basics/white-paper',
        // Tokenomics
        'basics/tokenomics',
        // Rewards
        'basics/rewards',
        // Security audits
        'basics/audits',
        // Roles
        {
          type: 'category',
          label: 'Roles',
          link: {
            type: 'generated-index',
            title: 'Roles',
            description: 'The main actors on Ronin.',
            slug: '/basics/roles',
          },
          items: [
            // Validator
            'basics/roles/validator',
            // Delegator
            'basics/roles/delegator',
          ],
        },
        // dApps
        {
          type: 'category',
          label: 'dApps',
          link: {
            type: 'generated-index',
            title: 'dApps',
            description: 'Decentralized applications (dApps) on Ronin.',
            slug: '/basics/dapps',
          },
          items: [
            // Ronin Bridge
            'basics/dapps/ronin-bridge',
            'basics/dapps/ronin-explorer',
            'basics/dapps/ron-staking',
            'basics/dapps/multisig',
            'basics/dapps/katana',
          ],
        },
      ],
    },
    // Delegators
    {
      type: 'category',
      label: 'Delegators',
      link: {
        type: 'generated-index',
        title: 'Delegators',
        description: 'Stake tokens, delegate your stake to validators, and claim rewards.',
        slug: '/delegators',
      },
      items: [
        // Purchase RON
        'delegators/onboarding/buy-ron',
        // Become a delegator
        'delegators/onboarding/become-delegator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Manage your RON stake.',
            slug: '/delegators/stake',
          },
          items: [
            // Stake more
            'delegators/stake/increase',
            // Move stake
            'delegators/stake/move',
            // Withdraw stake
            'delegators/stake/withdraw',
          ],
        },
        // Claim rewards
        {
          type: 'doc',
          label: 'Claim rewards',
          id: 'delegators/rewards/claim',
        },
        // Track validator updates
        {
          type: 'doc',
          label: 'Track validator updates',
          id: 'delegators/manage/track',
        },
        // View activity
        {
          type: 'doc',
          label: 'View activity',
          id: 'delegators/manage/activity',
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'delegators/faq',
        },
      ],
    },
    // Validators
    {
      type: 'category',
      label: 'Validators',
      link: {
        type: 'generated-index',
        title: 'Validators', 
        description: 'Register as a validator, stake tokens, claim rewards, and manage your validator profile.',
        slug: '/validators',
      },
      items: [
        // Become a validator
        'validators/onboarding/become-validator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Manage your RON stake.',
            slug: '/validators/stake',
          },
          items: [
            // Increase stake
            'validators/stake/increase',
            // Withdraw stake
            'validators/stake/withdraw',
          ],
        },
        // Claim rewards
        {
          type: 'doc',
          label: 'Claim rewards',
          id: 'validators/rewards/claim',
        },
        // Manage profile
        {
          type: 'category',
          label: 'Manage profile',
          link: {
            type: 'generated-index',
            title: 'Manage profile', 
            description: 'Manage your profile, view analytics and activity, change commission rate.',
            slug: '/validators/manage',
          },
          items: [
            // Change commission rate
            'validators/manage/commission',
            // Schedule maintenance
            'validators/manage/maintenance',
            // Renounce role
            'validators/manage/renounce',
            // View activity
            'validators/manage/activity',
            // View profile
            'validators/manage/profile',
            // View analytics
            'validators/manage/analytics',
          ],
        },
        // Slashing and bailout
        {
          type: 'category',
          label: 'Slashing',
          link: {
            type: 'generated-index',
            title: 'Slashing and bailout', 
            description: 'Learn about the slashing penalties and rules for bailout.',
            slug: '/validators/slashing',
          },
          items: [
            // Slashing
            'validators/slashing/slashing',
            // Bailout
            'validators/slashing/bailout',
          ],
        },
        // Governance
        {
          type: 'category',
          label: 'Governance',
          link: {
            type: 'generated-index',
            title: 'Governance', 
            description: 'On-chain governance through proposals raised and voted on by Governing Validators.',
            slug: '/validators/governance',
          },
          items: [
            // Overview
            'validators/governance/overview',
            // Create a proposal
            'validators/governance/create',
            // Vote on a proposal
            'validators/governance/vote',
          ],
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'validators/faq',
        },
      ],
    },
    {
      type: 'category',
      label: 'Node operators',
      link: {
        type: 'doc',
        id: 'node-operators/index',        
      },
      items: [
        {
          type: 'category',
          label: 'Ronin mainnet',
          link: {
            type: 'generated-index',
            title: 'Ronin mainnet',
            description: 'Step-by-step guides to set up your nodes on the Ronin mainnet.',
            slug: '/node-operators/mainnet',
          },
          items: [
            // Run a validator node
            'node-operators/mainnet/validator',
            // Run a bridge node
            'node-operators/mainnet/bridge',
            // Run a non-validator-node
            'node-operators/mainnet/non-validator',
            // Run a full archive node
            'node-operators/mainnet/archive',
            // Specification
            'node-operators/mainnet/specification',
          ],
        },
        {
          type: 'category',
          label: 'Saigon testnet',
          link: {
            type: 'generated-index',
            title: 'Saigon testnet',
            description: 'Step-by-step guides to set up your nodes on the Saigon testnet.',
            slug: '/node-operators/testnet',
          },
          items: [
            // Run a validator node
            'node-operators/testnet/validator',
            // Run a bridge node
            'node-operators/testnet/bridge',
            // Run a non-validator-node
            'node-operators/testnet/non-validator',
            // Run a full archive node
            'node-operators/testnet/archive',
            // Specification
            'node-operators/testnet/specification',
          ],
        },
        // CLI guide
        'node-operators/cli',
        // Security hardening
        'node-operators/security',
        'node-operators/generate-key',
        // FAQ
        'node-operators/faq',
        // Node setup tutorials
        // {
        //   type: 'category',
        //   label: 'Tutorials',
        //   link: {
        //     type: 'generated-index',
        //     title: 'Tutorials',
        //     slug: '/node-operators/tutorials',
        //   },
        //   items: [
        //     // Run a validator node on AWS
        //     'node-operators/tutorials/aws-setup',
        //     // Run a validator node on GCP
        //     'node-operators/tutorials/gcp-setup',
        //   ],
        // },
      ],
    },
    // Developers
    {
      type: 'doc',
      label: 'Developers',
      id: 'developers/portal',
    },
    // Community
    {
      type: 'doc',
      label: 'Community',
      id: 'community/join',
    },
    // Community HIDDEN until documentation goes open-source
    // {
    //   type: 'category',
    //   label: 'Community',
    //   link: {
    //     type: 'generated-index',
    //     title: 'Community', 
    //     description: 'Community information and a contribution guide.',
    //     slug: '/community',
    //   },
    //   items: [
    //     'community/join',
    //     {
    //       type: 'category',
    //       label: 'Contribute',
    //       link: {
    //         type: 'generated-index',
    //         title: 'Contribute',
    //         description: 'Learn how to contribute to the Ronin documentation.',
    //         slug: '/community/contribute',
    //       },
    //       items: [
    //         'community/contribute/guide',
    //         'community/contribute/style',
    //         {
    //           type: 'category',
    //           label: 'Templates',
    //           link: {
    //           type: 'generated-index',
    //           title: 'Documentation templates', 
    //           description: 'Templates used to create this documentation.',
    //           slug: '/community/contribute/templates',
    //         },
    //         items: [
    //           'community/contribute/templates/concept',
    //           'community/contribute/templates/task',
    //           'community/contribute/templates/reference',
    //           'community/contribute/templates/troubleshooting',
    //           'community/contribute/templates/tutorial',
    //           ],
    //         },
    //       ],
    //     },
    //     'community/bug-bounty',
    //     'community/council',
    //     'community/governance',
    //     'community/grants',
    //   ],
    // },
  ],
}

module.exports = sidebars

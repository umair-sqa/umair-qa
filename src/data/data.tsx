import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import {GithubIcon, InstagramIcon, LinkedInIcon, MediumIcon, StackOverflowIcon} from '../components/Icon';
import {
  heroImage,
  portfolioImage1,
  portfolioImage2,
  portfolioImage3,
  portfolioImage4,
  portfolioImage5,
  portfolioImage6,
  portfolioImage7,
  portfolioImage8,
  portfolioImage9,
  portfolioImage10,
  portfolioImage11,
  profilepic,
  testimonialImage,
} from '../images';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Umair Haider.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pakistan-based <strong className="text-stone-100">Software Development Engineer in Test (SDET)</strong>{' '}
        with a passion for building robust and scalable{' '}
        <strong className="text-stone-100">QA automation frameworks</strong>. Currently, I'm focused on ensuring
        seamless software quality through{' '}
        <strong className="text-stone-100">automation, CI/CD integration, and efficient testing strategies</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I'm not diving into test scripts or optimizing workflows, you can find me{' '}
        <strong className="text-stone-100">exploring new tech trends</strong>, brainstorming{' '}
        <strong className="text-stone-100">automation strategies</strong>, or enjoying a good{' '}
        <strong className="text-stone-100">sci-fi novel</strong>. 🚀
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Pakistan, Punjab', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'QA Automation, DevOps, Anime, Web Novels, Light Novels, Fiction Writing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Central Punjab', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 'Proficient',
      },
      {
        name: 'Urdu',
        level: 'Native',
      },
      {
        name: 'Punjabi',
        level: 'Native',
      },
      {
        name: 'Japanese',
        level: 'Basic',
      },
      {
        name: 'Hindi',
        level: 'Conversational',
      },
    ],
  },
  {
    name: 'Automation Testing',
    skills: [
      {
        name: 'Cypress',
        level: 9,
      },
      {
        name: 'Playwright',
        level: 8,
      },
      {
        name: 'Selenium WebDriver',
        level: 7,
      },
      {
        name: 'PactumJS',
        level: 9,
      },
      {
        name: 'Postman',
        level: 9,
      },
    ],
  },
  {
    name: 'Manual Testing',
    skills: [
      {
        name: 'Functional Testing',
        level: 9,
      },
      {
        name: 'API Testing',
        level: 9,
      },
      {
        name: 'GUI Testing',
        level: 8,
      },
      {
        name: 'Usability Testing',
        level: 7,
      },
      {
        name: 'Database Testing',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'TypeScript',
        level: 6,
      },
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'Java',
        level: 4,
      },
    ],
  },
  {
    name: 'CI/CD & DevOps',
    skills: [
      {
        name: 'Jenkins',
        level: 7,
      },
      {
        name: 'GitHub Actions',
        level: 7,
      },
      {
        name: 'Bitbucket Pipelines',
        level: 6,
      },
      {
        name: 'Docker',
        level: 5,
      },
    ],
  },
  {
    name: 'Version Control',
    skills: [
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'GitHub',
        level: 8,
      },
      {
        name: 'GitLab',
        level: 7,
      },
      {
        name: 'Bitbucket',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015 - 19',
    location: 'University of Central Punjab',
    title: 'M.Sc Computer Science',
    content: <p>'Focused on software engineering, algorithms, and database management. Completed projects in web development and automation testing.'</p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Al-Chemy Global Solutions (Remote, UK)',
    title: 'QA Automation Engineer',
    content: (
      <ol>
        <li>Developed test plans, test cases, and test strategies based on project requirements and specifications.</li>
        <li>Identified, documented, and tracked defects in issue tracking systems (i.e., Jira).</li>
        <li>Performed regular Regression Testing to ensure that new code changes do not affect existing functionality.</li>
        <li>Communicated testing results and progress to the team in a clear and concise manner.</li>
        <li>Executed E2E test cases, ensuring that all components interact as expected.</li>
      </ol>
    ),
  },
  {
    date: 'October 2019 - June 2023',
    location: 'Fabletics (Remote, UK)',
    title: 'QA Automation Engineer',
    content: (
      <ul>
        <li>Wrote Manual Test Cases in MS Excel.</li>
        <li>Performed API’s Manual Testing using Postman.</li>
        <li>Covered up to 80 to 90% Test Coverage.</li>
        <li>Managed test cases for different production environments.</li>
        <li>Wrote end-to-end automation test cases using Cypress.</li>
        <li>Managed Jenkins Pipeline and Report.</li>
      </ul>
    ),
  }
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'cheemaumair912@outlook.com',
      href: 'mailto:cheemaumair912@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'Pakistan Punjab, Sargodha',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@umairsqa',
      href: 'https://www.instagram.com/umairsqa',
    },
    {
      type: ContactType.Github,
      text: 'umair-sqa',
      href: 'https://github.com/umair-sqa',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/umair-sqa'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/16283345/umairsqa'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/umairqa/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/umairsqa/'},
  {label: 'Medium', Icon: MediumIcon, href: 'https://umairqa.medium.com/'},
];

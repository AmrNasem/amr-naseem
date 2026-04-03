export interface IProjectCard {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  links: IProjectLinks;
  featured?: boolean;
}

export interface IProjectLinks {
  github?: string;
  demo?: string;
}

export interface ITechnicalDecision {
  title: string;
  reason: string;
}

export interface IProjectChallenge {
  challenge: string;
  solution: string;
}

export interface IProjectDetails extends IProjectCard {
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  technicalDecisions: ITechnicalDecision[];
  challenges: IProjectChallenge[];
  screenshotsPath?: string;
  screenshots?: string[];
  futureImprovements?: string[];
}

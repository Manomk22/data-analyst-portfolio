
import { Injectable } from '@angular/core';
import { project } from '../_models/project';
import { tag } from '../_models/tag';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: project[] = [
    {
      id: 1,
      name: 'Coffee Shop Sales Analysis',
      summary: 'Power BI dashboard analyzing coffee shop sales performance.',
      description: 'A Power BI sales analysis project designed to explore coffee shop sales performance and product trends. Dashboard screenshots and verified business insights will be added to this portfolio as the project documentation is finalized.',
      projectLink: '',
      pictures: [
        'assets/projects/Coffeshopsales.png'
      ],
      tag: [tag.POWERBI, tag.DAX, tag.ANALYTICS]
    },
    {
      id: 2,
      name: 'Hypermarket Sales Analysis',
      summary: 'Power BI dashboard analyzing retail sales performance.',
      description: 'A Power BI retail analytics project designed to explore sales performance and business KPIs. Dashboard screenshots and verified findings will be added once the report documentation is finalized.',
      projectLink: '',
      pictures: [
        'assets/projects/Hyperdata.png'
      ],
      tag: [tag.POWERBI, tag.DAX, tag.ANALYTICS]
    },
    {
      id: 3,
      name: 'Job Market Intelligence',
      summary: 'End-to-end job market analytics using Python, PostgreSQL, SQL, DAX and Power BI.',
      description: 'Collected and analyzed 300 job listings from the Arbeitnow API using Python and PostgreSQL. Performed SQL data cleaning, validation and exploratory analysis. Developed a five-page interactive Power BI dashboard covering employment trends, hiring companies, locations, remote work and data quality. Analyzed 169 hiring companies, 131 distinct location values and remote-work distribution.',
      projectLink: 'https://github.com/Manomk22/job-market-intelligence',
      pictures: [
        'assets/projects/job-market-intelligence.png'
      ],
      tag: [tag.POWERBI, tag.DAX, tag.ANALYTICS]
    }
  ];

  getProjects(): project[] {
    return this.projects;
  }

  getProjectById(id: number): project {
    const found = this.projects.find(item => item.id === id);

    if (!found) {
      throw new TypeError('There is no project matching id: ' + id);
    }

    return found;
  }
}

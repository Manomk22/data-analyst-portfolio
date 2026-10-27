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
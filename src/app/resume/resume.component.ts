
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  sections = [
    {
      title: 'Professional Experience',
      content: [
        {
          heading: 'WebAmigo | Data Associate',
          description: 'Data enrichment and validation, website footprint analysis, and technology-stack tracking. Build and maintain JSON crawler schemas using CSS selectors to support data collection, transformation, and cleansing.'
        },
        {
          heading: 'Zoho | Data Operations',
          description: 'Worked on data collection and validation, with a focus on improving data quality and supporting workflow improvements.'
        }
      ],
      isOpen: true
    },
    {
      title: 'Projects',
      content: [
        {
          heading: 'Coffee Sales Analysis',
          description: 'Power BI dashboard project exploring sales performance and product trends.'
        },
        {
          heading: 'Hypermarket Sales Analysis',
          description: 'Power BI report for reviewing retail performance using available business metrics.'
        },
        {
          heading: 'Automated Sales MIS Reporting System',
          description: 'In-progress project combining PostgreSQL, SQL, Excel VBA automation, and Power BI reporting.'
        }
      ],
      isOpen: false
    },
    {
      title: 'Skills',
      content: [
        {
          heading: 'Data & Querying',
          description: 'SQL, PostgreSQL, data validation, data cleansing, and data transformation.'
        },
        {
          heading: 'Reporting & Business Intelligence',
          description: 'Microsoft Excel, Excel VBA, Power BI, DAX, KPI reporting, and dashboard design.'
        }
      ],
      isOpen: false
    },
    {
      title: 'Education',
      content: [
         {
      heading: 'Bachelor of Computer Application (BCA)',
      description: 'B.S. Abdur Rahman Crescent Institute of Science and Technology | 2019–2022.'
    }
  ],
  isOpen: false
}
  ];

  constructor(
    private titleService: Title,
    private renderer: Renderer2
  ) {
    this.titleService.setTitle('Experience & Skills | Manojkumar');
  }

  toggleSection(index: number): void {
    this.sections[index].isOpen = !this.sections[index].isOpen;
  }

  DownloadLink(): void {
  const link = this.renderer.createElement('a');

  link.setAttribute('href', 'assets/DAWA_Manojkumar.pdf');
  link.setAttribute('download', 'Manojkumar_Data_Analyst_Resume.pdf');

  link.click();
  link.remove();
}
}

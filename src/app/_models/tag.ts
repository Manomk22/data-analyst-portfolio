export class tag {
  static SQL = new tag('SQL', '#2563eb');
  static EXCEL = new tag('Excel', '#16845b');
  static POWERBI = new tag('Power BI', '#b8860b');
  static DAX = new tag('DAX', '#8b5cf6');
  static POSTGRESQL = new tag('PostgreSQL', '#31648c');
  static VBA = new tag('Excel VBA', '#16845b');
  static ANALYTICS = new tag('Business Analytics', '#087f8c');

  // Retained so any existing project data using these tags continues to compile.
  static ANGULAR = new tag('Angular', '#dc2626');
  static TYPESCRIPT = new tag('Typescript', '#16845b');
  static TAILWINDCSS = new tag('Tailwind', '#2563eb');
  static JAVASCRIPT = new tag('Javascript', '#d97706');
  static HTML = new tag('HTML', '#92400e');

  private constructor(private readonly key: string, public readonly color: string) {}
  toString() { return this.key; }
}

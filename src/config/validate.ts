// lowercased comments per rule 8
// standalone validation script to test data invariants during build
import { portfolioConfigSchema } from "./schema";
import { rawPortfolioConfig } from "./portfolio.config";

function runValidation(): void {
  try {
    const validated = portfolioConfigSchema.parse(rawPortfolioConfig);
    process.stdout.write(
      `[ok] portfolio config successfully validated:\n` +
      `  - personal: ${validated.personal.name}\n` +
      `  - lenses: ${validated.lenses.length} lenses configured\n` +
      `  - experiences: ${validated.experiences.length} work experiences\n` +
      `  - projects: ${validated.projects.length} technical projects\n` +
      `  - story chapters: ${validated.storyChapters.length} narrative chapters\n`
    );
  } catch (error) {
    process.stderr.write(`[fail] portfolio config validation failed:\n${String(error)}\n`);
    process.exit(1);
  }
}

runValidation();

// lowercased comments per rule 8
// runtime validated export ensuring 100% schema invariant compliance
import { portfolioConfigSchema, PortfolioConfig } from "./schema";
import { rawPortfolioConfig } from "./portfolio.config";

// runtime validation parse will throw on any invariant failure at startup
export const portfolioData: PortfolioConfig = portfolioConfigSchema.parse(rawPortfolioConfig);

export default portfolioData;

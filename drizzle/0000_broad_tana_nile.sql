CREATE TABLE `lead_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`form_type` text NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`company` text NOT NULL,
	`role` text,
	`company_size` text,
	`website` text,
	`industry` text,
	`product_interest` text NOT NULL,
	`details` text,
	`desired_outcome` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_lead_submissions_email_created` ON `lead_submissions` (`email`,`created_at`);
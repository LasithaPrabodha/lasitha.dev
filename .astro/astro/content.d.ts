declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"angular-signals.mdx": {
	id: "angular-signals.mdx";
  slug: "angular-signals";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"ci-cd.mdx": {
	id: "ci-cd.mdx";
  slug: "ci-cd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"getting-started-angular.mdx": {
	id: "getting-started-angular.mdx";
  slug: "getting-started-angular";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"intro-ngrx.mdx": {
	id: "intro-ngrx.mdx";
  slug: "intro-ngrx";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"my-journey.mdx": {
	id: "my-journey.mdx";
  slug: "my-journey";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"new-job.mdx": {
	id: "new-job.mdx";
  slug: "new-job";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"observer-pattern.md": {
	id: "observer-pattern.md";
  slug: "observer-pattern";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"rowversioning.mdx": {
	id: "rowversioning.mdx";
  slug: "rowversioning";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"sharded-databases.mdx": {
	id: "sharded-databases.mdx";
  slug: "sharded-databases";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"singleton-pattern.mdx": {
	id: "singleton-pattern.mdx";
  slug: "singleton-pattern";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"personal-projects": {
"account-balance-viewer": {
	id: "account-balance-viewer";
  collection: "personal-projects";
  data: any
};
"angular-deferred": {
	id: "angular-deferred";
  collection: "personal-projects";
  data: any
};
"dots-connect": {
	id: "dots-connect";
  collection: "personal-projects";
  data: any
};
"expense-tracker": {
	id: "expense-tracker";
  collection: "personal-projects";
  data: any
};
"jeopardy-game": {
	id: "jeopardy-game";
  collection: "personal-projects";
  data: any
};
"the-kingsburry": {
	id: "the-kingsburry";
  collection: "personal-projects";
  data: any
};
"watch-ur-network": {
	id: "watch-ur-network";
  collection: "personal-projects";
  data: any
};
"website": {
	id: "website";
  collection: "personal-projects";
  data: any
};
};
"professional-projects": {
"99x": {
	id: "99x";
  collection: "professional-projects";
  data: any
};
"creative": {
	id: "creative";
  collection: "professional-projects";
  data: any
};
"findmyfare": {
	id: "findmyfare";
  collection: "professional-projects";
  data: any
};
"laudi": {
	id: "laudi";
  collection: "professional-projects";
  data: any
};
"villvay": {
	id: "villvay";
  collection: "professional-projects";
  data: any
};
};
"projects": Record<string, {
  id: string;
  collection: "projects";
  data: InferEntrySchema<"projects">;
}>;
"skills": {
"tech-skills": {
	id: "tech-skills";
  collection: "skills";
  data: any
};
};
"tech-skills": Record<string, {
  id: string;
  collection: "tech-skills";
  data: InferEntrySchema<"tech-skills">;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}

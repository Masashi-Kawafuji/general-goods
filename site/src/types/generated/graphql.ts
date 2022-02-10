export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DatoCmsAbout = Node & {
  body: Maybe<Scalars['String']>;
  bodyNode: Maybe<DatoCmsTextNode>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  locale: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  model: Maybe<DatoCmsModel>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
};

export type DatoCmsAboutConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsAboutEdge>;
  group: Array<DatoCmsAboutGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsAbout>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsAboutConnectionDistinctArgs = {
  field: DatoCmsAboutFieldsEnum;
};


export type DatoCmsAboutConnectionGroupArgs = {
  field: DatoCmsAboutFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsAboutConnectionMaxArgs = {
  field: DatoCmsAboutFieldsEnum;
};


export type DatoCmsAboutConnectionMinArgs = {
  field: DatoCmsAboutFieldsEnum;
};


export type DatoCmsAboutConnectionSumArgs = {
  field: DatoCmsAboutFieldsEnum;
};

export type DatoCmsAboutEdge = {
  next: Maybe<DatoCmsAbout>;
  node: DatoCmsAbout;
  previous: Maybe<DatoCmsAbout>;
};

export enum DatoCmsAboutFieldsEnum {
  Body = 'body',
  BodyNodeChildMarkdownRemarkChildren = 'bodyNode___childMarkdownRemark___children',
  BodyNodeChildMarkdownRemarkChildrenChildren = 'bodyNode___childMarkdownRemark___children___children',
  BodyNodeChildMarkdownRemarkChildrenId = 'bodyNode___childMarkdownRemark___children___id',
  BodyNodeChildMarkdownRemarkExcerpt = 'bodyNode___childMarkdownRemark___excerpt',
  BodyNodeChildMarkdownRemarkExcerptAst = 'bodyNode___childMarkdownRemark___excerptAst',
  BodyNodeChildMarkdownRemarkFrontmatterTitle = 'bodyNode___childMarkdownRemark___frontmatter___title',
  BodyNodeChildMarkdownRemarkHeadings = 'bodyNode___childMarkdownRemark___headings',
  BodyNodeChildMarkdownRemarkHeadingsDepth = 'bodyNode___childMarkdownRemark___headings___depth',
  BodyNodeChildMarkdownRemarkHeadingsId = 'bodyNode___childMarkdownRemark___headings___id',
  BodyNodeChildMarkdownRemarkHeadingsValue = 'bodyNode___childMarkdownRemark___headings___value',
  BodyNodeChildMarkdownRemarkHtml = 'bodyNode___childMarkdownRemark___html',
  BodyNodeChildMarkdownRemarkHtmlAst = 'bodyNode___childMarkdownRemark___htmlAst',
  BodyNodeChildMarkdownRemarkId = 'bodyNode___childMarkdownRemark___id',
  BodyNodeChildMarkdownRemarkInternalContent = 'bodyNode___childMarkdownRemark___internal___content',
  BodyNodeChildMarkdownRemarkInternalContentDigest = 'bodyNode___childMarkdownRemark___internal___contentDigest',
  BodyNodeChildMarkdownRemarkInternalDescription = 'bodyNode___childMarkdownRemark___internal___description',
  BodyNodeChildMarkdownRemarkInternalFieldOwners = 'bodyNode___childMarkdownRemark___internal___fieldOwners',
  BodyNodeChildMarkdownRemarkInternalIgnoreType = 'bodyNode___childMarkdownRemark___internal___ignoreType',
  BodyNodeChildMarkdownRemarkInternalMediaType = 'bodyNode___childMarkdownRemark___internal___mediaType',
  BodyNodeChildMarkdownRemarkInternalOwner = 'bodyNode___childMarkdownRemark___internal___owner',
  BodyNodeChildMarkdownRemarkInternalType = 'bodyNode___childMarkdownRemark___internal___type',
  BodyNodeChildMarkdownRemarkParentChildren = 'bodyNode___childMarkdownRemark___parent___children',
  BodyNodeChildMarkdownRemarkParentId = 'bodyNode___childMarkdownRemark___parent___id',
  BodyNodeChildMarkdownRemarkRawMarkdownBody = 'bodyNode___childMarkdownRemark___rawMarkdownBody',
  BodyNodeChildMarkdownRemarkTableOfContents = 'bodyNode___childMarkdownRemark___tableOfContents',
  BodyNodeChildMarkdownRemarkTimeToRead = 'bodyNode___childMarkdownRemark___timeToRead',
  BodyNodeChildMarkdownRemarkWordCountParagraphs = 'bodyNode___childMarkdownRemark___wordCount___paragraphs',
  BodyNodeChildMarkdownRemarkWordCountSentences = 'bodyNode___childMarkdownRemark___wordCount___sentences',
  BodyNodeChildMarkdownRemarkWordCountWords = 'bodyNode___childMarkdownRemark___wordCount___words',
  BodyNodeChildren = 'bodyNode___children',
  BodyNodeChildrenMarkdownRemark = 'bodyNode___childrenMarkdownRemark',
  BodyNodeChildrenMarkdownRemarkChildren = 'bodyNode___childrenMarkdownRemark___children',
  BodyNodeChildrenMarkdownRemarkChildrenChildren = 'bodyNode___childrenMarkdownRemark___children___children',
  BodyNodeChildrenMarkdownRemarkChildrenId = 'bodyNode___childrenMarkdownRemark___children___id',
  BodyNodeChildrenMarkdownRemarkExcerpt = 'bodyNode___childrenMarkdownRemark___excerpt',
  BodyNodeChildrenMarkdownRemarkExcerptAst = 'bodyNode___childrenMarkdownRemark___excerptAst',
  BodyNodeChildrenMarkdownRemarkFrontmatterTitle = 'bodyNode___childrenMarkdownRemark___frontmatter___title',
  BodyNodeChildrenMarkdownRemarkHeadings = 'bodyNode___childrenMarkdownRemark___headings',
  BodyNodeChildrenMarkdownRemarkHeadingsDepth = 'bodyNode___childrenMarkdownRemark___headings___depth',
  BodyNodeChildrenMarkdownRemarkHeadingsId = 'bodyNode___childrenMarkdownRemark___headings___id',
  BodyNodeChildrenMarkdownRemarkHeadingsValue = 'bodyNode___childrenMarkdownRemark___headings___value',
  BodyNodeChildrenMarkdownRemarkHtml = 'bodyNode___childrenMarkdownRemark___html',
  BodyNodeChildrenMarkdownRemarkHtmlAst = 'bodyNode___childrenMarkdownRemark___htmlAst',
  BodyNodeChildrenMarkdownRemarkId = 'bodyNode___childrenMarkdownRemark___id',
  BodyNodeChildrenMarkdownRemarkInternalContent = 'bodyNode___childrenMarkdownRemark___internal___content',
  BodyNodeChildrenMarkdownRemarkInternalContentDigest = 'bodyNode___childrenMarkdownRemark___internal___contentDigest',
  BodyNodeChildrenMarkdownRemarkInternalDescription = 'bodyNode___childrenMarkdownRemark___internal___description',
  BodyNodeChildrenMarkdownRemarkInternalFieldOwners = 'bodyNode___childrenMarkdownRemark___internal___fieldOwners',
  BodyNodeChildrenMarkdownRemarkInternalIgnoreType = 'bodyNode___childrenMarkdownRemark___internal___ignoreType',
  BodyNodeChildrenMarkdownRemarkInternalMediaType = 'bodyNode___childrenMarkdownRemark___internal___mediaType',
  BodyNodeChildrenMarkdownRemarkInternalOwner = 'bodyNode___childrenMarkdownRemark___internal___owner',
  BodyNodeChildrenMarkdownRemarkInternalType = 'bodyNode___childrenMarkdownRemark___internal___type',
  BodyNodeChildrenMarkdownRemarkParentChildren = 'bodyNode___childrenMarkdownRemark___parent___children',
  BodyNodeChildrenMarkdownRemarkParentId = 'bodyNode___childrenMarkdownRemark___parent___id',
  BodyNodeChildrenMarkdownRemarkRawMarkdownBody = 'bodyNode___childrenMarkdownRemark___rawMarkdownBody',
  BodyNodeChildrenMarkdownRemarkTableOfContents = 'bodyNode___childrenMarkdownRemark___tableOfContents',
  BodyNodeChildrenMarkdownRemarkTimeToRead = 'bodyNode___childrenMarkdownRemark___timeToRead',
  BodyNodeChildrenMarkdownRemarkWordCountParagraphs = 'bodyNode___childrenMarkdownRemark___wordCount___paragraphs',
  BodyNodeChildrenMarkdownRemarkWordCountSentences = 'bodyNode___childrenMarkdownRemark___wordCount___sentences',
  BodyNodeChildrenMarkdownRemarkWordCountWords = 'bodyNode___childrenMarkdownRemark___wordCount___words',
  BodyNodeChildrenChildren = 'bodyNode___children___children',
  BodyNodeChildrenChildrenChildren = 'bodyNode___children___children___children',
  BodyNodeChildrenChildrenId = 'bodyNode___children___children___id',
  BodyNodeChildrenId = 'bodyNode___children___id',
  BodyNodeChildrenInternalContent = 'bodyNode___children___internal___content',
  BodyNodeChildrenInternalContentDigest = 'bodyNode___children___internal___contentDigest',
  BodyNodeChildrenInternalDescription = 'bodyNode___children___internal___description',
  BodyNodeChildrenInternalFieldOwners = 'bodyNode___children___internal___fieldOwners',
  BodyNodeChildrenInternalIgnoreType = 'bodyNode___children___internal___ignoreType',
  BodyNodeChildrenInternalMediaType = 'bodyNode___children___internal___mediaType',
  BodyNodeChildrenInternalOwner = 'bodyNode___children___internal___owner',
  BodyNodeChildrenInternalType = 'bodyNode___children___internal___type',
  BodyNodeChildrenParentChildren = 'bodyNode___children___parent___children',
  BodyNodeChildrenParentId = 'bodyNode___children___parent___id',
  BodyNodeId = 'bodyNode___id',
  BodyNodeInternalContent = 'bodyNode___internal___content',
  BodyNodeInternalContentDigest = 'bodyNode___internal___contentDigest',
  BodyNodeInternalDescription = 'bodyNode___internal___description',
  BodyNodeInternalFieldOwners = 'bodyNode___internal___fieldOwners',
  BodyNodeInternalIgnoreType = 'bodyNode___internal___ignoreType',
  BodyNodeInternalMediaType = 'bodyNode___internal___mediaType',
  BodyNodeInternalOwner = 'bodyNode___internal___owner',
  BodyNodeInternalType = 'bodyNode___internal___type',
  BodyNodeParentChildren = 'bodyNode___parent___children',
  BodyNodeParentChildrenChildren = 'bodyNode___parent___children___children',
  BodyNodeParentChildrenId = 'bodyNode___parent___children___id',
  BodyNodeParentId = 'bodyNode___parent___id',
  BodyNodeParentInternalContent = 'bodyNode___parent___internal___content',
  BodyNodeParentInternalContentDigest = 'bodyNode___parent___internal___contentDigest',
  BodyNodeParentInternalDescription = 'bodyNode___parent___internal___description',
  BodyNodeParentInternalFieldOwners = 'bodyNode___parent___internal___fieldOwners',
  BodyNodeParentInternalIgnoreType = 'bodyNode___parent___internal___ignoreType',
  BodyNodeParentInternalMediaType = 'bodyNode___parent___internal___mediaType',
  BodyNodeParentInternalOwner = 'bodyNode___parent___internal___owner',
  BodyNodeParentInternalType = 'bodyNode___parent___internal___type',
  BodyNodeParentParentChildren = 'bodyNode___parent___parent___children',
  BodyNodeParentParentId = 'bodyNode___parent___parent___id',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MetaCreatedAt = 'meta___createdAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaPublishedAt = 'meta___publishedAt',
  MetaStatus = 'meta___status',
  MetaUpdatedAt = 'meta___updatedAt',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelApiKey = 'model___apiKey',
  ModelChildren = 'model___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenId = 'model___children___id',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsTags = 'model___fields___tags',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelId = 'model___id',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  ModelModularBlock = 'model___modularBlock',
  ModelName = 'model___name',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelOriginalId = 'model___originalId',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentId = 'model___parent___id',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentParentId = 'model___parent___parent___id',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelTree = 'model___tree',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsTags = 'seoMetaTags___tags'
}

export type DatoCmsAboutFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  bodyNode?: Maybe<DatoCmsTextNodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
};

export type DatoCmsAboutGroupConnection = {
  edges: Array<DatoCmsAboutEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsAbout>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsAboutSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsArticle = Node & {
  body: Maybe<DatoCmsDatoCmsArticleBodyStructuredText>;
  carousel: Maybe<Scalars['Boolean']>;
  children: Array<Node>;
  excerpt: Maybe<Scalars['String']>;
  featuredImage: Maybe<DatoCmsFileField>;
  id: Scalars['ID'];
  internal: Internal;
  locale: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  model: Maybe<DatoCmsModel>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  title: Maybe<Scalars['String']>;
};

export type DatoCmsArticleConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsArticleEdge>;
  group: Array<DatoCmsArticleGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsArticle>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsArticleConnectionDistinctArgs = {
  field: DatoCmsArticleFieldsEnum;
};


export type DatoCmsArticleConnectionGroupArgs = {
  field: DatoCmsArticleFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsArticleConnectionMaxArgs = {
  field: DatoCmsArticleFieldsEnum;
};


export type DatoCmsArticleConnectionMinArgs = {
  field: DatoCmsArticleFieldsEnum;
};


export type DatoCmsArticleConnectionSumArgs = {
  field: DatoCmsArticleFieldsEnum;
};

export type DatoCmsArticleEdge = {
  next: Maybe<DatoCmsArticle>;
  node: DatoCmsArticle;
  previous: Maybe<DatoCmsArticle>;
};

export enum DatoCmsArticleFieldsEnum {
  BodyLinks = 'body___links',
  BodyValue = 'body___value',
  Carousel = 'carousel',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  FeaturedImageAlt = 'featuredImage___alt',
  FeaturedImageAuthor = 'featuredImage___author',
  FeaturedImageBasename = 'featuredImage___basename',
  FeaturedImageBlurhash = 'featuredImage___blurhash',
  FeaturedImageColors = 'featuredImage___colors',
  FeaturedImageColorsAlpha = 'featuredImage___colors___alpha',
  FeaturedImageColorsBlue = 'featuredImage___colors___blue',
  FeaturedImageColorsGreen = 'featuredImage___colors___green',
  FeaturedImageColorsHex = 'featuredImage___colors___hex',
  FeaturedImageColorsRed = 'featuredImage___colors___red',
  FeaturedImageColorsRgb = 'featuredImage___colors___rgb',
  FeaturedImageCopyright = 'featuredImage___copyright',
  FeaturedImageCreatedAt = 'featuredImage___createdAt',
  FeaturedImageCustomData = 'featuredImage___customData',
  FeaturedImageExifInfo = 'featuredImage___exifInfo',
  FeaturedImageFilename = 'featuredImage___filename',
  FeaturedImageFixedAspectRatio = 'featuredImage___fixed___aspectRatio',
  FeaturedImageFixedBase64 = 'featuredImage___fixed___base64',
  FeaturedImageFixedHeight = 'featuredImage___fixed___height',
  FeaturedImageFixedSizes = 'featuredImage___fixed___sizes',
  FeaturedImageFixedSrc = 'featuredImage___fixed___src',
  FeaturedImageFixedSrcSet = 'featuredImage___fixed___srcSet',
  FeaturedImageFixedTracedSvg = 'featuredImage___fixed___tracedSVG',
  FeaturedImageFixedWidth = 'featuredImage___fixed___width',
  FeaturedImageFluidAspectRatio = 'featuredImage___fluid___aspectRatio',
  FeaturedImageFluidBase64 = 'featuredImage___fluid___base64',
  FeaturedImageFluidHeight = 'featuredImage___fluid___height',
  FeaturedImageFluidSizes = 'featuredImage___fluid___sizes',
  FeaturedImageFluidSrc = 'featuredImage___fluid___src',
  FeaturedImageFluidSrcSet = 'featuredImage___fluid___srcSet',
  FeaturedImageFluidTracedSvg = 'featuredImage___fluid___tracedSVG',
  FeaturedImageFluidWidth = 'featuredImage___fluid___width',
  FeaturedImageFocalPointX = 'featuredImage___focalPoint___x',
  FeaturedImageFocalPointY = 'featuredImage___focalPoint___y',
  FeaturedImageFormat = 'featuredImage___format',
  FeaturedImageGatsbyImageData = 'featuredImage___gatsbyImageData',
  FeaturedImageHeight = 'featuredImage___height',
  FeaturedImageIsImage = 'featuredImage___isImage',
  FeaturedImageMimeType = 'featuredImage___mimeType',
  FeaturedImageNotes = 'featuredImage___notes',
  FeaturedImageOriginalId = 'featuredImage___originalId',
  FeaturedImagePath = 'featuredImage___path',
  FeaturedImageResolutionsAspectRatio = 'featuredImage___resolutions___aspectRatio',
  FeaturedImageResolutionsBase64 = 'featuredImage___resolutions___base64',
  FeaturedImageResolutionsHeight = 'featuredImage___resolutions___height',
  FeaturedImageResolutionsSizes = 'featuredImage___resolutions___sizes',
  FeaturedImageResolutionsSrc = 'featuredImage___resolutions___src',
  FeaturedImageResolutionsSrcSet = 'featuredImage___resolutions___srcSet',
  FeaturedImageResolutionsTracedSvg = 'featuredImage___resolutions___tracedSVG',
  FeaturedImageResolutionsWidth = 'featuredImage___resolutions___width',
  FeaturedImageSize = 'featuredImage___size',
  FeaturedImageSizesAspectRatio = 'featuredImage___sizes___aspectRatio',
  FeaturedImageSizesBase64 = 'featuredImage___sizes___base64',
  FeaturedImageSizesHeight = 'featuredImage___sizes___height',
  FeaturedImageSizesSizes = 'featuredImage___sizes___sizes',
  FeaturedImageSizesSrc = 'featuredImage___sizes___src',
  FeaturedImageSizesSrcSet = 'featuredImage___sizes___srcSet',
  FeaturedImageSizesTracedSvg = 'featuredImage___sizes___tracedSVG',
  FeaturedImageSizesWidth = 'featuredImage___sizes___width',
  FeaturedImageSmartTags = 'featuredImage___smartTags',
  FeaturedImageTags = 'featuredImage___tags',
  FeaturedImageTitle = 'featuredImage___title',
  FeaturedImageUrl = 'featuredImage___url',
  FeaturedImageVideoDuration = 'featuredImage___video___duration',
  FeaturedImageVideoFrameRate = 'featuredImage___video___frameRate',
  FeaturedImageVideoMp4Url = 'featuredImage___video___mp4Url',
  FeaturedImageVideoMuxPlaybackId = 'featuredImage___video___muxPlaybackId',
  FeaturedImageVideoStreamingUrl = 'featuredImage___video___streamingUrl',
  FeaturedImageVideoThumbnailUrl = 'featuredImage___video___thumbnailUrl',
  FeaturedImageWidth = 'featuredImage___width',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MetaCreatedAt = 'meta___createdAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaPublishedAt = 'meta___publishedAt',
  MetaStatus = 'meta___status',
  MetaUpdatedAt = 'meta___updatedAt',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelApiKey = 'model___apiKey',
  ModelChildren = 'model___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenId = 'model___children___id',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsTags = 'model___fields___tags',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelId = 'model___id',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  ModelModularBlock = 'model___modularBlock',
  ModelName = 'model___name',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelOriginalId = 'model___originalId',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentId = 'model___parent___id',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentParentId = 'model___parent___parent___id',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelTree = 'model___tree',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  Title = 'title'
}

export type DatoCmsArticleFilterInput = {
  body?: Maybe<DatoCmsDatoCmsArticleBodyStructuredTextFilterInput>;
  carousel?: Maybe<BooleanQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<DatoCmsFileFieldFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsArticleGroupConnection = {
  edges: Array<DatoCmsArticleEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsArticle>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsArticleSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAsset = Node & {
  author: Maybe<Scalars['String']>;
  basename: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  children: Array<Node>;
  colors: Maybe<Array<Maybe<DatoCmsColorField>>>;
  copyright: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['Date']>;
  exifInfo: Maybe<Scalars['JSON']>;
  filename: Maybe<Scalars['String']>;
  fixed: Maybe<DatoCmsFixed>;
  fluid: Maybe<DatoCmsFluid>;
  format: Maybe<Scalars['String']>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  height: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  internal: Internal;
  isImage: Maybe<Scalars['Boolean']>;
  mimeType: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  path: Maybe<Scalars['String']>;
  resolutions: Maybe<DatoCmsFixed>;
  size: Maybe<Scalars['Int']>;
  sizes: Maybe<DatoCmsFluid>;
  smartTags: Maybe<Array<Maybe<Scalars['String']>>>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  url: Maybe<Scalars['String']>;
  video: Maybe<DatoCmsAssetVideo>;
  width: Maybe<Scalars['Int']>;
};


export type DatoCmsAssetCreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetFixedArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  width?: Maybe<Scalars['Int']>;
};


export type DatoCmsAssetFluidArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  backgroundColor?: Maybe<Scalars['String']>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  layout?: Maybe<GatsbyImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<DatoImagePlaceholder>;
  sizes?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type DatoCmsAssetResolutionsArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  width?: Maybe<Scalars['Int']>;
};


export type DatoCmsAssetSizesArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetUrlArgs = {
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsAssetEdge>;
  group: Array<DatoCmsAssetGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionGroupArgs = {
  field: DatoCmsAssetFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsAssetConnectionMaxArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionMinArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionSumArgs = {
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetEdge = {
  next: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous: Maybe<DatoCmsAsset>;
};

export enum DatoCmsAssetFieldsEnum {
  Author = 'author',
  Basename = 'basename',
  Blurhash = 'blurhash',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Colors = 'colors',
  ColorsAlpha = 'colors___alpha',
  ColorsBlue = 'colors___blue',
  ColorsGreen = 'colors___green',
  ColorsHex = 'colors___hex',
  ColorsRed = 'colors___red',
  ColorsRgb = 'colors___rgb',
  Copyright = 'copyright',
  CreatedAt = 'createdAt',
  ExifInfo = 'exifInfo',
  Filename = 'filename',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedSizes = 'fixed___sizes',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidHeight = 'fluid___height',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidWidth = 'fluid___width',
  Format = 'format',
  GatsbyImageData = 'gatsbyImageData',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsImage = 'isImage',
  MimeType = 'mimeType',
  Notes = 'notes',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSizes = 'resolutions___sizes',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsWidth = 'resolutions___width',
  Size = 'size',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesBase64 = 'sizes___base64',
  SizesHeight = 'sizes___height',
  SizesSizes = 'sizes___sizes',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesWidth = 'sizes___width',
  SmartTags = 'smartTags',
  Tags = 'tags',
  Url = 'url',
  VideoDuration = 'video___duration',
  VideoFrameRate = 'video___frameRate',
  VideoMp4Url = 'video___mp4Url',
  VideoMuxPlaybackId = 'video___muxPlaybackId',
  VideoStreamingUrl = 'video___streamingUrl',
  VideoThumbnailUrl = 'video___thumbnailUrl',
  Width = 'width'
}

export type DatoCmsAssetFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  format?: Maybe<StringQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type DatoCmsAssetGroupConnection = {
  edges: Array<DatoCmsAssetEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsAssetSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAssetVideo = {
  duration: Maybe<Scalars['Int']>;
  frameRate: Maybe<Scalars['Int']>;
  mp4Url: Maybe<Scalars['String']>;
  muxPlaybackId: Maybe<Scalars['String']>;
  streamingUrl: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
};


export type DatoCmsAssetVideoMp4UrlArgs = {
  exactRes?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  res?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};


export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: Maybe<DatoCmsAssetVideoThumbnailFormat>;
};

export type DatoCmsAssetVideoFilterInput = {
  duration?: Maybe<IntQueryOperatorInput>;
  frameRate?: Maybe<IntQueryOperatorInput>;
  mp4Url?: Maybe<StringQueryOperatorInput>;
  muxPlaybackId?: Maybe<StringQueryOperatorInput>;
  streamingUrl?: Maybe<StringQueryOperatorInput>;
  thumbnailUrl?: Maybe<StringQueryOperatorInput>;
};

export enum DatoCmsAssetVideoMp4ResolutionQuality {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export enum DatoCmsAssetVideoThumbnailFormat {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

export type DatoCmsColorField = {
  alpha: Maybe<Scalars['Int']>;
  blue: Maybe<Scalars['Int']>;
  green: Maybe<Scalars['Int']>;
  hex: Maybe<Scalars['String']>;
  red: Maybe<Scalars['Int']>;
  rgb: Maybe<Scalars['String']>;
};

export type DatoCmsColorFieldFilterInput = {
  alpha?: Maybe<IntQueryOperatorInput>;
  blue?: Maybe<IntQueryOperatorInput>;
  green?: Maybe<IntQueryOperatorInput>;
  hex?: Maybe<StringQueryOperatorInput>;
  red?: Maybe<IntQueryOperatorInput>;
  rgb?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: Maybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsDatoCmsArticleBodyStructuredText = {
  blocks: Maybe<Array<Maybe<DatoCmsDatoCmsArticleBodyStructuredTextBlocks>>>;
  links: Maybe<Array<Maybe<Scalars['String']>>>;
  value: Maybe<Scalars['JSON']>;
};

export type DatoCmsDatoCmsArticleBodyStructuredTextBlocks = DatoCmsExternalvideo | DatoCmsImage;

export type DatoCmsDatoCmsArticleBodyStructuredTextFilterInput = {
  links?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<JsonQueryOperatorInput>;
};

export type DatoCmsExternalvideo = Node & {
  children: Array<Node>;
  externalVideo: Maybe<DatoCmsVideoField>;
  id: Scalars['ID'];
  internal: Internal;
  locale: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  model: Maybe<DatoCmsModel>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
};

export type DatoCmsExternalvideoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsExternalvideoEdge>;
  group: Array<DatoCmsExternalvideoGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsExternalvideo>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsExternalvideoConnectionDistinctArgs = {
  field: DatoCmsExternalvideoFieldsEnum;
};


export type DatoCmsExternalvideoConnectionGroupArgs = {
  field: DatoCmsExternalvideoFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsExternalvideoConnectionMaxArgs = {
  field: DatoCmsExternalvideoFieldsEnum;
};


export type DatoCmsExternalvideoConnectionMinArgs = {
  field: DatoCmsExternalvideoFieldsEnum;
};


export type DatoCmsExternalvideoConnectionSumArgs = {
  field: DatoCmsExternalvideoFieldsEnum;
};

export type DatoCmsExternalvideoEdge = {
  next: Maybe<DatoCmsExternalvideo>;
  node: DatoCmsExternalvideo;
  previous: Maybe<DatoCmsExternalvideo>;
};

export enum DatoCmsExternalvideoFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ExternalVideoHeight = 'externalVideo___height',
  ExternalVideoProvider = 'externalVideo___provider',
  ExternalVideoProviderUid = 'externalVideo___providerUid',
  ExternalVideoThumbnailUrl = 'externalVideo___thumbnailUrl',
  ExternalVideoTitle = 'externalVideo___title',
  ExternalVideoUrl = 'externalVideo___url',
  ExternalVideoWidth = 'externalVideo___width',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MetaCreatedAt = 'meta___createdAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaPublishedAt = 'meta___publishedAt',
  MetaStatus = 'meta___status',
  MetaUpdatedAt = 'meta___updatedAt',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelApiKey = 'model___apiKey',
  ModelChildren = 'model___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenId = 'model___children___id',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsTags = 'model___fields___tags',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelId = 'model___id',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  ModelModularBlock = 'model___modularBlock',
  ModelName = 'model___name',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelOriginalId = 'model___originalId',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentId = 'model___parent___id',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentParentId = 'model___parent___parent___id',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelTree = 'model___tree',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsTags = 'seoMetaTags___tags'
}

export type DatoCmsExternalvideoFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  externalVideo?: Maybe<DatoCmsVideoFieldFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
};

export type DatoCmsExternalvideoGroupConnection = {
  edges: Array<DatoCmsExternalvideoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsExternalvideo>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsExternalvideoSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsExternalvideoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsFaviconMetaTags = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  tags: Maybe<Scalars['JSON']>;
};

export type DatoCmsFaviconMetaTagsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsFaviconMetaTagsConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionGroupArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsFaviconMetaTagsConnectionMaxArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionMinArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionSumArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsEdge = {
  next: Maybe<DatoCmsFaviconMetaTags>;
  node: DatoCmsFaviconMetaTags;
  previous: Maybe<DatoCmsFaviconMetaTags>;
};

export enum DatoCmsFaviconMetaTagsFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Tags = 'tags'
}

export type DatoCmsFaviconMetaTagsFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  tags?: Maybe<JsonQueryOperatorInput>;
};

export type DatoCmsFaviconMetaTagsGroupConnection = {
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsFaviconMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsField = Node & {
  apiKey: Maybe<Scalars['String']>;
  appeareance: Maybe<Scalars['JSON']>;
  children: Array<Node>;
  defaultValue: Maybe<Scalars['JSON']>;
  fieldType: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  label: Maybe<Scalars['String']>;
  localized: Maybe<Scalars['Boolean']>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  position: Maybe<Scalars['Int']>;
  validators: Maybe<Scalars['JSON']>;
};

export type DatoCmsFieldConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsFieldEdge>;
  group: Array<DatoCmsFieldGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionGroupArgs = {
  field: DatoCmsFieldFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsFieldConnectionMaxArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionMinArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionSumArgs = {
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldEdge = {
  next: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous: Maybe<DatoCmsField>;
};

export enum DatoCmsFieldFieldsEnum {
  ApiKey = 'apiKey',
  Appeareance = 'appeareance',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DefaultValue = 'defaultValue',
  FieldType = 'fieldType',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  Localized = 'localized',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Position = 'position',
  Validators = 'validators'
}

export type DatoCmsFieldFilterInput = {
  apiKey?: Maybe<StringQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  position?: Maybe<IntQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
};

export type DatoCmsFieldGroupConnection = {
  edges: Array<DatoCmsFieldEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsFieldSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsFileField = {
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Maybe<Array<Maybe<DatoCmsColorField>>>;
  copyright: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['Date']>;
  customData: Maybe<Scalars['JSON']>;
  exifInfo: Maybe<Scalars['JSON']>;
  filename: Maybe<Scalars['String']>;
  fixed: Maybe<DatoCmsFixed>;
  fluid: Maybe<DatoCmsFluid>;
  focalPoint: Maybe<DatoCmsFocalPoint>;
  format: Maybe<Scalars['String']>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  height: Maybe<Scalars['Int']>;
  isImage: Maybe<Scalars['Boolean']>;
  mimeType: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  originalId: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  resolutions: Maybe<DatoCmsFixed>;
  size: Maybe<Scalars['Int']>;
  sizes: Maybe<DatoCmsFluid>;
  smartTags: Maybe<Array<Maybe<Scalars['String']>>>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  video: Maybe<DatoCmsAssetVideo>;
  width: Maybe<Scalars['Int']>;
};


export type DatoCmsFileFieldCreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsFileFieldFixedArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  width?: Maybe<Scalars['Int']>;
};


export type DatoCmsFileFieldFluidArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
};


export type DatoCmsFileFieldGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  backgroundColor?: Maybe<Scalars['String']>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  layout?: Maybe<GatsbyImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<DatoImagePlaceholder>;
  sizes?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


export type DatoCmsFileFieldResolutionsArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  width?: Maybe<Scalars['Int']>;
};


export type DatoCmsFileFieldSizesArgs = {
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
};


export type DatoCmsFileFieldUrlArgs = {
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsFileFieldFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  customData?: Maybe<JsonQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  focalPoint?: Maybe<DatoCmsFocalPointFilterInput>;
  format?: Maybe<StringQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type DatoCmsFixed = {
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  sizes: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Int'];
};

export type DatoCmsFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type DatoCmsFluid = {
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type DatoCmsFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type DatoCmsFocalPoint = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type DatoCmsFocalPointFilterInput = {
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
};

export type DatoCmsGlobalSeo = {
  facebookPageUrl: Maybe<Scalars['String']>;
  fallbackSeo: Maybe<DatoCmsSeoField>;
  siteName: Maybe<Scalars['String']>;
  titleSuffix: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
};

export type DatoCmsGlobalSeoFilterInput = {
  facebookPageUrl?: Maybe<StringQueryOperatorInput>;
  fallbackSeo?: Maybe<DatoCmsSeoFieldFilterInput>;
  siteName?: Maybe<StringQueryOperatorInput>;
  titleSuffix?: Maybe<StringQueryOperatorInput>;
  twitterAccount?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsImage = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  image: Maybe<DatoCmsFileField>;
  internal: Internal;
  locale: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  model: Maybe<DatoCmsModel>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
};

export type DatoCmsImageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsImageEdge>;
  group: Array<DatoCmsImageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsImage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsImageConnectionDistinctArgs = {
  field: DatoCmsImageFieldsEnum;
};


export type DatoCmsImageConnectionGroupArgs = {
  field: DatoCmsImageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsImageConnectionMaxArgs = {
  field: DatoCmsImageFieldsEnum;
};


export type DatoCmsImageConnectionMinArgs = {
  field: DatoCmsImageFieldsEnum;
};


export type DatoCmsImageConnectionSumArgs = {
  field: DatoCmsImageFieldsEnum;
};

export type DatoCmsImageEdge = {
  next: Maybe<DatoCmsImage>;
  node: DatoCmsImage;
  previous: Maybe<DatoCmsImage>;
};

export enum DatoCmsImageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  ImageAlt = 'image___alt',
  ImageAuthor = 'image___author',
  ImageBasename = 'image___basename',
  ImageBlurhash = 'image___blurhash',
  ImageColors = 'image___colors',
  ImageColorsAlpha = 'image___colors___alpha',
  ImageColorsBlue = 'image___colors___blue',
  ImageColorsGreen = 'image___colors___green',
  ImageColorsHex = 'image___colors___hex',
  ImageColorsRed = 'image___colors___red',
  ImageColorsRgb = 'image___colors___rgb',
  ImageCopyright = 'image___copyright',
  ImageCreatedAt = 'image___createdAt',
  ImageCustomData = 'image___customData',
  ImageExifInfo = 'image___exifInfo',
  ImageFilename = 'image___filename',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSizes = 'image___fixed___sizes',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedWidth = 'image___fixed___width',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidHeight = 'image___fluid___height',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidWidth = 'image___fluid___width',
  ImageFocalPointX = 'image___focalPoint___x',
  ImageFocalPointY = 'image___focalPoint___y',
  ImageFormat = 'image___format',
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageHeight = 'image___height',
  ImageIsImage = 'image___isImage',
  ImageMimeType = 'image___mimeType',
  ImageNotes = 'image___notes',
  ImageOriginalId = 'image___originalId',
  ImagePath = 'image___path',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSizes = 'image___resolutions___sizes',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageSize = 'image___size',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesHeight = 'image___sizes___height',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesWidth = 'image___sizes___width',
  ImageSmartTags = 'image___smartTags',
  ImageTags = 'image___tags',
  ImageTitle = 'image___title',
  ImageUrl = 'image___url',
  ImageVideoDuration = 'image___video___duration',
  ImageVideoFrameRate = 'image___video___frameRate',
  ImageVideoMp4Url = 'image___video___mp4Url',
  ImageVideoMuxPlaybackId = 'image___video___muxPlaybackId',
  ImageVideoStreamingUrl = 'image___video___streamingUrl',
  ImageVideoThumbnailUrl = 'image___video___thumbnailUrl',
  ImageWidth = 'image___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MetaCreatedAt = 'meta___createdAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaPublishedAt = 'meta___publishedAt',
  MetaStatus = 'meta___status',
  MetaUpdatedAt = 'meta___updatedAt',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelApiKey = 'model___apiKey',
  ModelChildren = 'model___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenId = 'model___children___id',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsTags = 'model___fields___tags',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelId = 'model___id',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  ModelModularBlock = 'model___modularBlock',
  ModelName = 'model___name',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelOriginalId = 'model___originalId',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentId = 'model___parent___id',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentParentId = 'model___parent___parent___id',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelTree = 'model___tree',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsTags = 'seoMetaTags___tags'
}

export type DatoCmsImageFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsFileFieldFilterInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
};

export type DatoCmsImageGroupConnection = {
  edges: Array<DatoCmsImageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsImage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsImageSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsImgixParams = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (https://docs.imgix.com/apis/url/size/ar) */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  bg?: Maybe<Scalars['String']>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/blend-align) */
  blendAlign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/blend-alpha) */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. (https://docs.imgix.com/apis/url/blending/blend-color) */
  blendColor?: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/blend-crop) */
  blendCrop?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/blend-fit) */
  blendFit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/blend-h) */
  blendH?: Maybe<Scalars['String']>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/blend-mode) */
  blendMode?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/blend-pad) */
  blendPad?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/blend-size) */
  blendSize?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/blend-w) */
  blendW?: Maybe<Scalars['String']>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-x) */
  blendX?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-y) */
  blendY?: Maybe<Scalars['Int']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: Maybe<Scalars['Int']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: Maybe<Scalars['String']>;
  /** Sets bottom border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-bottom) */
  borderBottom?: Maybe<Scalars['Int']>;
  /** Sets left border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-left) */
  borderLeft?: Maybe<Scalars['Int']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: Maybe<Scalars['String']>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /** Sets right border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-right) */
  borderRight?: Maybe<Scalars['Int']>;
  /** Sets top border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-top) */
  borderTop?: Maybe<Scalars['Int']>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  ch?: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  colorquant?: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. (https://docs.imgix.com/apis/url/color-palette/colors) */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  dpr?: Maybe<Scalars['Float']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  duotone?: Maybe<Scalars['String']>;
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  exp?: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. (https://docs.imgix.com/apis/url/expires) */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  facepad?: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces) */
  faces?: Maybe<Scalars['Int']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  fill?: Maybe<Scalars['String']>;
  /** Sets the fill color for images with additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill-color) */
  fillColor?: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  fit?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  fm?: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug) */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  fpX?: Maybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  fpY?: Maybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  fpZ?: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. (undefined) */
  gridColors?: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. (undefined) */
  gridSize?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  h?: Maybe<Scalars['String']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  lossless?: Maybe<Scalars['Boolean']>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: Maybe<Scalars['String']>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/mark-align) */
  markAlign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-alpha) */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-base) */
  markBase?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/mark-fit) */
  markFit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-h) */
  markH?: Maybe<Scalars['String']>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-pad) */
  markPad?: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. (https://docs.imgix.com/apis/url/watermark/mark-rot) */
  markRot?: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-scale) */
  markScale?: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. (https://docs.imgix.com/apis/url/watermark/mark-tile) */
  markTile?: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-w) */
  markW?: Maybe<Scalars['String']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-x) */
  markX?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-y) */
  markY?: Maybe<Scalars['Int']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskBg?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-height) */
  maxH?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-width) */
  maxW?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-height) */
  minH?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-width) */
  minW?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/monochrome) */
  monochrome?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  nr?: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/orient) */
  orient?: Maybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-bottom) */
  padBottom?: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-left) */
  padLeft?: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-right) */
  padRight?: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-top) */
  padTop?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf/page) */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  palette?: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. (https://docs.imgix.com/apis/url/pdf/pdf-annotation) */
  pdfAnnotation?: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  sharp?: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. (https://docs.imgix.com/apis/url/fill/transparency) */
  transparency?: Maybe<Scalars['String']>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-color) */
  trimColor?: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-md) */
  trimMd?: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. (https://docs.imgix.com/apis/url/trim/trim-pad) */
  trimPad?: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-sd) */
  trimSd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-tol) */
  trimTol?: Maybe<Scalars['Float']>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. (https://docs.imgix.com/apis/url/text/txt-align) */
  txtAlign?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txt-clip) */
  txtClip?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txt-color) */
  txtColor?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txt-fit) */
  txtFit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txt-font) */
  txtFont?: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-lead) */
  txtLead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txt-lig) */
  txtLig?: Maybe<Scalars['Int']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  txtLine?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. (https://docs.imgix.com/apis/url/text/txt-pad) */
  txtPad?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txt-shad) */
  txtShad?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txt-size) */
  txtSize?: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. (https://docs.imgix.com/apis/url/typesetting/txt-track) */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txt-width) */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: Maybe<Scalars['String']>;
};

export type DatoCmsLatLonField = {
  latitude: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
};

export type DatoCmsMetaField = {
  createdAt: Maybe<Scalars['Date']>;
  firstPublishedAt: Maybe<Scalars['Date']>;
  isValid: Maybe<Scalars['Boolean']>;
  publishedAt: Maybe<Scalars['Date']>;
  status: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['Date']>;
};


export type DatoCmsMetaFieldCreatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldPublishedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldUpdatedAtArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  isValid?: Maybe<BooleanQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
};

export type DatoCmsModel = Node & {
  allLocalesRequired: Maybe<Scalars['Boolean']>;
  apiKey: Maybe<Scalars['String']>;
  children: Array<Node>;
  collectionAppeareance: Maybe<Scalars['String']>;
  draftModeActive: Maybe<Scalars['Boolean']>;
  fields: Maybe<DatoCmsFaviconMetaTags>;
  hasSingletonItem: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  modularBlock: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  orderingDirection: Maybe<Scalars['String']>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  singleton: Maybe<Scalars['Boolean']>;
  sortable: Maybe<Scalars['Boolean']>;
  tree: Maybe<Scalars['Boolean']>;
};

export type DatoCmsModelConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsModelEdge>;
  group: Array<DatoCmsModelGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionGroupArgs = {
  field: DatoCmsModelFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsModelConnectionMaxArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionMinArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionSumArgs = {
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelEdge = {
  next: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous: Maybe<DatoCmsModel>;
};

export enum DatoCmsModelFieldsEnum {
  AllLocalesRequired = 'allLocalesRequired',
  ApiKey = 'apiKey',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CollectionAppeareance = 'collectionAppeareance',
  DraftModeActive = 'draftModeActive',
  FieldsChildren = 'fields___children',
  FieldsChildrenChildren = 'fields___children___children',
  FieldsChildrenChildrenChildren = 'fields___children___children___children',
  FieldsChildrenChildrenId = 'fields___children___children___id',
  FieldsChildrenId = 'fields___children___id',
  FieldsChildrenInternalContent = 'fields___children___internal___content',
  FieldsChildrenInternalContentDigest = 'fields___children___internal___contentDigest',
  FieldsChildrenInternalDescription = 'fields___children___internal___description',
  FieldsChildrenInternalFieldOwners = 'fields___children___internal___fieldOwners',
  FieldsChildrenInternalIgnoreType = 'fields___children___internal___ignoreType',
  FieldsChildrenInternalMediaType = 'fields___children___internal___mediaType',
  FieldsChildrenInternalOwner = 'fields___children___internal___owner',
  FieldsChildrenInternalType = 'fields___children___internal___type',
  FieldsChildrenParentChildren = 'fields___children___parent___children',
  FieldsChildrenParentId = 'fields___children___parent___id',
  FieldsId = 'fields___id',
  FieldsInternalContent = 'fields___internal___content',
  FieldsInternalContentDigest = 'fields___internal___contentDigest',
  FieldsInternalDescription = 'fields___internal___description',
  FieldsInternalFieldOwners = 'fields___internal___fieldOwners',
  FieldsInternalIgnoreType = 'fields___internal___ignoreType',
  FieldsInternalMediaType = 'fields___internal___mediaType',
  FieldsInternalOwner = 'fields___internal___owner',
  FieldsInternalType = 'fields___internal___type',
  FieldsParentChildren = 'fields___parent___children',
  FieldsParentChildrenChildren = 'fields___parent___children___children',
  FieldsParentChildrenId = 'fields___parent___children___id',
  FieldsParentId = 'fields___parent___id',
  FieldsParentInternalContent = 'fields___parent___internal___content',
  FieldsParentInternalContentDigest = 'fields___parent___internal___contentDigest',
  FieldsParentInternalDescription = 'fields___parent___internal___description',
  FieldsParentInternalFieldOwners = 'fields___parent___internal___fieldOwners',
  FieldsParentInternalIgnoreType = 'fields___parent___internal___ignoreType',
  FieldsParentInternalMediaType = 'fields___parent___internal___mediaType',
  FieldsParentInternalOwner = 'fields___parent___internal___owner',
  FieldsParentInternalType = 'fields___parent___internal___type',
  FieldsParentParentChildren = 'fields___parent___parent___children',
  FieldsParentParentId = 'fields___parent___parent___id',
  FieldsTags = 'fields___tags',
  HasSingletonItem = 'hasSingletonItem',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ModularBlock = 'modularBlock',
  Name = 'name',
  OrderingDirection = 'orderingDirection',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Singleton = 'singleton',
  Sortable = 'sortable',
  Tree = 'tree'
}

export type DatoCmsModelFilterInput = {
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
};

export type DatoCmsModelGroupConnection = {
  edges: Array<DatoCmsModelEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsModelSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsModelFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSchedule = Node & {
  article: Maybe<DatoCmsArticle>;
  children: Array<Node>;
  heldOn: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  locale: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  model: Maybe<DatoCmsModel>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  title: Maybe<Scalars['String']>;
  venue: Maybe<DatoCmsVenue>;
};


export type DatoCmsScheduleHeldOnArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsScheduleConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsScheduleEdge>;
  group: Array<DatoCmsScheduleGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsSchedule>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsScheduleConnectionDistinctArgs = {
  field: DatoCmsScheduleFieldsEnum;
};


export type DatoCmsScheduleConnectionGroupArgs = {
  field: DatoCmsScheduleFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsScheduleConnectionMaxArgs = {
  field: DatoCmsScheduleFieldsEnum;
};


export type DatoCmsScheduleConnectionMinArgs = {
  field: DatoCmsScheduleFieldsEnum;
};


export type DatoCmsScheduleConnectionSumArgs = {
  field: DatoCmsScheduleFieldsEnum;
};

export type DatoCmsScheduleEdge = {
  next: Maybe<DatoCmsSchedule>;
  node: DatoCmsSchedule;
  previous: Maybe<DatoCmsSchedule>;
};

export enum DatoCmsScheduleFieldsEnum {
  ArticleBodyLinks = 'article___body___links',
  ArticleBodyValue = 'article___body___value',
  ArticleCarousel = 'article___carousel',
  ArticleChildren = 'article___children',
  ArticleChildrenChildren = 'article___children___children',
  ArticleChildrenChildrenChildren = 'article___children___children___children',
  ArticleChildrenChildrenId = 'article___children___children___id',
  ArticleChildrenId = 'article___children___id',
  ArticleChildrenInternalContent = 'article___children___internal___content',
  ArticleChildrenInternalContentDigest = 'article___children___internal___contentDigest',
  ArticleChildrenInternalDescription = 'article___children___internal___description',
  ArticleChildrenInternalFieldOwners = 'article___children___internal___fieldOwners',
  ArticleChildrenInternalIgnoreType = 'article___children___internal___ignoreType',
  ArticleChildrenInternalMediaType = 'article___children___internal___mediaType',
  ArticleChildrenInternalOwner = 'article___children___internal___owner',
  ArticleChildrenInternalType = 'article___children___internal___type',
  ArticleChildrenParentChildren = 'article___children___parent___children',
  ArticleChildrenParentId = 'article___children___parent___id',
  ArticleExcerpt = 'article___excerpt',
  ArticleFeaturedImageAlt = 'article___featuredImage___alt',
  ArticleFeaturedImageAuthor = 'article___featuredImage___author',
  ArticleFeaturedImageBasename = 'article___featuredImage___basename',
  ArticleFeaturedImageBlurhash = 'article___featuredImage___blurhash',
  ArticleFeaturedImageColors = 'article___featuredImage___colors',
  ArticleFeaturedImageColorsAlpha = 'article___featuredImage___colors___alpha',
  ArticleFeaturedImageColorsBlue = 'article___featuredImage___colors___blue',
  ArticleFeaturedImageColorsGreen = 'article___featuredImage___colors___green',
  ArticleFeaturedImageColorsHex = 'article___featuredImage___colors___hex',
  ArticleFeaturedImageColorsRed = 'article___featuredImage___colors___red',
  ArticleFeaturedImageColorsRgb = 'article___featuredImage___colors___rgb',
  ArticleFeaturedImageCopyright = 'article___featuredImage___copyright',
  ArticleFeaturedImageCreatedAt = 'article___featuredImage___createdAt',
  ArticleFeaturedImageCustomData = 'article___featuredImage___customData',
  ArticleFeaturedImageExifInfo = 'article___featuredImage___exifInfo',
  ArticleFeaturedImageFilename = 'article___featuredImage___filename',
  ArticleFeaturedImageFixedAspectRatio = 'article___featuredImage___fixed___aspectRatio',
  ArticleFeaturedImageFixedBase64 = 'article___featuredImage___fixed___base64',
  ArticleFeaturedImageFixedHeight = 'article___featuredImage___fixed___height',
  ArticleFeaturedImageFixedSizes = 'article___featuredImage___fixed___sizes',
  ArticleFeaturedImageFixedSrc = 'article___featuredImage___fixed___src',
  ArticleFeaturedImageFixedSrcSet = 'article___featuredImage___fixed___srcSet',
  ArticleFeaturedImageFixedTracedSvg = 'article___featuredImage___fixed___tracedSVG',
  ArticleFeaturedImageFixedWidth = 'article___featuredImage___fixed___width',
  ArticleFeaturedImageFluidAspectRatio = 'article___featuredImage___fluid___aspectRatio',
  ArticleFeaturedImageFluidBase64 = 'article___featuredImage___fluid___base64',
  ArticleFeaturedImageFluidHeight = 'article___featuredImage___fluid___height',
  ArticleFeaturedImageFluidSizes = 'article___featuredImage___fluid___sizes',
  ArticleFeaturedImageFluidSrc = 'article___featuredImage___fluid___src',
  ArticleFeaturedImageFluidSrcSet = 'article___featuredImage___fluid___srcSet',
  ArticleFeaturedImageFluidTracedSvg = 'article___featuredImage___fluid___tracedSVG',
  ArticleFeaturedImageFluidWidth = 'article___featuredImage___fluid___width',
  ArticleFeaturedImageFocalPointX = 'article___featuredImage___focalPoint___x',
  ArticleFeaturedImageFocalPointY = 'article___featuredImage___focalPoint___y',
  ArticleFeaturedImageFormat = 'article___featuredImage___format',
  ArticleFeaturedImageGatsbyImageData = 'article___featuredImage___gatsbyImageData',
  ArticleFeaturedImageHeight = 'article___featuredImage___height',
  ArticleFeaturedImageIsImage = 'article___featuredImage___isImage',
  ArticleFeaturedImageMimeType = 'article___featuredImage___mimeType',
  ArticleFeaturedImageNotes = 'article___featuredImage___notes',
  ArticleFeaturedImageOriginalId = 'article___featuredImage___originalId',
  ArticleFeaturedImagePath = 'article___featuredImage___path',
  ArticleFeaturedImageResolutionsAspectRatio = 'article___featuredImage___resolutions___aspectRatio',
  ArticleFeaturedImageResolutionsBase64 = 'article___featuredImage___resolutions___base64',
  ArticleFeaturedImageResolutionsHeight = 'article___featuredImage___resolutions___height',
  ArticleFeaturedImageResolutionsSizes = 'article___featuredImage___resolutions___sizes',
  ArticleFeaturedImageResolutionsSrc = 'article___featuredImage___resolutions___src',
  ArticleFeaturedImageResolutionsSrcSet = 'article___featuredImage___resolutions___srcSet',
  ArticleFeaturedImageResolutionsTracedSvg = 'article___featuredImage___resolutions___tracedSVG',
  ArticleFeaturedImageResolutionsWidth = 'article___featuredImage___resolutions___width',
  ArticleFeaturedImageSize = 'article___featuredImage___size',
  ArticleFeaturedImageSizesAspectRatio = 'article___featuredImage___sizes___aspectRatio',
  ArticleFeaturedImageSizesBase64 = 'article___featuredImage___sizes___base64',
  ArticleFeaturedImageSizesHeight = 'article___featuredImage___sizes___height',
  ArticleFeaturedImageSizesSizes = 'article___featuredImage___sizes___sizes',
  ArticleFeaturedImageSizesSrc = 'article___featuredImage___sizes___src',
  ArticleFeaturedImageSizesSrcSet = 'article___featuredImage___sizes___srcSet',
  ArticleFeaturedImageSizesTracedSvg = 'article___featuredImage___sizes___tracedSVG',
  ArticleFeaturedImageSizesWidth = 'article___featuredImage___sizes___width',
  ArticleFeaturedImageSmartTags = 'article___featuredImage___smartTags',
  ArticleFeaturedImageTags = 'article___featuredImage___tags',
  ArticleFeaturedImageTitle = 'article___featuredImage___title',
  ArticleFeaturedImageUrl = 'article___featuredImage___url',
  ArticleFeaturedImageVideoDuration = 'article___featuredImage___video___duration',
  ArticleFeaturedImageVideoFrameRate = 'article___featuredImage___video___frameRate',
  ArticleFeaturedImageVideoMp4Url = 'article___featuredImage___video___mp4Url',
  ArticleFeaturedImageVideoMuxPlaybackId = 'article___featuredImage___video___muxPlaybackId',
  ArticleFeaturedImageVideoStreamingUrl = 'article___featuredImage___video___streamingUrl',
  ArticleFeaturedImageVideoThumbnailUrl = 'article___featuredImage___video___thumbnailUrl',
  ArticleFeaturedImageWidth = 'article___featuredImage___width',
  ArticleId = 'article___id',
  ArticleInternalContent = 'article___internal___content',
  ArticleInternalContentDigest = 'article___internal___contentDigest',
  ArticleInternalDescription = 'article___internal___description',
  ArticleInternalFieldOwners = 'article___internal___fieldOwners',
  ArticleInternalIgnoreType = 'article___internal___ignoreType',
  ArticleInternalMediaType = 'article___internal___mediaType',
  ArticleInternalOwner = 'article___internal___owner',
  ArticleInternalType = 'article___internal___type',
  ArticleLocale = 'article___locale',
  ArticleMetaCreatedAt = 'article___meta___createdAt',
  ArticleMetaFirstPublishedAt = 'article___meta___firstPublishedAt',
  ArticleMetaIsValid = 'article___meta___isValid',
  ArticleMetaPublishedAt = 'article___meta___publishedAt',
  ArticleMetaStatus = 'article___meta___status',
  ArticleMetaUpdatedAt = 'article___meta___updatedAt',
  ArticleModelAllLocalesRequired = 'article___model___allLocalesRequired',
  ArticleModelApiKey = 'article___model___apiKey',
  ArticleModelChildren = 'article___model___children',
  ArticleModelChildrenChildren = 'article___model___children___children',
  ArticleModelChildrenId = 'article___model___children___id',
  ArticleModelCollectionAppeareance = 'article___model___collectionAppeareance',
  ArticleModelDraftModeActive = 'article___model___draftModeActive',
  ArticleModelFieldsChildren = 'article___model___fields___children',
  ArticleModelFieldsId = 'article___model___fields___id',
  ArticleModelFieldsTags = 'article___model___fields___tags',
  ArticleModelHasSingletonItem = 'article___model___hasSingletonItem',
  ArticleModelId = 'article___model___id',
  ArticleModelInternalContent = 'article___model___internal___content',
  ArticleModelInternalContentDigest = 'article___model___internal___contentDigest',
  ArticleModelInternalDescription = 'article___model___internal___description',
  ArticleModelInternalFieldOwners = 'article___model___internal___fieldOwners',
  ArticleModelInternalIgnoreType = 'article___model___internal___ignoreType',
  ArticleModelInternalMediaType = 'article___model___internal___mediaType',
  ArticleModelInternalOwner = 'article___model___internal___owner',
  ArticleModelInternalType = 'article___model___internal___type',
  ArticleModelModularBlock = 'article___model___modularBlock',
  ArticleModelName = 'article___model___name',
  ArticleModelOrderingDirection = 'article___model___orderingDirection',
  ArticleModelOriginalId = 'article___model___originalId',
  ArticleModelParentChildren = 'article___model___parent___children',
  ArticleModelParentId = 'article___model___parent___id',
  ArticleModelSingleton = 'article___model___singleton',
  ArticleModelSortable = 'article___model___sortable',
  ArticleModelTree = 'article___model___tree',
  ArticleOriginalId = 'article___originalId',
  ArticleParentChildren = 'article___parent___children',
  ArticleParentChildrenChildren = 'article___parent___children___children',
  ArticleParentChildrenId = 'article___parent___children___id',
  ArticleParentId = 'article___parent___id',
  ArticleParentInternalContent = 'article___parent___internal___content',
  ArticleParentInternalContentDigest = 'article___parent___internal___contentDigest',
  ArticleParentInternalDescription = 'article___parent___internal___description',
  ArticleParentInternalFieldOwners = 'article___parent___internal___fieldOwners',
  ArticleParentInternalIgnoreType = 'article___parent___internal___ignoreType',
  ArticleParentInternalMediaType = 'article___parent___internal___mediaType',
  ArticleParentInternalOwner = 'article___parent___internal___owner',
  ArticleParentInternalType = 'article___parent___internal___type',
  ArticleParentParentChildren = 'article___parent___parent___children',
  ArticleParentParentId = 'article___parent___parent___id',
  ArticleSeoMetaTagsChildren = 'article___seoMetaTags___children',
  ArticleSeoMetaTagsChildrenChildren = 'article___seoMetaTags___children___children',
  ArticleSeoMetaTagsChildrenId = 'article___seoMetaTags___children___id',
  ArticleSeoMetaTagsId = 'article___seoMetaTags___id',
  ArticleSeoMetaTagsInternalContent = 'article___seoMetaTags___internal___content',
  ArticleSeoMetaTagsInternalContentDigest = 'article___seoMetaTags___internal___contentDigest',
  ArticleSeoMetaTagsInternalDescription = 'article___seoMetaTags___internal___description',
  ArticleSeoMetaTagsInternalFieldOwners = 'article___seoMetaTags___internal___fieldOwners',
  ArticleSeoMetaTagsInternalIgnoreType = 'article___seoMetaTags___internal___ignoreType',
  ArticleSeoMetaTagsInternalMediaType = 'article___seoMetaTags___internal___mediaType',
  ArticleSeoMetaTagsInternalOwner = 'article___seoMetaTags___internal___owner',
  ArticleSeoMetaTagsInternalType = 'article___seoMetaTags___internal___type',
  ArticleSeoMetaTagsParentChildren = 'article___seoMetaTags___parent___children',
  ArticleSeoMetaTagsParentId = 'article___seoMetaTags___parent___id',
  ArticleSeoMetaTagsTags = 'article___seoMetaTags___tags',
  ArticleTitle = 'article___title',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  HeldOn = 'heldOn',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MetaCreatedAt = 'meta___createdAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaPublishedAt = 'meta___publishedAt',
  MetaStatus = 'meta___status',
  MetaUpdatedAt = 'meta___updatedAt',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelApiKey = 'model___apiKey',
  ModelChildren = 'model___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenId = 'model___children___id',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsTags = 'model___fields___tags',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelId = 'model___id',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  ModelModularBlock = 'model___modularBlock',
  ModelName = 'model___name',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelOriginalId = 'model___originalId',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentId = 'model___parent___id',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentParentId = 'model___parent___parent___id',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelTree = 'model___tree',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  Title = 'title',
  VenueChildren = 'venue___children',
  VenueChildrenChildren = 'venue___children___children',
  VenueChildrenChildrenChildren = 'venue___children___children___children',
  VenueChildrenChildrenId = 'venue___children___children___id',
  VenueChildrenId = 'venue___children___id',
  VenueChildrenInternalContent = 'venue___children___internal___content',
  VenueChildrenInternalContentDigest = 'venue___children___internal___contentDigest',
  VenueChildrenInternalDescription = 'venue___children___internal___description',
  VenueChildrenInternalFieldOwners = 'venue___children___internal___fieldOwners',
  VenueChildrenInternalIgnoreType = 'venue___children___internal___ignoreType',
  VenueChildrenInternalMediaType = 'venue___children___internal___mediaType',
  VenueChildrenInternalOwner = 'venue___children___internal___owner',
  VenueChildrenInternalType = 'venue___children___internal___type',
  VenueChildrenParentChildren = 'venue___children___parent___children',
  VenueChildrenParentId = 'venue___children___parent___id',
  VenueId = 'venue___id',
  VenueInternalContent = 'venue___internal___content',
  VenueInternalContentDigest = 'venue___internal___contentDigest',
  VenueInternalDescription = 'venue___internal___description',
  VenueInternalFieldOwners = 'venue___internal___fieldOwners',
  VenueInternalIgnoreType = 'venue___internal___ignoreType',
  VenueInternalMediaType = 'venue___internal___mediaType',
  VenueInternalOwner = 'venue___internal___owner',
  VenueInternalType = 'venue___internal___type',
  VenueLocale = 'venue___locale',
  VenueMetaCreatedAt = 'venue___meta___createdAt',
  VenueMetaFirstPublishedAt = 'venue___meta___firstPublishedAt',
  VenueMetaIsValid = 'venue___meta___isValid',
  VenueMetaPublishedAt = 'venue___meta___publishedAt',
  VenueMetaStatus = 'venue___meta___status',
  VenueMetaUpdatedAt = 'venue___meta___updatedAt',
  VenueModelAllLocalesRequired = 'venue___model___allLocalesRequired',
  VenueModelApiKey = 'venue___model___apiKey',
  VenueModelChildren = 'venue___model___children',
  VenueModelChildrenChildren = 'venue___model___children___children',
  VenueModelChildrenId = 'venue___model___children___id',
  VenueModelCollectionAppeareance = 'venue___model___collectionAppeareance',
  VenueModelDraftModeActive = 'venue___model___draftModeActive',
  VenueModelFieldsChildren = 'venue___model___fields___children',
  VenueModelFieldsId = 'venue___model___fields___id',
  VenueModelFieldsTags = 'venue___model___fields___tags',
  VenueModelHasSingletonItem = 'venue___model___hasSingletonItem',
  VenueModelId = 'venue___model___id',
  VenueModelInternalContent = 'venue___model___internal___content',
  VenueModelInternalContentDigest = 'venue___model___internal___contentDigest',
  VenueModelInternalDescription = 'venue___model___internal___description',
  VenueModelInternalFieldOwners = 'venue___model___internal___fieldOwners',
  VenueModelInternalIgnoreType = 'venue___model___internal___ignoreType',
  VenueModelInternalMediaType = 'venue___model___internal___mediaType',
  VenueModelInternalOwner = 'venue___model___internal___owner',
  VenueModelInternalType = 'venue___model___internal___type',
  VenueModelModularBlock = 'venue___model___modularBlock',
  VenueModelName = 'venue___model___name',
  VenueModelOrderingDirection = 'venue___model___orderingDirection',
  VenueModelOriginalId = 'venue___model___originalId',
  VenueModelParentChildren = 'venue___model___parent___children',
  VenueModelParentId = 'venue___model___parent___id',
  VenueModelSingleton = 'venue___model___singleton',
  VenueModelSortable = 'venue___model___sortable',
  VenueModelTree = 'venue___model___tree',
  VenueName = 'venue___name',
  VenueOriginalId = 'venue___originalId',
  VenueParentChildren = 'venue___parent___children',
  VenueParentChildrenChildren = 'venue___parent___children___children',
  VenueParentChildrenId = 'venue___parent___children___id',
  VenueParentId = 'venue___parent___id',
  VenueParentInternalContent = 'venue___parent___internal___content',
  VenueParentInternalContentDigest = 'venue___parent___internal___contentDigest',
  VenueParentInternalDescription = 'venue___parent___internal___description',
  VenueParentInternalFieldOwners = 'venue___parent___internal___fieldOwners',
  VenueParentInternalIgnoreType = 'venue___parent___internal___ignoreType',
  VenueParentInternalMediaType = 'venue___parent___internal___mediaType',
  VenueParentInternalOwner = 'venue___parent___internal___owner',
  VenueParentInternalType = 'venue___parent___internal___type',
  VenueParentParentChildren = 'venue___parent___parent___children',
  VenueParentParentId = 'venue___parent___parent___id',
  VenueSeoMetaTagsChildren = 'venue___seoMetaTags___children',
  VenueSeoMetaTagsChildrenChildren = 'venue___seoMetaTags___children___children',
  VenueSeoMetaTagsChildrenId = 'venue___seoMetaTags___children___id',
  VenueSeoMetaTagsId = 'venue___seoMetaTags___id',
  VenueSeoMetaTagsInternalContent = 'venue___seoMetaTags___internal___content',
  VenueSeoMetaTagsInternalContentDigest = 'venue___seoMetaTags___internal___contentDigest',
  VenueSeoMetaTagsInternalDescription = 'venue___seoMetaTags___internal___description',
  VenueSeoMetaTagsInternalFieldOwners = 'venue___seoMetaTags___internal___fieldOwners',
  VenueSeoMetaTagsInternalIgnoreType = 'venue___seoMetaTags___internal___ignoreType',
  VenueSeoMetaTagsInternalMediaType = 'venue___seoMetaTags___internal___mediaType',
  VenueSeoMetaTagsInternalOwner = 'venue___seoMetaTags___internal___owner',
  VenueSeoMetaTagsInternalType = 'venue___seoMetaTags___internal___type',
  VenueSeoMetaTagsParentChildren = 'venue___seoMetaTags___parent___children',
  VenueSeoMetaTagsParentId = 'venue___seoMetaTags___parent___id',
  VenueSeoMetaTagsTags = 'venue___seoMetaTags___tags',
  VenueUrl = 'venue___url'
}

export type DatoCmsScheduleFilterInput = {
  article?: Maybe<DatoCmsArticleFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  heldOn?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  venue?: Maybe<DatoCmsVenueFilterInput>;
};

export type DatoCmsScheduleGroupConnection = {
  edges: Array<DatoCmsScheduleEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsSchedule>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsScheduleSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsScheduleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSeoField = {
  description: Maybe<Scalars['String']>;
  image: Maybe<DatoCmsAsset>;
  title: Maybe<Scalars['String']>;
  twitterCard: Maybe<Scalars['String']>;
};

export type DatoCmsSeoFieldFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsAssetFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitterCard?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsSeoMetaTags = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  tags: Maybe<Scalars['JSON']>;
};

export type DatoCmsSeoMetaTagsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsSeoMetaTagsConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionGroupArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsSeoMetaTagsConnectionMaxArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionMinArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionSumArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsEdge = {
  next: Maybe<DatoCmsSeoMetaTags>;
  node: DatoCmsSeoMetaTags;
  previous: Maybe<DatoCmsSeoMetaTags>;
};

export enum DatoCmsSeoMetaTagsFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Tags = 'tags'
}

export type DatoCmsSeoMetaTagsFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  tags?: Maybe<JsonQueryOperatorInput>;
};

export type DatoCmsSeoMetaTagsGroupConnection = {
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsSeoMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSite = Node & {
  children: Array<Node>;
  domain: Maybe<Scalars['String']>;
  faviconMetaTags: Maybe<DatoCmsFaviconMetaTags>;
  globalSeo: Maybe<DatoCmsGlobalSeo>;
  id: Scalars['ID'];
  internal: Internal;
  internalDomain: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  locales: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Maybe<Scalars['String']>;
  noIndex: Maybe<Scalars['Boolean']>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
};

export type DatoCmsSiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsSiteEdge>;
  group: Array<DatoCmsSiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionGroupArgs = {
  field: DatoCmsSiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsSiteConnectionMaxArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionMinArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionSumArgs = {
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteEdge = {
  next: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous: Maybe<DatoCmsSite>;
};

export enum DatoCmsSiteFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Domain = 'domain',
  FaviconMetaTagsChildren = 'faviconMetaTags___children',
  FaviconMetaTagsChildrenChildren = 'faviconMetaTags___children___children',
  FaviconMetaTagsChildrenChildrenChildren = 'faviconMetaTags___children___children___children',
  FaviconMetaTagsChildrenChildrenId = 'faviconMetaTags___children___children___id',
  FaviconMetaTagsChildrenId = 'faviconMetaTags___children___id',
  FaviconMetaTagsChildrenInternalContent = 'faviconMetaTags___children___internal___content',
  FaviconMetaTagsChildrenInternalContentDigest = 'faviconMetaTags___children___internal___contentDigest',
  FaviconMetaTagsChildrenInternalDescription = 'faviconMetaTags___children___internal___description',
  FaviconMetaTagsChildrenInternalFieldOwners = 'faviconMetaTags___children___internal___fieldOwners',
  FaviconMetaTagsChildrenInternalIgnoreType = 'faviconMetaTags___children___internal___ignoreType',
  FaviconMetaTagsChildrenInternalMediaType = 'faviconMetaTags___children___internal___mediaType',
  FaviconMetaTagsChildrenInternalOwner = 'faviconMetaTags___children___internal___owner',
  FaviconMetaTagsChildrenInternalType = 'faviconMetaTags___children___internal___type',
  FaviconMetaTagsChildrenParentChildren = 'faviconMetaTags___children___parent___children',
  FaviconMetaTagsChildrenParentId = 'faviconMetaTags___children___parent___id',
  FaviconMetaTagsId = 'faviconMetaTags___id',
  FaviconMetaTagsInternalContent = 'faviconMetaTags___internal___content',
  FaviconMetaTagsInternalContentDigest = 'faviconMetaTags___internal___contentDigest',
  FaviconMetaTagsInternalDescription = 'faviconMetaTags___internal___description',
  FaviconMetaTagsInternalFieldOwners = 'faviconMetaTags___internal___fieldOwners',
  FaviconMetaTagsInternalIgnoreType = 'faviconMetaTags___internal___ignoreType',
  FaviconMetaTagsInternalMediaType = 'faviconMetaTags___internal___mediaType',
  FaviconMetaTagsInternalOwner = 'faviconMetaTags___internal___owner',
  FaviconMetaTagsInternalType = 'faviconMetaTags___internal___type',
  FaviconMetaTagsParentChildren = 'faviconMetaTags___parent___children',
  FaviconMetaTagsParentChildrenChildren = 'faviconMetaTags___parent___children___children',
  FaviconMetaTagsParentChildrenId = 'faviconMetaTags___parent___children___id',
  FaviconMetaTagsParentId = 'faviconMetaTags___parent___id',
  FaviconMetaTagsParentInternalContent = 'faviconMetaTags___parent___internal___content',
  FaviconMetaTagsParentInternalContentDigest = 'faviconMetaTags___parent___internal___contentDigest',
  FaviconMetaTagsParentInternalDescription = 'faviconMetaTags___parent___internal___description',
  FaviconMetaTagsParentInternalFieldOwners = 'faviconMetaTags___parent___internal___fieldOwners',
  FaviconMetaTagsParentInternalIgnoreType = 'faviconMetaTags___parent___internal___ignoreType',
  FaviconMetaTagsParentInternalMediaType = 'faviconMetaTags___parent___internal___mediaType',
  FaviconMetaTagsParentInternalOwner = 'faviconMetaTags___parent___internal___owner',
  FaviconMetaTagsParentInternalType = 'faviconMetaTags___parent___internal___type',
  FaviconMetaTagsParentParentChildren = 'faviconMetaTags___parent___parent___children',
  FaviconMetaTagsParentParentId = 'faviconMetaTags___parent___parent___id',
  FaviconMetaTagsTags = 'faviconMetaTags___tags',
  GlobalSeoFacebookPageUrl = 'globalSeo___facebookPageUrl',
  GlobalSeoFallbackSeoDescription = 'globalSeo___fallbackSeo___description',
  GlobalSeoFallbackSeoImageAuthor = 'globalSeo___fallbackSeo___image___author',
  GlobalSeoFallbackSeoImageBasename = 'globalSeo___fallbackSeo___image___basename',
  GlobalSeoFallbackSeoImageBlurhash = 'globalSeo___fallbackSeo___image___blurhash',
  GlobalSeoFallbackSeoImageChildren = 'globalSeo___fallbackSeo___image___children',
  GlobalSeoFallbackSeoImageColors = 'globalSeo___fallbackSeo___image___colors',
  GlobalSeoFallbackSeoImageCopyright = 'globalSeo___fallbackSeo___image___copyright',
  GlobalSeoFallbackSeoImageCreatedAt = 'globalSeo___fallbackSeo___image___createdAt',
  GlobalSeoFallbackSeoImageExifInfo = 'globalSeo___fallbackSeo___image___exifInfo',
  GlobalSeoFallbackSeoImageFilename = 'globalSeo___fallbackSeo___image___filename',
  GlobalSeoFallbackSeoImageFormat = 'globalSeo___fallbackSeo___image___format',
  GlobalSeoFallbackSeoImageGatsbyImageData = 'globalSeo___fallbackSeo___image___gatsbyImageData',
  GlobalSeoFallbackSeoImageHeight = 'globalSeo___fallbackSeo___image___height',
  GlobalSeoFallbackSeoImageId = 'globalSeo___fallbackSeo___image___id',
  GlobalSeoFallbackSeoImageIsImage = 'globalSeo___fallbackSeo___image___isImage',
  GlobalSeoFallbackSeoImageMimeType = 'globalSeo___fallbackSeo___image___mimeType',
  GlobalSeoFallbackSeoImageNotes = 'globalSeo___fallbackSeo___image___notes',
  GlobalSeoFallbackSeoImageOriginalId = 'globalSeo___fallbackSeo___image___originalId',
  GlobalSeoFallbackSeoImagePath = 'globalSeo___fallbackSeo___image___path',
  GlobalSeoFallbackSeoImageSize = 'globalSeo___fallbackSeo___image___size',
  GlobalSeoFallbackSeoImageSmartTags = 'globalSeo___fallbackSeo___image___smartTags',
  GlobalSeoFallbackSeoImageTags = 'globalSeo___fallbackSeo___image___tags',
  GlobalSeoFallbackSeoImageUrl = 'globalSeo___fallbackSeo___image___url',
  GlobalSeoFallbackSeoImageWidth = 'globalSeo___fallbackSeo___image___width',
  GlobalSeoFallbackSeoTitle = 'globalSeo___fallbackSeo___title',
  GlobalSeoFallbackSeoTwitterCard = 'globalSeo___fallbackSeo___twitterCard',
  GlobalSeoSiteName = 'globalSeo___siteName',
  GlobalSeoTitleSuffix = 'globalSeo___titleSuffix',
  GlobalSeoTwitterAccount = 'globalSeo___twitterAccount',
  Id = 'id',
  InternalDomain = 'internalDomain',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  Locales = 'locales',
  Name = 'name',
  NoIndex = 'noIndex',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type DatoCmsSiteFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type DatoCmsSiteGroupConnection = {
  edges: Array<DatoCmsSiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsSiteSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsTextNode = Node & {
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type DatoCmsTextNodeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsTextNodeEdge>;
  group: Array<DatoCmsTextNodeGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionGroupArgs = {
  field: DatoCmsTextNodeFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsTextNodeConnectionMaxArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionMinArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionSumArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeEdge = {
  next: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous: Maybe<DatoCmsTextNode>;
};

export enum DatoCmsTextNodeFieldsEnum {
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type DatoCmsTextNodeFilterInput = {
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type DatoCmsTextNodeGroupConnection = {
  edges: Array<DatoCmsTextNodeEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsVenue = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  locale: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  model: Maybe<DatoCmsModel>;
  name: Maybe<Scalars['String']>;
  originalId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  url: Maybe<Scalars['String']>;
};

export type DatoCmsVenueConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DatoCmsVenueEdge>;
  group: Array<DatoCmsVenueGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<DatoCmsVenue>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DatoCmsVenueConnectionDistinctArgs = {
  field: DatoCmsVenueFieldsEnum;
};


export type DatoCmsVenueConnectionGroupArgs = {
  field: DatoCmsVenueFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DatoCmsVenueConnectionMaxArgs = {
  field: DatoCmsVenueFieldsEnum;
};


export type DatoCmsVenueConnectionMinArgs = {
  field: DatoCmsVenueFieldsEnum;
};


export type DatoCmsVenueConnectionSumArgs = {
  field: DatoCmsVenueFieldsEnum;
};

export type DatoCmsVenueEdge = {
  next: Maybe<DatoCmsVenue>;
  node: DatoCmsVenue;
  previous: Maybe<DatoCmsVenue>;
};

export enum DatoCmsVenueFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MetaCreatedAt = 'meta___createdAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaPublishedAt = 'meta___publishedAt',
  MetaStatus = 'meta___status',
  MetaUpdatedAt = 'meta___updatedAt',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelApiKey = 'model___apiKey',
  ModelChildren = 'model___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenId = 'model___children___id',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsTags = 'model___fields___tags',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelId = 'model___id',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  ModelModularBlock = 'model___modularBlock',
  ModelName = 'model___name',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelOriginalId = 'model___originalId',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentId = 'model___parent___id',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentParentId = 'model___parent___parent___id',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelTree = 'model___tree',
  Name = 'name',
  OriginalId = 'originalId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  Url = 'url'
}

export type DatoCmsVenueFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsVenueGroupConnection = {
  edges: Array<DatoCmsVenueEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<DatoCmsVenue>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatoCmsVenueSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsVenueFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsVideoField = {
  height: Maybe<Scalars['Int']>;
  provider: Maybe<Scalars['String']>;
  providerUid: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type DatoCmsVideoFieldFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  provider?: Maybe<StringQueryOperatorInput>;
  providerUid?: Maybe<StringQueryOperatorInput>;
  thumbnailUrl?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export enum DatoImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  maxWidth?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: Maybe<Scalars['Float']>;
  avifOptions?: Maybe<AvifOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
  blurredOptions?: Maybe<BlurredOptions>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  height?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder?: Maybe<ImagePlaceholder>;
  pngOptions?: Maybe<PngOptions>;
  quality?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  tracedSVGOptions?: Maybe<Potrace>;
  transformOptions?: Maybe<TransformOptions>;
  webpOptions?: Maybe<WebPOptions>;
  width?: Maybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars['String']>;
  base64?: Maybe<Scalars['Boolean']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG?: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ImageSharpOriginal = {
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  ne?: Maybe<Scalars['JSON']>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type MarkdownHeading = {
  depth: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  children: Array<Node>;
  excerpt: Maybe<Scalars['String']>;
  excerptAst: Maybe<Scalars['JSON']>;
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  tableOfContents: Maybe<Scalars['String']>;
  timeToRead: Maybe<Scalars['Int']>;
  wordCount: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: Maybe<MarkdownExcerptFormats>;
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  pathToSlugField?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export type MarkdownRemarkFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: Maybe<Scalars['Float']>;
  background?: Maybe<Scalars['String']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  turdSize?: Maybe<Scalars['Float']>;
  turnPolicy?: Maybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  allDatoCmsAbout: DatoCmsAboutConnection;
  allDatoCmsArticle: DatoCmsArticleConnection;
  allDatoCmsAsset: DatoCmsAssetConnection;
  allDatoCmsExternalvideo: DatoCmsExternalvideoConnection;
  allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  allDatoCmsField: DatoCmsFieldConnection;
  allDatoCmsImage: DatoCmsImageConnection;
  allDatoCmsModel: DatoCmsModelConnection;
  allDatoCmsSchedule: DatoCmsScheduleConnection;
  allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  allDatoCmsSite: DatoCmsSiteConnection;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  allDatoCmsVenue: DatoCmsVenueConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  datoCmsAbout: Maybe<DatoCmsAbout>;
  datoCmsArticle: Maybe<DatoCmsArticle>;
  datoCmsAsset: Maybe<DatoCmsAsset>;
  datoCmsExternalvideo: Maybe<DatoCmsExternalvideo>;
  datoCmsFaviconMetaTags: Maybe<DatoCmsFaviconMetaTags>;
  datoCmsField: Maybe<DatoCmsField>;
  datoCmsImage: Maybe<DatoCmsImage>;
  datoCmsModel: Maybe<DatoCmsModel>;
  datoCmsSchedule: Maybe<DatoCmsSchedule>;
  datoCmsSeoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  datoCmsSite: Maybe<DatoCmsSite>;
  datoCmsTextNode: Maybe<DatoCmsTextNode>;
  datoCmsVenue: Maybe<DatoCmsVenue>;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  imageSharp: Maybe<ImageSharp>;
  markdownRemark: Maybe<MarkdownRemark>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};


export type QueryAllDatoCmsAboutArgs = {
  filter?: Maybe<DatoCmsAboutFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsAboutSortInput>;
};


export type QueryAllDatoCmsArticleArgs = {
  filter?: Maybe<DatoCmsArticleFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsArticleSortInput>;
};


export type QueryAllDatoCmsAssetArgs = {
  filter?: Maybe<DatoCmsAssetFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsAssetSortInput>;
};


export type QueryAllDatoCmsExternalvideoArgs = {
  filter?: Maybe<DatoCmsExternalvideoFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsExternalvideoSortInput>;
};


export type QueryAllDatoCmsFaviconMetaTagsArgs = {
  filter?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsFaviconMetaTagsSortInput>;
};


export type QueryAllDatoCmsFieldArgs = {
  filter?: Maybe<DatoCmsFieldFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsFieldSortInput>;
};


export type QueryAllDatoCmsImageArgs = {
  filter?: Maybe<DatoCmsImageFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsImageSortInput>;
};


export type QueryAllDatoCmsModelArgs = {
  filter?: Maybe<DatoCmsModelFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsModelSortInput>;
};


export type QueryAllDatoCmsScheduleArgs = {
  filter?: Maybe<DatoCmsScheduleFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsScheduleSortInput>;
};


export type QueryAllDatoCmsSeoMetaTagsArgs = {
  filter?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsSeoMetaTagsSortInput>;
};


export type QueryAllDatoCmsSiteArgs = {
  filter?: Maybe<DatoCmsSiteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsSiteSortInput>;
};


export type QueryAllDatoCmsTextNodeArgs = {
  filter?: Maybe<DatoCmsTextNodeFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsTextNodeSortInput>;
};


export type QueryAllDatoCmsVenueArgs = {
  filter?: Maybe<DatoCmsVenueFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DatoCmsVenueSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<ImageSharpSortInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<MarkdownRemarkSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePluginSortInput>;
};


export type QueryDatoCmsAboutArgs = {
  body?: Maybe<StringQueryOperatorInput>;
  bodyNode?: Maybe<DatoCmsTextNodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
};


export type QueryDatoCmsArticleArgs = {
  body?: Maybe<DatoCmsDatoCmsArticleBodyStructuredTextFilterInput>;
  carousel?: Maybe<BooleanQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<DatoCmsFileFieldFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
};


export type QueryDatoCmsAssetArgs = {
  author?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  format?: Maybe<StringQueryOperatorInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  width?: Maybe<IntQueryOperatorInput>;
};


export type QueryDatoCmsExternalvideoArgs = {
  children?: Maybe<NodeFilterListInput>;
  externalVideo?: Maybe<DatoCmsVideoFieldFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
};


export type QueryDatoCmsFaviconMetaTagsArgs = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  tags?: Maybe<JsonQueryOperatorInput>;
};


export type QueryDatoCmsFieldArgs = {
  apiKey?: Maybe<StringQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  position?: Maybe<IntQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
};


export type QueryDatoCmsImageArgs = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsFileFieldFilterInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
};


export type QueryDatoCmsModelArgs = {
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
};


export type QueryDatoCmsScheduleArgs = {
  article?: Maybe<DatoCmsArticleFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  heldOn?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  venue?: Maybe<DatoCmsVenueFilterInput>;
};


export type QueryDatoCmsSeoMetaTagsArgs = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  tags?: Maybe<JsonQueryOperatorInput>;
};


export type QueryDatoCmsSiteArgs = {
  children?: Maybe<NodeFilterListInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
};


export type QueryDatoCmsTextNodeArgs = {
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};


export type QueryDatoCmsVenueArgs = {
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: Maybe<NodeFilterListInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  children?: Maybe<NodeFilterListInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>;
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteURL',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTwitterUserName = 'siteMetadata___twitterUserName'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  functionRoute?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  context: Maybe<SitePageContext>;
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  matchPath: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  next: Maybe<SitePageContextNext>;
  node: Maybe<SitePageContextNode>;
  previous: Maybe<SitePageContextPrevious>;
};

export type SitePageContextFilterInput = {
  next?: Maybe<SitePageContextNextFilterInput>;
  node?: Maybe<SitePageContextNodeFilterInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
};

export type SitePageContextNext = {
  originalId: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SitePageContextNextFilterInput = {
  originalId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNode = {
  body: Maybe<SitePageContextNodeBody>;
  excerpt: Maybe<Scalars['String']>;
  featuredImage: Maybe<SitePageContextNodeFeaturedImage>;
  meta: Maybe<SitePageContextNodeMeta>;
  originalId: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBody = {
  blocks: Maybe<Array<Maybe<SitePageContextNodeBodyBlocks>>>;
  value: Maybe<SitePageContextNodeBodyValue>;
};

export type SitePageContextNodeBodyBlocks = {
  _xtypename: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<SitePageContextNodeBodyBlocksImage>;
};

export type SitePageContextNodeBodyBlocksFilterInput = {
  _xtypename?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SitePageContextNodeBodyBlocksImageFilterInput>;
};

export type SitePageContextNodeBodyBlocksFilterListInput = {
  elemMatch?: Maybe<SitePageContextNodeBodyBlocksFilterInput>;
};

export type SitePageContextNodeBodyBlocksImage = {
  alt: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyBlocksImageFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyFilterInput = {
  blocks?: Maybe<SitePageContextNodeBodyBlocksFilterListInput>;
  value?: Maybe<SitePageContextNodeBodyValueFilterInput>;
};

export type SitePageContextNodeBodyValue = {
  document: Maybe<SitePageContextNodeBodyValueDocument>;
  schema: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocument = {
  children: Maybe<Array<Maybe<SitePageContextNodeBodyValueDocumentChildren>>>;
  type: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocumentChildren = {
  children: Maybe<Array<Maybe<SitePageContextNodeBodyValueDocumentChildrenChildren>>>;
  item: Maybe<Scalars['String']>;
  level: Maybe<Scalars['Int']>;
  style: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildren = {
  children: Maybe<Array<Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenChildren>>>;
  marks: Maybe<Array<Maybe<Scalars['String']>>>;
  meta: Maybe<Array<Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenMeta>>>;
  type: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenChildren = {
  children: Maybe<Array<Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenChildren>>>;
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenChildren = {
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenFilterInput = {
  children?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenChildrenFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenFilterInput = {
  children?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenChildrenFilterListInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenMetaFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenFilterInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenMeta = {
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenMetaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenChildrenMetaFilterListInput = {
  elemMatch?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenMetaFilterInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenFilterInput = {
  children?: Maybe<SitePageContextNodeBodyValueDocumentChildrenChildrenFilterListInput>;
  item?: Maybe<StringQueryOperatorInput>;
  level?: Maybe<IntQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyValueDocumentChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextNodeBodyValueDocumentChildrenFilterInput>;
};

export type SitePageContextNodeBodyValueDocumentFilterInput = {
  children?: Maybe<SitePageContextNodeBodyValueDocumentChildrenFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeBodyValueFilterInput = {
  document?: Maybe<SitePageContextNodeBodyValueDocumentFilterInput>;
  schema?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeFeaturedImage = {
  gatsbyImageData: Maybe<SitePageContextNodeFeaturedImageGatsbyImageData>;
};

export type SitePageContextNodeFeaturedImageFilterInput = {
  gatsbyImageData?: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataFilterInput>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageData = {
  height: Maybe<Scalars['Int']>;
  images: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataImages>;
  layout: Maybe<Scalars['String']>;
  placeholder: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataPlaceholder>;
  width: Maybe<Scalars['Int']>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  images?: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataImagesFilterInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataPlaceholderFilterInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataImages = {
  fallback: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataImagesFallback>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataImagesFallback = {
  sizes: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  srcSet: Maybe<Scalars['String']>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataImagesFallbackFilterInput = {
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataImagesFilterInput = {
  fallback?: Maybe<SitePageContextNodeFeaturedImageGatsbyImageDataImagesFallbackFilterInput>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataPlaceholder = {
  fallback: Maybe<Scalars['String']>;
};

export type SitePageContextNodeFeaturedImageGatsbyImageDataPlaceholderFilterInput = {
  fallback?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeFilterInput = {
  body?: Maybe<SitePageContextNodeBodyFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<SitePageContextNodeFeaturedImageFilterInput>;
  meta?: Maybe<SitePageContextNodeMetaFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNodeMeta = {
  firstPublishedAt: Maybe<Scalars['String']>;
};

export type SitePageContextNodeMetaFilterInput = {
  firstPublishedAt?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevious = {
  originalId: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SitePageContextPreviousFilterInput = {
  originalId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextNextOriginalId = 'context___next___originalId',
  ContextNextTitle = 'context___next___title',
  ContextNodeBodyBlocks = 'context___node___body___blocks',
  ContextNodeExcerpt = 'context___node___excerpt',
  ContextNodeMetaFirstPublishedAt = 'context___node___meta___firstPublishedAt',
  ContextNodeOriginalId = 'context___node___originalId',
  ContextNodeTitle = 'context___node___title',
  ContextPreviousOriginalId = 'context___previous___originalId',
  ContextPreviousTitle = 'context___previous___title',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  MatchPath = 'matchPath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorId = 'pluginCreatorId',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsApiToken = 'pluginCreator___pluginOptions___apiToken',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsBucketName = 'pluginCreator___pluginOptions___bucketName',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsDisableLiveReload = 'pluginCreator___pluginOptions___disableLiveReload',
  PluginCreatorPluginOptionsEnvironment = 'pluginCreator___pluginOptions___environment',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsGtagConfigAnonymizeIp = 'pluginCreator___pluginOptions___gtagConfig___anonymize_ip',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsLocaleFallbacksIt = 'pluginCreator___pluginOptions___localeFallbacks___it',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsPluginConfigHead = 'pluginCreator___pluginOptions___pluginConfig___head',
  PluginCreatorPluginOptionsPluginConfigRespectDnt = 'pluginCreator___pluginOptions___pluginConfig___respectDNT',
  PluginCreatorPluginOptionsPreviewMode = 'pluginCreator___pluginOptions___previewMode',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsTrackingIds = 'pluginCreator___pluginOptions___trackingIds',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<SitePluginPackageJson>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonMain = 'packageJson___main',
  PackageJsonName = 'packageJson___name',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonVersion = 'packageJson___version',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsApiToken = 'pluginOptions___apiToken',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsBucketName = 'pluginOptions___bucketName',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsDisableLiveReload = 'pluginOptions___disableLiveReload',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsGtagConfigAnonymizeIp = 'pluginOptions___gtagConfig___anonymize_ip',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsLocaleFallbacksIt = 'pluginOptions___localeFallbacks___it',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsPluginConfigHead = 'pluginOptions___pluginConfig___head',
  PluginOptionsPluginConfigRespectDnt = 'pluginOptions___pluginConfig___respectDNT',
  PluginOptionsPreviewMode = 'pluginOptions___previewMode',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsTrackingIds = 'pluginOptions___trackingIds',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<NodeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePluginPackageJson = {
  author: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description: Maybe<Scalars['String']>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
  license: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  allExtensions: Maybe<Scalars['Boolean']>;
  apiToken: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  bucketName: Maybe<Scalars['String']>;
  defaultQuality: Maybe<Scalars['Int']>;
  disableLiveReload: Maybe<Scalars['Boolean']>;
  environment: Maybe<Scalars['String']>;
  failOnError: Maybe<Scalars['Boolean']>;
  gtagConfig: Maybe<SitePluginPluginOptionsGtagConfig>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
  localeFallbacks: Maybe<SitePluginPluginOptionsLocaleFallbacks>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  pathCheck: Maybe<Scalars['Boolean']>;
  pluginConfig: Maybe<SitePluginPluginOptionsPluginConfig>;
  previewMode: Maybe<Scalars['Boolean']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  trackingIds: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFilterInput = {
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  apiToken?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  bucketName?: Maybe<StringQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  disableLiveReload?: Maybe<BooleanQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  gtagConfig?: Maybe<SitePluginPluginOptionsGtagConfigFilterInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  localeFallbacks?: Maybe<SitePluginPluginOptionsLocaleFallbacksFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  previewMode?: Maybe<BooleanQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  trackingIds?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGtagConfig = {
  anonymize_ip: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGtagConfigFilterInput = {
  anonymize_ip?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocaleFallbacks = {
  it: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsLocaleFallbacksFilterInput = {
  it?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginConfig = {
  head: Maybe<Scalars['Boolean']>;
  respectDNT: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  head?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  description: Maybe<Scalars['String']>;
  siteURL: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  twitterUserName: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  siteURL?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  twitterUserName?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: Maybe<ImageCropFocus>;
  duotone?: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allDatoCmsArticle: { edges: Array<{ previous: Maybe<{ originalId: Maybe<string>, title: Maybe<string> }>, next: Maybe<{ originalId: Maybe<string>, title: Maybe<string> }>, node: { originalId: Maybe<string>, title: Maybe<string>, excerpt: Maybe<string>, meta: Maybe<{ firstPublishedAt: Maybe<any> }>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any> }>, body: Maybe<{ value: Maybe<any>, blocks: Maybe<Array<Maybe<{ __typename: 'DatoCmsImage', id: Maybe<string>, image: Maybe<{ url: Maybe<string>, alt: Maybe<string> }> } | {}>>> }> } }> } };

export type ArticleItemFieldsFragment = { originalId: Maybe<string>, title: Maybe<string>, excerpt: Maybe<string>, meta: Maybe<{ firstPublishedAt: Maybe<any> }>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any>, alt: Maybe<string> }> };

export type CarouselContentFieldsFragment = { originalId: Maybe<string>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any>, alt: Maybe<string> }> };

export type GetSiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteMetadataQuery = { site: Maybe<{ siteMetadata: Maybe<{ title: Maybe<string>, description: Maybe<string>, siteURL: Maybe<string>, twitterUserName: Maybe<string> }> }>, file: Maybe<{ publicURL: Maybe<string> }> };

export type LiveInfoItemFieldFragment = { title: Maybe<string>, heldOn: Maybe<any>, venue: Maybe<{ name: Maybe<string> }>, article: Maybe<{ originalId: Maybe<string> }> };

export type LiveInfoListItemFieldFragment = { originalId: Maybe<string>, title: Maybe<string>, heldOn: Maybe<any>, venue: Maybe<{ name: Maybe<string> }>, article: Maybe<{ originalId: Maybe<string> }> };

export type GetAboutPageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageContentQuery = { allDatoCmsAbout: { nodes: Array<{ bodyNode: Maybe<{ childMarkdownRemark: Maybe<{ excerpt: Maybe<string>, html: Maybe<string> }> }> }> } };

export type GetTopPageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopPageContentQuery = { carouselContents: { nodes: Array<{ originalId: Maybe<string>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any>, alt: Maybe<string> }> }> }, allDatoCmsArticle: { nodes: Array<{ originalId: Maybe<string>, title: Maybe<string>, excerpt: Maybe<string>, meta: Maybe<{ firstPublishedAt: Maybe<any> }>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any>, alt: Maybe<string> }> }> }, allDatoCmsSchedule: { nodes: Array<{ originalId: Maybe<string>, title: Maybe<string>, heldOn: Maybe<any>, venue: Maybe<{ name: Maybe<string> }>, article: Maybe<{ originalId: Maybe<string> }> }> } };

export type GetLiveInfoPageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLiveInfoPageContentQuery = { allDatoCmsSchedule: { nodes: Array<{ originalId: Maybe<string>, title: Maybe<string>, heldOn: Maybe<any>, venue: Maybe<{ name: Maybe<string> }>, article: Maybe<{ originalId: Maybe<string> }> }> } };

export type GetArticleListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticleListQuery = { allDatoCmsArticle: { nodes: Array<{ originalId: Maybe<string>, title: Maybe<string>, excerpt: Maybe<string>, meta: Maybe<{ firstPublishedAt: Maybe<any> }>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any>, alt: Maybe<string> }> }> } };

export type ArticleNavigationFieldsFragment = { originalId: Maybe<string>, title: Maybe<string> };

export type ArticleFieldsFragment = { previous: Maybe<{ originalId: Maybe<string>, title: Maybe<string> }>, next: Maybe<{ originalId: Maybe<string>, title: Maybe<string> }>, node: { originalId: Maybe<string>, title: Maybe<string>, excerpt: Maybe<string>, meta: Maybe<{ firstPublishedAt: Maybe<any> }>, featuredImage: Maybe<{ gatsbyImageData: Maybe<any> }>, body: Maybe<{ value: Maybe<any>, blocks: Maybe<Array<Maybe<{ __typename: 'DatoCmsExternalvideo', id: Maybe<string>, externalVideo: Maybe<{ providerUid: Maybe<string> }> } | { __typename: 'DatoCmsImage', id: Maybe<string>, image: Maybe<{ url: Maybe<string>, alt: Maybe<string> }> }>>> }> } };

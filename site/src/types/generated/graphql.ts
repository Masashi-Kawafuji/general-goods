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
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DatoCmsAbout = Node & {
  body: Maybe<Scalars['String']>;
  bodyNode: Maybe<DatoCmsTextNode>;
  meta: Maybe<DatoCmsMetaField>;
  originalId: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  model: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsAboutConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAboutEdge>;
  nodes: Array<DatoCmsAbout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAboutGroupConnection>;
};


export type DatoCmsAboutConnectionDistinctArgs = {
  field: DatoCmsAboutFieldsEnum;
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


export type DatoCmsAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsAboutFieldsEnum;
};

export type DatoCmsAboutEdge = {
  next: Maybe<DatoCmsAbout>;
  node: DatoCmsAbout;
  previous: Maybe<DatoCmsAbout>;
};

export enum DatoCmsAboutFieldsEnum {
  Body = 'body',
  BodyNodeFieldsCustomField = 'bodyNode___fields___customField',
  BodyNodeChildrenMarkdownRemark = 'bodyNode___childrenMarkdownRemark',
  BodyNodeChildrenMarkdownRemarkId = 'bodyNode___childrenMarkdownRemark___id',
  BodyNodeChildrenMarkdownRemarkFrontmatterTitle = 'bodyNode___childrenMarkdownRemark___frontmatter___title',
  BodyNodeChildrenMarkdownRemarkExcerpt = 'bodyNode___childrenMarkdownRemark___excerpt',
  BodyNodeChildrenMarkdownRemarkRawMarkdownBody = 'bodyNode___childrenMarkdownRemark___rawMarkdownBody',
  BodyNodeChildrenMarkdownRemarkFieldsCustomField = 'bodyNode___childrenMarkdownRemark___fields___customField',
  BodyNodeChildrenMarkdownRemarkHtml = 'bodyNode___childrenMarkdownRemark___html',
  BodyNodeChildrenMarkdownRemarkHtmlAst = 'bodyNode___childrenMarkdownRemark___htmlAst',
  BodyNodeChildrenMarkdownRemarkExcerptAst = 'bodyNode___childrenMarkdownRemark___excerptAst',
  BodyNodeChildrenMarkdownRemarkHeadings = 'bodyNode___childrenMarkdownRemark___headings',
  BodyNodeChildrenMarkdownRemarkHeadingsId = 'bodyNode___childrenMarkdownRemark___headings___id',
  BodyNodeChildrenMarkdownRemarkHeadingsValue = 'bodyNode___childrenMarkdownRemark___headings___value',
  BodyNodeChildrenMarkdownRemarkHeadingsDepth = 'bodyNode___childrenMarkdownRemark___headings___depth',
  BodyNodeChildrenMarkdownRemarkTimeToRead = 'bodyNode___childrenMarkdownRemark___timeToRead',
  BodyNodeChildrenMarkdownRemarkTableOfContents = 'bodyNode___childrenMarkdownRemark___tableOfContents',
  BodyNodeChildrenMarkdownRemarkWordCountParagraphs = 'bodyNode___childrenMarkdownRemark___wordCount___paragraphs',
  BodyNodeChildrenMarkdownRemarkWordCountSentences = 'bodyNode___childrenMarkdownRemark___wordCount___sentences',
  BodyNodeChildrenMarkdownRemarkWordCountWords = 'bodyNode___childrenMarkdownRemark___wordCount___words',
  BodyNodeChildrenMarkdownRemarkParentId = 'bodyNode___childrenMarkdownRemark___parent___id',
  BodyNodeChildrenMarkdownRemarkParentChildren = 'bodyNode___childrenMarkdownRemark___parent___children',
  BodyNodeChildrenMarkdownRemarkChildren = 'bodyNode___childrenMarkdownRemark___children',
  BodyNodeChildrenMarkdownRemarkChildrenId = 'bodyNode___childrenMarkdownRemark___children___id',
  BodyNodeChildrenMarkdownRemarkChildrenChildren = 'bodyNode___childrenMarkdownRemark___children___children',
  BodyNodeChildrenMarkdownRemarkInternalContent = 'bodyNode___childrenMarkdownRemark___internal___content',
  BodyNodeChildrenMarkdownRemarkInternalContentDigest = 'bodyNode___childrenMarkdownRemark___internal___contentDigest',
  BodyNodeChildrenMarkdownRemarkInternalDescription = 'bodyNode___childrenMarkdownRemark___internal___description',
  BodyNodeChildrenMarkdownRemarkInternalFieldOwners = 'bodyNode___childrenMarkdownRemark___internal___fieldOwners',
  BodyNodeChildrenMarkdownRemarkInternalIgnoreType = 'bodyNode___childrenMarkdownRemark___internal___ignoreType',
  BodyNodeChildrenMarkdownRemarkInternalMediaType = 'bodyNode___childrenMarkdownRemark___internal___mediaType',
  BodyNodeChildrenMarkdownRemarkInternalOwner = 'bodyNode___childrenMarkdownRemark___internal___owner',
  BodyNodeChildrenMarkdownRemarkInternalType = 'bodyNode___childrenMarkdownRemark___internal___type',
  BodyNodeChildMarkdownRemarkId = 'bodyNode___childMarkdownRemark___id',
  BodyNodeChildMarkdownRemarkFrontmatterTitle = 'bodyNode___childMarkdownRemark___frontmatter___title',
  BodyNodeChildMarkdownRemarkExcerpt = 'bodyNode___childMarkdownRemark___excerpt',
  BodyNodeChildMarkdownRemarkRawMarkdownBody = 'bodyNode___childMarkdownRemark___rawMarkdownBody',
  BodyNodeChildMarkdownRemarkFieldsCustomField = 'bodyNode___childMarkdownRemark___fields___customField',
  BodyNodeChildMarkdownRemarkHtml = 'bodyNode___childMarkdownRemark___html',
  BodyNodeChildMarkdownRemarkHtmlAst = 'bodyNode___childMarkdownRemark___htmlAst',
  BodyNodeChildMarkdownRemarkExcerptAst = 'bodyNode___childMarkdownRemark___excerptAst',
  BodyNodeChildMarkdownRemarkHeadings = 'bodyNode___childMarkdownRemark___headings',
  BodyNodeChildMarkdownRemarkHeadingsId = 'bodyNode___childMarkdownRemark___headings___id',
  BodyNodeChildMarkdownRemarkHeadingsValue = 'bodyNode___childMarkdownRemark___headings___value',
  BodyNodeChildMarkdownRemarkHeadingsDepth = 'bodyNode___childMarkdownRemark___headings___depth',
  BodyNodeChildMarkdownRemarkTimeToRead = 'bodyNode___childMarkdownRemark___timeToRead',
  BodyNodeChildMarkdownRemarkTableOfContents = 'bodyNode___childMarkdownRemark___tableOfContents',
  BodyNodeChildMarkdownRemarkWordCountParagraphs = 'bodyNode___childMarkdownRemark___wordCount___paragraphs',
  BodyNodeChildMarkdownRemarkWordCountSentences = 'bodyNode___childMarkdownRemark___wordCount___sentences',
  BodyNodeChildMarkdownRemarkWordCountWords = 'bodyNode___childMarkdownRemark___wordCount___words',
  BodyNodeChildMarkdownRemarkParentId = 'bodyNode___childMarkdownRemark___parent___id',
  BodyNodeChildMarkdownRemarkParentChildren = 'bodyNode___childMarkdownRemark___parent___children',
  BodyNodeChildMarkdownRemarkChildren = 'bodyNode___childMarkdownRemark___children',
  BodyNodeChildMarkdownRemarkChildrenId = 'bodyNode___childMarkdownRemark___children___id',
  BodyNodeChildMarkdownRemarkChildrenChildren = 'bodyNode___childMarkdownRemark___children___children',
  BodyNodeChildMarkdownRemarkInternalContent = 'bodyNode___childMarkdownRemark___internal___content',
  BodyNodeChildMarkdownRemarkInternalContentDigest = 'bodyNode___childMarkdownRemark___internal___contentDigest',
  BodyNodeChildMarkdownRemarkInternalDescription = 'bodyNode___childMarkdownRemark___internal___description',
  BodyNodeChildMarkdownRemarkInternalFieldOwners = 'bodyNode___childMarkdownRemark___internal___fieldOwners',
  BodyNodeChildMarkdownRemarkInternalIgnoreType = 'bodyNode___childMarkdownRemark___internal___ignoreType',
  BodyNodeChildMarkdownRemarkInternalMediaType = 'bodyNode___childMarkdownRemark___internal___mediaType',
  BodyNodeChildMarkdownRemarkInternalOwner = 'bodyNode___childMarkdownRemark___internal___owner',
  BodyNodeChildMarkdownRemarkInternalType = 'bodyNode___childMarkdownRemark___internal___type',
  BodyNodeId = 'bodyNode___id',
  BodyNodeParentId = 'bodyNode___parent___id',
  BodyNodeParentParentId = 'bodyNode___parent___parent___id',
  BodyNodeParentParentChildren = 'bodyNode___parent___parent___children',
  BodyNodeParentChildren = 'bodyNode___parent___children',
  BodyNodeParentChildrenId = 'bodyNode___parent___children___id',
  BodyNodeParentChildrenChildren = 'bodyNode___parent___children___children',
  BodyNodeParentInternalContent = 'bodyNode___parent___internal___content',
  BodyNodeParentInternalContentDigest = 'bodyNode___parent___internal___contentDigest',
  BodyNodeParentInternalDescription = 'bodyNode___parent___internal___description',
  BodyNodeParentInternalFieldOwners = 'bodyNode___parent___internal___fieldOwners',
  BodyNodeParentInternalIgnoreType = 'bodyNode___parent___internal___ignoreType',
  BodyNodeParentInternalMediaType = 'bodyNode___parent___internal___mediaType',
  BodyNodeParentInternalOwner = 'bodyNode___parent___internal___owner',
  BodyNodeParentInternalType = 'bodyNode___parent___internal___type',
  BodyNodeChildren = 'bodyNode___children',
  BodyNodeChildrenId = 'bodyNode___children___id',
  BodyNodeChildrenParentId = 'bodyNode___children___parent___id',
  BodyNodeChildrenParentChildren = 'bodyNode___children___parent___children',
  BodyNodeChildrenChildren = 'bodyNode___children___children',
  BodyNodeChildrenChildrenId = 'bodyNode___children___children___id',
  BodyNodeChildrenChildrenChildren = 'bodyNode___children___children___children',
  BodyNodeChildrenInternalContent = 'bodyNode___children___internal___content',
  BodyNodeChildrenInternalContentDigest = 'bodyNode___children___internal___contentDigest',
  BodyNodeChildrenInternalDescription = 'bodyNode___children___internal___description',
  BodyNodeChildrenInternalFieldOwners = 'bodyNode___children___internal___fieldOwners',
  BodyNodeChildrenInternalIgnoreType = 'bodyNode___children___internal___ignoreType',
  BodyNodeChildrenInternalMediaType = 'bodyNode___children___internal___mediaType',
  BodyNodeChildrenInternalOwner = 'bodyNode___children___internal___owner',
  BodyNodeChildrenInternalType = 'bodyNode___children___internal___type',
  BodyNodeInternalContent = 'bodyNode___internal___content',
  BodyNodeInternalContentDigest = 'bodyNode___internal___contentDigest',
  BodyNodeInternalDescription = 'bodyNode___internal___description',
  BodyNodeInternalFieldOwners = 'bodyNode___internal___fieldOwners',
  BodyNodeInternalIgnoreType = 'bodyNode___internal___ignoreType',
  BodyNodeInternalMediaType = 'bodyNode___internal___mediaType',
  BodyNodeInternalOwner = 'bodyNode___internal___owner',
  BodyNodeInternalType = 'bodyNode___internal___type',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsAboutFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  bodyNode?: Maybe<DatoCmsTextNodeFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsAboutGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAboutEdge>;
  nodes: Array<DatoCmsAbout>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsAboutSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsArticle = Node & {
  title: Maybe<Scalars['String']>;
  featuredImage: Maybe<DatoCmsFileField>;
  excerpt: Maybe<Scalars['String']>;
  body: Maybe<DatoCmsDatoCmsArticleBodyStructuredText>;
  carousel: Maybe<Scalars['Boolean']>;
  meta: Maybe<DatoCmsMetaField>;
  originalId: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  model: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsArticleEdge>;
  nodes: Array<DatoCmsArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsArticleGroupConnection>;
};


export type DatoCmsArticleConnectionDistinctArgs = {
  field: DatoCmsArticleFieldsEnum;
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


export type DatoCmsArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsArticleFieldsEnum;
};

export type DatoCmsArticleEdge = {
  next: Maybe<DatoCmsArticle>;
  node: DatoCmsArticle;
  previous: Maybe<DatoCmsArticle>;
};

export enum DatoCmsArticleFieldsEnum {
  Title = 'title',
  FeaturedImageSize = 'featuredImage___size',
  FeaturedImageWidth = 'featuredImage___width',
  FeaturedImageHeight = 'featuredImage___height',
  FeaturedImagePath = 'featuredImage___path',
  FeaturedImageFormat = 'featuredImage___format',
  FeaturedImageIsImage = 'featuredImage___isImage',
  FeaturedImageNotes = 'featuredImage___notes',
  FeaturedImageAuthor = 'featuredImage___author',
  FeaturedImageCopyright = 'featuredImage___copyright',
  FeaturedImageTags = 'featuredImage___tags',
  FeaturedImageSmartTags = 'featuredImage___smartTags',
  FeaturedImageFilename = 'featuredImage___filename',
  FeaturedImageBasename = 'featuredImage___basename',
  FeaturedImageExifInfo = 'featuredImage___exifInfo',
  FeaturedImageMimeType = 'featuredImage___mimeType',
  FeaturedImageColors = 'featuredImage___colors',
  FeaturedImageColorsRed = 'featuredImage___colors___red',
  FeaturedImageColorsGreen = 'featuredImage___colors___green',
  FeaturedImageColorsBlue = 'featuredImage___colors___blue',
  FeaturedImageColorsAlpha = 'featuredImage___colors___alpha',
  FeaturedImageColorsRgb = 'featuredImage___colors___rgb',
  FeaturedImageColorsHex = 'featuredImage___colors___hex',
  FeaturedImageBlurhash = 'featuredImage___blurhash',
  FeaturedImageOriginalId = 'featuredImage___originalId',
  FeaturedImageUrl = 'featuredImage___url',
  FeaturedImageCreatedAt = 'featuredImage___createdAt',
  FeaturedImageVideoMuxPlaybackId = 'featuredImage___video___muxPlaybackId',
  FeaturedImageVideoFrameRate = 'featuredImage___video___frameRate',
  FeaturedImageVideoDuration = 'featuredImage___video___duration',
  FeaturedImageVideoStreamingUrl = 'featuredImage___video___streamingUrl',
  FeaturedImageVideoThumbnailUrl = 'featuredImage___video___thumbnailUrl',
  FeaturedImageVideoMp4Url = 'featuredImage___video___mp4Url',
  FeaturedImageFluidBase64 = 'featuredImage___fluid___base64',
  FeaturedImageFluidTracedSvg = 'featuredImage___fluid___tracedSVG',
  FeaturedImageFluidAspectRatio = 'featuredImage___fluid___aspectRatio',
  FeaturedImageFluidWidth = 'featuredImage___fluid___width',
  FeaturedImageFluidHeight = 'featuredImage___fluid___height',
  FeaturedImageFluidSrc = 'featuredImage___fluid___src',
  FeaturedImageFluidSrcSet = 'featuredImage___fluid___srcSet',
  FeaturedImageFluidSizes = 'featuredImage___fluid___sizes',
  FeaturedImageSizesBase64 = 'featuredImage___sizes___base64',
  FeaturedImageSizesTracedSvg = 'featuredImage___sizes___tracedSVG',
  FeaturedImageSizesAspectRatio = 'featuredImage___sizes___aspectRatio',
  FeaturedImageSizesWidth = 'featuredImage___sizes___width',
  FeaturedImageSizesHeight = 'featuredImage___sizes___height',
  FeaturedImageSizesSrc = 'featuredImage___sizes___src',
  FeaturedImageSizesSrcSet = 'featuredImage___sizes___srcSet',
  FeaturedImageSizesSizes = 'featuredImage___sizes___sizes',
  FeaturedImageFixedBase64 = 'featuredImage___fixed___base64',
  FeaturedImageFixedTracedSvg = 'featuredImage___fixed___tracedSVG',
  FeaturedImageFixedAspectRatio = 'featuredImage___fixed___aspectRatio',
  FeaturedImageFixedWidth = 'featuredImage___fixed___width',
  FeaturedImageFixedHeight = 'featuredImage___fixed___height',
  FeaturedImageFixedSrc = 'featuredImage___fixed___src',
  FeaturedImageFixedSrcSet = 'featuredImage___fixed___srcSet',
  FeaturedImageFixedSizes = 'featuredImage___fixed___sizes',
  FeaturedImageResolutionsBase64 = 'featuredImage___resolutions___base64',
  FeaturedImageResolutionsTracedSvg = 'featuredImage___resolutions___tracedSVG',
  FeaturedImageResolutionsAspectRatio = 'featuredImage___resolutions___aspectRatio',
  FeaturedImageResolutionsWidth = 'featuredImage___resolutions___width',
  FeaturedImageResolutionsHeight = 'featuredImage___resolutions___height',
  FeaturedImageResolutionsSrc = 'featuredImage___resolutions___src',
  FeaturedImageResolutionsSrcSet = 'featuredImage___resolutions___srcSet',
  FeaturedImageResolutionsSizes = 'featuredImage___resolutions___sizes',
  FeaturedImageGatsbyImageData = 'featuredImage___gatsbyImageData',
  FeaturedImageAlt = 'featuredImage___alt',
  FeaturedImageTitle = 'featuredImage___title',
  FeaturedImageCustomData = 'featuredImage___customData',
  FeaturedImageFocalPointX = 'featuredImage___focalPoint___x',
  FeaturedImageFocalPointY = 'featuredImage___focalPoint___y',
  Excerpt = 'excerpt',
  BodyValue = 'body___value',
  BodyBlocks = 'body___blocks',
  BodyBlocksImageSize = 'body___blocks___image___size',
  BodyBlocksImageWidth = 'body___blocks___image___width',
  BodyBlocksImageHeight = 'body___blocks___image___height',
  BodyBlocksImagePath = 'body___blocks___image___path',
  BodyBlocksImageFormat = 'body___blocks___image___format',
  BodyBlocksImageIsImage = 'body___blocks___image___isImage',
  BodyBlocksImageNotes = 'body___blocks___image___notes',
  BodyBlocksImageAuthor = 'body___blocks___image___author',
  BodyBlocksImageCopyright = 'body___blocks___image___copyright',
  BodyBlocksImageTags = 'body___blocks___image___tags',
  BodyBlocksImageSmartTags = 'body___blocks___image___smartTags',
  BodyBlocksImageFilename = 'body___blocks___image___filename',
  BodyBlocksImageBasename = 'body___blocks___image___basename',
  BodyBlocksImageExifInfo = 'body___blocks___image___exifInfo',
  BodyBlocksImageMimeType = 'body___blocks___image___mimeType',
  BodyBlocksImageColors = 'body___blocks___image___colors',
  BodyBlocksImageBlurhash = 'body___blocks___image___blurhash',
  BodyBlocksImageOriginalId = 'body___blocks___image___originalId',
  BodyBlocksImageUrl = 'body___blocks___image___url',
  BodyBlocksImageCreatedAt = 'body___blocks___image___createdAt',
  BodyBlocksImageGatsbyImageData = 'body___blocks___image___gatsbyImageData',
  BodyBlocksImageAlt = 'body___blocks___image___alt',
  BodyBlocksImageTitle = 'body___blocks___image___title',
  BodyBlocksImageCustomData = 'body___blocks___image___customData',
  BodyBlocksMetaCreatedAt = 'body___blocks___meta___createdAt',
  BodyBlocksMetaUpdatedAt = 'body___blocks___meta___updatedAt',
  BodyBlocksMetaPublishedAt = 'body___blocks___meta___publishedAt',
  BodyBlocksMetaFirstPublishedAt = 'body___blocks___meta___firstPublishedAt',
  BodyBlocksMetaIsValid = 'body___blocks___meta___isValid',
  BodyBlocksMetaStatus = 'body___blocks___meta___status',
  BodyBlocksOriginalId = 'body___blocks___originalId',
  BodyBlocksLocale = 'body___blocks___locale',
  BodyBlocksSeoMetaTagsTags = 'body___blocks___seoMetaTags___tags',
  BodyBlocksSeoMetaTagsId = 'body___blocks___seoMetaTags___id',
  BodyBlocksSeoMetaTagsChildren = 'body___blocks___seoMetaTags___children',
  BodyBlocksModelName = 'body___blocks___model___name',
  BodyBlocksModelSingleton = 'body___blocks___model___singleton',
  BodyBlocksModelSortable = 'body___blocks___model___sortable',
  BodyBlocksModelApiKey = 'body___blocks___model___apiKey',
  BodyBlocksModelOrderingDirection = 'body___blocks___model___orderingDirection',
  BodyBlocksModelTree = 'body___blocks___model___tree',
  BodyBlocksModelModularBlock = 'body___blocks___model___modularBlock',
  BodyBlocksModelDraftModeActive = 'body___blocks___model___draftModeActive',
  BodyBlocksModelAllLocalesRequired = 'body___blocks___model___allLocalesRequired',
  BodyBlocksModelCollectionAppeareance = 'body___blocks___model___collectionAppeareance',
  BodyBlocksModelHasSingletonItem = 'body___blocks___model___hasSingletonItem',
  BodyBlocksModelOriginalId = 'body___blocks___model___originalId',
  BodyBlocksModelId = 'body___blocks___model___id',
  BodyBlocksModelChildren = 'body___blocks___model___children',
  BodyBlocksId = 'body___blocks___id',
  BodyBlocksParentId = 'body___blocks___parent___id',
  BodyBlocksParentChildren = 'body___blocks___parent___children',
  BodyBlocksChildren = 'body___blocks___children',
  BodyBlocksChildrenId = 'body___blocks___children___id',
  BodyBlocksChildrenChildren = 'body___blocks___children___children',
  BodyBlocksInternalContent = 'body___blocks___internal___content',
  BodyBlocksInternalContentDigest = 'body___blocks___internal___contentDigest',
  BodyBlocksInternalDescription = 'body___blocks___internal___description',
  BodyBlocksInternalFieldOwners = 'body___blocks___internal___fieldOwners',
  BodyBlocksInternalIgnoreType = 'body___blocks___internal___ignoreType',
  BodyBlocksInternalMediaType = 'body___blocks___internal___mediaType',
  BodyBlocksInternalOwner = 'body___blocks___internal___owner',
  BodyBlocksInternalType = 'body___blocks___internal___type',
  BodyLinks = 'body___links',
  Carousel = 'carousel',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsArticleFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<DatoCmsFileFieldFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<DatoCmsDatoCmsArticleBodyStructuredTextFilterInput>;
  carousel?: Maybe<BooleanQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsArticleEdge>;
  nodes: Array<DatoCmsArticle>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsArticleSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAsset = Node & {
  size: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  format: Maybe<Scalars['String']>;
  isImage: Maybe<Scalars['Boolean']>;
  notes: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  copyright: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags: Maybe<Array<Maybe<Scalars['String']>>>;
  filename: Maybe<Scalars['String']>;
  basename: Maybe<Scalars['String']>;
  exifInfo: Maybe<Scalars['JSON']>;
  mimeType: Maybe<Scalars['String']>;
  colors: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash: Maybe<Scalars['String']>;
  originalId: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['Date']>;
  video: Maybe<DatoCmsAssetVideo>;
  fluid: Maybe<DatoCmsFluid>;
  sizes: Maybe<DatoCmsFluid>;
  fixed: Maybe<DatoCmsFixed>;
  resolutions: Maybe<DatoCmsFixed>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DatoCmsAssetUrlArgs = {
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
};


export type DatoCmsAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
};


export type DatoCmsAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  backgroundColor?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<DatoImagePlaceholder>;
};

export type DatoCmsAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsAssetGroupConnection>;
};


export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
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


export type DatoCmsAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetEdge = {
  next: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous: Maybe<DatoCmsAsset>;
};

export enum DatoCmsAssetFieldsEnum {
  Size = 'size',
  Width = 'width',
  Height = 'height',
  Path = 'path',
  Format = 'format',
  IsImage = 'isImage',
  Notes = 'notes',
  Author = 'author',
  Copyright = 'copyright',
  Tags = 'tags',
  SmartTags = 'smartTags',
  Filename = 'filename',
  Basename = 'basename',
  ExifInfo = 'exifInfo',
  MimeType = 'mimeType',
  Colors = 'colors',
  ColorsRed = 'colors___red',
  ColorsGreen = 'colors___green',
  ColorsBlue = 'colors___blue',
  ColorsAlpha = 'colors___alpha',
  ColorsRgb = 'colors___rgb',
  ColorsHex = 'colors___hex',
  Blurhash = 'blurhash',
  OriginalId = 'originalId',
  Url = 'url',
  CreatedAt = 'createdAt',
  VideoMuxPlaybackId = 'video___muxPlaybackId',
  VideoFrameRate = 'video___frameRate',
  VideoDuration = 'video___duration',
  VideoStreamingUrl = 'video___streamingUrl',
  VideoThumbnailUrl = 'video___thumbnailUrl',
  VideoMp4Url = 'video___mp4Url',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidWidth = 'fluid___width',
  FluidHeight = 'fluid___height',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesWidth = 'sizes___width',
  SizesHeight = 'sizes___height',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSizes = 'sizes___sizes',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSizes = 'fixed___sizes',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSizes = 'resolutions___sizes',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsAssetFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsAssetSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAssetVideo = {
  muxPlaybackId: Maybe<Scalars['String']>;
  frameRate: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['Int']>;
  streamingUrl: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
  mp4Url: Maybe<Scalars['String']>;
};


export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: Maybe<DatoCmsAssetVideoThumbnailFormat>;
};


export type DatoCmsAssetVideoMp4UrlArgs = {
  res?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  exactRes?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};

export type DatoCmsAssetVideoFilterInput = {
  muxPlaybackId?: Maybe<StringQueryOperatorInput>;
  frameRate?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  streamingUrl?: Maybe<StringQueryOperatorInput>;
  thumbnailUrl?: Maybe<StringQueryOperatorInput>;
  mp4Url?: Maybe<StringQueryOperatorInput>;
};

export enum DatoCmsAssetVideoMp4ResolutionQuality {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export enum DatoCmsAssetVideoThumbnailFormat {
  Jpg = 'jpg',
  Png = 'png',
  Gif = 'gif'
}

export type DatoCmsColorField = {
  red: Maybe<Scalars['Int']>;
  green: Maybe<Scalars['Int']>;
  blue: Maybe<Scalars['Int']>;
  alpha: Maybe<Scalars['Int']>;
  rgb: Maybe<Scalars['String']>;
  hex: Maybe<Scalars['String']>;
};

export type DatoCmsColorFieldFilterInput = {
  red?: Maybe<IntQueryOperatorInput>;
  green?: Maybe<IntQueryOperatorInput>;
  blue?: Maybe<IntQueryOperatorInput>;
  alpha?: Maybe<IntQueryOperatorInput>;
  rgb?: Maybe<StringQueryOperatorInput>;
  hex?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: Maybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsDatoCmsArticleBodyStructuredText = {
  value: Maybe<Scalars['JSON']>;
  blocks: Maybe<Array<Maybe<DatoCmsImage>>>;
  links: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DatoCmsDatoCmsArticleBodyStructuredTextFilterInput = {
  value?: Maybe<JsonQueryOperatorInput>;
  blocks?: Maybe<DatoCmsImageFilterListInput>;
  links?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsFaviconMetaTags = Node & {
  tags: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFaviconMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
};


export type DatoCmsFaviconMetaTagsConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
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


export type DatoCmsFaviconMetaTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsEdge = {
  next: Maybe<DatoCmsFaviconMetaTags>;
  node: DatoCmsFaviconMetaTags;
  previous: Maybe<DatoCmsFaviconMetaTags>;
};

export enum DatoCmsFaviconMetaTagsFieldsEnum {
  Tags = 'tags',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsFaviconMetaTagsFilterInput = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsFaviconMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsFaviconMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsField = Node & {
  label: Maybe<Scalars['String']>;
  fieldType: Maybe<Scalars['String']>;
  apiKey: Maybe<Scalars['String']>;
  localized: Maybe<Scalars['Boolean']>;
  validators: Maybe<Scalars['JSON']>;
  position: Maybe<Scalars['Int']>;
  appeareance: Maybe<Scalars['JSON']>;
  defaultValue: Maybe<Scalars['JSON']>;
  originalId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsFieldGroupConnection>;
};


export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
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


export type DatoCmsFieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldEdge = {
  next: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous: Maybe<DatoCmsField>;
};

export enum DatoCmsFieldFieldsEnum {
  Label = 'label',
  FieldType = 'fieldType',
  ApiKey = 'apiKey',
  Localized = 'localized',
  Validators = 'validators',
  Position = 'position',
  Appeareance = 'appeareance',
  DefaultValue = 'defaultValue',
  OriginalId = 'originalId',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsFieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsFieldSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsFileField = {
  size: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  format: Maybe<Scalars['String']>;
  isImage: Maybe<Scalars['Boolean']>;
  notes: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  copyright: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags: Maybe<Array<Maybe<Scalars['String']>>>;
  filename: Maybe<Scalars['String']>;
  basename: Maybe<Scalars['String']>;
  exifInfo: Maybe<Scalars['JSON']>;
  mimeType: Maybe<Scalars['String']>;
  colors: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash: Maybe<Scalars['String']>;
  originalId: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['Date']>;
  video: Maybe<DatoCmsAssetVideo>;
  fluid: Maybe<DatoCmsFluid>;
  sizes: Maybe<DatoCmsFluid>;
  fixed: Maybe<DatoCmsFixed>;
  resolutions: Maybe<DatoCmsFixed>;
  gatsbyImageData: Maybe<Scalars['JSON']>;
  alt: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  customData: Maybe<Scalars['JSON']>;
  focalPoint: Maybe<DatoCmsFocalPoint>;
};


export type DatoCmsFileFieldUrlArgs = {
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsFileFieldFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
};


export type DatoCmsFileFieldSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
};


export type DatoCmsFileFieldFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  backgroundColor?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
  forceBlurhash?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<DatoImagePlaceholder>;
};

export type DatoCmsFileFieldFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  customData?: Maybe<JsonQueryOperatorInput>;
  focalPoint?: Maybe<DatoCmsFocalPointFilterInput>;
};

export type DatoCmsFixed = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Int'];
  height: Scalars['Int'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Maybe<Scalars['String']>;
};

export type DatoCmsFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsFluid = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
};

export type DatoCmsFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
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
  siteName: Maybe<Scalars['String']>;
  titleSuffix: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
  facebookPageUrl: Maybe<Scalars['String']>;
  fallbackSeo: Maybe<DatoCmsSeoField>;
};

export type DatoCmsGlobalSeoFilterInput = {
  siteName?: Maybe<StringQueryOperatorInput>;
  titleSuffix?: Maybe<StringQueryOperatorInput>;
  twitterAccount?: Maybe<StringQueryOperatorInput>;
  facebookPageUrl?: Maybe<StringQueryOperatorInput>;
  fallbackSeo?: Maybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsImage = Node & {
  image: Maybe<DatoCmsFileField>;
  meta: Maybe<DatoCmsMetaField>;
  originalId: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  model: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsImageEdge>;
  nodes: Array<DatoCmsImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsImageGroupConnection>;
};


export type DatoCmsImageConnectionDistinctArgs = {
  field: DatoCmsImageFieldsEnum;
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


export type DatoCmsImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsImageFieldsEnum;
};

export type DatoCmsImageEdge = {
  next: Maybe<DatoCmsImage>;
  node: DatoCmsImage;
  previous: Maybe<DatoCmsImage>;
};

export enum DatoCmsImageFieldsEnum {
  ImageSize = 'image___size',
  ImageWidth = 'image___width',
  ImageHeight = 'image___height',
  ImagePath = 'image___path',
  ImageFormat = 'image___format',
  ImageIsImage = 'image___isImage',
  ImageNotes = 'image___notes',
  ImageAuthor = 'image___author',
  ImageCopyright = 'image___copyright',
  ImageTags = 'image___tags',
  ImageSmartTags = 'image___smartTags',
  ImageFilename = 'image___filename',
  ImageBasename = 'image___basename',
  ImageExifInfo = 'image___exifInfo',
  ImageMimeType = 'image___mimeType',
  ImageColors = 'image___colors',
  ImageColorsRed = 'image___colors___red',
  ImageColorsGreen = 'image___colors___green',
  ImageColorsBlue = 'image___colors___blue',
  ImageColorsAlpha = 'image___colors___alpha',
  ImageColorsRgb = 'image___colors___rgb',
  ImageColorsHex = 'image___colors___hex',
  ImageBlurhash = 'image___blurhash',
  ImageOriginalId = 'image___originalId',
  ImageUrl = 'image___url',
  ImageCreatedAt = 'image___createdAt',
  ImageVideoMuxPlaybackId = 'image___video___muxPlaybackId',
  ImageVideoFrameRate = 'image___video___frameRate',
  ImageVideoDuration = 'image___video___duration',
  ImageVideoStreamingUrl = 'image___video___streamingUrl',
  ImageVideoThumbnailUrl = 'image___video___thumbnailUrl',
  ImageVideoMp4Url = 'image___video___mp4Url',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidWidth = 'image___fluid___width',
  ImageFluidHeight = 'image___fluid___height',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesWidth = 'image___sizes___width',
  ImageSizesHeight = 'image___sizes___height',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSizes = 'image___fixed___sizes',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSizes = 'image___resolutions___sizes',
  ImageGatsbyImageData = 'image___gatsbyImageData',
  ImageAlt = 'image___alt',
  ImageTitle = 'image___title',
  ImageCustomData = 'image___customData',
  ImageFocalPointX = 'image___focalPoint___x',
  ImageFocalPointY = 'image___focalPoint___y',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsImageFilterInput = {
  image?: Maybe<DatoCmsFileFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsImageFilterListInput = {
  elemMatch?: Maybe<DatoCmsImageFilterInput>;
};

export type DatoCmsImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsImageEdge>;
  nodes: Array<DatoCmsImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
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
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-bottom) */
  borderBottom?: Maybe<Scalars['Int']>;
  /** Sets left border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-left) */
  borderLeft?: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner) */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: Maybe<Scalars['String']>;
  /** Sets right border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-right) */
  borderRight?: Maybe<Scalars['Int']>;
  /** Sets top border of an image. (https://docs.imgix.com/apis/url/border-and-padding/border-top) */
  borderTop?: Maybe<Scalars['Int']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: Maybe<Scalars['String']>;
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
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  duotone?: Maybe<Scalars['String']>;
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
  /** Sets the fill color for images with additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill-color) */
  fillColor?: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  fill?: Maybe<Scalars['String']>;
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
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskBg?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: Maybe<Scalars['String']>;
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
  /** Sets bottom padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-bottom) */
  padBottom?: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-left) */
  padLeft?: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-right) */
  padRight?: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. (https://docs.imgix.com/apis/url/border-and-padding/pad-top) */
  padTop?: Maybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: Maybe<Scalars['Int']>;
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
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: Maybe<Scalars['String']>;
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
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  txtLine?: Maybe<Scalars['Int']>;
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
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: Maybe<Scalars['String']>;
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
  updatedAt: Maybe<Scalars['Date']>;
  publishedAt: Maybe<Scalars['Date']>;
  firstPublishedAt: Maybe<Scalars['Date']>;
  isValid: Maybe<Scalars['Boolean']>;
  status: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  isValid?: Maybe<BooleanQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsModel = Node & {
  name: Maybe<Scalars['String']>;
  singleton: Maybe<Scalars['Boolean']>;
  sortable: Maybe<Scalars['Boolean']>;
  apiKey: Maybe<Scalars['String']>;
  orderingDirection: Maybe<Scalars['String']>;
  tree: Maybe<Scalars['Boolean']>;
  modularBlock: Maybe<Scalars['Boolean']>;
  draftModeActive: Maybe<Scalars['Boolean']>;
  allLocalesRequired: Maybe<Scalars['Boolean']>;
  collectionAppeareance: Maybe<Scalars['String']>;
  hasSingletonItem: Maybe<Scalars['Boolean']>;
  originalId: Maybe<Scalars['String']>;
  fields: Maybe<DatoCmsFaviconMetaTags>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsModelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsModelGroupConnection>;
};


export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
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


export type DatoCmsModelConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelEdge = {
  next: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous: Maybe<DatoCmsModel>;
};

export enum DatoCmsModelFieldsEnum {
  Name = 'name',
  Singleton = 'singleton',
  Sortable = 'sortable',
  ApiKey = 'apiKey',
  OrderingDirection = 'orderingDirection',
  Tree = 'tree',
  ModularBlock = 'modularBlock',
  DraftModeActive = 'draftModeActive',
  AllLocalesRequired = 'allLocalesRequired',
  CollectionAppeareance = 'collectionAppeareance',
  HasSingletonItem = 'hasSingletonItem',
  OriginalId = 'originalId',
  FieldsTags = 'fields___tags',
  FieldsId = 'fields___id',
  FieldsParentId = 'fields___parent___id',
  FieldsParentParentId = 'fields___parent___parent___id',
  FieldsParentParentChildren = 'fields___parent___parent___children',
  FieldsParentChildren = 'fields___parent___children',
  FieldsParentChildrenId = 'fields___parent___children___id',
  FieldsParentChildrenChildren = 'fields___parent___children___children',
  FieldsParentInternalContent = 'fields___parent___internal___content',
  FieldsParentInternalContentDigest = 'fields___parent___internal___contentDigest',
  FieldsParentInternalDescription = 'fields___parent___internal___description',
  FieldsParentInternalFieldOwners = 'fields___parent___internal___fieldOwners',
  FieldsParentInternalIgnoreType = 'fields___parent___internal___ignoreType',
  FieldsParentInternalMediaType = 'fields___parent___internal___mediaType',
  FieldsParentInternalOwner = 'fields___parent___internal___owner',
  FieldsParentInternalType = 'fields___parent___internal___type',
  FieldsChildren = 'fields___children',
  FieldsChildrenId = 'fields___children___id',
  FieldsChildrenParentId = 'fields___children___parent___id',
  FieldsChildrenParentChildren = 'fields___children___parent___children',
  FieldsChildrenChildren = 'fields___children___children',
  FieldsChildrenChildrenId = 'fields___children___children___id',
  FieldsChildrenChildrenChildren = 'fields___children___children___children',
  FieldsChildrenInternalContent = 'fields___children___internal___content',
  FieldsChildrenInternalContentDigest = 'fields___children___internal___contentDigest',
  FieldsChildrenInternalDescription = 'fields___children___internal___description',
  FieldsChildrenInternalFieldOwners = 'fields___children___internal___fieldOwners',
  FieldsChildrenInternalIgnoreType = 'fields___children___internal___ignoreType',
  FieldsChildrenInternalMediaType = 'fields___children___internal___mediaType',
  FieldsChildrenInternalOwner = 'fields___children___internal___owner',
  FieldsChildrenInternalType = 'fields___children___internal___type',
  FieldsInternalContent = 'fields___internal___content',
  FieldsInternalContentDigest = 'fields___internal___contentDigest',
  FieldsInternalDescription = 'fields___internal___description',
  FieldsInternalFieldOwners = 'fields___internal___fieldOwners',
  FieldsInternalIgnoreType = 'fields___internal___ignoreType',
  FieldsInternalMediaType = 'fields___internal___mediaType',
  FieldsInternalOwner = 'fields___internal___owner',
  FieldsInternalType = 'fields___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsModelFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsModelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsModelSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsModelFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSchedule = Node & {
  heldOn: Maybe<Scalars['Date']>;
  title: Maybe<Scalars['String']>;
  venue: Maybe<DatoCmsVenue>;
  article: Maybe<DatoCmsArticle>;
  meta: Maybe<DatoCmsMetaField>;
  originalId: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  model: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DatoCmsScheduleHeldOnArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsScheduleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsScheduleEdge>;
  nodes: Array<DatoCmsSchedule>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsScheduleGroupConnection>;
};


export type DatoCmsScheduleConnectionDistinctArgs = {
  field: DatoCmsScheduleFieldsEnum;
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


export type DatoCmsScheduleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsScheduleFieldsEnum;
};

export type DatoCmsScheduleEdge = {
  next: Maybe<DatoCmsSchedule>;
  node: DatoCmsSchedule;
  previous: Maybe<DatoCmsSchedule>;
};

export enum DatoCmsScheduleFieldsEnum {
  HeldOn = 'heldOn',
  Title = 'title',
  VenueName = 'venue___name',
  VenueUrl = 'venue___url',
  VenueMetaCreatedAt = 'venue___meta___createdAt',
  VenueMetaUpdatedAt = 'venue___meta___updatedAt',
  VenueMetaPublishedAt = 'venue___meta___publishedAt',
  VenueMetaFirstPublishedAt = 'venue___meta___firstPublishedAt',
  VenueMetaIsValid = 'venue___meta___isValid',
  VenueMetaStatus = 'venue___meta___status',
  VenueOriginalId = 'venue___originalId',
  VenueLocale = 'venue___locale',
  VenueSeoMetaTagsTags = 'venue___seoMetaTags___tags',
  VenueSeoMetaTagsId = 'venue___seoMetaTags___id',
  VenueSeoMetaTagsParentId = 'venue___seoMetaTags___parent___id',
  VenueSeoMetaTagsParentChildren = 'venue___seoMetaTags___parent___children',
  VenueSeoMetaTagsChildren = 'venue___seoMetaTags___children',
  VenueSeoMetaTagsChildrenId = 'venue___seoMetaTags___children___id',
  VenueSeoMetaTagsChildrenChildren = 'venue___seoMetaTags___children___children',
  VenueSeoMetaTagsInternalContent = 'venue___seoMetaTags___internal___content',
  VenueSeoMetaTagsInternalContentDigest = 'venue___seoMetaTags___internal___contentDigest',
  VenueSeoMetaTagsInternalDescription = 'venue___seoMetaTags___internal___description',
  VenueSeoMetaTagsInternalFieldOwners = 'venue___seoMetaTags___internal___fieldOwners',
  VenueSeoMetaTagsInternalIgnoreType = 'venue___seoMetaTags___internal___ignoreType',
  VenueSeoMetaTagsInternalMediaType = 'venue___seoMetaTags___internal___mediaType',
  VenueSeoMetaTagsInternalOwner = 'venue___seoMetaTags___internal___owner',
  VenueSeoMetaTagsInternalType = 'venue___seoMetaTags___internal___type',
  VenueModelName = 'venue___model___name',
  VenueModelSingleton = 'venue___model___singleton',
  VenueModelSortable = 'venue___model___sortable',
  VenueModelApiKey = 'venue___model___apiKey',
  VenueModelOrderingDirection = 'venue___model___orderingDirection',
  VenueModelTree = 'venue___model___tree',
  VenueModelModularBlock = 'venue___model___modularBlock',
  VenueModelDraftModeActive = 'venue___model___draftModeActive',
  VenueModelAllLocalesRequired = 'venue___model___allLocalesRequired',
  VenueModelCollectionAppeareance = 'venue___model___collectionAppeareance',
  VenueModelHasSingletonItem = 'venue___model___hasSingletonItem',
  VenueModelOriginalId = 'venue___model___originalId',
  VenueModelFieldsTags = 'venue___model___fields___tags',
  VenueModelFieldsId = 'venue___model___fields___id',
  VenueModelFieldsChildren = 'venue___model___fields___children',
  VenueModelId = 'venue___model___id',
  VenueModelParentId = 'venue___model___parent___id',
  VenueModelParentChildren = 'venue___model___parent___children',
  VenueModelChildren = 'venue___model___children',
  VenueModelChildrenId = 'venue___model___children___id',
  VenueModelChildrenChildren = 'venue___model___children___children',
  VenueModelInternalContent = 'venue___model___internal___content',
  VenueModelInternalContentDigest = 'venue___model___internal___contentDigest',
  VenueModelInternalDescription = 'venue___model___internal___description',
  VenueModelInternalFieldOwners = 'venue___model___internal___fieldOwners',
  VenueModelInternalIgnoreType = 'venue___model___internal___ignoreType',
  VenueModelInternalMediaType = 'venue___model___internal___mediaType',
  VenueModelInternalOwner = 'venue___model___internal___owner',
  VenueModelInternalType = 'venue___model___internal___type',
  VenueId = 'venue___id',
  VenueParentId = 'venue___parent___id',
  VenueParentParentId = 'venue___parent___parent___id',
  VenueParentParentChildren = 'venue___parent___parent___children',
  VenueParentChildren = 'venue___parent___children',
  VenueParentChildrenId = 'venue___parent___children___id',
  VenueParentChildrenChildren = 'venue___parent___children___children',
  VenueParentInternalContent = 'venue___parent___internal___content',
  VenueParentInternalContentDigest = 'venue___parent___internal___contentDigest',
  VenueParentInternalDescription = 'venue___parent___internal___description',
  VenueParentInternalFieldOwners = 'venue___parent___internal___fieldOwners',
  VenueParentInternalIgnoreType = 'venue___parent___internal___ignoreType',
  VenueParentInternalMediaType = 'venue___parent___internal___mediaType',
  VenueParentInternalOwner = 'venue___parent___internal___owner',
  VenueParentInternalType = 'venue___parent___internal___type',
  VenueChildren = 'venue___children',
  VenueChildrenId = 'venue___children___id',
  VenueChildrenParentId = 'venue___children___parent___id',
  VenueChildrenParentChildren = 'venue___children___parent___children',
  VenueChildrenChildren = 'venue___children___children',
  VenueChildrenChildrenId = 'venue___children___children___id',
  VenueChildrenChildrenChildren = 'venue___children___children___children',
  VenueChildrenInternalContent = 'venue___children___internal___content',
  VenueChildrenInternalContentDigest = 'venue___children___internal___contentDigest',
  VenueChildrenInternalDescription = 'venue___children___internal___description',
  VenueChildrenInternalFieldOwners = 'venue___children___internal___fieldOwners',
  VenueChildrenInternalIgnoreType = 'venue___children___internal___ignoreType',
  VenueChildrenInternalMediaType = 'venue___children___internal___mediaType',
  VenueChildrenInternalOwner = 'venue___children___internal___owner',
  VenueChildrenInternalType = 'venue___children___internal___type',
  VenueInternalContent = 'venue___internal___content',
  VenueInternalContentDigest = 'venue___internal___contentDigest',
  VenueInternalDescription = 'venue___internal___description',
  VenueInternalFieldOwners = 'venue___internal___fieldOwners',
  VenueInternalIgnoreType = 'venue___internal___ignoreType',
  VenueInternalMediaType = 'venue___internal___mediaType',
  VenueInternalOwner = 'venue___internal___owner',
  VenueInternalType = 'venue___internal___type',
  ArticleTitle = 'article___title',
  ArticleFeaturedImageSize = 'article___featuredImage___size',
  ArticleFeaturedImageWidth = 'article___featuredImage___width',
  ArticleFeaturedImageHeight = 'article___featuredImage___height',
  ArticleFeaturedImagePath = 'article___featuredImage___path',
  ArticleFeaturedImageFormat = 'article___featuredImage___format',
  ArticleFeaturedImageIsImage = 'article___featuredImage___isImage',
  ArticleFeaturedImageNotes = 'article___featuredImage___notes',
  ArticleFeaturedImageAuthor = 'article___featuredImage___author',
  ArticleFeaturedImageCopyright = 'article___featuredImage___copyright',
  ArticleFeaturedImageTags = 'article___featuredImage___tags',
  ArticleFeaturedImageSmartTags = 'article___featuredImage___smartTags',
  ArticleFeaturedImageFilename = 'article___featuredImage___filename',
  ArticleFeaturedImageBasename = 'article___featuredImage___basename',
  ArticleFeaturedImageExifInfo = 'article___featuredImage___exifInfo',
  ArticleFeaturedImageMimeType = 'article___featuredImage___mimeType',
  ArticleFeaturedImageColors = 'article___featuredImage___colors',
  ArticleFeaturedImageColorsRed = 'article___featuredImage___colors___red',
  ArticleFeaturedImageColorsGreen = 'article___featuredImage___colors___green',
  ArticleFeaturedImageColorsBlue = 'article___featuredImage___colors___blue',
  ArticleFeaturedImageColorsAlpha = 'article___featuredImage___colors___alpha',
  ArticleFeaturedImageColorsRgb = 'article___featuredImage___colors___rgb',
  ArticleFeaturedImageColorsHex = 'article___featuredImage___colors___hex',
  ArticleFeaturedImageBlurhash = 'article___featuredImage___blurhash',
  ArticleFeaturedImageOriginalId = 'article___featuredImage___originalId',
  ArticleFeaturedImageUrl = 'article___featuredImage___url',
  ArticleFeaturedImageCreatedAt = 'article___featuredImage___createdAt',
  ArticleFeaturedImageVideoMuxPlaybackId = 'article___featuredImage___video___muxPlaybackId',
  ArticleFeaturedImageVideoFrameRate = 'article___featuredImage___video___frameRate',
  ArticleFeaturedImageVideoDuration = 'article___featuredImage___video___duration',
  ArticleFeaturedImageVideoStreamingUrl = 'article___featuredImage___video___streamingUrl',
  ArticleFeaturedImageVideoThumbnailUrl = 'article___featuredImage___video___thumbnailUrl',
  ArticleFeaturedImageVideoMp4Url = 'article___featuredImage___video___mp4Url',
  ArticleFeaturedImageFluidBase64 = 'article___featuredImage___fluid___base64',
  ArticleFeaturedImageFluidTracedSvg = 'article___featuredImage___fluid___tracedSVG',
  ArticleFeaturedImageFluidAspectRatio = 'article___featuredImage___fluid___aspectRatio',
  ArticleFeaturedImageFluidWidth = 'article___featuredImage___fluid___width',
  ArticleFeaturedImageFluidHeight = 'article___featuredImage___fluid___height',
  ArticleFeaturedImageFluidSrc = 'article___featuredImage___fluid___src',
  ArticleFeaturedImageFluidSrcSet = 'article___featuredImage___fluid___srcSet',
  ArticleFeaturedImageFluidSizes = 'article___featuredImage___fluid___sizes',
  ArticleFeaturedImageSizesBase64 = 'article___featuredImage___sizes___base64',
  ArticleFeaturedImageSizesTracedSvg = 'article___featuredImage___sizes___tracedSVG',
  ArticleFeaturedImageSizesAspectRatio = 'article___featuredImage___sizes___aspectRatio',
  ArticleFeaturedImageSizesWidth = 'article___featuredImage___sizes___width',
  ArticleFeaturedImageSizesHeight = 'article___featuredImage___sizes___height',
  ArticleFeaturedImageSizesSrc = 'article___featuredImage___sizes___src',
  ArticleFeaturedImageSizesSrcSet = 'article___featuredImage___sizes___srcSet',
  ArticleFeaturedImageSizesSizes = 'article___featuredImage___sizes___sizes',
  ArticleFeaturedImageFixedBase64 = 'article___featuredImage___fixed___base64',
  ArticleFeaturedImageFixedTracedSvg = 'article___featuredImage___fixed___tracedSVG',
  ArticleFeaturedImageFixedAspectRatio = 'article___featuredImage___fixed___aspectRatio',
  ArticleFeaturedImageFixedWidth = 'article___featuredImage___fixed___width',
  ArticleFeaturedImageFixedHeight = 'article___featuredImage___fixed___height',
  ArticleFeaturedImageFixedSrc = 'article___featuredImage___fixed___src',
  ArticleFeaturedImageFixedSrcSet = 'article___featuredImage___fixed___srcSet',
  ArticleFeaturedImageFixedSizes = 'article___featuredImage___fixed___sizes',
  ArticleFeaturedImageResolutionsBase64 = 'article___featuredImage___resolutions___base64',
  ArticleFeaturedImageResolutionsTracedSvg = 'article___featuredImage___resolutions___tracedSVG',
  ArticleFeaturedImageResolutionsAspectRatio = 'article___featuredImage___resolutions___aspectRatio',
  ArticleFeaturedImageResolutionsWidth = 'article___featuredImage___resolutions___width',
  ArticleFeaturedImageResolutionsHeight = 'article___featuredImage___resolutions___height',
  ArticleFeaturedImageResolutionsSrc = 'article___featuredImage___resolutions___src',
  ArticleFeaturedImageResolutionsSrcSet = 'article___featuredImage___resolutions___srcSet',
  ArticleFeaturedImageResolutionsSizes = 'article___featuredImage___resolutions___sizes',
  ArticleFeaturedImageGatsbyImageData = 'article___featuredImage___gatsbyImageData',
  ArticleFeaturedImageAlt = 'article___featuredImage___alt',
  ArticleFeaturedImageTitle = 'article___featuredImage___title',
  ArticleFeaturedImageCustomData = 'article___featuredImage___customData',
  ArticleFeaturedImageFocalPointX = 'article___featuredImage___focalPoint___x',
  ArticleFeaturedImageFocalPointY = 'article___featuredImage___focalPoint___y',
  ArticleExcerpt = 'article___excerpt',
  ArticleBodyValue = 'article___body___value',
  ArticleBodyBlocks = 'article___body___blocks',
  ArticleBodyBlocksOriginalId = 'article___body___blocks___originalId',
  ArticleBodyBlocksLocale = 'article___body___blocks___locale',
  ArticleBodyBlocksId = 'article___body___blocks___id',
  ArticleBodyBlocksChildren = 'article___body___blocks___children',
  ArticleBodyLinks = 'article___body___links',
  ArticleCarousel = 'article___carousel',
  ArticleMetaCreatedAt = 'article___meta___createdAt',
  ArticleMetaUpdatedAt = 'article___meta___updatedAt',
  ArticleMetaPublishedAt = 'article___meta___publishedAt',
  ArticleMetaFirstPublishedAt = 'article___meta___firstPublishedAt',
  ArticleMetaIsValid = 'article___meta___isValid',
  ArticleMetaStatus = 'article___meta___status',
  ArticleOriginalId = 'article___originalId',
  ArticleLocale = 'article___locale',
  ArticleSeoMetaTagsTags = 'article___seoMetaTags___tags',
  ArticleSeoMetaTagsId = 'article___seoMetaTags___id',
  ArticleSeoMetaTagsParentId = 'article___seoMetaTags___parent___id',
  ArticleSeoMetaTagsParentChildren = 'article___seoMetaTags___parent___children',
  ArticleSeoMetaTagsChildren = 'article___seoMetaTags___children',
  ArticleSeoMetaTagsChildrenId = 'article___seoMetaTags___children___id',
  ArticleSeoMetaTagsChildrenChildren = 'article___seoMetaTags___children___children',
  ArticleSeoMetaTagsInternalContent = 'article___seoMetaTags___internal___content',
  ArticleSeoMetaTagsInternalContentDigest = 'article___seoMetaTags___internal___contentDigest',
  ArticleSeoMetaTagsInternalDescription = 'article___seoMetaTags___internal___description',
  ArticleSeoMetaTagsInternalFieldOwners = 'article___seoMetaTags___internal___fieldOwners',
  ArticleSeoMetaTagsInternalIgnoreType = 'article___seoMetaTags___internal___ignoreType',
  ArticleSeoMetaTagsInternalMediaType = 'article___seoMetaTags___internal___mediaType',
  ArticleSeoMetaTagsInternalOwner = 'article___seoMetaTags___internal___owner',
  ArticleSeoMetaTagsInternalType = 'article___seoMetaTags___internal___type',
  ArticleModelName = 'article___model___name',
  ArticleModelSingleton = 'article___model___singleton',
  ArticleModelSortable = 'article___model___sortable',
  ArticleModelApiKey = 'article___model___apiKey',
  ArticleModelOrderingDirection = 'article___model___orderingDirection',
  ArticleModelTree = 'article___model___tree',
  ArticleModelModularBlock = 'article___model___modularBlock',
  ArticleModelDraftModeActive = 'article___model___draftModeActive',
  ArticleModelAllLocalesRequired = 'article___model___allLocalesRequired',
  ArticleModelCollectionAppeareance = 'article___model___collectionAppeareance',
  ArticleModelHasSingletonItem = 'article___model___hasSingletonItem',
  ArticleModelOriginalId = 'article___model___originalId',
  ArticleModelFieldsTags = 'article___model___fields___tags',
  ArticleModelFieldsId = 'article___model___fields___id',
  ArticleModelFieldsChildren = 'article___model___fields___children',
  ArticleModelId = 'article___model___id',
  ArticleModelParentId = 'article___model___parent___id',
  ArticleModelParentChildren = 'article___model___parent___children',
  ArticleModelChildren = 'article___model___children',
  ArticleModelChildrenId = 'article___model___children___id',
  ArticleModelChildrenChildren = 'article___model___children___children',
  ArticleModelInternalContent = 'article___model___internal___content',
  ArticleModelInternalContentDigest = 'article___model___internal___contentDigest',
  ArticleModelInternalDescription = 'article___model___internal___description',
  ArticleModelInternalFieldOwners = 'article___model___internal___fieldOwners',
  ArticleModelInternalIgnoreType = 'article___model___internal___ignoreType',
  ArticleModelInternalMediaType = 'article___model___internal___mediaType',
  ArticleModelInternalOwner = 'article___model___internal___owner',
  ArticleModelInternalType = 'article___model___internal___type',
  ArticleId = 'article___id',
  ArticleParentId = 'article___parent___id',
  ArticleParentParentId = 'article___parent___parent___id',
  ArticleParentParentChildren = 'article___parent___parent___children',
  ArticleParentChildren = 'article___parent___children',
  ArticleParentChildrenId = 'article___parent___children___id',
  ArticleParentChildrenChildren = 'article___parent___children___children',
  ArticleParentInternalContent = 'article___parent___internal___content',
  ArticleParentInternalContentDigest = 'article___parent___internal___contentDigest',
  ArticleParentInternalDescription = 'article___parent___internal___description',
  ArticleParentInternalFieldOwners = 'article___parent___internal___fieldOwners',
  ArticleParentInternalIgnoreType = 'article___parent___internal___ignoreType',
  ArticleParentInternalMediaType = 'article___parent___internal___mediaType',
  ArticleParentInternalOwner = 'article___parent___internal___owner',
  ArticleParentInternalType = 'article___parent___internal___type',
  ArticleChildren = 'article___children',
  ArticleChildrenId = 'article___children___id',
  ArticleChildrenParentId = 'article___children___parent___id',
  ArticleChildrenParentChildren = 'article___children___parent___children',
  ArticleChildrenChildren = 'article___children___children',
  ArticleChildrenChildrenId = 'article___children___children___id',
  ArticleChildrenChildrenChildren = 'article___children___children___children',
  ArticleChildrenInternalContent = 'article___children___internal___content',
  ArticleChildrenInternalContentDigest = 'article___children___internal___contentDigest',
  ArticleChildrenInternalDescription = 'article___children___internal___description',
  ArticleChildrenInternalFieldOwners = 'article___children___internal___fieldOwners',
  ArticleChildrenInternalIgnoreType = 'article___children___internal___ignoreType',
  ArticleChildrenInternalMediaType = 'article___children___internal___mediaType',
  ArticleChildrenInternalOwner = 'article___children___internal___owner',
  ArticleChildrenInternalType = 'article___children___internal___type',
  ArticleInternalContent = 'article___internal___content',
  ArticleInternalContentDigest = 'article___internal___contentDigest',
  ArticleInternalDescription = 'article___internal___description',
  ArticleInternalFieldOwners = 'article___internal___fieldOwners',
  ArticleInternalIgnoreType = 'article___internal___ignoreType',
  ArticleInternalMediaType = 'article___internal___mediaType',
  ArticleInternalOwner = 'article___internal___owner',
  ArticleInternalType = 'article___internal___type',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsScheduleFilterInput = {
  heldOn?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  venue?: Maybe<DatoCmsVenueFilterInput>;
  article?: Maybe<DatoCmsArticleFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsScheduleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsScheduleEdge>;
  nodes: Array<DatoCmsSchedule>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsScheduleSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsScheduleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSeoField = {
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  twitterCard: Maybe<Scalars['String']>;
  image: Maybe<DatoCmsAsset>;
};

export type DatoCmsSeoFieldFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  twitterCard?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsAssetFilterInput>;
};

export type DatoCmsSeoMetaTags = Node & {
  tags: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSeoMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
};


export type DatoCmsSeoMetaTagsConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
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


export type DatoCmsSeoMetaTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsEdge = {
  next: Maybe<DatoCmsSeoMetaTags>;
  node: DatoCmsSeoMetaTags;
  previous: Maybe<DatoCmsSeoMetaTags>;
};

export enum DatoCmsSeoMetaTagsFieldsEnum {
  Tags = 'tags',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsSeoMetaTagsFilterInput = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSeoMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsSeoMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSite = Node & {
  name: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  locales: Maybe<Array<Maybe<Scalars['String']>>>;
  domain: Maybe<Scalars['String']>;
  internalDomain: Maybe<Scalars['String']>;
  noIndex: Maybe<Scalars['Boolean']>;
  globalSeo: Maybe<DatoCmsGlobalSeo>;
  faviconMetaTags: Maybe<DatoCmsFaviconMetaTags>;
  originalId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsSiteGroupConnection>;
};


export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
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


export type DatoCmsSiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteEdge = {
  next: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous: Maybe<DatoCmsSite>;
};

export enum DatoCmsSiteFieldsEnum {
  Name = 'name',
  Locale = 'locale',
  Locales = 'locales',
  Domain = 'domain',
  InternalDomain = 'internalDomain',
  NoIndex = 'noIndex',
  GlobalSeoSiteName = 'globalSeo___siteName',
  GlobalSeoTitleSuffix = 'globalSeo___titleSuffix',
  GlobalSeoTwitterAccount = 'globalSeo___twitterAccount',
  GlobalSeoFacebookPageUrl = 'globalSeo___facebookPageUrl',
  GlobalSeoFallbackSeoTitle = 'globalSeo___fallbackSeo___title',
  GlobalSeoFallbackSeoDescription = 'globalSeo___fallbackSeo___description',
  GlobalSeoFallbackSeoTwitterCard = 'globalSeo___fallbackSeo___twitterCard',
  GlobalSeoFallbackSeoImageSize = 'globalSeo___fallbackSeo___image___size',
  GlobalSeoFallbackSeoImageWidth = 'globalSeo___fallbackSeo___image___width',
  GlobalSeoFallbackSeoImageHeight = 'globalSeo___fallbackSeo___image___height',
  GlobalSeoFallbackSeoImagePath = 'globalSeo___fallbackSeo___image___path',
  GlobalSeoFallbackSeoImageFormat = 'globalSeo___fallbackSeo___image___format',
  GlobalSeoFallbackSeoImageIsImage = 'globalSeo___fallbackSeo___image___isImage',
  GlobalSeoFallbackSeoImageNotes = 'globalSeo___fallbackSeo___image___notes',
  GlobalSeoFallbackSeoImageAuthor = 'globalSeo___fallbackSeo___image___author',
  GlobalSeoFallbackSeoImageCopyright = 'globalSeo___fallbackSeo___image___copyright',
  GlobalSeoFallbackSeoImageTags = 'globalSeo___fallbackSeo___image___tags',
  GlobalSeoFallbackSeoImageSmartTags = 'globalSeo___fallbackSeo___image___smartTags',
  GlobalSeoFallbackSeoImageFilename = 'globalSeo___fallbackSeo___image___filename',
  GlobalSeoFallbackSeoImageBasename = 'globalSeo___fallbackSeo___image___basename',
  GlobalSeoFallbackSeoImageExifInfo = 'globalSeo___fallbackSeo___image___exifInfo',
  GlobalSeoFallbackSeoImageMimeType = 'globalSeo___fallbackSeo___image___mimeType',
  GlobalSeoFallbackSeoImageColors = 'globalSeo___fallbackSeo___image___colors',
  GlobalSeoFallbackSeoImageBlurhash = 'globalSeo___fallbackSeo___image___blurhash',
  GlobalSeoFallbackSeoImageOriginalId = 'globalSeo___fallbackSeo___image___originalId',
  GlobalSeoFallbackSeoImageUrl = 'globalSeo___fallbackSeo___image___url',
  GlobalSeoFallbackSeoImageCreatedAt = 'globalSeo___fallbackSeo___image___createdAt',
  GlobalSeoFallbackSeoImageGatsbyImageData = 'globalSeo___fallbackSeo___image___gatsbyImageData',
  GlobalSeoFallbackSeoImageId = 'globalSeo___fallbackSeo___image___id',
  GlobalSeoFallbackSeoImageChildren = 'globalSeo___fallbackSeo___image___children',
  FaviconMetaTagsTags = 'faviconMetaTags___tags',
  FaviconMetaTagsId = 'faviconMetaTags___id',
  FaviconMetaTagsParentId = 'faviconMetaTags___parent___id',
  FaviconMetaTagsParentParentId = 'faviconMetaTags___parent___parent___id',
  FaviconMetaTagsParentParentChildren = 'faviconMetaTags___parent___parent___children',
  FaviconMetaTagsParentChildren = 'faviconMetaTags___parent___children',
  FaviconMetaTagsParentChildrenId = 'faviconMetaTags___parent___children___id',
  FaviconMetaTagsParentChildrenChildren = 'faviconMetaTags___parent___children___children',
  FaviconMetaTagsParentInternalContent = 'faviconMetaTags___parent___internal___content',
  FaviconMetaTagsParentInternalContentDigest = 'faviconMetaTags___parent___internal___contentDigest',
  FaviconMetaTagsParentInternalDescription = 'faviconMetaTags___parent___internal___description',
  FaviconMetaTagsParentInternalFieldOwners = 'faviconMetaTags___parent___internal___fieldOwners',
  FaviconMetaTagsParentInternalIgnoreType = 'faviconMetaTags___parent___internal___ignoreType',
  FaviconMetaTagsParentInternalMediaType = 'faviconMetaTags___parent___internal___mediaType',
  FaviconMetaTagsParentInternalOwner = 'faviconMetaTags___parent___internal___owner',
  FaviconMetaTagsParentInternalType = 'faviconMetaTags___parent___internal___type',
  FaviconMetaTagsChildren = 'faviconMetaTags___children',
  FaviconMetaTagsChildrenId = 'faviconMetaTags___children___id',
  FaviconMetaTagsChildrenParentId = 'faviconMetaTags___children___parent___id',
  FaviconMetaTagsChildrenParentChildren = 'faviconMetaTags___children___parent___children',
  FaviconMetaTagsChildrenChildren = 'faviconMetaTags___children___children',
  FaviconMetaTagsChildrenChildrenId = 'faviconMetaTags___children___children___id',
  FaviconMetaTagsChildrenChildrenChildren = 'faviconMetaTags___children___children___children',
  FaviconMetaTagsChildrenInternalContent = 'faviconMetaTags___children___internal___content',
  FaviconMetaTagsChildrenInternalContentDigest = 'faviconMetaTags___children___internal___contentDigest',
  FaviconMetaTagsChildrenInternalDescription = 'faviconMetaTags___children___internal___description',
  FaviconMetaTagsChildrenInternalFieldOwners = 'faviconMetaTags___children___internal___fieldOwners',
  FaviconMetaTagsChildrenInternalIgnoreType = 'faviconMetaTags___children___internal___ignoreType',
  FaviconMetaTagsChildrenInternalMediaType = 'faviconMetaTags___children___internal___mediaType',
  FaviconMetaTagsChildrenInternalOwner = 'faviconMetaTags___children___internal___owner',
  FaviconMetaTagsChildrenInternalType = 'faviconMetaTags___children___internal___type',
  FaviconMetaTagsInternalContent = 'faviconMetaTags___internal___content',
  FaviconMetaTagsInternalContentDigest = 'faviconMetaTags___internal___contentDigest',
  FaviconMetaTagsInternalDescription = 'faviconMetaTags___internal___description',
  FaviconMetaTagsInternalFieldOwners = 'faviconMetaTags___internal___fieldOwners',
  FaviconMetaTagsInternalIgnoreType = 'faviconMetaTags___internal___ignoreType',
  FaviconMetaTagsInternalMediaType = 'faviconMetaTags___internal___mediaType',
  FaviconMetaTagsInternalOwner = 'faviconMetaTags___internal___owner',
  FaviconMetaTagsInternalType = 'faviconMetaTags___internal___type',
  OriginalId = 'originalId',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsSiteFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsSiteSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsTextNode = Node & {
  fields: Maybe<DatoCmsTextNodeFields>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
};


export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
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


export type DatoCmsTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeEdge = {
  next: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous: Maybe<DatoCmsTextNode>;
};

export type DatoCmsTextNodeFields = {
  customField: Maybe<Scalars['String']>;
};

export enum DatoCmsTextNodeFieldsEnum {
  FieldsCustomField = 'fields___customField',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkFieldsCustomField = 'childrenMarkdownRemark___fields___customField',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFieldsCustomField = 'childMarkdownRemark___fields___customField',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsTextNodeFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsTextNodeFilterInput = {
  fields?: Maybe<DatoCmsTextNodeFieldsFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsVenue = Node & {
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  meta: Maybe<DatoCmsMetaField>;
  originalId: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  seoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  model: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsVenueConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsVenueEdge>;
  nodes: Array<DatoCmsVenue>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DatoCmsVenueGroupConnection>;
};


export type DatoCmsVenueConnectionDistinctArgs = {
  field: DatoCmsVenueFieldsEnum;
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


export type DatoCmsVenueConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsVenueFieldsEnum;
};

export type DatoCmsVenueEdge = {
  next: Maybe<DatoCmsVenue>;
  node: DatoCmsVenue;
  previous: Maybe<DatoCmsVenue>;
};

export enum DatoCmsVenueFieldsEnum {
  Name = 'name',
  Url = 'url',
  MetaCreatedAt = 'meta___createdAt',
  MetaUpdatedAt = 'meta___updatedAt',
  MetaPublishedAt = 'meta___publishedAt',
  MetaFirstPublishedAt = 'meta___firstPublishedAt',
  MetaIsValid = 'meta___isValid',
  MetaStatus = 'meta___status',
  OriginalId = 'originalId',
  Locale = 'locale',
  SeoMetaTagsTags = 'seoMetaTags___tags',
  SeoMetaTagsId = 'seoMetaTags___id',
  SeoMetaTagsParentId = 'seoMetaTags___parent___id',
  SeoMetaTagsParentParentId = 'seoMetaTags___parent___parent___id',
  SeoMetaTagsParentParentChildren = 'seoMetaTags___parent___parent___children',
  SeoMetaTagsParentChildren = 'seoMetaTags___parent___children',
  SeoMetaTagsParentChildrenId = 'seoMetaTags___parent___children___id',
  SeoMetaTagsParentChildrenChildren = 'seoMetaTags___parent___children___children',
  SeoMetaTagsParentInternalContent = 'seoMetaTags___parent___internal___content',
  SeoMetaTagsParentInternalContentDigest = 'seoMetaTags___parent___internal___contentDigest',
  SeoMetaTagsParentInternalDescription = 'seoMetaTags___parent___internal___description',
  SeoMetaTagsParentInternalFieldOwners = 'seoMetaTags___parent___internal___fieldOwners',
  SeoMetaTagsParentInternalIgnoreType = 'seoMetaTags___parent___internal___ignoreType',
  SeoMetaTagsParentInternalMediaType = 'seoMetaTags___parent___internal___mediaType',
  SeoMetaTagsParentInternalOwner = 'seoMetaTags___parent___internal___owner',
  SeoMetaTagsParentInternalType = 'seoMetaTags___parent___internal___type',
  SeoMetaTagsChildren = 'seoMetaTags___children',
  SeoMetaTagsChildrenId = 'seoMetaTags___children___id',
  SeoMetaTagsChildrenParentId = 'seoMetaTags___children___parent___id',
  SeoMetaTagsChildrenParentChildren = 'seoMetaTags___children___parent___children',
  SeoMetaTagsChildrenChildren = 'seoMetaTags___children___children',
  SeoMetaTagsChildrenChildrenId = 'seoMetaTags___children___children___id',
  SeoMetaTagsChildrenChildrenChildren = 'seoMetaTags___children___children___children',
  SeoMetaTagsChildrenInternalContent = 'seoMetaTags___children___internal___content',
  SeoMetaTagsChildrenInternalContentDigest = 'seoMetaTags___children___internal___contentDigest',
  SeoMetaTagsChildrenInternalDescription = 'seoMetaTags___children___internal___description',
  SeoMetaTagsChildrenInternalFieldOwners = 'seoMetaTags___children___internal___fieldOwners',
  SeoMetaTagsChildrenInternalIgnoreType = 'seoMetaTags___children___internal___ignoreType',
  SeoMetaTagsChildrenInternalMediaType = 'seoMetaTags___children___internal___mediaType',
  SeoMetaTagsChildrenInternalOwner = 'seoMetaTags___children___internal___owner',
  SeoMetaTagsChildrenInternalType = 'seoMetaTags___children___internal___type',
  SeoMetaTagsInternalContent = 'seoMetaTags___internal___content',
  SeoMetaTagsInternalContentDigest = 'seoMetaTags___internal___contentDigest',
  SeoMetaTagsInternalDescription = 'seoMetaTags___internal___description',
  SeoMetaTagsInternalFieldOwners = 'seoMetaTags___internal___fieldOwners',
  SeoMetaTagsInternalIgnoreType = 'seoMetaTags___internal___ignoreType',
  SeoMetaTagsInternalMediaType = 'seoMetaTags___internal___mediaType',
  SeoMetaTagsInternalOwner = 'seoMetaTags___internal___owner',
  SeoMetaTagsInternalType = 'seoMetaTags___internal___type',
  ModelName = 'model___name',
  ModelSingleton = 'model___singleton',
  ModelSortable = 'model___sortable',
  ModelApiKey = 'model___apiKey',
  ModelOrderingDirection = 'model___orderingDirection',
  ModelTree = 'model___tree',
  ModelModularBlock = 'model___modularBlock',
  ModelDraftModeActive = 'model___draftModeActive',
  ModelAllLocalesRequired = 'model___allLocalesRequired',
  ModelCollectionAppeareance = 'model___collectionAppeareance',
  ModelHasSingletonItem = 'model___hasSingletonItem',
  ModelOriginalId = 'model___originalId',
  ModelFieldsTags = 'model___fields___tags',
  ModelFieldsId = 'model___fields___id',
  ModelFieldsParentId = 'model___fields___parent___id',
  ModelFieldsParentChildren = 'model___fields___parent___children',
  ModelFieldsChildren = 'model___fields___children',
  ModelFieldsChildrenId = 'model___fields___children___id',
  ModelFieldsChildrenChildren = 'model___fields___children___children',
  ModelFieldsInternalContent = 'model___fields___internal___content',
  ModelFieldsInternalContentDigest = 'model___fields___internal___contentDigest',
  ModelFieldsInternalDescription = 'model___fields___internal___description',
  ModelFieldsInternalFieldOwners = 'model___fields___internal___fieldOwners',
  ModelFieldsInternalIgnoreType = 'model___fields___internal___ignoreType',
  ModelFieldsInternalMediaType = 'model___fields___internal___mediaType',
  ModelFieldsInternalOwner = 'model___fields___internal___owner',
  ModelFieldsInternalType = 'model___fields___internal___type',
  ModelId = 'model___id',
  ModelParentId = 'model___parent___id',
  ModelParentParentId = 'model___parent___parent___id',
  ModelParentParentChildren = 'model___parent___parent___children',
  ModelParentChildren = 'model___parent___children',
  ModelParentChildrenId = 'model___parent___children___id',
  ModelParentChildrenChildren = 'model___parent___children___children',
  ModelParentInternalContent = 'model___parent___internal___content',
  ModelParentInternalContentDigest = 'model___parent___internal___contentDigest',
  ModelParentInternalDescription = 'model___parent___internal___description',
  ModelParentInternalFieldOwners = 'model___parent___internal___fieldOwners',
  ModelParentInternalIgnoreType = 'model___parent___internal___ignoreType',
  ModelParentInternalMediaType = 'model___parent___internal___mediaType',
  ModelParentInternalOwner = 'model___parent___internal___owner',
  ModelParentInternalType = 'model___parent___internal___type',
  ModelChildren = 'model___children',
  ModelChildrenId = 'model___children___id',
  ModelChildrenParentId = 'model___children___parent___id',
  ModelChildrenParentChildren = 'model___children___parent___children',
  ModelChildrenChildren = 'model___children___children',
  ModelChildrenChildrenId = 'model___children___children___id',
  ModelChildrenChildrenChildren = 'model___children___children___children',
  ModelChildrenInternalContent = 'model___children___internal___content',
  ModelChildrenInternalContentDigest = 'model___children___internal___contentDigest',
  ModelChildrenInternalDescription = 'model___children___internal___description',
  ModelChildrenInternalFieldOwners = 'model___children___internal___fieldOwners',
  ModelChildrenInternalIgnoreType = 'model___children___internal___ignoreType',
  ModelChildrenInternalMediaType = 'model___children___internal___mediaType',
  ModelChildrenInternalOwner = 'model___children___internal___owner',
  ModelChildrenInternalType = 'model___children___internal___type',
  ModelInternalContent = 'model___internal___content',
  ModelInternalContentDigest = 'model___internal___contentDigest',
  ModelInternalDescription = 'model___internal___description',
  ModelInternalFieldOwners = 'model___internal___fieldOwners',
  ModelInternalIgnoreType = 'model___internal___ignoreType',
  ModelInternalMediaType = 'model___internal___mediaType',
  ModelInternalOwner = 'model___internal___owner',
  ModelInternalType = 'model___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DatoCmsVenueFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsVenueGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsVenueEdge>;
  nodes: Array<DatoCmsVenue>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DatoCmsVenueSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsVenueFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsVideoField = {
  url: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  providerUid: Maybe<Scalars['String']>;
  thumbnailUrl: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
};

export enum DatoImagePlaceholder {
  None = 'NONE',
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED'
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  fields: Maybe<DirectoryFields>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
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


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export type DirectoryFields = {
  customField: Maybe<Scalars['String']>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  FieldsCustomField = 'fields___customField',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<DirectoryFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  fields: Maybe<FileFields>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
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


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export type FileFields = {
  customField: Maybe<Scalars['String']>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  FieldsCustomField = 'fields___customField',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpFieldsCustomField = 'childrenImageSharp___fields___customField',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpFieldsCustomField = 'childImageSharp___fields___customField',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<FileFieldsFilterInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  fields: Maybe<ImageSharpFields>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
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


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export type ImageSharpFields = {
  customField: Maybe<Scalars['String']>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  FieldsCustomField = 'fields___customField',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  fields?: Maybe<ImageSharpFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
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
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  depth: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
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
  id: Scalars['ID'];
  frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  excerpt: Maybe<Scalars['String']>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  fields: Maybe<MarkdownRemarkFields>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  excerptAst: Maybe<Scalars['JSON']>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead: Maybe<Scalars['Int']>;
  tableOfContents: Maybe<Scalars['String']>;
  wordCount: Maybe<MarkdownWordCount>;
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
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
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
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


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  customField: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FieldsCustomField = 'fields___customField',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  datoCmsSeoMetaTags: Maybe<DatoCmsSeoMetaTags>;
  allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  datoCmsTextNode: Maybe<DatoCmsTextNode>;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  datoCmsArticle: Maybe<DatoCmsArticle>;
  allDatoCmsArticle: DatoCmsArticleConnection;
  datoCmsImage: Maybe<DatoCmsImage>;
  allDatoCmsImage: DatoCmsImageConnection;
  datoCmsSchedule: Maybe<DatoCmsSchedule>;
  allDatoCmsSchedule: DatoCmsScheduleConnection;
  datoCmsVenue: Maybe<DatoCmsVenue>;
  allDatoCmsVenue: DatoCmsVenueConnection;
  datoCmsAbout: Maybe<DatoCmsAbout>;
  allDatoCmsAbout: DatoCmsAboutConnection;
  datoCmsAsset: Maybe<DatoCmsAsset>;
  allDatoCmsAsset: DatoCmsAssetConnection;
  datoCmsSite: Maybe<DatoCmsSite>;
  allDatoCmsSite: DatoCmsSiteConnection;
  datoCmsFaviconMetaTags: Maybe<DatoCmsFaviconMetaTags>;
  allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  datoCmsField: Maybe<DatoCmsField>;
  allDatoCmsField: DatoCmsFieldConnection;
  datoCmsModel: Maybe<DatoCmsModel>;
  allDatoCmsModel: DatoCmsModelConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<FileFieldsFilterInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  fields?: Maybe<DirectoryFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SiteFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageFieldsFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  fields?: Maybe<ImageSharpFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsSeoMetaTagsArgs = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSeoMetaTagsArgs = {
  filter?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  sort?: Maybe<DatoCmsSeoMetaTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsTextNodeArgs = {
  fields?: Maybe<DatoCmsTextNodeFieldsFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsTextNodeArgs = {
  filter?: Maybe<DatoCmsTextNodeFilterInput>;
  sort?: Maybe<DatoCmsTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsArticleArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<DatoCmsFileFieldFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<DatoCmsDatoCmsArticleBodyStructuredTextFilterInput>;
  carousel?: Maybe<BooleanQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsArticleArgs = {
  filter?: Maybe<DatoCmsArticleFilterInput>;
  sort?: Maybe<DatoCmsArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsImageArgs = {
  image?: Maybe<DatoCmsFileFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsImageArgs = {
  filter?: Maybe<DatoCmsImageFilterInput>;
  sort?: Maybe<DatoCmsImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsScheduleArgs = {
  heldOn?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  venue?: Maybe<DatoCmsVenueFilterInput>;
  article?: Maybe<DatoCmsArticleFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsScheduleArgs = {
  filter?: Maybe<DatoCmsScheduleFilterInput>;
  sort?: Maybe<DatoCmsScheduleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsVenueArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsVenueArgs = {
  filter?: Maybe<DatoCmsVenueFilterInput>;
  sort?: Maybe<DatoCmsVenueSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsAboutArgs = {
  body?: Maybe<StringQueryOperatorInput>;
  bodyNode?: Maybe<DatoCmsTextNodeFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsAboutArgs = {
  filter?: Maybe<DatoCmsAboutFilterInput>;
  sort?: Maybe<DatoCmsAboutSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsAssetArgs = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsAssetArgs = {
  filter?: Maybe<DatoCmsAssetFilterInput>;
  sort?: Maybe<DatoCmsAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsSiteArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSiteArgs = {
  filter?: Maybe<DatoCmsSiteFilterInput>;
  sort?: Maybe<DatoCmsSiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsFaviconMetaTagsArgs = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFaviconMetaTagsArgs = {
  filter?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  sort?: Maybe<DatoCmsFaviconMetaTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsFieldArgs = {
  label?: Maybe<StringQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFieldArgs = {
  filter?: Maybe<DatoCmsFieldFilterInput>;
  sort?: Maybe<DatoCmsFieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsModelArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsModelArgs = {
  filter?: Maybe<DatoCmsModelFilterInput>;
  sort?: Maybe<DatoCmsModelSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  fields?: Maybe<SitePluginFieldsFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
  fields?: Maybe<SiteBuildMetadataFieldsFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  pathPrefix: Maybe<Scalars['String']>;
  fields: Maybe<SiteFields>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars['Date']>;
  fields: Maybe<SiteBuildMetadataFields>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
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


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFields = {
  customField: Maybe<Scalars['String']>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
  FieldsCustomField = 'fields___customField'
}

export type SiteBuildMetadataFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
  fields?: Maybe<SiteBuildMetadataFieldsFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
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


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export type SiteFields = {
  customField: Maybe<Scalars['String']>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteURL',
  SiteMetadataTwitterUserName = 'siteMetadata___twitterUserName',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  FieldsCustomField = 'fields___customField',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SiteFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
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


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  FunctionRoute = 'functionRoute',
  PluginName = 'pluginName',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  fields: Maybe<SitePageFields>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
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


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  meta: Maybe<SitePageContextMeta>;
  originalId: Maybe<Scalars['Date']>;
  title: Maybe<Scalars['String']>;
  excerpt: Maybe<Scalars['String']>;
  featuredImage: Maybe<SitePageContextFeaturedImage>;
  body: Maybe<SitePageContextBody>;
};

export type SitePageContextBody = {
  value: Maybe<SitePageContextBodyValue>;
};

export type SitePageContextBodyFilterInput = {
  value?: Maybe<SitePageContextBodyValueFilterInput>;
};

export type SitePageContextBodyValue = {
  schema: Maybe<Scalars['String']>;
  document: Maybe<SitePageContextBodyValueDocument>;
};

export type SitePageContextBodyValueDocument = {
  type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<SitePageContextBodyValueDocumentChildren>>>;
};

export type SitePageContextBodyValueDocumentChildren = {
  type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<SitePageContextBodyValueDocumentChildrenChildren>>>;
  level: Maybe<Scalars['Int']>;
  style: Maybe<Scalars['String']>;
};

export type SitePageContextBodyValueDocumentChildrenChildren = {
  type: Maybe<Scalars['String']>;
  marks: Maybe<Array<Maybe<Scalars['String']>>>;
  value: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  meta: Maybe<Array<Maybe<SitePageContextBodyValueDocumentChildrenChildrenMeta>>>;
  children: Maybe<Array<Maybe<SitePageContextBodyValueDocumentChildrenChildrenChildren>>>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenChildren = {
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<SitePageContextBodyValueDocumentChildrenChildrenChildrenChildren>>>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenChildrenChildren = {
  type: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenMetaFilterListInput>;
  children?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenFilterInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenMeta = {
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenMetaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBodyValueDocumentChildrenChildrenMetaFilterListInput = {
  elemMatch?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenMetaFilterInput>;
};

export type SitePageContextBodyValueDocumentChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SitePageContextBodyValueDocumentChildrenChildrenFilterListInput>;
  level?: Maybe<IntQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextBodyValueDocumentChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextBodyValueDocumentChildrenFilterInput>;
};

export type SitePageContextBodyValueDocumentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SitePageContextBodyValueDocumentChildrenFilterListInput>;
};

export type SitePageContextBodyValueFilterInput = {
  schema?: Maybe<StringQueryOperatorInput>;
  document?: Maybe<SitePageContextBodyValueDocumentFilterInput>;
};

export type SitePageContextFeaturedImage = {
  gatsbyImageData: Maybe<SitePageContextFeaturedImageGatsbyImageData>;
};

export type SitePageContextFeaturedImageFilterInput = {
  gatsbyImageData?: Maybe<SitePageContextFeaturedImageGatsbyImageDataFilterInput>;
};

export type SitePageContextFeaturedImageGatsbyImageData = {
  images: Maybe<SitePageContextFeaturedImageGatsbyImageDataImages>;
  layout: Maybe<Scalars['String']>;
  placeholder: Maybe<SitePageContextFeaturedImageGatsbyImageDataPlaceholder>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
};

export type SitePageContextFeaturedImageGatsbyImageDataFilterInput = {
  images?: Maybe<SitePageContextFeaturedImageGatsbyImageDataImagesFilterInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<SitePageContextFeaturedImageGatsbyImageDataPlaceholderFilterInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePageContextFeaturedImageGatsbyImageDataImages = {
  fallback: Maybe<SitePageContextFeaturedImageGatsbyImageDataImagesFallback>;
};

export type SitePageContextFeaturedImageGatsbyImageDataImagesFallback = {
  src: Maybe<Scalars['String']>;
  srcSet: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};

export type SitePageContextFeaturedImageGatsbyImageDataImagesFallbackFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFeaturedImageGatsbyImageDataImagesFilterInput = {
  fallback?: Maybe<SitePageContextFeaturedImageGatsbyImageDataImagesFallbackFilterInput>;
};

export type SitePageContextFeaturedImageGatsbyImageDataPlaceholder = {
  fallback: Maybe<Scalars['String']>;
};

export type SitePageContextFeaturedImageGatsbyImageDataPlaceholderFilterInput = {
  fallback?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFilterInput = {
  meta?: Maybe<SitePageContextMetaFilterInput>;
  originalId?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<SitePageContextFeaturedImageFilterInput>;
  body?: Maybe<SitePageContextBodyFilterInput>;
};

export type SitePageContextMeta = {
  firstPublishedAt: Maybe<Scalars['String']>;
};

export type SitePageContextMetaFilterInput = {
  firstPublishedAt?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export type SitePageFields = {
  customField: Maybe<Scalars['String']>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextMetaFirstPublishedAt = 'context___meta___firstPublishedAt',
  ContextOriginalId = 'context___originalId',
  ContextTitle = 'context___title',
  ContextExcerpt = 'context___excerpt',
  ContextFeaturedImageGatsbyImageDataLayout = 'context___featuredImage___gatsbyImageData___layout',
  ContextFeaturedImageGatsbyImageDataWidth = 'context___featuredImage___gatsbyImageData___width',
  ContextFeaturedImageGatsbyImageDataHeight = 'context___featuredImage___gatsbyImageData___height',
  ContextBodyValueSchema = 'context___body___value___schema',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsApiToken = 'pluginCreator___pluginOptions___apiToken',
  PluginCreatorPluginOptionsEnvironment = 'pluginCreator___pluginOptions___environment',
  PluginCreatorPluginOptionsPreviewMode = 'pluginCreator___pluginOptions___previewMode',
  PluginCreatorPluginOptionsDisableLiveReload = 'pluginCreator___pluginOptions___disableLiveReload',
  PluginCreatorPluginOptionsLocaleFallbacksIt = 'pluginCreator___pluginOptions___localeFallbacks___it',
  PluginCreatorPluginOptionsBucketName = 'pluginCreator___pluginOptions___bucketName',
  PluginCreatorPluginOptionsTrackingIds = 'pluginCreator___pluginOptions___trackingIds',
  PluginCreatorPluginOptionsGtagConfigAnonymizeIp = 'pluginCreator___pluginOptions___gtagConfig___anonymize_ip',
  PluginCreatorPluginOptionsPluginConfigHead = 'pluginCreator___pluginOptions___pluginConfig___head',
  PluginCreatorPluginOptionsPluginConfigRespectDnt = 'pluginCreator___pluginOptions___pluginConfig___respectDNT',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorFieldsCustomField = 'pluginCreator___fields___customField',
  PluginCreatorId = 'pluginCreatorId',
  FieldsCustomField = 'fields___customField'
}

export type SitePageFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageFieldsFilterInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  packageJson: Maybe<SitePluginPackageJson>;
  fields: Maybe<SitePluginFields>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  sum: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
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


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export type SitePluginFields = {
  customField: Maybe<Scalars['String']>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsApiToken = 'pluginOptions___apiToken',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsPreviewMode = 'pluginOptions___previewMode',
  PluginOptionsDisableLiveReload = 'pluginOptions___disableLiveReload',
  PluginOptionsLocaleFallbacksIt = 'pluginOptions___localeFallbacks___it',
  PluginOptionsBucketName = 'pluginOptions___bucketName',
  PluginOptionsTrackingIds = 'pluginOptions___trackingIds',
  PluginOptionsGtagConfigAnonymizeIp = 'pluginOptions___gtagConfig___anonymize_ip',
  PluginOptionsPluginConfigHead = 'pluginOptions___pluginConfig___head',
  PluginOptionsPluginConfigRespectDnt = 'pluginOptions___pluginConfig___respectDNT',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  FieldsCustomField = 'fields___customField'
}

export type SitePluginFieldsFilterInput = {
  customField?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  fields?: Maybe<SitePluginFieldsFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
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
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
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
  base64Width: Maybe<Scalars['Int']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  defaultQuality: Maybe<Scalars['Int']>;
  failOnError: Maybe<Scalars['Boolean']>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
  allExtensions: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  apiToken: Maybe<Scalars['String']>;
  environment: Maybe<Scalars['String']>;
  previewMode: Maybe<Scalars['Boolean']>;
  disableLiveReload: Maybe<Scalars['Boolean']>;
  localeFallbacks: Maybe<SitePluginPluginOptionsLocaleFallbacks>;
  bucketName: Maybe<Scalars['String']>;
  trackingIds: Maybe<Array<Maybe<Scalars['String']>>>;
  gtagConfig: Maybe<SitePluginPluginOptionsGtagConfig>;
  pluginConfig: Maybe<SitePluginPluginOptionsPluginConfig>;
  pathCheck: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  apiToken?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  previewMode?: Maybe<BooleanQueryOperatorInput>;
  disableLiveReload?: Maybe<BooleanQueryOperatorInput>;
  localeFallbacks?: Maybe<SitePluginPluginOptionsLocaleFallbacksFilterInput>;
  bucketName?: Maybe<StringQueryOperatorInput>;
  trackingIds?: Maybe<StringQueryOperatorInput>;
  gtagConfig?: Maybe<SitePluginPluginOptionsGtagConfigFilterInput>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
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
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  siteURL: Maybe<Scalars['String']>;
  twitterUserName: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteURL?: Maybe<StringQueryOperatorInput>;
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
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { allDatoCmsArticle: { edges: Array<{ next: Maybe<(
        Pick<DatoCmsArticle, 'title' | 'originalId'>
        & { featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>>, meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>> }
      )>, node: (
        Pick<DatoCmsArticle, 'originalId' | 'title' | 'excerpt'>
        & { meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>>, featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>>, body: Maybe<(
          Pick<DatoCmsDatoCmsArticleBodyStructuredText, 'value'>
          & { blocks: Maybe<Array<Maybe<(
            { __typename: 'DatoCmsImage' }
            & { id: DatoCmsImage['originalId'] }
            & { image: Maybe<Pick<DatoCmsFileField, 'url' | 'alt'>> }
          )>>> }
        )> }
      ), previous: Maybe<(
        Pick<DatoCmsArticle, 'title' | 'originalId'>
        & { featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>>, meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>> }
      )> }> } };

export type ArticleItemFieldsFragment = (
  Pick<DatoCmsArticle, 'originalId' | 'title' | 'excerpt'>
  & { meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>>, featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData' | 'alt'>> }
);

export type CarouselContentFieldsFragment = (
  Pick<DatoCmsArticle, 'originalId'>
  & { featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData' | 'alt'>> }
);

export type GetSiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSiteMetadataQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'siteURL' | 'twitterUserName'>> }>, file: Maybe<Pick<File, 'publicURL'>> };

export type LiveInfoItemFieldFragment = (
  Pick<DatoCmsSchedule, 'title' | 'heldOn'>
  & { venue: Maybe<Pick<DatoCmsVenue, 'name'>>, article: Maybe<Pick<DatoCmsArticle, 'originalId'>> }
);

export type LiveInfoListItemFieldFragment = (
  Pick<DatoCmsSchedule, 'originalId'>
  & LiveInfoItemFieldFragment
);

export type GetAboutPageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageContentQuery = { allDatoCmsAbout: { nodes: Array<{ bodyNode: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'excerpt' | 'html'>> }> }> } };

export type GetTopPageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopPageContentQuery = { carouselContents: { nodes: Array<CarouselContentFieldsFragment> }, allDatoCmsArticle: { nodes: Array<ArticleItemFieldsFragment> }, allDatoCmsSchedule: { nodes: Array<LiveInfoListItemFieldFragment> } };

export type GetLiveInfoPageContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLiveInfoPageContentQuery = { allDatoCmsSchedule: { nodes: Array<LiveInfoListItemFieldFragment> } };

export type GetArticleListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticleListQuery = { allDatoCmsArticle: { nodes: Array<ArticleItemFieldsFragment> } };

export type ArticleFieldsFragment = { next: Maybe<(
    Pick<DatoCmsArticle, 'title' | 'originalId'>
    & { featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>>, meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>> }
  )>, node: (
    Pick<DatoCmsArticle, 'originalId' | 'title' | 'excerpt'>
    & { meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>>, featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>>, body: Maybe<(
      Pick<DatoCmsDatoCmsArticleBodyStructuredText, 'value'>
      & { blocks: Maybe<Array<Maybe<(
        { __typename: 'DatoCmsImage' }
        & { id: DatoCmsImage['originalId'] }
        & { image: Maybe<Pick<DatoCmsFileField, 'url' | 'alt'>> }
      )>>> }
    )> }
  ), previous: Maybe<(
    Pick<DatoCmsArticle, 'title' | 'originalId'>
    & { featuredImage: Maybe<Pick<DatoCmsFileField, 'gatsbyImageData'>>, meta: Maybe<Pick<DatoCmsMetaField, 'firstPublishedAt'>> }
  )> };

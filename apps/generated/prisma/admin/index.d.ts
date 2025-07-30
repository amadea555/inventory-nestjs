/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Admin
 *
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>;
/**
 * Model Company
 *
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>;
/**
 * Model CompanyUser
 *
 */
export type CompanyUser = $Result.DefaultSelection<Prisma.$CompanyUserPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const LevelStatus: {
    SUPER: 'SUPER';
    NORMAL: 'NORMAL';
  };

  export type LevelStatus = (typeof LevelStatus)[keyof typeof LevelStatus];
}

export type LevelStatus = $Enums.LevelStatus;

export const LevelStatus: typeof $Enums.LevelStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyUser`: Exposes CRUD operations for the **CompanyUser** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CompanyUsers
   * const companyUsers = await prisma.companyUser.findMany()
   * ```
   */
  get companyUser(): Prisma.CompanyUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Admin: 'Admin';
    Company: 'Company';
    CompanyUser: 'CompanyUser';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'admin' | 'company' | 'companyUser';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>;
        fields: Prisma.AdminFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[];
          };
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>;
          };
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdmin>;
          };
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>;
            result: $Utils.Optional<AdminCountAggregateOutputType> | number;
          };
        };
      };
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>;
        fields: Prisma.CompanyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      CompanyUser: {
        payload: Prisma.$CompanyUserPayload<ExtArgs>;
        fields: Prisma.CompanyUserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompanyUserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompanyUserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>;
          };
          findFirst: {
            args: Prisma.CompanyUserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompanyUserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>;
          };
          findMany: {
            args: Prisma.CompanyUserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>[];
          };
          create: {
            args: Prisma.CompanyUserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>;
          };
          createMany: {
            args: Prisma.CompanyUserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CompanyUserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>[];
          };
          delete: {
            args: Prisma.CompanyUserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>;
          };
          update: {
            args: Prisma.CompanyUserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>;
          };
          deleteMany: {
            args: Prisma.CompanyUserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CompanyUserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CompanyUserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>[];
          };
          upsert: {
            args: Prisma.CompanyUserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>;
          };
          aggregate: {
            args: Prisma.CompanyUserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompanyUser>;
          };
          groupBy: {
            args: Prisma.CompanyUserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyUserGroupByOutputType>[];
          };
          count: {
            args: Prisma.CompanyUserCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CompanyUserCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit;
    company?: CompanyOmit;
    companyUser?: CompanyUserOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    companyUsers: number;
  };

  export type CompanyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    companyUsers?: boolean | CompanyCountOutputTypeCountCompanyUsersArgs;
  };

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanyUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyUserWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
  };

  export type AdminAvgAggregateOutputType = {
    id: number | null;
  };

  export type AdminSumAggregateOutputType = {
    id: number | null;
  };

  export type AdminMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    status: boolean | null;
    level: $Enums.LevelStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    otp: string | null;
    otpExpired: Date | null;
  };

  export type AdminMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    status: boolean | null;
    level: $Enums.LevelStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    otp: string | null;
    otpExpired: Date | null;
  };

  export type AdminCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    status: number;
    level: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    otp: number;
    otpExpired: number;
    _all: number;
  };

  export type AdminAvgAggregateInputType = {
    id?: true;
  };

  export type AdminSumAggregateInputType = {
    id?: true;
  };

  export type AdminMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    status?: true;
    level?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    otp?: true;
    otpExpired?: true;
  };

  export type AdminMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    status?: true;
    level?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    otp?: true;
    otpExpired?: true;
  };

  export type AdminCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    status?: true;
    level?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    otp?: true;
    otpExpired?: true;
    _all?: true;
  };

  export type AdminAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Admins
     **/
    _count?: true | AdminCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdminAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdminSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminMaxAggregateInputType;
  };

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>;
  };

  export type AdminGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdminWhereInput;
    orderBy?:
      | AdminOrderByWithAggregationInput
      | AdminOrderByWithAggregationInput[];
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum;
    having?: AdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInputType | true;
    _avg?: AdminAvgAggregateInputType;
    _sum?: AdminSumAggregateInputType;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
  };

  export type AdminGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    status: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    otp: string | null;
    otpExpired: Date | null;
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
  };

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdminGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AdminGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>;
        }
      >
    >;

  export type AdminSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      status?: boolean;
      level?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      otp?: boolean;
      otpExpired?: boolean;
    },
    ExtArgs['result']['admin']
  >;

  export type AdminSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      status?: boolean;
      level?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      otp?: boolean;
      otpExpired?: boolean;
    },
    ExtArgs['result']['admin']
  >;

  export type AdminSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      status?: boolean;
      level?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      otp?: boolean;
      otpExpired?: boolean;
    },
    ExtArgs['result']['admin']
  >;

  export type AdminSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    status?: boolean;
    level?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    otp?: boolean;
    otpExpired?: boolean;
  };

  export type AdminOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'status'
    | 'level'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'otp'
    | 'otpExpired',
    ExtArgs['result']['admin']
  >;

  export type $AdminPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Admin';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        password: string;
        status: boolean;
        level: $Enums.LevelStatus;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
        otp: string | null;
        otpExpired: Date | null;
      },
      ExtArgs['result']['admin']
    >;
    composites: {};
  };

  type AdminGetPayload<
    S extends boolean | null | undefined | AdminDefaultArgs,
  > = $Result.GetResult<Prisma.$AdminPayload, S>;

  type AdminCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminCountAggregateInputType | true;
  };

  export interface AdminDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Admin'];
      meta: { name: 'Admin' };
    };
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     *
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     *
     */
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     *
     */
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>,
    ): Prisma__AdminClient<
      $Result.GetResult<
        Prisma.$AdminPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
     **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdminAggregateArgs>(
      args: Subset<T, AdminAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminAggregateType<T>>;

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAdminGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Admin model
     */
    readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<'Admin', 'Int'>;
    readonly name: FieldRef<'Admin', 'String'>;
    readonly email: FieldRef<'Admin', 'String'>;
    readonly password: FieldRef<'Admin', 'String'>;
    readonly status: FieldRef<'Admin', 'Boolean'>;
    readonly level: FieldRef<'Admin', 'LevelStatus'>;
    readonly createdAt: FieldRef<'Admin', 'DateTime'>;
    readonly updatedAt: FieldRef<'Admin', 'DateTime'>;
    readonly deletedAt: FieldRef<'Admin', 'DateTime'>;
    readonly otp: FieldRef<'Admin', 'String'>;
    readonly otpExpired: FieldRef<'Admin', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Admins.
     */
    skip?: number;
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[];
  };

  /**
   * Admin create
   */
  export type AdminCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
  };

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Admin update
   */
  export type AdminUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput;
    /**
     * Limit how many Admins to update.
     */
    limit?: number;
  };

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>;
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput;
    /**
     * Limit how many Admins to update.
     */
    limit?: number;
  };

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput;
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>;
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>;
  };

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput;
  };

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput;
    /**
     * Limit how many Admins to delete.
     */
    limit?: number;
  };

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null;
  };

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyAvgAggregateOutputType = {
    id: number | null;
  };

  export type CompanySumAggregateOutputType = {
    id: number | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type CompanyAvgAggregateInputType = {
    id?: true;
  };

  export type CompanySumAggregateInputType = {
    id?: true;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompanyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompanySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type CompanyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyWhereInput;
    orderBy?:
      | CompanyOrderByWithAggregationInput
      | CompanyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _avg?: CompanyAvgAggregateInputType;
    _sum?: CompanySumAggregateInputType;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: CompanyCountAggregateOutputType | null;
    _avg: CompanyAvgAggregateOutputType | null;
    _sum: CompanySumAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompanyGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
        }
      >
    >;

  export type CompanySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      companyUsers?: boolean | Company$companyUsersArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type CompanyOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'email'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['company']
  >;
  export type CompanyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    companyUsers?: boolean | Company$companyUsersArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CompanyIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CompanyIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CompanyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Company';
    objects: {
      companyUsers: Prisma.$CompanyUserPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type CompanyGetPayload<
    S extends boolean | null | undefined | CompanyDefaultArgs,
  > = $Result.GetResult<Prisma.$CompanyPayload, S>;

  type CompanyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface CompanyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Company'];
      meta: { name: 'Company' };
    };
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     */
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompanyCreateManyArgs>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     */
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCompanyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Company model
     */
    readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    companyUsers<T extends Company$companyUsersArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$companyUsersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CompanyUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<'Company', 'Int'>;
    readonly name: FieldRef<'Company', 'String'>;
    readonly email: FieldRef<'Company', 'String'>;
    readonly status: FieldRef<'Company', 'Boolean'>;
    readonly createdAt: FieldRef<'Company', 'DateTime'>;
    readonly updatedAt: FieldRef<'Company', 'DateTime'>;
    readonly deletedAt: FieldRef<'Company', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company create
   */
  export type CompanyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
  };

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Company update
   */
  export type CompanyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to update.
     */
    limit?: number;
  };

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to update.
     */
    limit?: number;
  };

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput;
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
  };

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to delete.
     */
    limit?: number;
  };

  /**
   * Company.companyUsers
   */
  export type Company$companyUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    where?: CompanyUserWhereInput;
    orderBy?:
      | CompanyUserOrderByWithRelationInput
      | CompanyUserOrderByWithRelationInput[];
    cursor?: CompanyUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[];
  };

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
  };

  /**
   * Model CompanyUser
   */

  export type AggregateCompanyUser = {
    _count: CompanyUserCountAggregateOutputType | null;
    _avg: CompanyUserAvgAggregateOutputType | null;
    _sum: CompanyUserSumAggregateOutputType | null;
    _min: CompanyUserMinAggregateOutputType | null;
    _max: CompanyUserMaxAggregateOutputType | null;
  };

  export type CompanyUserAvgAggregateOutputType = {
    id: number | null;
    companyId: number | null;
  };

  export type CompanyUserSumAggregateOutputType = {
    id: number | null;
    companyId: number | null;
  };

  export type CompanyUserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    companyId: number | null;
    status: boolean | null;
    level: $Enums.LevelStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    otp: string | null;
    otpExpired: Date | null;
  };

  export type CompanyUserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    companyId: number | null;
    status: boolean | null;
    level: $Enums.LevelStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    otp: string | null;
    otpExpired: Date | null;
  };

  export type CompanyUserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    phoneNumber: number;
    companyId: number;
    status: number;
    level: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    otp: number;
    otpExpired: number;
    _all: number;
  };

  export type CompanyUserAvgAggregateInputType = {
    id?: true;
    companyId?: true;
  };

  export type CompanyUserSumAggregateInputType = {
    id?: true;
    companyId?: true;
  };

  export type CompanyUserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    companyId?: true;
    status?: true;
    level?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    otp?: true;
    otpExpired?: true;
  };

  export type CompanyUserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    companyId?: true;
    status?: true;
    level?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    otp?: true;
    otpExpired?: true;
  };

  export type CompanyUserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phoneNumber?: true;
    companyId?: true;
    status?: true;
    level?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    otp?: true;
    otpExpired?: true;
    _all?: true;
  };

  export type CompanyUserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CompanyUser to aggregate.
     */
    where?: CompanyUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?:
      | CompanyUserOrderByWithRelationInput
      | CompanyUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompanyUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompanyUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CompanyUsers
     **/
    _count?: true | CompanyUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CompanyUserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CompanyUserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyUserMaxAggregateInputType;
  };

  export type GetCompanyUserAggregateType<T extends CompanyUserAggregateArgs> =
    {
      [P in keyof T & keyof AggregateCompanyUser]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateCompanyUser[P]>
        : GetScalarType<T[P], AggregateCompanyUser[P]>;
    };

  export type CompanyUserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyUserWhereInput;
    orderBy?:
      | CompanyUserOrderByWithAggregationInput
      | CompanyUserOrderByWithAggregationInput[];
    by: CompanyUserScalarFieldEnum[] | CompanyUserScalarFieldEnum;
    having?: CompanyUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyUserCountAggregateInputType | true;
    _avg?: CompanyUserAvgAggregateInputType;
    _sum?: CompanyUserSumAggregateInputType;
    _min?: CompanyUserMinAggregateInputType;
    _max?: CompanyUserMaxAggregateInputType;
  };

  export type CompanyUserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    companyId: number;
    status: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    otp: string | null;
    otpExpired: Date | null;
    _count: CompanyUserCountAggregateOutputType | null;
    _avg: CompanyUserAvgAggregateOutputType | null;
    _sum: CompanyUserSumAggregateOutputType | null;
    _min: CompanyUserMinAggregateOutputType | null;
    _max: CompanyUserMaxAggregateOutputType | null;
  };

  type GetCompanyUserGroupByPayload<T extends CompanyUserGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompanyUserGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof CompanyUserGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyUserGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyUserGroupByOutputType[P]>;
        }
      >
    >;

  export type CompanyUserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      companyId?: boolean;
      status?: boolean;
      level?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      otp?: boolean;
      otpExpired?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['companyUser']
  >;

  export type CompanyUserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      companyId?: boolean;
      status?: boolean;
      level?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      otp?: boolean;
      otpExpired?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['companyUser']
  >;

  export type CompanyUserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      companyId?: boolean;
      status?: boolean;
      level?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      otp?: boolean;
      otpExpired?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['companyUser']
  >;

  export type CompanyUserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    companyId?: boolean;
    status?: boolean;
    level?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    otp?: boolean;
    otpExpired?: boolean;
  };

  export type CompanyUserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'phoneNumber'
    | 'companyId'
    | 'status'
    | 'level'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'otp'
    | 'otpExpired',
    ExtArgs['result']['companyUser']
  >;
  export type CompanyUserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };
  export type CompanyUserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };
  export type CompanyUserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };

  export type $CompanyUserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'CompanyUser';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        password: string;
        phoneNumber: string;
        companyId: number;
        status: boolean;
        level: $Enums.LevelStatus;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
        otp: string | null;
        otpExpired: Date | null;
      },
      ExtArgs['result']['companyUser']
    >;
    composites: {};
  };

  type CompanyUserGetPayload<
    S extends boolean | null | undefined | CompanyUserDefaultArgs,
  > = $Result.GetResult<Prisma.$CompanyUserPayload, S>;

  type CompanyUserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CompanyUserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CompanyUserCountAggregateInputType | true;
  };

  export interface CompanyUserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CompanyUser'];
      meta: { name: 'CompanyUser' };
    };
    /**
     * Find zero or one CompanyUser that matches the filter.
     * @param {CompanyUserFindUniqueArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyUserFindUniqueArgs>(
      args: SelectSubset<T, CompanyUserFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CompanyUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyUserFindUniqueOrThrowArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyUserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CompanyUserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CompanyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserFindFirstArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyUserFindFirstArgs>(
      args?: SelectSubset<T, CompanyUserFindFirstArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CompanyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserFindFirstOrThrowArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyUserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CompanyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyUsers
     * const companyUsers = await prisma.companyUser.findMany()
     *
     * // Get first 10 CompanyUsers
     * const companyUsers = await prisma.companyUser.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyUserWithIdOnly = await prisma.companyUser.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CompanyUserFindManyArgs>(
      args?: SelectSubset<T, CompanyUserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CompanyUser.
     * @param {CompanyUserCreateArgs} args - Arguments to create a CompanyUser.
     * @example
     * // Create one CompanyUser
     * const CompanyUser = await prisma.companyUser.create({
     *   data: {
     *     // ... data to create a CompanyUser
     *   }
     * })
     *
     */
    create<T extends CompanyUserCreateArgs>(
      args: SelectSubset<T, CompanyUserCreateArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CompanyUsers.
     * @param {CompanyUserCreateManyArgs} args - Arguments to create many CompanyUsers.
     * @example
     * // Create many CompanyUsers
     * const companyUser = await prisma.companyUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompanyUserCreateManyArgs>(
      args?: SelectSubset<T, CompanyUserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CompanyUsers and returns the data saved in the database.
     * @param {CompanyUserCreateManyAndReturnArgs} args - Arguments to create many CompanyUsers.
     * @example
     * // Create many CompanyUsers
     * const companyUser = await prisma.companyUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CompanyUsers and only return the `id`
     * const companyUserWithIdOnly = await prisma.companyUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CompanyUserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CompanyUserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CompanyUser.
     * @param {CompanyUserDeleteArgs} args - Arguments to delete one CompanyUser.
     * @example
     * // Delete one CompanyUser
     * const CompanyUser = await prisma.companyUser.delete({
     *   where: {
     *     // ... filter to delete one CompanyUser
     *   }
     * })
     *
     */
    delete<T extends CompanyUserDeleteArgs>(
      args: SelectSubset<T, CompanyUserDeleteArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CompanyUser.
     * @param {CompanyUserUpdateArgs} args - Arguments to update one CompanyUser.
     * @example
     * // Update one CompanyUser
     * const companyUser = await prisma.companyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompanyUserUpdateArgs>(
      args: SelectSubset<T, CompanyUserUpdateArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CompanyUsers.
     * @param {CompanyUserDeleteManyArgs} args - Arguments to filter CompanyUsers to delete.
     * @example
     * // Delete a few CompanyUsers
     * const { count } = await prisma.companyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompanyUserDeleteManyArgs>(
      args?: SelectSubset<T, CompanyUserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CompanyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyUsers
     * const companyUser = await prisma.companyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompanyUserUpdateManyArgs>(
      args: SelectSubset<T, CompanyUserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CompanyUsers and returns the data updated in the database.
     * @param {CompanyUserUpdateManyAndReturnArgs} args - Arguments to update many CompanyUsers.
     * @example
     * // Update many CompanyUsers
     * const companyUser = await prisma.companyUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CompanyUsers and only return the `id`
     * const companyUserWithIdOnly = await prisma.companyUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CompanyUserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CompanyUserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CompanyUser.
     * @param {CompanyUserUpsertArgs} args - Arguments to update or create a CompanyUser.
     * @example
     * // Update or create a CompanyUser
     * const companyUser = await prisma.companyUser.upsert({
     *   create: {
     *     // ... data to create a CompanyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyUser we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUserUpsertArgs>(
      args: SelectSubset<T, CompanyUserUpsertArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CompanyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserCountArgs} args - Arguments to filter CompanyUsers to count.
     * @example
     * // Count the number of CompanyUsers
     * const count = await prisma.companyUser.count({
     *   where: {
     *     // ... the filter for the CompanyUsers we want to count
     *   }
     * })
     **/
    count<T extends CompanyUserCountArgs>(
      args?: Subset<T, CompanyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyUserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CompanyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyUserAggregateArgs>(
      args: Subset<T, CompanyUserAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyUserAggregateType<T>>;

    /**
     * Group by CompanyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CompanyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyUserGroupByArgs['orderBy'] }
        : { orderBy?: CompanyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompanyUserGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCompanyUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CompanyUser model
     */
    readonly fields: CompanyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyUserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CompanyDefaultArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      | $Result.GetResult<
          Prisma.$CompanyPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CompanyUser model
   */
  interface CompanyUserFieldRefs {
    readonly id: FieldRef<'CompanyUser', 'Int'>;
    readonly name: FieldRef<'CompanyUser', 'String'>;
    readonly email: FieldRef<'CompanyUser', 'String'>;
    readonly password: FieldRef<'CompanyUser', 'String'>;
    readonly phoneNumber: FieldRef<'CompanyUser', 'String'>;
    readonly companyId: FieldRef<'CompanyUser', 'Int'>;
    readonly status: FieldRef<'CompanyUser', 'Boolean'>;
    readonly level: FieldRef<'CompanyUser', 'LevelStatus'>;
    readonly createdAt: FieldRef<'CompanyUser', 'DateTime'>;
    readonly updatedAt: FieldRef<'CompanyUser', 'DateTime'>;
    readonly deletedAt: FieldRef<'CompanyUser', 'DateTime'>;
    readonly otp: FieldRef<'CompanyUser', 'String'>;
    readonly otpExpired: FieldRef<'CompanyUser', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * CompanyUser findUnique
   */
  export type CompanyUserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * Filter, which CompanyUser to fetch.
     */
    where: CompanyUserWhereUniqueInput;
  };

  /**
   * CompanyUser findUniqueOrThrow
   */
  export type CompanyUserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * Filter, which CompanyUser to fetch.
     */
    where: CompanyUserWhereUniqueInput;
  };

  /**
   * CompanyUser findFirst
   */
  export type CompanyUserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * Filter, which CompanyUser to fetch.
     */
    where?: CompanyUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?:
      | CompanyUserOrderByWithRelationInput
      | CompanyUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CompanyUsers.
     */
    cursor?: CompanyUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompanyUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompanyUsers.
     */
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[];
  };

  /**
   * CompanyUser findFirstOrThrow
   */
  export type CompanyUserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * Filter, which CompanyUser to fetch.
     */
    where?: CompanyUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?:
      | CompanyUserOrderByWithRelationInput
      | CompanyUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CompanyUsers.
     */
    cursor?: CompanyUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompanyUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CompanyUsers.
     */
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[];
  };

  /**
   * CompanyUser findMany
   */
  export type CompanyUserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * Filter, which CompanyUsers to fetch.
     */
    where?: CompanyUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?:
      | CompanyUserOrderByWithRelationInput
      | CompanyUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CompanyUsers.
     */
    cursor?: CompanyUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CompanyUsers.
     */
    skip?: number;
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[];
  };

  /**
   * CompanyUser create
   */
  export type CompanyUserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a CompanyUser.
     */
    data: XOR<CompanyUserCreateInput, CompanyUserUncheckedCreateInput>;
  };

  /**
   * CompanyUser createMany
   */
  export type CompanyUserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CompanyUsers.
     */
    data: CompanyUserCreateManyInput | CompanyUserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CompanyUser createManyAndReturn
   */
  export type CompanyUserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * The data used to create many CompanyUsers.
     */
    data: CompanyUserCreateManyInput | CompanyUserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CompanyUser update
   */
  export type CompanyUserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a CompanyUser.
     */
    data: XOR<CompanyUserUpdateInput, CompanyUserUncheckedUpdateInput>;
    /**
     * Choose, which CompanyUser to update.
     */
    where: CompanyUserWhereUniqueInput;
  };

  /**
   * CompanyUser updateMany
   */
  export type CompanyUserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CompanyUsers.
     */
    data: XOR<
      CompanyUserUpdateManyMutationInput,
      CompanyUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which CompanyUsers to update
     */
    where?: CompanyUserWhereInput;
    /**
     * Limit how many CompanyUsers to update.
     */
    limit?: number;
  };

  /**
   * CompanyUser updateManyAndReturn
   */
  export type CompanyUserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * The data used to update CompanyUsers.
     */
    data: XOR<
      CompanyUserUpdateManyMutationInput,
      CompanyUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which CompanyUsers to update
     */
    where?: CompanyUserWhereInput;
    /**
     * Limit how many CompanyUsers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CompanyUser upsert
   */
  export type CompanyUserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the CompanyUser to update in case it exists.
     */
    where: CompanyUserWhereUniqueInput;
    /**
     * In case the CompanyUser found by the `where` argument doesn't exist, create a new CompanyUser with this data.
     */
    create: XOR<CompanyUserCreateInput, CompanyUserUncheckedCreateInput>;
    /**
     * In case the CompanyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUserUpdateInput, CompanyUserUncheckedUpdateInput>;
  };

  /**
   * CompanyUser delete
   */
  export type CompanyUserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
    /**
     * Filter which CompanyUser to delete.
     */
    where: CompanyUserWhereUniqueInput;
  };

  /**
   * CompanyUser deleteMany
   */
  export type CompanyUserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CompanyUsers to delete
     */
    where?: CompanyUserWhereInput;
    /**
     * Limit how many CompanyUsers to delete.
     */
    limit?: number;
  };

  /**
   * CompanyUser without action
   */
  export type CompanyUserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CompanyUser
     */
    omit?: CompanyUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyUserInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AdminScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    status: 'status';
    level: 'level';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
    otp: 'otp';
    otpExpired: 'otpExpired';
  };

  export type AdminScalarFieldEnum =
    (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type CompanyScalarFieldEnum =
    (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const CompanyUserScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    phoneNumber: 'phoneNumber';
    companyId: 'companyId';
    status: 'status';
    level: 'level';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
    otp: 'otp';
    otpExpired: 'otpExpired';
  };

  export type CompanyUserScalarFieldEnum =
    (typeof CompanyUserScalarFieldEnum)[keyof typeof CompanyUserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'LevelStatus'
   */
  export type EnumLevelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'LevelStatus'
  >;

  /**
   * Reference to a field of type 'LevelStatus[]'
   */
  export type ListEnumLevelStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'LevelStatus[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[];
    OR?: AdminWhereInput[];
    NOT?: AdminWhereInput | AdminWhereInput[];
    id?: IntFilter<'Admin'> | number;
    name?: StringFilter<'Admin'> | string;
    email?: StringFilter<'Admin'> | string;
    password?: StringFilter<'Admin'> | string;
    status?: BoolFilter<'Admin'> | boolean;
    level?: EnumLevelStatusFilter<'Admin'> | $Enums.LevelStatus;
    createdAt?: DateTimeFilter<'Admin'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Admin'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Admin'> | Date | string | null;
    otp?: StringNullableFilter<'Admin'> | string | null;
    otpExpired?: DateTimeNullableFilter<'Admin'> | Date | string | null;
  };

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    otp?: SortOrderInput | SortOrder;
    otpExpired?: SortOrderInput | SortOrder;
  };

  export type AdminWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: AdminWhereInput | AdminWhereInput[];
      OR?: AdminWhereInput[];
      NOT?: AdminWhereInput | AdminWhereInput[];
      name?: StringFilter<'Admin'> | string;
      password?: StringFilter<'Admin'> | string;
      status?: BoolFilter<'Admin'> | boolean;
      level?: EnumLevelStatusFilter<'Admin'> | $Enums.LevelStatus;
      createdAt?: DateTimeFilter<'Admin'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'Admin'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'Admin'> | Date | string | null;
      otp?: StringNullableFilter<'Admin'> | string | null;
      otpExpired?: DateTimeNullableFilter<'Admin'> | Date | string | null;
    },
    'id' | 'email'
  >;

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    otp?: SortOrderInput | SortOrder;
    otpExpired?: SortOrderInput | SortOrder;
    _count?: AdminCountOrderByAggregateInput;
    _avg?: AdminAvgOrderByAggregateInput;
    _max?: AdminMaxOrderByAggregateInput;
    _min?: AdminMinOrderByAggregateInput;
    _sum?: AdminSumOrderByAggregateInput;
  };

  export type AdminScalarWhereWithAggregatesInput = {
    AND?:
      | AdminScalarWhereWithAggregatesInput
      | AdminScalarWhereWithAggregatesInput[];
    OR?: AdminScalarWhereWithAggregatesInput[];
    NOT?:
      | AdminScalarWhereWithAggregatesInput
      | AdminScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Admin'> | number;
    name?: StringWithAggregatesFilter<'Admin'> | string;
    email?: StringWithAggregatesFilter<'Admin'> | string;
    password?: StringWithAggregatesFilter<'Admin'> | string;
    status?: BoolWithAggregatesFilter<'Admin'> | boolean;
    level?: EnumLevelStatusWithAggregatesFilter<'Admin'> | $Enums.LevelStatus;
    createdAt?: DateTimeWithAggregatesFilter<'Admin'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Admin'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Admin'>
      | Date
      | string
      | null;
    otp?: StringNullableWithAggregatesFilter<'Admin'> | string | null;
    otpExpired?:
      | DateTimeNullableWithAggregatesFilter<'Admin'>
      | Date
      | string
      | null;
  };

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[];
    OR?: CompanyWhereInput[];
    NOT?: CompanyWhereInput | CompanyWhereInput[];
    id?: IntFilter<'Company'> | number;
    name?: StringFilter<'Company'> | string;
    email?: StringFilter<'Company'> | string;
    status?: BoolFilter<'Company'> | boolean;
    createdAt?: DateTimeFilter<'Company'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Company'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Company'> | Date | string | null;
    companyUsers?: CompanyUserListRelationFilter;
  };

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    companyUsers?: CompanyUserOrderByRelationAggregateInput;
  };

  export type CompanyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: CompanyWhereInput | CompanyWhereInput[];
      OR?: CompanyWhereInput[];
      NOT?: CompanyWhereInput | CompanyWhereInput[];
      name?: StringFilter<'Company'> | string;
      status?: BoolFilter<'Company'> | boolean;
      createdAt?: DateTimeFilter<'Company'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'Company'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'Company'> | Date | string | null;
      companyUsers?: CompanyUserListRelationFilter;
    },
    'id' | 'email'
  >;

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: CompanyCountOrderByAggregateInput;
    _avg?: CompanyAvgOrderByAggregateInput;
    _max?: CompanyMaxOrderByAggregateInput;
    _min?: CompanyMinOrderByAggregateInput;
    _sum?: CompanySumOrderByAggregateInput;
  };

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    OR?: CompanyScalarWhereWithAggregatesInput[];
    NOT?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Company'> | number;
    name?: StringWithAggregatesFilter<'Company'> | string;
    email?: StringWithAggregatesFilter<'Company'> | string;
    status?: BoolWithAggregatesFilter<'Company'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Company'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Company'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Company'>
      | Date
      | string
      | null;
  };

  export type CompanyUserWhereInput = {
    AND?: CompanyUserWhereInput | CompanyUserWhereInput[];
    OR?: CompanyUserWhereInput[];
    NOT?: CompanyUserWhereInput | CompanyUserWhereInput[];
    id?: IntFilter<'CompanyUser'> | number;
    name?: StringFilter<'CompanyUser'> | string;
    email?: StringFilter<'CompanyUser'> | string;
    password?: StringFilter<'CompanyUser'> | string;
    phoneNumber?: StringFilter<'CompanyUser'> | string;
    companyId?: IntFilter<'CompanyUser'> | number;
    status?: BoolFilter<'CompanyUser'> | boolean;
    level?: EnumLevelStatusFilter<'CompanyUser'> | $Enums.LevelStatus;
    createdAt?: DateTimeFilter<'CompanyUser'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
    otp?: StringNullableFilter<'CompanyUser'> | string | null;
    otpExpired?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
  };

  export type CompanyUserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    otp?: SortOrderInput | SortOrder;
    otpExpired?: SortOrderInput | SortOrder;
    company?: CompanyOrderByWithRelationInput;
  };

  export type CompanyUserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: CompanyUserWhereInput | CompanyUserWhereInput[];
      OR?: CompanyUserWhereInput[];
      NOT?: CompanyUserWhereInput | CompanyUserWhereInput[];
      name?: StringFilter<'CompanyUser'> | string;
      password?: StringFilter<'CompanyUser'> | string;
      phoneNumber?: StringFilter<'CompanyUser'> | string;
      companyId?: IntFilter<'CompanyUser'> | number;
      status?: BoolFilter<'CompanyUser'> | boolean;
      level?: EnumLevelStatusFilter<'CompanyUser'> | $Enums.LevelStatus;
      createdAt?: DateTimeFilter<'CompanyUser'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
      otp?: StringNullableFilter<'CompanyUser'> | string | null;
      otpExpired?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    },
    'id' | 'email'
  >;

  export type CompanyUserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    otp?: SortOrderInput | SortOrder;
    otpExpired?: SortOrderInput | SortOrder;
    _count?: CompanyUserCountOrderByAggregateInput;
    _avg?: CompanyUserAvgOrderByAggregateInput;
    _max?: CompanyUserMaxOrderByAggregateInput;
    _min?: CompanyUserMinOrderByAggregateInput;
    _sum?: CompanyUserSumOrderByAggregateInput;
  };

  export type CompanyUserScalarWhereWithAggregatesInput = {
    AND?:
      | CompanyUserScalarWhereWithAggregatesInput
      | CompanyUserScalarWhereWithAggregatesInput[];
    OR?: CompanyUserScalarWhereWithAggregatesInput[];
    NOT?:
      | CompanyUserScalarWhereWithAggregatesInput
      | CompanyUserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'CompanyUser'> | number;
    name?: StringWithAggregatesFilter<'CompanyUser'> | string;
    email?: StringWithAggregatesFilter<'CompanyUser'> | string;
    password?: StringWithAggregatesFilter<'CompanyUser'> | string;
    phoneNumber?: StringWithAggregatesFilter<'CompanyUser'> | string;
    companyId?: IntWithAggregatesFilter<'CompanyUser'> | number;
    status?: BoolWithAggregatesFilter<'CompanyUser'> | boolean;
    level?:
      | EnumLevelStatusWithAggregatesFilter<'CompanyUser'>
      | $Enums.LevelStatus;
    createdAt?: DateTimeWithAggregatesFilter<'CompanyUser'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'CompanyUser'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'CompanyUser'>
      | Date
      | string
      | null;
    otp?: StringNullableWithAggregatesFilter<'CompanyUser'> | string | null;
    otpExpired?:
      | DateTimeNullableWithAggregatesFilter<'CompanyUser'>
      | Date
      | string
      | null;
  };

  export type AdminCreateInput = {
    name: string;
    email: string;
    password: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type AdminUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyCreateInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    companyUsers?: CompanyUserUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    companyUsers?: CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUserCreateInput = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
    company: CompanyCreateNestedOneWithoutCompanyUsersInput;
  };

  export type CompanyUserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    companyId: number;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type CompanyUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    company?: CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput;
  };

  export type CompanyUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    companyId: number;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type CompanyUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumLevelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LevelStatus | EnumLevelStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LevelStatus[] | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.LevelStatus[]
      | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelStatusFilter<$PrismaModel> | $Enums.LevelStatus;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    otp?: SortOrder;
    otpExpired?: SortOrder;
  };

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    otp?: SortOrder;
    otpExpired?: SortOrder;
  };

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    otp?: SortOrder;
    otpExpired?: SortOrder;
  };

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumLevelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LevelStatus | EnumLevelStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LevelStatus[] | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.LevelStatus[]
      | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumLevelStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.LevelStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLevelStatusFilter<$PrismaModel>;
    _max?: NestedEnumLevelStatusFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type CompanyUserListRelationFilter = {
    every?: CompanyUserWhereInput;
    some?: CompanyUserWhereInput;
    none?: CompanyUserWhereInput;
  };

  export type CompanyUserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput;
    isNot?: CompanyWhereInput;
  };

  export type CompanyUserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    otp?: SortOrder;
    otpExpired?: SortOrder;
  };

  export type CompanyUserAvgOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
  };

  export type CompanyUserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    otp?: SortOrder;
    otpExpired?: SortOrder;
  };

  export type CompanyUserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    level?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
    otp?: SortOrder;
    otpExpired?: SortOrder;
  };

  export type CompanyUserSumOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumLevelStatusFieldUpdateOperationsInput = {
    set?: $Enums.LevelStatus;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CompanyUserCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          CompanyUserCreateWithoutCompanyInput,
          CompanyUserUncheckedCreateWithoutCompanyInput
        >
      | CompanyUserCreateWithoutCompanyInput[]
      | CompanyUserUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CompanyUserCreateOrConnectWithoutCompanyInput
      | CompanyUserCreateOrConnectWithoutCompanyInput[];
    createMany?: CompanyUserCreateManyCompanyInputEnvelope;
    connect?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
  };

  export type CompanyUserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          CompanyUserCreateWithoutCompanyInput,
          CompanyUserUncheckedCreateWithoutCompanyInput
        >
      | CompanyUserCreateWithoutCompanyInput[]
      | CompanyUserUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CompanyUserCreateOrConnectWithoutCompanyInput
      | CompanyUserCreateOrConnectWithoutCompanyInput[];
    createMany?: CompanyUserCreateManyCompanyInputEnvelope;
    connect?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
  };

  export type CompanyUserUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          CompanyUserCreateWithoutCompanyInput,
          CompanyUserUncheckedCreateWithoutCompanyInput
        >
      | CompanyUserCreateWithoutCompanyInput[]
      | CompanyUserUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CompanyUserCreateOrConnectWithoutCompanyInput
      | CompanyUserCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | CompanyUserUpsertWithWhereUniqueWithoutCompanyInput
      | CompanyUserUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: CompanyUserCreateManyCompanyInputEnvelope;
    set?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    disconnect?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    delete?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    connect?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    update?:
      | CompanyUserUpdateWithWhereUniqueWithoutCompanyInput
      | CompanyUserUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | CompanyUserUpdateManyWithWhereWithoutCompanyInput
      | CompanyUserUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: CompanyUserScalarWhereInput | CompanyUserScalarWhereInput[];
  };

  export type CompanyUserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          CompanyUserCreateWithoutCompanyInput,
          CompanyUserUncheckedCreateWithoutCompanyInput
        >
      | CompanyUserCreateWithoutCompanyInput[]
      | CompanyUserUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CompanyUserCreateOrConnectWithoutCompanyInput
      | CompanyUserCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | CompanyUserUpsertWithWhereUniqueWithoutCompanyInput
      | CompanyUserUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: CompanyUserCreateManyCompanyInputEnvelope;
    set?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    disconnect?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    delete?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    connect?: CompanyUserWhereUniqueInput | CompanyUserWhereUniqueInput[];
    update?:
      | CompanyUserUpdateWithWhereUniqueWithoutCompanyInput
      | CompanyUserUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | CompanyUserUpdateManyWithWhereWithoutCompanyInput
      | CompanyUserUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: CompanyUserScalarWhereInput | CompanyUserScalarWhereInput[];
  };

  export type CompanyCreateNestedOneWithoutCompanyUsersInput = {
    create?: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyUsersInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type CompanyUpdateOneRequiredWithoutCompanyUsersNestedInput = {
    create?: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyUsersInput;
    upsert?: CompanyUpsertWithoutCompanyUsersInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutCompanyUsersInput,
        CompanyUpdateWithoutCompanyUsersInput
      >,
      CompanyUncheckedUpdateWithoutCompanyUsersInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumLevelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LevelStatus | EnumLevelStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LevelStatus[] | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.LevelStatus[]
      | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelStatusFilter<$PrismaModel> | $Enums.LevelStatus;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumLevelStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.LevelStatus | EnumLevelStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.LevelStatus[]
        | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.LevelStatus[]
        | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumLevelStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.LevelStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumLevelStatusFilter<$PrismaModel>;
      _max?: NestedEnumLevelStatusFilter<$PrismaModel>;
    };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type CompanyUserCreateWithoutCompanyInput = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type CompanyUserUncheckedCreateWithoutCompanyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type CompanyUserCreateOrConnectWithoutCompanyInput = {
    where: CompanyUserWhereUniqueInput;
    create: XOR<
      CompanyUserCreateWithoutCompanyInput,
      CompanyUserUncheckedCreateWithoutCompanyInput
    >;
  };

  export type CompanyUserCreateManyCompanyInputEnvelope = {
    data:
      | CompanyUserCreateManyCompanyInput
      | CompanyUserCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type CompanyUserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyUserWhereUniqueInput;
    update: XOR<
      CompanyUserUpdateWithoutCompanyInput,
      CompanyUserUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      CompanyUserCreateWithoutCompanyInput,
      CompanyUserUncheckedCreateWithoutCompanyInput
    >;
  };

  export type CompanyUserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyUserWhereUniqueInput;
    data: XOR<
      CompanyUserUpdateWithoutCompanyInput,
      CompanyUserUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type CompanyUserUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyUserScalarWhereInput;
    data: XOR<
      CompanyUserUpdateManyMutationInput,
      CompanyUserUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type CompanyUserScalarWhereInput = {
    AND?: CompanyUserScalarWhereInput | CompanyUserScalarWhereInput[];
    OR?: CompanyUserScalarWhereInput[];
    NOT?: CompanyUserScalarWhereInput | CompanyUserScalarWhereInput[];
    id?: IntFilter<'CompanyUser'> | number;
    name?: StringFilter<'CompanyUser'> | string;
    email?: StringFilter<'CompanyUser'> | string;
    password?: StringFilter<'CompanyUser'> | string;
    phoneNumber?: StringFilter<'CompanyUser'> | string;
    companyId?: IntFilter<'CompanyUser'> | number;
    status?: BoolFilter<'CompanyUser'> | boolean;
    level?: EnumLevelStatusFilter<'CompanyUser'> | $Enums.LevelStatus;
    createdAt?: DateTimeFilter<'CompanyUser'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
    otp?: StringNullableFilter<'CompanyUser'> | string | null;
    otpExpired?: DateTimeNullableFilter<'CompanyUser'> | Date | string | null;
  };

  export type CompanyCreateWithoutCompanyUsersInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CompanyUncheckedCreateWithoutCompanyUsersInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CompanyCreateOrConnectWithoutCompanyUsersInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
  };

  export type CompanyUpsertWithoutCompanyUsersInput = {
    update: XOR<
      CompanyUpdateWithoutCompanyUsersInput,
      CompanyUncheckedUpdateWithoutCompanyUsersInput
    >;
    create: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutCompanyUsersInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutCompanyUsersInput,
      CompanyUncheckedUpdateWithoutCompanyUsersInput
    >;
  };

  export type CompanyUpdateWithoutCompanyUsersInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUncheckedUpdateWithoutCompanyUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUserCreateManyCompanyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    status?: boolean;
    level: $Enums.LevelStatus;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    otp?: string | null;
    otpExpired?: Date | string | null;
  };

  export type CompanyUserUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type CompanyUserUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    level?: EnumLevelStatusFieldUpdateOperationsInput | $Enums.LevelStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    otp?: NullableStringFieldUpdateOperationsInput | string | null;
    otpExpired?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

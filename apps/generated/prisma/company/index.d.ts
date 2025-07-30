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
 * Model admins
 *
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>;
/**
 * Model Customer
 *
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>;
/**
 * Model AddressCustomer
 *
 */
export type AddressCustomer =
  $Result.DefaultSelection<Prisma.$AddressCustomerPayload>;

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
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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

  /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
   * ```
   */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addressCustomer`: Exposes CRUD operations for the **AddressCustomer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AddressCustomers
   * const addressCustomers = await prisma.addressCustomer.findMany()
   * ```
   */
  get addressCustomer(): Prisma.AddressCustomerDelegate<ExtArgs, ClientOptions>;
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
    Company: 'Company';
    CompanyUser: 'CompanyUser';
    admins: 'admins';
    Customer: 'Customer';
    AddressCustomer: 'AddressCustomer';
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
      modelProps:
        | 'company'
        | 'companyUser'
        | 'admins'
        | 'customer'
        | 'addressCustomer';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
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
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>;
        fields: Prisma.adminsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>;
          };
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>;
          };
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[];
          };
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>;
          };
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.adminsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[];
          };
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>;
          };
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>;
          };
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.adminsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[];
          };
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>;
          };
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdmins>;
          };
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdminsGroupByOutputType>[];
          };
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>;
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number;
          };
        };
      };
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>;
        fields: Prisma.CustomerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>;
          };
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>;
          };
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[];
          };
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>;
          };
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[];
          };
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>;
          };
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>;
          };
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[];
          };
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      AddressCustomer: {
        payload: Prisma.$AddressCustomerPayload<ExtArgs>;
        fields: Prisma.AddressCustomerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AddressCustomerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AddressCustomerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>;
          };
          findFirst: {
            args: Prisma.AddressCustomerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AddressCustomerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>;
          };
          findMany: {
            args: Prisma.AddressCustomerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>[];
          };
          create: {
            args: Prisma.AddressCustomerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>;
          };
          createMany: {
            args: Prisma.AddressCustomerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AddressCustomerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>[];
          };
          delete: {
            args: Prisma.AddressCustomerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>;
          };
          update: {
            args: Prisma.AddressCustomerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>;
          };
          deleteMany: {
            args: Prisma.AddressCustomerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AddressCustomerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AddressCustomerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>[];
          };
          upsert: {
            args: Prisma.AddressCustomerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressCustomerPayload>;
          };
          aggregate: {
            args: Prisma.AddressCustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAddressCustomer>;
          };
          groupBy: {
            args: Prisma.AddressCustomerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AddressCustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.AddressCustomerCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AddressCustomerCountAggregateOutputType>
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
    company?: CompanyOmit;
    companyUser?: CompanyUserOmit;
    admins?: adminsOmit;
    customer?: CustomerOmit;
    addressCustomer?: AddressCustomerOmit;
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
    customer: number;
  };

  export type CompanyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    companyUsers?: boolean | CompanyCountOutputTypeCountCompanyUsersArgs;
    customer?: boolean | CompanyCountOutputTypeCountCustomerArgs;
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
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CustomerWhereInput;
  };

  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    address: number;
  };

  export type CustomerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    address?: boolean | CustomerCountOutputTypeCountAddressArgs;
  };

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressCustomerWhereInput;
  };

  /**
   * Models
   */

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
      customer?: boolean | Company$customerArgs<ExtArgs>;
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
    customer?: boolean | Company$customerArgs<ExtArgs>;
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
      customer: Prisma.$CustomerPayload<ExtArgs>[];
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
    customer<T extends Company$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CustomerPayload<ExtArgs>,
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
   * Company.customer
   */
  export type Company$customerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    where?: CustomerWhereInput;
    orderBy?:
      | CustomerOrderByWithRelationInput
      | CustomerOrderByWithRelationInput[];
    cursor?: CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
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
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null;
    _avg: AdminsAvgAggregateOutputType | null;
    _sum: AdminsSumAggregateOutputType | null;
    _min: AdminsMinAggregateOutputType | null;
    _max: AdminsMaxAggregateOutputType | null;
  };

  export type AdminsAvgAggregateOutputType = {
    id: number | null;
  };

  export type AdminsSumAggregateOutputType = {
    id: number | null;
  };

  export type AdminsMinAggregateOutputType = {
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

  export type AdminsMaxAggregateOutputType = {
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

  export type AdminsCountAggregateOutputType = {
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

  export type AdminsAvgAggregateInputType = {
    id?: true;
  };

  export type AdminsSumAggregateInputType = {
    id?: true;
  };

  export type AdminsMinAggregateInputType = {
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

  export type AdminsMaxAggregateInputType = {
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

  export type AdminsCountAggregateInputType = {
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

  export type AdminsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned admins
     **/
    _count?: true | AdminsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdminsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdminsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdminsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdminsMaxAggregateInputType;
  };

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>;
  };

  export type adminsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: adminsWhereInput;
    orderBy?:
      | adminsOrderByWithAggregationInput
      | adminsOrderByWithAggregationInput[];
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum;
    having?: adminsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminsCountAggregateInputType | true;
    _avg?: AdminsAvgAggregateInputType;
    _sum?: AdminsSumAggregateInputType;
    _min?: AdminsMinAggregateInputType;
    _max?: AdminsMaxAggregateInputType;
  };

  export type AdminsGroupByOutputType = {
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
    _count: AdminsCountAggregateOutputType | null;
    _avg: AdminsAvgAggregateOutputType | null;
    _sum: AdminsSumAggregateOutputType | null;
    _min: AdminsMinAggregateOutputType | null;
    _max: AdminsMaxAggregateOutputType | null;
  };

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdminsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AdminsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>;
        }
      >
    >;

  export type adminsSelect<
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
    ExtArgs['result']['admins']
  >;

  export type adminsSelectCreateManyAndReturn<
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
    ExtArgs['result']['admins']
  >;

  export type adminsSelectUpdateManyAndReturn<
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
    ExtArgs['result']['admins']
  >;

  export type adminsSelectScalar = {
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

  export type adminsOmit<
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
    ExtArgs['result']['admins']
  >;

  export type $adminsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'admins';
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
      ExtArgs['result']['admins']
    >;
    composites: {};
  };

  type adminsGetPayload<
    S extends boolean | null | undefined | adminsDefaultArgs,
  > = $Result.GetResult<Prisma.$adminsPayload, S>;

  type adminsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminsCountAggregateInputType | true;
  };

  export interface adminsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['admins'];
      meta: { name: 'admins' };
    };
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(
      args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(
      args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
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
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     *
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     *
     */
    findMany<T extends adminsFindManyArgs>(
      args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     *
     */
    create<T extends adminsCreateArgs>(
      args: SelectSubset<T, adminsCreateArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
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
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends adminsCreateManyArgs>(
      args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends adminsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, adminsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     *
     */
    delete<T extends adminsDeleteArgs>(
      args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends adminsUpdateArgs>(
      args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
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
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends adminsDeleteManyArgs>(
      args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends adminsUpdateManyArgs>(
      args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.updateManyAndReturn({
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
    updateManyAndReturn<T extends adminsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, adminsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(
      args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>,
    ): Prisma__adminsClient<
      $Result.GetResult<
        Prisma.$adminsPayload<ExtArgs>,
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
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
     **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(
      args: Subset<T, AdminsAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdminsAggregateType<T>>;

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
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
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAdminsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the admins model
     */
    readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<
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
   * Fields of the admins model
   */
  interface adminsFieldRefs {
    readonly id: FieldRef<'admins', 'Int'>;
    readonly name: FieldRef<'admins', 'String'>;
    readonly email: FieldRef<'admins', 'String'>;
    readonly password: FieldRef<'admins', 'String'>;
    readonly status: FieldRef<'admins', 'Boolean'>;
    readonly level: FieldRef<'admins', 'LevelStatus'>;
    readonly createdAt: FieldRef<'admins', 'DateTime'>;
    readonly updatedAt: FieldRef<'admins', 'DateTime'>;
    readonly deletedAt: FieldRef<'admins', 'DateTime'>;
    readonly otp: FieldRef<'admins', 'String'>;
    readonly otpExpired: FieldRef<'admins', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput;
  };

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput;
  };

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[];
  };

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` admins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[];
  };

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` admins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` admins.
     */
    skip?: number;
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[];
  };

  /**
   * admins create
   */
  export type adminsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>;
  };

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * admins createManyAndReturn
   */
  export type adminsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * admins update
   */
  export type adminsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>;
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput;
  };

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>;
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput;
    /**
     * Limit how many admins to update.
     */
    limit?: number;
  };

  /**
   * admins updateManyAndReturn
   */
  export type adminsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>;
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput;
    /**
     * Limit how many admins to update.
     */
    limit?: number;
  };

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput;
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>;
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>;
  };

  /**
   * admins delete
   */
  export type adminsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput;
  };

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput;
    /**
     * Limit how many admins to delete.
     */
    limit?: number;
  };

  /**
   * admins without action
   */
  export type adminsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null;
  };

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerAvgAggregateOutputType = {
    id: number | null;
    companyId: number | null;
  };

  export type CustomerSumAggregateOutputType = {
    id: number | null;
    companyId: number | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    companyId: number | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    companyId: number | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phoneNumber: number;
    companyId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type CustomerAvgAggregateInputType = {
    id?: true;
    companyId?: true;
  };

  export type CustomerSumAggregateInputType = {
    id?: true;
    companyId?: true;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phoneNumber?: true;
    companyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phoneNumber?: true;
    companyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phoneNumber?: true;
    companyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     */
    orderBy?:
      | CustomerOrderByWithRelationInput
      | CustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CustomerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CustomerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type CustomerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CustomerWhereInput;
    orderBy?:
      | CustomerOrderByWithAggregationInput
      | CustomerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    companyId: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CustomerGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
        }
      >
    >;

  export type CustomerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      phoneNumber?: boolean;
      companyId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      address?: boolean | Customer$addressArgs<ExtArgs>;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['customer']
  >;

  export type CustomerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      phoneNumber?: boolean;
      companyId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['customer']
  >;

  export type CustomerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      phoneNumber?: boolean;
      companyId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['customer']
  >;

  export type CustomerSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    companyId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type CustomerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'email'
    | 'phoneNumber'
    | 'companyId'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['customer']
  >;
  export type CustomerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    address?: boolean | Customer$addressArgs<ExtArgs>;
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CustomerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };
  export type CustomerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };

  export type $CustomerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Customer';
    objects: {
      address: Prisma.$AddressCustomerPayload<ExtArgs>[];
      company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
        companyId: number;
        status: boolean;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type CustomerGetPayload<
    S extends boolean | null | undefined | CustomerDefaultArgs,
  > = $Result.GetResult<Prisma.$CustomerPayload, S>;

  type CustomerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface CustomerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
      meta: { name: 'Customer' };
    };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     */
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     */
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      $Result.GetResult<
        Prisma.$CustomerPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCustomerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Customer model
     */
    readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    address<T extends Customer$addressArgs<ExtArgs> = {}>(
      args?: Subset<T, Customer$addressArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AddressCustomerPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<'Customer', 'Int'>;
    readonly name: FieldRef<'Customer', 'String'>;
    readonly email: FieldRef<'Customer', 'String'>;
    readonly phoneNumber: FieldRef<'Customer', 'String'>;
    readonly companyId: FieldRef<'Customer', 'Int'>;
    readonly status: FieldRef<'Customer', 'Boolean'>;
    readonly createdAt: FieldRef<'Customer', 'DateTime'>;
    readonly updatedAt: FieldRef<'Customer', 'DateTime'>;
    readonly deletedAt: FieldRef<'Customer', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput;
  };

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput;
  };

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     */
    orderBy?:
      | CustomerOrderByWithRelationInput
      | CustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     */
    orderBy?:
      | CustomerOrderByWithRelationInput
      | CustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Customers to fetch.
     */
    orderBy?:
      | CustomerOrderByWithRelationInput
      | CustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * Customer create
   */
  export type CustomerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>;
  };

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>;
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput;
  };

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Customers.
     */
    data: XOR<
      CustomerUpdateManyMutationInput,
      CustomerUncheckedUpdateManyInput
    >;
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput;
    /**
     * Limit how many Customers to update.
     */
    limit?: number;
  };

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * The data used to update Customers.
     */
    data: XOR<
      CustomerUpdateManyMutationInput,
      CustomerUncheckedUpdateManyInput
    >;
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput;
    /**
     * Limit how many Customers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput;
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>;
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>;
  };

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput;
  };

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput;
    /**
     * Limit how many Customers to delete.
     */
    limit?: number;
  };

  /**
   * Customer.address
   */
  export type Customer$addressArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    where?: AddressCustomerWhereInput;
    orderBy?:
      | AddressCustomerOrderByWithRelationInput
      | AddressCustomerOrderByWithRelationInput[];
    cursor?: AddressCustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | AddressCustomerScalarFieldEnum
      | AddressCustomerScalarFieldEnum[];
  };

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null;
  };

  /**
   * Model AddressCustomer
   */

  export type AggregateAddressCustomer = {
    _count: AddressCustomerCountAggregateOutputType | null;
    _avg: AddressCustomerAvgAggregateOutputType | null;
    _sum: AddressCustomerSumAggregateOutputType | null;
    _min: AddressCustomerMinAggregateOutputType | null;
    _max: AddressCustomerMaxAggregateOutputType | null;
  };

  export type AddressCustomerAvgAggregateOutputType = {
    id: number | null;
    customerId: number | null;
  };

  export type AddressCustomerSumAggregateOutputType = {
    id: number | null;
    customerId: number | null;
  };

  export type AddressCustomerMinAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    phoneNumber: string | null;
    address: string | null;
    label: string | null;
    note: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type AddressCustomerMaxAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    phoneNumber: string | null;
    address: string | null;
    label: string | null;
    note: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type AddressCustomerCountAggregateOutputType = {
    id: number;
    customerId: number;
    phoneNumber: number;
    address: number;
    label: number;
    note: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type AddressCustomerAvgAggregateInputType = {
    id?: true;
    customerId?: true;
  };

  export type AddressCustomerSumAggregateInputType = {
    id?: true;
    customerId?: true;
  };

  export type AddressCustomerMinAggregateInputType = {
    id?: true;
    customerId?: true;
    phoneNumber?: true;
    address?: true;
    label?: true;
    note?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type AddressCustomerMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    phoneNumber?: true;
    address?: true;
    label?: true;
    note?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type AddressCustomerCountAggregateInputType = {
    id?: true;
    customerId?: true;
    phoneNumber?: true;
    address?: true;
    label?: true;
    note?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type AddressCustomerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AddressCustomer to aggregate.
     */
    where?: AddressCustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressCustomers to fetch.
     */
    orderBy?:
      | AddressCustomerOrderByWithRelationInput
      | AddressCustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AddressCustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressCustomers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressCustomers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AddressCustomers
     **/
    _count?: true | AddressCustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AddressCustomerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AddressCustomerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AddressCustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AddressCustomerMaxAggregateInputType;
  };

  export type GetAddressCustomerAggregateType<
    T extends AddressCustomerAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAddressCustomer]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddressCustomer[P]>
      : GetScalarType<T[P], AggregateAddressCustomer[P]>;
  };

  export type AddressCustomerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressCustomerWhereInput;
    orderBy?:
      | AddressCustomerOrderByWithAggregationInput
      | AddressCustomerOrderByWithAggregationInput[];
    by: AddressCustomerScalarFieldEnum[] | AddressCustomerScalarFieldEnum;
    having?: AddressCustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCustomerCountAggregateInputType | true;
    _avg?: AddressCustomerAvgAggregateInputType;
    _sum?: AddressCustomerSumAggregateInputType;
    _min?: AddressCustomerMinAggregateInputType;
    _max?: AddressCustomerMaxAggregateInputType;
  };

  export type AddressCustomerGroupByOutputType = {
    id: number;
    customerId: number;
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: AddressCustomerCountAggregateOutputType | null;
    _avg: AddressCustomerAvgAggregateOutputType | null;
    _sum: AddressCustomerSumAggregateOutputType | null;
    _min: AddressCustomerMinAggregateOutputType | null;
    _max: AddressCustomerMaxAggregateOutputType | null;
  };

  type GetAddressCustomerGroupByPayload<T extends AddressCustomerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AddressCustomerGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof AddressCustomerGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], AddressCustomerGroupByOutputType[P]>;
        }
      >
    >;

  export type AddressCustomerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      phoneNumber?: boolean;
      address?: boolean;
      label?: boolean;
      note?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      customer?: boolean | CustomerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['addressCustomer']
  >;

  export type AddressCustomerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      phoneNumber?: boolean;
      address?: boolean;
      label?: boolean;
      note?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      customer?: boolean | CustomerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['addressCustomer']
  >;

  export type AddressCustomerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      phoneNumber?: boolean;
      address?: boolean;
      label?: boolean;
      note?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      customer?: boolean | CustomerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['addressCustomer']
  >;

  export type AddressCustomerSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    phoneNumber?: boolean;
    address?: boolean;
    label?: boolean;
    note?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type AddressCustomerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'customerId'
    | 'phoneNumber'
    | 'address'
    | 'label'
    | 'note'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['addressCustomer']
  >;
  export type AddressCustomerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>;
  };
  export type AddressCustomerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>;
  };
  export type AddressCustomerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>;
  };

  export type $AddressCustomerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AddressCustomer';
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        customerId: number;
        phoneNumber: string;
        address: string;
        label: string;
        note: string;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['addressCustomer']
    >;
    composites: {};
  };

  type AddressCustomerGetPayload<
    S extends boolean | null | undefined | AddressCustomerDefaultArgs,
  > = $Result.GetResult<Prisma.$AddressCustomerPayload, S>;

  type AddressCustomerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AddressCustomerFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AddressCustomerCountAggregateInputType | true;
  };

  export interface AddressCustomerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AddressCustomer'];
      meta: { name: 'AddressCustomer' };
    };
    /**
     * Find zero or one AddressCustomer that matches the filter.
     * @param {AddressCustomerFindUniqueArgs} args - Arguments to find a AddressCustomer
     * @example
     * // Get one AddressCustomer
     * const addressCustomer = await prisma.addressCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressCustomerFindUniqueArgs>(
      args: SelectSubset<T, AddressCustomerFindUniqueArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AddressCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressCustomerFindUniqueOrThrowArgs} args - Arguments to find a AddressCustomer
     * @example
     * // Get one AddressCustomer
     * const addressCustomer = await prisma.addressCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressCustomerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AddressCustomerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AddressCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerFindFirstArgs} args - Arguments to find a AddressCustomer
     * @example
     * // Get one AddressCustomer
     * const addressCustomer = await prisma.addressCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressCustomerFindFirstArgs>(
      args?: SelectSubset<T, AddressCustomerFindFirstArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AddressCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerFindFirstOrThrowArgs} args - Arguments to find a AddressCustomer
     * @example
     * // Get one AddressCustomer
     * const addressCustomer = await prisma.addressCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressCustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressCustomerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AddressCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressCustomers
     * const addressCustomers = await prisma.addressCustomer.findMany()
     *
     * // Get first 10 AddressCustomers
     * const addressCustomers = await prisma.addressCustomer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const addressCustomerWithIdOnly = await prisma.addressCustomer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AddressCustomerFindManyArgs>(
      args?: SelectSubset<T, AddressCustomerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AddressCustomer.
     * @param {AddressCustomerCreateArgs} args - Arguments to create a AddressCustomer.
     * @example
     * // Create one AddressCustomer
     * const AddressCustomer = await prisma.addressCustomer.create({
     *   data: {
     *     // ... data to create a AddressCustomer
     *   }
     * })
     *
     */
    create<T extends AddressCustomerCreateArgs>(
      args: SelectSubset<T, AddressCustomerCreateArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AddressCustomers.
     * @param {AddressCustomerCreateManyArgs} args - Arguments to create many AddressCustomers.
     * @example
     * // Create many AddressCustomers
     * const addressCustomer = await prisma.addressCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AddressCustomerCreateManyArgs>(
      args?: SelectSubset<T, AddressCustomerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AddressCustomers and returns the data saved in the database.
     * @param {AddressCustomerCreateManyAndReturnArgs} args - Arguments to create many AddressCustomers.
     * @example
     * // Create many AddressCustomers
     * const addressCustomer = await prisma.addressCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AddressCustomers and only return the `id`
     * const addressCustomerWithIdOnly = await prisma.addressCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AddressCustomerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AddressCustomerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AddressCustomer.
     * @param {AddressCustomerDeleteArgs} args - Arguments to delete one AddressCustomer.
     * @example
     * // Delete one AddressCustomer
     * const AddressCustomer = await prisma.addressCustomer.delete({
     *   where: {
     *     // ... filter to delete one AddressCustomer
     *   }
     * })
     *
     */
    delete<T extends AddressCustomerDeleteArgs>(
      args: SelectSubset<T, AddressCustomerDeleteArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AddressCustomer.
     * @param {AddressCustomerUpdateArgs} args - Arguments to update one AddressCustomer.
     * @example
     * // Update one AddressCustomer
     * const addressCustomer = await prisma.addressCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AddressCustomerUpdateArgs>(
      args: SelectSubset<T, AddressCustomerUpdateArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AddressCustomers.
     * @param {AddressCustomerDeleteManyArgs} args - Arguments to filter AddressCustomers to delete.
     * @example
     * // Delete a few AddressCustomers
     * const { count } = await prisma.addressCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AddressCustomerDeleteManyArgs>(
      args?: SelectSubset<T, AddressCustomerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AddressCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressCustomers
     * const addressCustomer = await prisma.addressCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AddressCustomerUpdateManyArgs>(
      args: SelectSubset<T, AddressCustomerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AddressCustomers and returns the data updated in the database.
     * @param {AddressCustomerUpdateManyAndReturnArgs} args - Arguments to update many AddressCustomers.
     * @example
     * // Update many AddressCustomers
     * const addressCustomer = await prisma.addressCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AddressCustomers and only return the `id`
     * const addressCustomerWithIdOnly = await prisma.addressCustomer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressCustomerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AddressCustomerUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AddressCustomer.
     * @param {AddressCustomerUpsertArgs} args - Arguments to update or create a AddressCustomer.
     * @example
     * // Update or create a AddressCustomer
     * const addressCustomer = await prisma.addressCustomer.upsert({
     *   create: {
     *     // ... data to create a AddressCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressCustomer we want to update
     *   }
     * })
     */
    upsert<T extends AddressCustomerUpsertArgs>(
      args: SelectSubset<T, AddressCustomerUpsertArgs<ExtArgs>>,
    ): Prisma__AddressCustomerClient<
      $Result.GetResult<
        Prisma.$AddressCustomerPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AddressCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerCountArgs} args - Arguments to filter AddressCustomers to count.
     * @example
     * // Count the number of AddressCustomers
     * const count = await prisma.addressCustomer.count({
     *   where: {
     *     // ... the filter for the AddressCustomers we want to count
     *   }
     * })
     **/
    count<T extends AddressCustomerCountArgs>(
      args?: Subset<T, AddressCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AddressCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressCustomerAggregateArgs>(
      args: Subset<T, AddressCustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetAddressCustomerAggregateType<T>>;

    /**
     * Group by AddressCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCustomerGroupByArgs} args - Group by arguments.
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
      T extends AddressCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressCustomerGroupByArgs['orderBy'] }
        : { orderBy?: AddressCustomerGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, AddressCustomerGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAddressCustomerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AddressCustomer model
     */
    readonly fields: AddressCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddressCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressCustomerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CustomerDefaultArgs<ExtArgs>>,
    ): Prisma__CustomerClient<
      | $Result.GetResult<
          Prisma.$CustomerPayload<ExtArgs>,
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
   * Fields of the AddressCustomer model
   */
  interface AddressCustomerFieldRefs {
    readonly id: FieldRef<'AddressCustomer', 'Int'>;
    readonly customerId: FieldRef<'AddressCustomer', 'Int'>;
    readonly phoneNumber: FieldRef<'AddressCustomer', 'String'>;
    readonly address: FieldRef<'AddressCustomer', 'String'>;
    readonly label: FieldRef<'AddressCustomer', 'String'>;
    readonly note: FieldRef<'AddressCustomer', 'String'>;
    readonly createdAt: FieldRef<'AddressCustomer', 'DateTime'>;
    readonly updatedAt: FieldRef<'AddressCustomer', 'DateTime'>;
    readonly deletedAt: FieldRef<'AddressCustomer', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * AddressCustomer findUnique
   */
  export type AddressCustomerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * Filter, which AddressCustomer to fetch.
     */
    where: AddressCustomerWhereUniqueInput;
  };

  /**
   * AddressCustomer findUniqueOrThrow
   */
  export type AddressCustomerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * Filter, which AddressCustomer to fetch.
     */
    where: AddressCustomerWhereUniqueInput;
  };

  /**
   * AddressCustomer findFirst
   */
  export type AddressCustomerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * Filter, which AddressCustomer to fetch.
     */
    where?: AddressCustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressCustomers to fetch.
     */
    orderBy?:
      | AddressCustomerOrderByWithRelationInput
      | AddressCustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AddressCustomers.
     */
    cursor?: AddressCustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressCustomers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressCustomers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AddressCustomers.
     */
    distinct?:
      | AddressCustomerScalarFieldEnum
      | AddressCustomerScalarFieldEnum[];
  };

  /**
   * AddressCustomer findFirstOrThrow
   */
  export type AddressCustomerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * Filter, which AddressCustomer to fetch.
     */
    where?: AddressCustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressCustomers to fetch.
     */
    orderBy?:
      | AddressCustomerOrderByWithRelationInput
      | AddressCustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AddressCustomers.
     */
    cursor?: AddressCustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressCustomers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressCustomers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AddressCustomers.
     */
    distinct?:
      | AddressCustomerScalarFieldEnum
      | AddressCustomerScalarFieldEnum[];
  };

  /**
   * AddressCustomer findMany
   */
  export type AddressCustomerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * Filter, which AddressCustomers to fetch.
     */
    where?: AddressCustomerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AddressCustomers to fetch.
     */
    orderBy?:
      | AddressCustomerOrderByWithRelationInput
      | AddressCustomerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AddressCustomers.
     */
    cursor?: AddressCustomerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AddressCustomers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AddressCustomers.
     */
    skip?: number;
    distinct?:
      | AddressCustomerScalarFieldEnum
      | AddressCustomerScalarFieldEnum[];
  };

  /**
   * AddressCustomer create
   */
  export type AddressCustomerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * The data needed to create a AddressCustomer.
     */
    data: XOR<AddressCustomerCreateInput, AddressCustomerUncheckedCreateInput>;
  };

  /**
   * AddressCustomer createMany
   */
  export type AddressCustomerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AddressCustomers.
     */
    data: AddressCustomerCreateManyInput | AddressCustomerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AddressCustomer createManyAndReturn
   */
  export type AddressCustomerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * The data used to create many AddressCustomers.
     */
    data: AddressCustomerCreateManyInput | AddressCustomerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AddressCustomer update
   */
  export type AddressCustomerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * The data needed to update a AddressCustomer.
     */
    data: XOR<AddressCustomerUpdateInput, AddressCustomerUncheckedUpdateInput>;
    /**
     * Choose, which AddressCustomer to update.
     */
    where: AddressCustomerWhereUniqueInput;
  };

  /**
   * AddressCustomer updateMany
   */
  export type AddressCustomerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AddressCustomers.
     */
    data: XOR<
      AddressCustomerUpdateManyMutationInput,
      AddressCustomerUncheckedUpdateManyInput
    >;
    /**
     * Filter which AddressCustomers to update
     */
    where?: AddressCustomerWhereInput;
    /**
     * Limit how many AddressCustomers to update.
     */
    limit?: number;
  };

  /**
   * AddressCustomer updateManyAndReturn
   */
  export type AddressCustomerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * The data used to update AddressCustomers.
     */
    data: XOR<
      AddressCustomerUpdateManyMutationInput,
      AddressCustomerUncheckedUpdateManyInput
    >;
    /**
     * Filter which AddressCustomers to update
     */
    where?: AddressCustomerWhereInput;
    /**
     * Limit how many AddressCustomers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AddressCustomer upsert
   */
  export type AddressCustomerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * The filter to search for the AddressCustomer to update in case it exists.
     */
    where: AddressCustomerWhereUniqueInput;
    /**
     * In case the AddressCustomer found by the `where` argument doesn't exist, create a new AddressCustomer with this data.
     */
    create: XOR<
      AddressCustomerCreateInput,
      AddressCustomerUncheckedCreateInput
    >;
    /**
     * In case the AddressCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      AddressCustomerUpdateInput,
      AddressCustomerUncheckedUpdateInput
    >;
  };

  /**
   * AddressCustomer delete
   */
  export type AddressCustomerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
    /**
     * Filter which AddressCustomer to delete.
     */
    where: AddressCustomerWhereUniqueInput;
  };

  /**
   * AddressCustomer deleteMany
   */
  export type AddressCustomerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AddressCustomers to delete
     */
    where?: AddressCustomerWhereInput;
    /**
     * Limit how many AddressCustomers to delete.
     */
    limit?: number;
  };

  /**
   * AddressCustomer without action
   */
  export type AddressCustomerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCustomer
     */
    select?: AddressCustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AddressCustomer
     */
    omit?: AddressCustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCustomerInclude<ExtArgs> | null;
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

  export const AdminsScalarFieldEnum: {
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

  export type AdminsScalarFieldEnum =
    (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    phoneNumber: 'phoneNumber';
    companyId: 'companyId';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type CustomerScalarFieldEnum =
    (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const AddressCustomerScalarFieldEnum: {
    id: 'id';
    customerId: 'customerId';
    phoneNumber: 'phoneNumber';
    address: 'address';
    label: 'label';
    note: 'note';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type AddressCustomerScalarFieldEnum =
    (typeof AddressCustomerScalarFieldEnum)[keyof typeof AddressCustomerScalarFieldEnum];

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
    customer?: CustomerListRelationFilter;
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
    customer?: CustomerOrderByRelationAggregateInput;
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
      customer?: CustomerListRelationFilter;
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

  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[];
    OR?: adminsWhereInput[];
    NOT?: adminsWhereInput | adminsWhereInput[];
    id?: IntFilter<'admins'> | number;
    name?: StringFilter<'admins'> | string;
    email?: StringFilter<'admins'> | string;
    password?: StringFilter<'admins'> | string;
    status?: BoolFilter<'admins'> | boolean;
    level?: EnumLevelStatusFilter<'admins'> | $Enums.LevelStatus;
    createdAt?: DateTimeFilter<'admins'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'admins'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'admins'> | Date | string | null;
    otp?: StringNullableFilter<'admins'> | string | null;
    otpExpired?: DateTimeNullableFilter<'admins'> | Date | string | null;
  };

  export type adminsOrderByWithRelationInput = {
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

  export type adminsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: adminsWhereInput | adminsWhereInput[];
      OR?: adminsWhereInput[];
      NOT?: adminsWhereInput | adminsWhereInput[];
      name?: StringFilter<'admins'> | string;
      password?: StringFilter<'admins'> | string;
      status?: BoolFilter<'admins'> | boolean;
      level?: EnumLevelStatusFilter<'admins'> | $Enums.LevelStatus;
      createdAt?: DateTimeFilter<'admins'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'admins'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'admins'> | Date | string | null;
      otp?: StringNullableFilter<'admins'> | string | null;
      otpExpired?: DateTimeNullableFilter<'admins'> | Date | string | null;
    },
    'id' | 'email'
  >;

  export type adminsOrderByWithAggregationInput = {
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
    _count?: adminsCountOrderByAggregateInput;
    _avg?: adminsAvgOrderByAggregateInput;
    _max?: adminsMaxOrderByAggregateInput;
    _min?: adminsMinOrderByAggregateInput;
    _sum?: adminsSumOrderByAggregateInput;
  };

  export type adminsScalarWhereWithAggregatesInput = {
    AND?:
      | adminsScalarWhereWithAggregatesInput
      | adminsScalarWhereWithAggregatesInput[];
    OR?: adminsScalarWhereWithAggregatesInput[];
    NOT?:
      | adminsScalarWhereWithAggregatesInput
      | adminsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'admins'> | number;
    name?: StringWithAggregatesFilter<'admins'> | string;
    email?: StringWithAggregatesFilter<'admins'> | string;
    password?: StringWithAggregatesFilter<'admins'> | string;
    status?: BoolWithAggregatesFilter<'admins'> | boolean;
    level?: EnumLevelStatusWithAggregatesFilter<'admins'> | $Enums.LevelStatus;
    createdAt?: DateTimeWithAggregatesFilter<'admins'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'admins'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'admins'>
      | Date
      | string
      | null;
    otp?: StringNullableWithAggregatesFilter<'admins'> | string | null;
    otpExpired?:
      | DateTimeNullableWithAggregatesFilter<'admins'>
      | Date
      | string
      | null;
  };

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[];
    OR?: CustomerWhereInput[];
    NOT?: CustomerWhereInput | CustomerWhereInput[];
    id?: IntFilter<'Customer'> | number;
    name?: StringFilter<'Customer'> | string;
    email?: StringFilter<'Customer'> | string;
    phoneNumber?: StringFilter<'Customer'> | string;
    companyId?: IntFilter<'Customer'> | number;
    status?: BoolFilter<'Customer'> | boolean;
    createdAt?: DateTimeFilter<'Customer'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Customer'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Customer'> | Date | string | null;
    address?: AddressCustomerListRelationFilter;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
  };

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    address?: AddressCustomerOrderByRelationAggregateInput;
    company?: CompanyOrderByWithRelationInput;
  };

  export type CustomerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: CustomerWhereInput | CustomerWhereInput[];
      OR?: CustomerWhereInput[];
      NOT?: CustomerWhereInput | CustomerWhereInput[];
      name?: StringFilter<'Customer'> | string;
      phoneNumber?: StringFilter<'Customer'> | string;
      companyId?: IntFilter<'Customer'> | number;
      status?: BoolFilter<'Customer'> | boolean;
      createdAt?: DateTimeFilter<'Customer'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'Customer'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'Customer'> | Date | string | null;
      address?: AddressCustomerListRelationFilter;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    },
    'id' | 'email'
  >;

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: CustomerCountOrderByAggregateInput;
    _avg?: CustomerAvgOrderByAggregateInput;
    _max?: CustomerMaxOrderByAggregateInput;
    _min?: CustomerMinOrderByAggregateInput;
    _sum?: CustomerSumOrderByAggregateInput;
  };

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?:
      | CustomerScalarWhereWithAggregatesInput
      | CustomerScalarWhereWithAggregatesInput[];
    OR?: CustomerScalarWhereWithAggregatesInput[];
    NOT?:
      | CustomerScalarWhereWithAggregatesInput
      | CustomerScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Customer'> | number;
    name?: StringWithAggregatesFilter<'Customer'> | string;
    email?: StringWithAggregatesFilter<'Customer'> | string;
    phoneNumber?: StringWithAggregatesFilter<'Customer'> | string;
    companyId?: IntWithAggregatesFilter<'Customer'> | number;
    status?: BoolWithAggregatesFilter<'Customer'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Customer'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Customer'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Customer'>
      | Date
      | string
      | null;
  };

  export type AddressCustomerWhereInput = {
    AND?: AddressCustomerWhereInput | AddressCustomerWhereInput[];
    OR?: AddressCustomerWhereInput[];
    NOT?: AddressCustomerWhereInput | AddressCustomerWhereInput[];
    id?: IntFilter<'AddressCustomer'> | number;
    customerId?: IntFilter<'AddressCustomer'> | number;
    phoneNumber?: StringFilter<'AddressCustomer'> | string;
    address?: StringFilter<'AddressCustomer'> | string;
    label?: StringFilter<'AddressCustomer'> | string;
    note?: StringFilter<'AddressCustomer'> | string;
    createdAt?: DateTimeFilter<'AddressCustomer'> | Date | string;
    updatedAt?:
      | DateTimeNullableFilter<'AddressCustomer'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableFilter<'AddressCustomer'>
      | Date
      | string
      | null;
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>;
  };

  export type AddressCustomerOrderByWithRelationInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    phoneNumber?: SortOrder;
    address?: SortOrder;
    label?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    customer?: CustomerOrderByWithRelationInput;
  };

  export type AddressCustomerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: AddressCustomerWhereInput | AddressCustomerWhereInput[];
      OR?: AddressCustomerWhereInput[];
      NOT?: AddressCustomerWhereInput | AddressCustomerWhereInput[];
      customerId?: IntFilter<'AddressCustomer'> | number;
      phoneNumber?: StringFilter<'AddressCustomer'> | string;
      address?: StringFilter<'AddressCustomer'> | string;
      label?: StringFilter<'AddressCustomer'> | string;
      note?: StringFilter<'AddressCustomer'> | string;
      createdAt?: DateTimeFilter<'AddressCustomer'> | Date | string;
      updatedAt?:
        | DateTimeNullableFilter<'AddressCustomer'>
        | Date
        | string
        | null;
      deletedAt?:
        | DateTimeNullableFilter<'AddressCustomer'>
        | Date
        | string
        | null;
      customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>;
    },
    'id'
  >;

  export type AddressCustomerOrderByWithAggregationInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    phoneNumber?: SortOrder;
    address?: SortOrder;
    label?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: AddressCustomerCountOrderByAggregateInput;
    _avg?: AddressCustomerAvgOrderByAggregateInput;
    _max?: AddressCustomerMaxOrderByAggregateInput;
    _min?: AddressCustomerMinOrderByAggregateInput;
    _sum?: AddressCustomerSumOrderByAggregateInput;
  };

  export type AddressCustomerScalarWhereWithAggregatesInput = {
    AND?:
      | AddressCustomerScalarWhereWithAggregatesInput
      | AddressCustomerScalarWhereWithAggregatesInput[];
    OR?: AddressCustomerScalarWhereWithAggregatesInput[];
    NOT?:
      | AddressCustomerScalarWhereWithAggregatesInput
      | AddressCustomerScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'AddressCustomer'> | number;
    customerId?: IntWithAggregatesFilter<'AddressCustomer'> | number;
    phoneNumber?: StringWithAggregatesFilter<'AddressCustomer'> | string;
    address?: StringWithAggregatesFilter<'AddressCustomer'> | string;
    label?: StringWithAggregatesFilter<'AddressCustomer'> | string;
    note?: StringWithAggregatesFilter<'AddressCustomer'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'AddressCustomer'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'AddressCustomer'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'AddressCustomer'>
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
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
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
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
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
    customer?: CustomerUpdateManyWithoutCompanyNestedInput;
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
    customer?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput;
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

  export type adminsCreateInput = {
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

  export type adminsUncheckedCreateInput = {
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

  export type adminsUpdateInput = {
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

  export type adminsUncheckedUpdateInput = {
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

  export type adminsCreateManyInput = {
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

  export type adminsUpdateManyMutationInput = {
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

  export type adminsUncheckedUpdateManyInput = {
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

  export type CustomerCreateInput = {
    name: string;
    email: string;
    phoneNumber: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    address?: AddressCustomerCreateNestedManyWithoutCustomerInput;
    company: CompanyCreateNestedOneWithoutCustomerInput;
  };

  export type CustomerUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    companyId: number;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    address?: AddressCustomerUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
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
    address?: AddressCustomerUpdateManyWithoutCustomerNestedInput;
    company?: CompanyUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
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
    address?: AddressCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type CustomerCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    companyId: number;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
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

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
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

  export type AddressCustomerCreateInput = {
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    customer: CustomerCreateNestedOneWithoutAddressInput;
  };

  export type AddressCustomerUncheckedCreateInput = {
    id?: number;
    customerId: number;
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type AddressCustomerUpdateInput = {
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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
    customer?: CustomerUpdateOneRequiredWithoutAddressNestedInput;
  };

  export type AddressCustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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

  export type AddressCustomerCreateManyInput = {
    id?: number;
    customerId: number;
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type AddressCustomerUpdateManyMutationInput = {
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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

  export type AddressCustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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

  export type CompanyUserListRelationFilter = {
    every?: CompanyUserWhereInput;
    some?: CompanyUserWhereInput;
    none?: CompanyUserWhereInput;
  };

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput;
    some?: CustomerWhereInput;
    none?: CustomerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type CompanyUserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CustomerOrderByRelationAggregateInput = {
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

  export type EnumLevelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LevelStatus | EnumLevelStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LevelStatus[] | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.LevelStatus[]
      | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelStatusFilter<$PrismaModel> | $Enums.LevelStatus;
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

  export type adminsCountOrderByAggregateInput = {
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

  export type adminsAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type adminsMaxOrderByAggregateInput = {
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

  export type adminsMinOrderByAggregateInput = {
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

  export type adminsSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type AddressCustomerListRelationFilter = {
    every?: AddressCustomerWhereInput;
    some?: AddressCustomerWhereInput;
    none?: AddressCustomerWhereInput;
  };

  export type AddressCustomerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
  };

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phoneNumber?: SortOrder;
    companyId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
  };

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput;
    isNot?: CustomerWhereInput;
  };

  export type AddressCustomerCountOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    phoneNumber?: SortOrder;
    address?: SortOrder;
    label?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type AddressCustomerAvgOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
  };

  export type AddressCustomerMaxOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    phoneNumber?: SortOrder;
    address?: SortOrder;
    label?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type AddressCustomerMinOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    phoneNumber?: SortOrder;
    address?: SortOrder;
    label?: SortOrder;
    note?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type AddressCustomerSumOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
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

  export type CustomerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          CustomerCreateWithoutCompanyInput,
          CustomerUncheckedCreateWithoutCompanyInput
        >
      | CustomerCreateWithoutCompanyInput[]
      | CustomerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CustomerCreateOrConnectWithoutCompanyInput
      | CustomerCreateOrConnectWithoutCompanyInput[];
    createMany?: CustomerCreateManyCompanyInputEnvelope;
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
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

  export type CustomerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          CustomerCreateWithoutCompanyInput,
          CustomerUncheckedCreateWithoutCompanyInput
        >
      | CustomerCreateWithoutCompanyInput[]
      | CustomerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CustomerCreateOrConnectWithoutCompanyInput
      | CustomerCreateOrConnectWithoutCompanyInput[];
    createMany?: CustomerCreateManyCompanyInputEnvelope;
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
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

  export type CustomerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          CustomerCreateWithoutCompanyInput,
          CustomerUncheckedCreateWithoutCompanyInput
        >
      | CustomerCreateWithoutCompanyInput[]
      | CustomerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CustomerCreateOrConnectWithoutCompanyInput
      | CustomerCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | CustomerUpsertWithWhereUniqueWithoutCompanyInput
      | CustomerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: CustomerCreateManyCompanyInputEnvelope;
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    update?:
      | CustomerUpdateWithWhereUniqueWithoutCompanyInput
      | CustomerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | CustomerUpdateManyWithWhereWithoutCompanyInput
      | CustomerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
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

  export type CustomerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          CustomerCreateWithoutCompanyInput,
          CustomerUncheckedCreateWithoutCompanyInput
        >
      | CustomerCreateWithoutCompanyInput[]
      | CustomerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CustomerCreateOrConnectWithoutCompanyInput
      | CustomerCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | CustomerUpsertWithWhereUniqueWithoutCompanyInput
      | CustomerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: CustomerCreateManyCompanyInputEnvelope;
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[];
    update?:
      | CustomerUpdateWithWhereUniqueWithoutCompanyInput
      | CustomerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | CustomerUpdateManyWithWhereWithoutCompanyInput
      | CustomerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[];
  };

  export type CompanyCreateNestedOneWithoutCompanyUsersInput = {
    create?: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyUsersInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type EnumLevelStatusFieldUpdateOperationsInput = {
    set?: $Enums.LevelStatus;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
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

  export type AddressCustomerCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<
          AddressCustomerCreateWithoutCustomerInput,
          AddressCustomerUncheckedCreateWithoutCustomerInput
        >
      | AddressCustomerCreateWithoutCustomerInput[]
      | AddressCustomerUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | AddressCustomerCreateOrConnectWithoutCustomerInput
      | AddressCustomerCreateOrConnectWithoutCustomerInput[];
    createMany?: AddressCustomerCreateManyCustomerInputEnvelope;
    connect?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
  };

  export type CompanyCreateNestedOneWithoutCustomerInput = {
    create?: XOR<
      CompanyCreateWithoutCustomerInput,
      CompanyUncheckedCreateWithoutCustomerInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomerInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type AddressCustomerUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<
          AddressCustomerCreateWithoutCustomerInput,
          AddressCustomerUncheckedCreateWithoutCustomerInput
        >
      | AddressCustomerCreateWithoutCustomerInput[]
      | AddressCustomerUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | AddressCustomerCreateOrConnectWithoutCustomerInput
      | AddressCustomerCreateOrConnectWithoutCustomerInput[];
    createMany?: AddressCustomerCreateManyCustomerInputEnvelope;
    connect?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
  };

  export type AddressCustomerUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<
          AddressCustomerCreateWithoutCustomerInput,
          AddressCustomerUncheckedCreateWithoutCustomerInput
        >
      | AddressCustomerCreateWithoutCustomerInput[]
      | AddressCustomerUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | AddressCustomerCreateOrConnectWithoutCustomerInput
      | AddressCustomerCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | AddressCustomerUpsertWithWhereUniqueWithoutCustomerInput
      | AddressCustomerUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: AddressCustomerCreateManyCustomerInputEnvelope;
    set?: AddressCustomerWhereUniqueInput | AddressCustomerWhereUniqueInput[];
    disconnect?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
    delete?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
    connect?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
    update?:
      | AddressCustomerUpdateWithWhereUniqueWithoutCustomerInput
      | AddressCustomerUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | AddressCustomerUpdateManyWithWhereWithoutCustomerInput
      | AddressCustomerUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?:
      | AddressCustomerScalarWhereInput
      | AddressCustomerScalarWhereInput[];
  };

  export type CompanyUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<
      CompanyCreateWithoutCustomerInput,
      CompanyUncheckedCreateWithoutCustomerInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCustomerInput;
    upsert?: CompanyUpsertWithoutCustomerInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutCustomerInput,
        CompanyUpdateWithoutCustomerInput
      >,
      CompanyUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type AddressCustomerUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<
          AddressCustomerCreateWithoutCustomerInput,
          AddressCustomerUncheckedCreateWithoutCustomerInput
        >
      | AddressCustomerCreateWithoutCustomerInput[]
      | AddressCustomerUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | AddressCustomerCreateOrConnectWithoutCustomerInput
      | AddressCustomerCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | AddressCustomerUpsertWithWhereUniqueWithoutCustomerInput
      | AddressCustomerUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: AddressCustomerCreateManyCustomerInputEnvelope;
    set?: AddressCustomerWhereUniqueInput | AddressCustomerWhereUniqueInput[];
    disconnect?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
    delete?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
    connect?:
      | AddressCustomerWhereUniqueInput
      | AddressCustomerWhereUniqueInput[];
    update?:
      | AddressCustomerUpdateWithWhereUniqueWithoutCustomerInput
      | AddressCustomerUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | AddressCustomerUpdateManyWithWhereWithoutCustomerInput
      | AddressCustomerUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?:
      | AddressCustomerScalarWhereInput
      | AddressCustomerScalarWhereInput[];
  };

  export type CustomerCreateNestedOneWithoutAddressInput = {
    create?: XOR<
      CustomerCreateWithoutAddressInput,
      CustomerUncheckedCreateWithoutAddressInput
    >;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput;
    connect?: CustomerWhereUniqueInput;
  };

  export type CustomerUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<
      CustomerCreateWithoutAddressInput,
      CustomerUncheckedCreateWithoutAddressInput
    >;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput;
    upsert?: CustomerUpsertWithoutAddressInput;
    connect?: CustomerWhereUniqueInput;
    update?: XOR<
      XOR<
        CustomerUpdateToOneWithWhereWithoutAddressInput,
        CustomerUpdateWithoutAddressInput
      >,
      CustomerUncheckedUpdateWithoutAddressInput
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

  export type NestedEnumLevelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LevelStatus | EnumLevelStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LevelStatus[] | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.LevelStatus[]
      | ListEnumLevelStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumLevelStatusFilter<$PrismaModel> | $Enums.LevelStatus;
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

  export type CustomerCreateWithoutCompanyInput = {
    name: string;
    email: string;
    phoneNumber: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    address?: AddressCustomerCreateNestedManyWithoutCustomerInput;
  };

  export type CustomerUncheckedCreateWithoutCompanyInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    address?: AddressCustomerUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type CustomerCreateOrConnectWithoutCompanyInput = {
    where: CustomerWhereUniqueInput;
    create: XOR<
      CustomerCreateWithoutCompanyInput,
      CustomerUncheckedCreateWithoutCompanyInput
    >;
  };

  export type CustomerCreateManyCompanyInputEnvelope = {
    data: CustomerCreateManyCompanyInput | CustomerCreateManyCompanyInput[];
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

  export type CustomerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput;
    update: XOR<
      CustomerUpdateWithoutCompanyInput,
      CustomerUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      CustomerCreateWithoutCompanyInput,
      CustomerUncheckedCreateWithoutCompanyInput
    >;
  };

  export type CustomerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CustomerWhereUniqueInput;
    data: XOR<
      CustomerUpdateWithoutCompanyInput,
      CustomerUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type CustomerUpdateManyWithWhereWithoutCompanyInput = {
    where: CustomerScalarWhereInput;
    data: XOR<
      CustomerUpdateManyMutationInput,
      CustomerUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[];
    OR?: CustomerScalarWhereInput[];
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[];
    id?: IntFilter<'Customer'> | number;
    name?: StringFilter<'Customer'> | string;
    email?: StringFilter<'Customer'> | string;
    phoneNumber?: StringFilter<'Customer'> | string;
    companyId?: IntFilter<'Customer'> | number;
    status?: BoolFilter<'Customer'> | boolean;
    createdAt?: DateTimeFilter<'Customer'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Customer'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Customer'> | Date | string | null;
  };

  export type CompanyCreateWithoutCompanyUsersInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutCompanyUsersInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
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
    customer?: CustomerUpdateManyWithoutCompanyNestedInput;
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
    customer?: CustomerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type AddressCustomerCreateWithoutCustomerInput = {
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type AddressCustomerUncheckedCreateWithoutCustomerInput = {
    id?: number;
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type AddressCustomerCreateOrConnectWithoutCustomerInput = {
    where: AddressCustomerWhereUniqueInput;
    create: XOR<
      AddressCustomerCreateWithoutCustomerInput,
      AddressCustomerUncheckedCreateWithoutCustomerInput
    >;
  };

  export type AddressCustomerCreateManyCustomerInputEnvelope = {
    data:
      | AddressCustomerCreateManyCustomerInput
      | AddressCustomerCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type CompanyCreateWithoutCustomerInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutCustomerInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutCustomerInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutCustomerInput,
      CompanyUncheckedCreateWithoutCustomerInput
    >;
  };

  export type AddressCustomerUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressCustomerWhereUniqueInput;
    update: XOR<
      AddressCustomerUpdateWithoutCustomerInput,
      AddressCustomerUncheckedUpdateWithoutCustomerInput
    >;
    create: XOR<
      AddressCustomerCreateWithoutCustomerInput,
      AddressCustomerUncheckedCreateWithoutCustomerInput
    >;
  };

  export type AddressCustomerUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressCustomerWhereUniqueInput;
    data: XOR<
      AddressCustomerUpdateWithoutCustomerInput,
      AddressCustomerUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type AddressCustomerUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressCustomerScalarWhereInput;
    data: XOR<
      AddressCustomerUpdateManyMutationInput,
      AddressCustomerUncheckedUpdateManyWithoutCustomerInput
    >;
  };

  export type AddressCustomerScalarWhereInput = {
    AND?: AddressCustomerScalarWhereInput | AddressCustomerScalarWhereInput[];
    OR?: AddressCustomerScalarWhereInput[];
    NOT?: AddressCustomerScalarWhereInput | AddressCustomerScalarWhereInput[];
    id?: IntFilter<'AddressCustomer'> | number;
    customerId?: IntFilter<'AddressCustomer'> | number;
    phoneNumber?: StringFilter<'AddressCustomer'> | string;
    address?: StringFilter<'AddressCustomer'> | string;
    label?: StringFilter<'AddressCustomer'> | string;
    note?: StringFilter<'AddressCustomer'> | string;
    createdAt?: DateTimeFilter<'AddressCustomer'> | Date | string;
    updatedAt?:
      | DateTimeNullableFilter<'AddressCustomer'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableFilter<'AddressCustomer'>
      | Date
      | string
      | null;
  };

  export type CompanyUpsertWithoutCustomerInput = {
    update: XOR<
      CompanyUpdateWithoutCustomerInput,
      CompanyUncheckedUpdateWithoutCustomerInput
    >;
    create: XOR<
      CompanyCreateWithoutCustomerInput,
      CompanyUncheckedCreateWithoutCustomerInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutCustomerInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutCustomerInput,
      CompanyUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type CompanyUpdateWithoutCustomerInput = {
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

  export type CompanyUncheckedUpdateWithoutCustomerInput = {
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

  export type CustomerCreateWithoutAddressInput = {
    name: string;
    email: string;
    phoneNumber: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutCustomerInput;
  };

  export type CustomerUncheckedCreateWithoutAddressInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    companyId: number;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CustomerCreateOrConnectWithoutAddressInput = {
    where: CustomerWhereUniqueInput;
    create: XOR<
      CustomerCreateWithoutAddressInput,
      CustomerUncheckedCreateWithoutAddressInput
    >;
  };

  export type CustomerUpsertWithoutAddressInput = {
    update: XOR<
      CustomerUpdateWithoutAddressInput,
      CustomerUncheckedUpdateWithoutAddressInput
    >;
    create: XOR<
      CustomerCreateWithoutAddressInput,
      CustomerUncheckedCreateWithoutAddressInput
    >;
    where?: CustomerWhereInput;
  };

  export type CustomerUpdateToOneWithWhereWithoutAddressInput = {
    where?: CustomerWhereInput;
    data: XOR<
      CustomerUpdateWithoutAddressInput,
      CustomerUncheckedUpdateWithoutAddressInput
    >;
  };

  export type CustomerUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
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
    company?: CompanyUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type CustomerUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
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

  export type CustomerCreateManyCompanyInput = {
    id?: number;
    name: string;
    email: string;
    phoneNumber: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
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

  export type CustomerUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
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
    address?: AddressCustomerUpdateManyWithoutCustomerNestedInput;
  };

  export type CustomerUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
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
    address?: AddressCustomerUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type CustomerUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
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

  export type AddressCustomerCreateManyCustomerInput = {
    id?: number;
    phoneNumber: string;
    address: string;
    label: string;
    note: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type AddressCustomerUpdateWithoutCustomerInput = {
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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

  export type AddressCustomerUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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

  export type AddressCustomerUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    label?: StringFieldUpdateOperationsInput | string;
    note?: StringFieldUpdateOperationsInput | string;
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

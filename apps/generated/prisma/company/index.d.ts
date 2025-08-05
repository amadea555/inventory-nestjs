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
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Order
 *
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>;
/**
 * Model OrderDetail
 *
 */
export type OrderDetail = $Result.DefaultSelection<Prisma.$OrderDetailPayload>;
/**
 * Model TransactionLog
 *
 */
export type TransactionLog =
  $Result.DefaultSelection<Prisma.$TransactionLogPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const LevelStatus: {
    SUPER: 'SUPER';
    NORMAL: 'NORMAL';
  };

  export type LevelStatus = (typeof LevelStatus)[keyof typeof LevelStatus];

  export const PaymentStatus: {
    PENDING: 'PENDING';
    PAID: 'PAID';
    CANCELED: 'CANCELED';
  };

  export type PaymentStatus =
    (typeof PaymentStatus)[keyof typeof PaymentStatus];

  export const ShippingStatus: {
    ONGOING: 'ONGOING';
    DELIVERED: 'DELIVERED';
    CANCELED: 'CANCELED';
  };

  export type ShippingStatus =
    (typeof ShippingStatus)[keyof typeof ShippingStatus];

  export const TransactionType: {
    IN: 'IN';
    OUT: 'OUT';
  };

  export type TransactionType =
    (typeof TransactionType)[keyof typeof TransactionType];
}

export type LevelStatus = $Enums.LevelStatus;

export const LevelStatus: typeof $Enums.LevelStatus;

export type PaymentStatus = $Enums.PaymentStatus;

export const PaymentStatus: typeof $Enums.PaymentStatus;

export type ShippingStatus = $Enums.ShippingStatus;

export const ShippingStatus: typeof $Enums.ShippingStatus;

export type TransactionType = $Enums.TransactionType;

export const TransactionType: typeof $Enums.TransactionType;

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

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetail`: Exposes CRUD operations for the **OrderDetail** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrderDetails
   * const orderDetails = await prisma.orderDetail.findMany()
   * ```
   */
  get orderDetail(): Prisma.OrderDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionLog`: Exposes CRUD operations for the **TransactionLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TransactionLogs
   * const transactionLogs = await prisma.transactionLog.findMany()
   * ```
   */
  get transactionLog(): Prisma.TransactionLogDelegate<ExtArgs, ClientOptions>;
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
    Category: 'Category';
    Product: 'Product';
    Order: 'Order';
    OrderDetail: 'OrderDetail';
    TransactionLog: 'TransactionLog';
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
        | 'addressCustomer'
        | 'category'
        | 'product'
        | 'order'
        | 'orderDetail'
        | 'transactionLog';
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>;
        fields: Prisma.ProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>;
        fields: Prisma.OrderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
          };
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
          };
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
          };
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder>;
          };
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderCountAggregateOutputType> | number;
          };
        };
      };
      OrderDetail: {
        payload: Prisma.$OrderDetailPayload<ExtArgs>;
        fields: Prisma.OrderDetailFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderDetailFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderDetailFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>;
          };
          findFirst: {
            args: Prisma.OrderDetailFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderDetailFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>;
          };
          findMany: {
            args: Prisma.OrderDetailFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[];
          };
          create: {
            args: Prisma.OrderDetailCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>;
          };
          createMany: {
            args: Prisma.OrderDetailCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrderDetailCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[];
          };
          delete: {
            args: Prisma.OrderDetailDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>;
          };
          update: {
            args: Prisma.OrderDetailUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>;
          };
          deleteMany: {
            args: Prisma.OrderDetailDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderDetailUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrderDetailUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[];
          };
          upsert: {
            args: Prisma.OrderDetailUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>;
          };
          aggregate: {
            args: Prisma.OrderDetailAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrderDetail>;
          };
          groupBy: {
            args: Prisma.OrderDetailGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderDetailGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderDetailCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrderDetailCountAggregateOutputType>
              | number;
          };
        };
      };
      TransactionLog: {
        payload: Prisma.$TransactionLogPayload<ExtArgs>;
        fields: Prisma.TransactionLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>;
          };
          findFirst: {
            args: Prisma.TransactionLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>;
          };
          findMany: {
            args: Prisma.TransactionLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>[];
          };
          create: {
            args: Prisma.TransactionLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>;
          };
          createMany: {
            args: Prisma.TransactionLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>[];
          };
          delete: {
            args: Prisma.TransactionLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>;
          };
          update: {
            args: Prisma.TransactionLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionLogUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>[];
          };
          upsert: {
            args: Prisma.TransactionLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionLogPayload>;
          };
          aggregate: {
            args: Prisma.TransactionLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactionLog>;
          };
          groupBy: {
            args: Prisma.TransactionLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionLogCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TransactionLogCountAggregateOutputType>
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
    category?: CategoryOmit;
    product?: ProductOmit;
    order?: OrderOmit;
    orderDetail?: OrderDetailOmit;
    transactionLog?: TransactionLogOmit;
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
    category: number;
    product: number;
    order: number;
    orderDetail: number;
    transactionLog: number;
  };

  export type CompanyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    companyUsers?: boolean | CompanyCountOutputTypeCountCompanyUsersArgs;
    customer?: boolean | CompanyCountOutputTypeCountCustomerArgs;
    category?: boolean | CompanyCountOutputTypeCountCategoryArgs;
    product?: boolean | CompanyCountOutputTypeCountProductArgs;
    order?: boolean | CompanyCountOutputTypeCountOrderArgs;
    orderDetail?: boolean | CompanyCountOutputTypeCountOrderDetailArgs;
    transactionLog?: boolean | CompanyCountOutputTypeCountTransactionLogArgs;
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
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCategoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProductArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOrderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountOrderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderDetailWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTransactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionLogWhereInput;
  };

  /**
   * Count Type CompanyUserCountOutputType
   */

  export type CompanyUserCountOutputType = {
    transactionLog: number;
  };

  export type CompanyUserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transactionLog?:
      | boolean
      | CompanyUserCountOutputTypeCountTransactionLogArgs;
  };

  // Custom InputTypes
  /**
   * CompanyUserCountOutputType without action
   */
  export type CompanyUserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyUserCountOutputType
     */
    select?: CompanyUserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyUserCountOutputType without action
   */
  export type CompanyUserCountOutputTypeCountTransactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionLogWhereInput;
  };

  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    address: number;
    order: number;
  };

  export type CustomerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    address?: boolean | CustomerCountOutputTypeCountAddressArgs;
    order?: boolean | CustomerCountOutputTypeCountOrderArgs;
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
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
  };

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderDetail: number;
    transactionLog: number;
  };

  export type ProductCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderDetail?: boolean | ProductCountOutputTypeCountOrderDetailArgs;
    transactionLog?: boolean | ProductCountOutputTypeCountTransactionLogArgs;
  };

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderDetailWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTransactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionLogWhereInput;
  };

  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderDetail: number;
  };

  export type OrderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderDetail?: boolean | OrderCountOutputTypeCountOrderDetailArgs;
  };

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderDetailWhereInput;
  };

  /**
   * Count Type OrderDetailCountOutputType
   */

  export type OrderDetailCountOutputType = {
    transactionLog: number;
  };

  export type OrderDetailCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transactionLog?:
      | boolean
      | OrderDetailCountOutputTypeCountTransactionLogArgs;
  };

  // Custom InputTypes
  /**
   * OrderDetailCountOutputType without action
   */
  export type OrderDetailCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetailCountOutputType
     */
    select?: OrderDetailCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderDetailCountOutputType without action
   */
  export type OrderDetailCountOutputTypeCountTransactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionLogWhereInput;
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
      category?: boolean | Company$categoryArgs<ExtArgs>;
      product?: boolean | Company$productArgs<ExtArgs>;
      order?: boolean | Company$orderArgs<ExtArgs>;
      orderDetail?: boolean | Company$orderDetailArgs<ExtArgs>;
      transactionLog?: boolean | Company$transactionLogArgs<ExtArgs>;
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
    category?: boolean | Company$categoryArgs<ExtArgs>;
    product?: boolean | Company$productArgs<ExtArgs>;
    order?: boolean | Company$orderArgs<ExtArgs>;
    orderDetail?: boolean | Company$orderDetailArgs<ExtArgs>;
    transactionLog?: boolean | Company$transactionLogArgs<ExtArgs>;
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
      category: Prisma.$CategoryPayload<ExtArgs>[];
      product: Prisma.$ProductPayload<ExtArgs>[];
      order: Prisma.$OrderPayload<ExtArgs>[];
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs>[];
      transactionLog: Prisma.$TransactionLogPayload<ExtArgs>[];
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
    category<T extends Company$categoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$categoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    product<T extends Company$productArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$productArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    order<T extends Company$orderArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$orderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    orderDetail<T extends Company$orderDetailArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$orderDetailArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderDetailPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    transactionLog<T extends Company$transactionLogArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$transactionLogArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TransactionLogPayload<ExtArgs>,
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
   * Company.category
   */
  export type Company$categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    cursor?: CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Company.product
   */
  export type Company$productArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    cursor?: ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Company.order
   */
  export type Company$orderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    where?: OrderWhereInput;
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    cursor?: OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Company.orderDetail
   */
  export type Company$orderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    where?: OrderDetailWhereInput;
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    cursor?: OrderDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[];
  };

  /**
   * Company.transactionLog
   */
  export type Company$transactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    where?: TransactionLogWhereInput;
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    cursor?: TransactionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
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
      transactionLog?: boolean | CompanyUser$transactionLogArgs<ExtArgs>;
      _count?: boolean | CompanyUserCountOutputTypeDefaultArgs<ExtArgs>;
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
    transactionLog?: boolean | CompanyUser$transactionLogArgs<ExtArgs>;
    _count?: boolean | CompanyUserCountOutputTypeDefaultArgs<ExtArgs>;
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
      transactionLog: Prisma.$TransactionLogPayload<ExtArgs>[];
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
    transactionLog<T extends CompanyUser$transactionLogArgs<ExtArgs> = {}>(
      args?: Subset<T, CompanyUser$transactionLogArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TransactionLogPayload<ExtArgs>,
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
   * CompanyUser.transactionLog
   */
  export type CompanyUser$transactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    where?: TransactionLogWhereInput;
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    cursor?: TransactionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
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
      order?: boolean | Customer$orderArgs<ExtArgs>;
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
    order?: boolean | Customer$orderArgs<ExtArgs>;
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
      order: Prisma.$OrderPayload<ExtArgs>[];
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
    order<T extends Customer$orderArgs<ExtArgs> = {}>(
      args?: Subset<T, Customer$orderArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderPayload<ExtArgs>,
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
   * Customer.order
   */
  export type Customer$orderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    where?: OrderWhereInput;
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    cursor?: OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryAvgAggregateOutputType = {
    id: number | null;
    companyId: number | null;
  };

  export type CategorySumAggregateOutputType = {
    id: number | null;
    companyId: number | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    companyId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    companyId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    companyId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type CategoryAvgAggregateInputType = {
    id?: true;
    companyId?: true;
  };

  export type CategorySumAggregateInputType = {
    id?: true;
    companyId?: true;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: number;
    name: string;
    companyId: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      product?: boolean | Category$productArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'companyId' | 'createdAt' | 'updatedAt' | 'deletedAt',
    ExtArgs['result']['category']
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    product?: boolean | Category$productArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Category';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
      product: Prisma.$ProductPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        companyId: number;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
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
    product<T extends Category$productArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$productArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'Int'>;
    readonly name: FieldRef<'Category', 'String'>;
    readonly companyId: FieldRef<'Category', 'Int'>;
    readonly createdAt: FieldRef<'Category', 'DateTime'>;
    readonly updatedAt: FieldRef<'Category', 'DateTime'>;
    readonly deletedAt: FieldRef<'Category', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.product
   */
  export type Category$productArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    cursor?: ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    qty: number | null;
    qtyBooked: number | null;
    qtySold: number | null;
    categoryId: number | null;
    companyId: number | null;
  };

  export type ProductSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    qty: number | null;
    qtyBooked: number | null;
    qtySold: number | null;
    categoryId: number | null;
    companyId: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    qty: number | null;
    qtyBooked: number | null;
    qtySold: number | null;
    image: string | null;
    categoryId: number | null;
    companyId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    qty: number | null;
    qtyBooked: number | null;
    qtySold: number | null;
    image: string | null;
    categoryId: number | null;
    companyId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    qty: number;
    qtyBooked: number;
    qtySold: number;
    image: number;
    categoryId: number;
    companyId: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    id?: true;
    price?: true;
    qty?: true;
    qtyBooked?: true;
    qtySold?: true;
    categoryId?: true;
    companyId?: true;
  };

  export type ProductSumAggregateInputType = {
    id?: true;
    price?: true;
    qty?: true;
    qtyBooked?: true;
    qtySold?: true;
    categoryId?: true;
    companyId?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    qty?: true;
    qtyBooked?: true;
    qtySold?: true;
    image?: true;
    categoryId?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    qty?: true;
    qtyBooked?: true;
    qtySold?: true;
    image?: true;
    categoryId?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    qty?: true;
    qtyBooked?: true;
    qtySold?: true;
    image?: true;
    categoryId?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type ProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithAggregationInput
      | ProductOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked: number;
    qtySold: number;
    image: string | null;
    categoryId: number;
    companyId: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends ProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>;
        }
      >
    >;

  export type ProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      qty?: boolean;
      qtyBooked?: boolean;
      qtySold?: boolean;
      image?: boolean;
      categoryId?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      orderDetail?: boolean | Product$orderDetailArgs<ExtArgs>;
      transactionLog?: boolean | Product$transactionLogArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      qty?: boolean;
      qtyBooked?: boolean;
      qtySold?: boolean;
      image?: boolean;
      categoryId?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      qty?: boolean;
      qtyBooked?: boolean;
      qtySold?: boolean;
      image?: boolean;
      categoryId?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['product']
  >;

  export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    qty?: boolean;
    qtyBooked?: boolean;
    qtySold?: boolean;
    image?: boolean;
    categoryId?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type ProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'description'
    | 'price'
    | 'qty'
    | 'qtyBooked'
    | 'qtySold'
    | 'image'
    | 'categoryId'
    | 'companyId'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['product']
  >;
  export type ProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    orderDetail?: boolean | Product$orderDetailArgs<ExtArgs>;
    transactionLog?: boolean | Product$transactionLogArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProductIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };
  export type ProductIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
  };

  export type $ProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Product';
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>;
      company: Prisma.$CompanyPayload<ExtArgs>;
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs>[];
      transactionLog: Prisma.$TransactionLogPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        description: string;
        price: number;
        qty: number;
        qtyBooked: number;
        qtySold: number;
        image: string | null;
        categoryId: number;
        companyId: number;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['product']
    >;
    composites: {};
  };

  type ProductGetPayload<
    S extends boolean | null | undefined | ProductDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductPayload, S>;

  type ProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface ProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Product'];
      meta: { name: 'Product' };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
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
    orderDetail<T extends Product$orderDetailArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$orderDetailArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderDetailPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    transactionLog<T extends Product$transactionLogArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$transactionLogArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TransactionLogPayload<ExtArgs>,
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<'Product', 'Int'>;
    readonly name: FieldRef<'Product', 'String'>;
    readonly description: FieldRef<'Product', 'String'>;
    readonly price: FieldRef<'Product', 'Float'>;
    readonly qty: FieldRef<'Product', 'Int'>;
    readonly qtyBooked: FieldRef<'Product', 'Int'>;
    readonly qtySold: FieldRef<'Product', 'Int'>;
    readonly image: FieldRef<'Product', 'String'>;
    readonly categoryId: FieldRef<'Product', 'Int'>;
    readonly companyId: FieldRef<'Product', 'Int'>;
    readonly createdAt: FieldRef<'Product', 'DateTime'>;
    readonly updatedAt: FieldRef<'Product', 'DateTime'>;
    readonly deletedAt: FieldRef<'Product', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product create
   */
  export type ProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
  };

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Product update
   */
  export type ProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
  };

  /**
   * Product delete
   */
  export type ProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
  };

  /**
   * Product.orderDetail
   */
  export type Product$orderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    where?: OrderDetailWhereInput;
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    cursor?: OrderDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[];
  };

  /**
   * Product.transactionLog
   */
  export type Product$transactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    where?: TransactionLogWhereInput;
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    cursor?: TransactionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
  };

  /**
   * Product without action
   */
  export type ProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
  };

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  export type OrderAvgAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    companyId: number | null;
    grandTotal: number | null;
  };

  export type OrderSumAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    companyId: number | null;
    grandTotal: number | null;
  };

  export type OrderMinAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    companyId: number | null;
    grandTotal: number | null;
    paymentStatus: $Enums.PaymentStatus | null;
    shippingStatus: $Enums.ShippingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type OrderMaxAggregateOutputType = {
    id: number | null;
    customerId: number | null;
    companyId: number | null;
    grandTotal: number | null;
    paymentStatus: $Enums.PaymentStatus | null;
    shippingStatus: $Enums.ShippingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type OrderCountAggregateOutputType = {
    id: number;
    customerId: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: number;
    shippingStatus: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type OrderAvgAggregateInputType = {
    id?: true;
    customerId?: true;
    companyId?: true;
    grandTotal?: true;
  };

  export type OrderSumAggregateInputType = {
    id?: true;
    customerId?: true;
    companyId?: true;
    grandTotal?: true;
  };

  export type OrderMinAggregateInputType = {
    id?: true;
    customerId?: true;
    companyId?: true;
    grandTotal?: true;
    paymentStatus?: true;
    shippingStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type OrderMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    companyId?: true;
    grandTotal?: true;
    paymentStatus?: true;
    shippingStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type OrderCountAggregateInputType = {
    id?: true;
    customerId?: true;
    companyId?: true;
    grandTotal?: true;
    paymentStatus?: true;
    shippingStatus?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type OrderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
     **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderMaxAggregateInputType;
  };

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>;
  };

  export type OrderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
    orderBy?:
      | OrderOrderByWithAggregationInput
      | OrderOrderByWithAggregationInput[];
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
    having?: OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
  };

  export type OrderGroupByOutputType = {
    id: number;
    customerId: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus: $Enums.ShippingStatus | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OrderGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      companyId?: boolean;
      grandTotal?: boolean;
      paymentStatus?: boolean;
      shippingStatus?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      customer?: boolean | CustomerDefaultArgs<ExtArgs>;
      orderDetail?: boolean | Order$orderDetailArgs<ExtArgs>;
      _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['order']
  >;

  export type OrderSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      companyId?: boolean;
      grandTotal?: boolean;
      paymentStatus?: boolean;
      shippingStatus?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      customer?: boolean | CustomerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['order']
  >;

  export type OrderSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      customerId?: boolean;
      companyId?: boolean;
      grandTotal?: boolean;
      paymentStatus?: boolean;
      shippingStatus?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      customer?: boolean | CustomerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['order']
  >;

  export type OrderSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    companyId?: boolean;
    grandTotal?: boolean;
    paymentStatus?: boolean;
    shippingStatus?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type OrderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'customerId'
    | 'companyId'
    | 'grandTotal'
    | 'paymentStatus'
    | 'shippingStatus'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['order']
  >;
  export type OrderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    customer?: boolean | CustomerDefaultArgs<ExtArgs>;
    orderDetail?: boolean | Order$orderDetailArgs<ExtArgs>;
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrderIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    customer?: boolean | CustomerDefaultArgs<ExtArgs>;
  };
  export type OrderIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    customer?: boolean | CustomerDefaultArgs<ExtArgs>;
  };

  export type $OrderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Order';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
      customer: Prisma.$CustomerPayload<ExtArgs>;
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        customerId: number;
        companyId: number;
        grandTotal: number;
        paymentStatus: $Enums.PaymentStatus;
        shippingStatus: $Enums.ShippingStatus | null;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['order']
    >;
    composites: {};
  };

  type OrderGetPayload<
    S extends boolean | null | undefined | OrderDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderPayload, S>;

  type OrderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
  };

  export interface OrderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Order'];
      meta: { name: 'Order' };
    };
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     */
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     */
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(
      args: Subset<T, OrderAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOrderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Order model
     */
    readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<
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
    orderDetail<T extends Order$orderDetailArgs<ExtArgs> = {}>(
      args?: Subset<T, Order$orderDetailArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderDetailPayload<ExtArgs>,
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<'Order', 'Int'>;
    readonly customerId: FieldRef<'Order', 'Int'>;
    readonly companyId: FieldRef<'Order', 'Int'>;
    readonly grandTotal: FieldRef<'Order', 'Float'>;
    readonly paymentStatus: FieldRef<'Order', 'PaymentStatus'>;
    readonly shippingStatus: FieldRef<'Order', 'ShippingStatus'>;
    readonly createdAt: FieldRef<'Order', 'DateTime'>;
    readonly updatedAt: FieldRef<'Order', 'DateTime'>;
    readonly deletedAt: FieldRef<'Order', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order create
   */
  export type OrderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
  };

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Order update
   */
  export type OrderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
  };

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput;
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
  };

  /**
   * Order delete
   */
  export type OrderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to delete.
     */
    limit?: number;
  };

  /**
   * Order.orderDetail
   */
  export type Order$orderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    where?: OrderDetailWhereInput;
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    cursor?: OrderDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[];
  };

  /**
   * Order without action
   */
  export type OrderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
  };

  /**
   * Model OrderDetail
   */

  export type AggregateOrderDetail = {
    _count: OrderDetailCountAggregateOutputType | null;
    _avg: OrderDetailAvgAggregateOutputType | null;
    _sum: OrderDetailSumAggregateOutputType | null;
    _min: OrderDetailMinAggregateOutputType | null;
    _max: OrderDetailMaxAggregateOutputType | null;
  };

  export type OrderDetailAvgAggregateOutputType = {
    id: number | null;
    orderId: number | null;
    companyId: number | null;
    productId: number | null;
    qty: number | null;
    price: number | null;
    subTotal: number | null;
  };

  export type OrderDetailSumAggregateOutputType = {
    id: number | null;
    orderId: number | null;
    companyId: number | null;
    productId: number | null;
    qty: number | null;
    price: number | null;
    subTotal: number | null;
  };

  export type OrderDetailMinAggregateOutputType = {
    id: number | null;
    orderId: number | null;
    companyId: number | null;
    productId: number | null;
    qty: number | null;
    price: number | null;
    subTotal: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type OrderDetailMaxAggregateOutputType = {
    id: number | null;
    orderId: number | null;
    companyId: number | null;
    productId: number | null;
    qty: number | null;
    price: number | null;
    subTotal: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
  };

  export type OrderDetailCountAggregateOutputType = {
    id: number;
    orderId: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
  };

  export type OrderDetailAvgAggregateInputType = {
    id?: true;
    orderId?: true;
    companyId?: true;
    productId?: true;
    qty?: true;
    price?: true;
    subTotal?: true;
  };

  export type OrderDetailSumAggregateInputType = {
    id?: true;
    orderId?: true;
    companyId?: true;
    productId?: true;
    qty?: true;
    price?: true;
    subTotal?: true;
  };

  export type OrderDetailMinAggregateInputType = {
    id?: true;
    orderId?: true;
    companyId?: true;
    productId?: true;
    qty?: true;
    price?: true;
    subTotal?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type OrderDetailMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    companyId?: true;
    productId?: true;
    qty?: true;
    price?: true;
    subTotal?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
  };

  export type OrderDetailCountAggregateInputType = {
    id?: true;
    orderId?: true;
    companyId?: true;
    productId?: true;
    qty?: true;
    price?: true;
    subTotal?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
  };

  export type OrderDetailAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderDetail to aggregate.
     */
    where?: OrderDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderDetails
     **/
    _count?: true | OrderDetailCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderDetailAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderDetailSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderDetailMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderDetailMaxAggregateInputType;
  };

  export type GetOrderDetailAggregateType<T extends OrderDetailAggregateArgs> =
    {
      [P in keyof T & keyof AggregateOrderDetail]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateOrderDetail[P]>
        : GetScalarType<T[P], AggregateOrderDetail[P]>;
    };

  export type OrderDetailGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderDetailWhereInput;
    orderBy?:
      | OrderDetailOrderByWithAggregationInput
      | OrderDetailOrderByWithAggregationInput[];
    by: OrderDetailScalarFieldEnum[] | OrderDetailScalarFieldEnum;
    having?: OrderDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderDetailCountAggregateInputType | true;
    _avg?: OrderDetailAvgAggregateInputType;
    _sum?: OrderDetailSumAggregateInputType;
    _min?: OrderDetailMinAggregateInputType;
    _max?: OrderDetailMaxAggregateInputType;
  };

  export type OrderDetailGroupByOutputType = {
    id: number;
    orderId: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    _count: OrderDetailCountAggregateOutputType | null;
    _avg: OrderDetailAvgAggregateOutputType | null;
    _sum: OrderDetailSumAggregateOutputType | null;
    _min: OrderDetailMinAggregateOutputType | null;
    _max: OrderDetailMaxAggregateOutputType | null;
  };

  type GetOrderDetailGroupByPayload<T extends OrderDetailGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderDetailGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof OrderDetailGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderDetailSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      orderId?: boolean;
      companyId?: boolean;
      productId?: boolean;
      qty?: boolean;
      price?: boolean;
      subTotal?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      order?: boolean | OrderDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
      transactionLog?: boolean | OrderDetail$transactionLogArgs<ExtArgs>;
      _count?: boolean | OrderDetailCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderDetail']
  >;

  export type OrderDetailSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      orderId?: boolean;
      companyId?: boolean;
      productId?: boolean;
      qty?: boolean;
      price?: boolean;
      subTotal?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      order?: boolean | OrderDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderDetail']
  >;

  export type OrderDetailSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      orderId?: boolean;
      companyId?: boolean;
      productId?: boolean;
      qty?: boolean;
      price?: boolean;
      subTotal?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      order?: boolean | OrderDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['orderDetail']
  >;

  export type OrderDetailSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    companyId?: boolean;
    productId?: boolean;
    qty?: boolean;
    price?: boolean;
    subTotal?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
  };

  export type OrderDetailOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'orderId'
    | 'companyId'
    | 'productId'
    | 'qty'
    | 'price'
    | 'subTotal'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt',
    ExtArgs['result']['orderDetail']
  >;
  export type OrderDetailInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    order?: boolean | OrderDefaultArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
    transactionLog?: boolean | OrderDetail$transactionLogArgs<ExtArgs>;
    _count?: boolean | OrderDetailCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrderDetailIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    order?: boolean | OrderDefaultArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };
  export type OrderDetailIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    order?: boolean | OrderDefaultArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $OrderDetailPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrderDetail';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
      order: Prisma.$OrderPayload<ExtArgs>;
      product: Prisma.$ProductPayload<ExtArgs>;
      transactionLog: Prisma.$TransactionLogPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        orderId: number;
        companyId: number;
        productId: number;
        qty: number;
        price: number;
        subTotal: number;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
      },
      ExtArgs['result']['orderDetail']
    >;
    composites: {};
  };

  type OrderDetailGetPayload<
    S extends boolean | null | undefined | OrderDetailDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderDetailPayload, S>;

  type OrderDetailCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrderDetailFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrderDetailCountAggregateInputType | true;
  };

  export interface OrderDetailDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrderDetail'];
      meta: { name: 'OrderDetail' };
    };
    /**
     * Find zero or one OrderDetail that matches the filter.
     * @param {OrderDetailFindUniqueArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailFindUniqueArgs>(
      args: SelectSubset<T, OrderDetailFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OrderDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailFindUniqueOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderDetailFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailFindFirstArgs>(
      args?: SelectSubset<T, OrderDetailFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderDetailFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany()
     *
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderDetailFindManyArgs>(
      args?: SelectSubset<T, OrderDetailFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OrderDetail.
     * @param {OrderDetailCreateArgs} args - Arguments to create a OrderDetail.
     * @example
     * // Create one OrderDetail
     * const OrderDetail = await prisma.orderDetail.create({
     *   data: {
     *     // ... data to create a OrderDetail
     *   }
     * })
     *
     */
    create<T extends OrderDetailCreateArgs>(
      args: SelectSubset<T, OrderDetailCreateArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OrderDetails.
     * @param {OrderDetailCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderDetailCreateManyArgs>(
      args?: SelectSubset<T, OrderDetailCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrderDetails and only return the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrderDetailCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrderDetailCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a OrderDetail.
     * @param {OrderDetailDeleteArgs} args - Arguments to delete one OrderDetail.
     * @example
     * // Delete one OrderDetail
     * const OrderDetail = await prisma.orderDetail.delete({
     *   where: {
     *     // ... filter to delete one OrderDetail
     *   }
     * })
     *
     */
    delete<T extends OrderDetailDeleteArgs>(
      args: SelectSubset<T, OrderDetailDeleteArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OrderDetail.
     * @param {OrderDetailUpdateArgs} args - Arguments to update one OrderDetail.
     * @example
     * // Update one OrderDetail
     * const orderDetail = await prisma.orderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderDetailUpdateArgs>(
      args: SelectSubset<T, OrderDetailUpdateArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDetailDeleteManyArgs>(
      args?: SelectSubset<T, OrderDetailDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderDetailUpdateManyArgs>(
      args: SelectSubset<T, OrderDetailUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OrderDetails and only return the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderDetailUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrderDetailUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one OrderDetail.
     * @param {OrderDetailUpsertArgs} args - Arguments to update or create a OrderDetail.
     * @example
     * // Update or create a OrderDetail
     * const orderDetail = await prisma.orderDetail.upsert({
     *   create: {
     *     // ... data to create a OrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailUpsertArgs>(
      args: SelectSubset<T, OrderDetailUpsertArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetail.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
     **/
    count<T extends OrderDetailCountArgs>(
      args?: Subset<T, OrderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailAggregateArgs>(
      args: Subset<T, OrderDetailAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderDetailAggregateType<T>>;

    /**
     * Group by OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, OrderDetailGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrderDetailGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderDetail model
     */
    readonly fields: OrderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailClient<
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
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrderDefaultArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      | $Result.GetResult<
          Prisma.$OrderPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    transactionLog<T extends OrderDetail$transactionLogArgs<ExtArgs> = {}>(
      args?: Subset<T, OrderDetail$transactionLogArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TransactionLogPayload<ExtArgs>,
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
   * Fields of the OrderDetail model
   */
  interface OrderDetailFieldRefs {
    readonly id: FieldRef<'OrderDetail', 'Int'>;
    readonly orderId: FieldRef<'OrderDetail', 'Int'>;
    readonly companyId: FieldRef<'OrderDetail', 'Int'>;
    readonly productId: FieldRef<'OrderDetail', 'Int'>;
    readonly qty: FieldRef<'OrderDetail', 'Int'>;
    readonly price: FieldRef<'OrderDetail', 'Float'>;
    readonly subTotal: FieldRef<'OrderDetail', 'Float'>;
    readonly createdAt: FieldRef<'OrderDetail', 'DateTime'>;
    readonly updatedAt: FieldRef<'OrderDetail', 'DateTime'>;
    readonly deletedAt: FieldRef<'OrderDetail', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * OrderDetail findUnique
   */
  export type OrderDetailFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput;
  };

  /**
   * OrderDetail findUniqueOrThrow
   */
  export type OrderDetailFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput;
  };

  /**
   * OrderDetail findFirst
   */
  export type OrderDetailFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[];
  };

  /**
   * OrderDetail findFirstOrThrow
   */
  export type OrderDetailFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[];
  };

  /**
   * OrderDetail findMany
   */
  export type OrderDetailFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?:
      | OrderDetailOrderByWithRelationInput
      | OrderDetailOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderDetails.
     */
    skip?: number;
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[];
  };

  /**
   * OrderDetail create
   */
  export type OrderDetailCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrderDetail.
     */
    data: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>;
  };

  /**
   * OrderDetail createMany
   */
  export type OrderDetailCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrderDetail createManyAndReturn
   */
  export type OrderDetailCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrderDetail update
   */
  export type OrderDetailUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrderDetail.
     */
    data: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>;
    /**
     * Choose, which OrderDetail to update.
     */
    where: OrderDetailWhereUniqueInput;
  };

  /**
   * OrderDetail updateMany
   */
  export type OrderDetailUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<
      OrderDetailUpdateManyMutationInput,
      OrderDetailUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput;
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number;
  };

  /**
   * OrderDetail updateManyAndReturn
   */
  export type OrderDetailUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<
      OrderDetailUpdateManyMutationInput,
      OrderDetailUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput;
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrderDetail upsert
   */
  export type OrderDetailUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrderDetail to update in case it exists.
     */
    where: OrderDetailWhereUniqueInput;
    /**
     * In case the OrderDetail found by the `where` argument doesn't exist, create a new OrderDetail with this data.
     */
    create: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>;
    /**
     * In case the OrderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>;
  };

  /**
   * OrderDetail delete
   */
  export type OrderDetailDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    /**
     * Filter which OrderDetail to delete.
     */
    where: OrderDetailWhereUniqueInput;
  };

  /**
   * OrderDetail deleteMany
   */
  export type OrderDetailDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailWhereInput;
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number;
  };

  /**
   * OrderDetail.transactionLog
   */
  export type OrderDetail$transactionLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    where?: TransactionLogWhereInput;
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    cursor?: TransactionLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
  };

  /**
   * OrderDetail without action
   */
  export type OrderDetailDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
  };

  /**
   * Model TransactionLog
   */

  export type AggregateTransactionLog = {
    _count: TransactionLogCountAggregateOutputType | null;
    _avg: TransactionLogAvgAggregateOutputType | null;
    _sum: TransactionLogSumAggregateOutputType | null;
    _min: TransactionLogMinAggregateOutputType | null;
    _max: TransactionLogMaxAggregateOutputType | null;
  };

  export type TransactionLogAvgAggregateOutputType = {
    id: number | null;
    companyId: number | null;
    companyUserId: number | null;
    productId: number | null;
    quantity: number | null;
    orderDetailId: number | null;
  };

  export type TransactionLogSumAggregateOutputType = {
    id: number | null;
    companyId: number | null;
    companyUserId: number | null;
    productId: number | null;
    quantity: number | null;
    orderDetailId: number | null;
  };

  export type TransactionLogMinAggregateOutputType = {
    id: number | null;
    companyId: number | null;
    companyUserId: number | null;
    productId: number | null;
    type: $Enums.TransactionType | null;
    quantity: number | null;
    orderDetailId: number | null;
    createdAt: Date | null;
    transactionDate: Date | null;
    deletedAt: Date | null;
    remarks: string | null;
  };

  export type TransactionLogMaxAggregateOutputType = {
    id: number | null;
    companyId: number | null;
    companyUserId: number | null;
    productId: number | null;
    type: $Enums.TransactionType | null;
    quantity: number | null;
    orderDetailId: number | null;
    createdAt: Date | null;
    transactionDate: Date | null;
    deletedAt: Date | null;
    remarks: string | null;
  };

  export type TransactionLogCountAggregateOutputType = {
    id: number;
    companyId: number;
    companyUserId: number;
    productId: number;
    type: number;
    quantity: number;
    orderDetailId: number;
    createdAt: number;
    transactionDate: number;
    deletedAt: number;
    remarks: number;
    _all: number;
  };

  export type TransactionLogAvgAggregateInputType = {
    id?: true;
    companyId?: true;
    companyUserId?: true;
    productId?: true;
    quantity?: true;
    orderDetailId?: true;
  };

  export type TransactionLogSumAggregateInputType = {
    id?: true;
    companyId?: true;
    companyUserId?: true;
    productId?: true;
    quantity?: true;
    orderDetailId?: true;
  };

  export type TransactionLogMinAggregateInputType = {
    id?: true;
    companyId?: true;
    companyUserId?: true;
    productId?: true;
    type?: true;
    quantity?: true;
    orderDetailId?: true;
    createdAt?: true;
    transactionDate?: true;
    deletedAt?: true;
    remarks?: true;
  };

  export type TransactionLogMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    companyUserId?: true;
    productId?: true;
    type?: true;
    quantity?: true;
    orderDetailId?: true;
    createdAt?: true;
    transactionDate?: true;
    deletedAt?: true;
    remarks?: true;
  };

  export type TransactionLogCountAggregateInputType = {
    id?: true;
    companyId?: true;
    companyUserId?: true;
    productId?: true;
    type?: true;
    quantity?: true;
    orderDetailId?: true;
    createdAt?: true;
    transactionDate?: true;
    deletedAt?: true;
    remarks?: true;
    _all?: true;
  };

  export type TransactionLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionLog to aggregate.
     */
    where?: TransactionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionLogs to fetch.
     */
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TransactionLogs
     **/
    _count?: true | TransactionLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionLogMaxAggregateInputType;
  };

  export type GetTransactionLogAggregateType<
    T extends TransactionLogAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTransactionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionLog[P]>
      : GetScalarType<T[P], AggregateTransactionLog[P]>;
  };

  export type TransactionLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionLogWhereInput;
    orderBy?:
      | TransactionLogOrderByWithAggregationInput
      | TransactionLogOrderByWithAggregationInput[];
    by: TransactionLogScalarFieldEnum[] | TransactionLogScalarFieldEnum;
    having?: TransactionLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionLogCountAggregateInputType | true;
    _avg?: TransactionLogAvgAggregateInputType;
    _sum?: TransactionLogSumAggregateInputType;
    _min?: TransactionLogMinAggregateInputType;
    _max?: TransactionLogMaxAggregateInputType;
  };

  export type TransactionLogGroupByOutputType = {
    id: number;
    companyId: number;
    companyUserId: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId: number | null;
    createdAt: Date;
    transactionDate: Date;
    deletedAt: Date | null;
    remarks: string;
    _count: TransactionLogCountAggregateOutputType | null;
    _avg: TransactionLogAvgAggregateOutputType | null;
    _sum: TransactionLogSumAggregateOutputType | null;
    _min: TransactionLogMinAggregateOutputType | null;
    _max: TransactionLogMaxAggregateOutputType | null;
  };

  type GetTransactionLogGroupByPayload<T extends TransactionLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionLogGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof TransactionLogGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionLogGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionLogGroupByOutputType[P]>;
        }
      >
    >;

  export type TransactionLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      companyId?: boolean;
      companyUserId?: boolean;
      productId?: boolean;
      type?: boolean;
      quantity?: boolean;
      orderDetailId?: boolean;
      createdAt?: boolean;
      transactionDate?: boolean;
      deletedAt?: boolean;
      remarks?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      companyUser?: boolean | TransactionLog$companyUserArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
      orderDetail?: boolean | TransactionLog$orderDetailArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionLog']
  >;

  export type TransactionLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      companyId?: boolean;
      companyUserId?: boolean;
      productId?: boolean;
      type?: boolean;
      quantity?: boolean;
      orderDetailId?: boolean;
      createdAt?: boolean;
      transactionDate?: boolean;
      deletedAt?: boolean;
      remarks?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      companyUser?: boolean | TransactionLog$companyUserArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
      orderDetail?: boolean | TransactionLog$orderDetailArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionLog']
  >;

  export type TransactionLogSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      companyId?: boolean;
      companyUserId?: boolean;
      productId?: boolean;
      type?: boolean;
      quantity?: boolean;
      orderDetailId?: boolean;
      createdAt?: boolean;
      transactionDate?: boolean;
      deletedAt?: boolean;
      remarks?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      companyUser?: boolean | TransactionLog$companyUserArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
      orderDetail?: boolean | TransactionLog$orderDetailArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionLog']
  >;

  export type TransactionLogSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    companyUserId?: boolean;
    productId?: boolean;
    type?: boolean;
    quantity?: boolean;
    orderDetailId?: boolean;
    createdAt?: boolean;
    transactionDate?: boolean;
    deletedAt?: boolean;
    remarks?: boolean;
  };

  export type TransactionLogOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'companyId'
    | 'companyUserId'
    | 'productId'
    | 'type'
    | 'quantity'
    | 'orderDetailId'
    | 'createdAt'
    | 'transactionDate'
    | 'deletedAt'
    | 'remarks',
    ExtArgs['result']['transactionLog']
  >;
  export type TransactionLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    companyUser?: boolean | TransactionLog$companyUserArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
    orderDetail?: boolean | TransactionLog$orderDetailArgs<ExtArgs>;
  };
  export type TransactionLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    companyUser?: boolean | TransactionLog$companyUserArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
    orderDetail?: boolean | TransactionLog$orderDetailArgs<ExtArgs>;
  };
  export type TransactionLogIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    companyUser?: boolean | TransactionLog$companyUserArgs<ExtArgs>;
    product?: boolean | ProductDefaultArgs<ExtArgs>;
    orderDetail?: boolean | TransactionLog$orderDetailArgs<ExtArgs>;
  };

  export type $TransactionLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TransactionLog';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
      companyUser: Prisma.$CompanyUserPayload<ExtArgs> | null;
      product: Prisma.$ProductPayload<ExtArgs>;
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        companyId: number;
        companyUserId: number | null;
        productId: number;
        type: $Enums.TransactionType;
        quantity: number;
        orderDetailId: number | null;
        createdAt: Date;
        transactionDate: Date;
        deletedAt: Date | null;
        remarks: string;
      },
      ExtArgs['result']['transactionLog']
    >;
    composites: {};
  };

  type TransactionLogGetPayload<
    S extends boolean | null | undefined | TransactionLogDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionLogPayload, S>;

  type TransactionLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TransactionLogFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TransactionLogCountAggregateInputType | true;
  };

  export interface TransactionLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TransactionLog'];
      meta: { name: 'TransactionLog' };
    };
    /**
     * Find zero or one TransactionLog that matches the filter.
     * @param {TransactionLogFindUniqueArgs} args - Arguments to find a TransactionLog
     * @example
     * // Get one TransactionLog
     * const transactionLog = await prisma.transactionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionLogFindUniqueArgs>(
      args: SelectSubset<T, TransactionLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TransactionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionLogFindUniqueOrThrowArgs} args - Arguments to find a TransactionLog
     * @example
     * // Get one TransactionLog
     * const transactionLog = await prisma.transactionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TransactionLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TransactionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogFindFirstArgs} args - Arguments to find a TransactionLog
     * @example
     * // Get one TransactionLog
     * const transactionLog = await prisma.transactionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionLogFindFirstArgs>(
      args?: SelectSubset<T, TransactionLogFindFirstArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TransactionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogFindFirstOrThrowArgs} args - Arguments to find a TransactionLog
     * @example
     * // Get one TransactionLog
     * const transactionLog = await prisma.transactionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TransactionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionLogs
     * const transactionLogs = await prisma.transactionLog.findMany()
     *
     * // Get first 10 TransactionLogs
     * const transactionLogs = await prisma.transactionLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionLogWithIdOnly = await prisma.transactionLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionLogFindManyArgs>(
      args?: SelectSubset<T, TransactionLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a TransactionLog.
     * @param {TransactionLogCreateArgs} args - Arguments to create a TransactionLog.
     * @example
     * // Create one TransactionLog
     * const TransactionLog = await prisma.transactionLog.create({
     *   data: {
     *     // ... data to create a TransactionLog
     *   }
     * })
     *
     */
    create<T extends TransactionLogCreateArgs>(
      args: SelectSubset<T, TransactionLogCreateArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TransactionLogs.
     * @param {TransactionLogCreateManyArgs} args - Arguments to create many TransactionLogs.
     * @example
     * // Create many TransactionLogs
     * const transactionLog = await prisma.transactionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionLogCreateManyArgs>(
      args?: SelectSubset<T, TransactionLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TransactionLogs and returns the data saved in the database.
     * @param {TransactionLogCreateManyAndReturnArgs} args - Arguments to create many TransactionLogs.
     * @example
     * // Create many TransactionLogs
     * const transactionLog = await prisma.transactionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TransactionLogs and only return the `id`
     * const transactionLogWithIdOnly = await prisma.transactionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TransactionLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TransactionLog.
     * @param {TransactionLogDeleteArgs} args - Arguments to delete one TransactionLog.
     * @example
     * // Delete one TransactionLog
     * const TransactionLog = await prisma.transactionLog.delete({
     *   where: {
     *     // ... filter to delete one TransactionLog
     *   }
     * })
     *
     */
    delete<T extends TransactionLogDeleteArgs>(
      args: SelectSubset<T, TransactionLogDeleteArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TransactionLog.
     * @param {TransactionLogUpdateArgs} args - Arguments to update one TransactionLog.
     * @example
     * // Update one TransactionLog
     * const transactionLog = await prisma.transactionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionLogUpdateArgs>(
      args: SelectSubset<T, TransactionLogUpdateArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TransactionLogs.
     * @param {TransactionLogDeleteManyArgs} args - Arguments to filter TransactionLogs to delete.
     * @example
     * // Delete a few TransactionLogs
     * const { count } = await prisma.transactionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionLogDeleteManyArgs>(
      args?: SelectSubset<T, TransactionLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionLogs
     * const transactionLog = await prisma.transactionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionLogUpdateManyArgs>(
      args: SelectSubset<T, TransactionLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionLogs and returns the data updated in the database.
     * @param {TransactionLogUpdateManyAndReturnArgs} args - Arguments to update many TransactionLogs.
     * @example
     * // Update many TransactionLogs
     * const transactionLog = await prisma.transactionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TransactionLogs and only return the `id`
     * const transactionLogWithIdOnly = await prisma.transactionLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionLogUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TransactionLogUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TransactionLog.
     * @param {TransactionLogUpsertArgs} args - Arguments to update or create a TransactionLog.
     * @example
     * // Update or create a TransactionLog
     * const transactionLog = await prisma.transactionLog.upsert({
     *   create: {
     *     // ... data to create a TransactionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionLog we want to update
     *   }
     * })
     */
    upsert<T extends TransactionLogUpsertArgs>(
      args: SelectSubset<T, TransactionLogUpsertArgs<ExtArgs>>,
    ): Prisma__TransactionLogClient<
      $Result.GetResult<
        Prisma.$TransactionLogPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TransactionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogCountArgs} args - Arguments to filter TransactionLogs to count.
     * @example
     * // Count the number of TransactionLogs
     * const count = await prisma.transactionLog.count({
     *   where: {
     *     // ... the filter for the TransactionLogs we want to count
     *   }
     * })
     **/
    count<T extends TransactionLogCountArgs>(
      args?: Subset<T, TransactionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TransactionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionLogAggregateArgs>(
      args: Subset<T, TransactionLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionLogAggregateType<T>>;

    /**
     * Group by TransactionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionLogGroupByArgs} args - Group by arguments.
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
      T extends TransactionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionLogGroupByArgs['orderBy'] }
        : { orderBy?: TransactionLogGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, TransactionLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTransactionLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TransactionLog model
     */
    readonly fields: TransactionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionLogClient<
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
    companyUser<T extends TransactionLog$companyUserArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionLog$companyUserArgs<ExtArgs>>,
    ): Prisma__CompanyUserClient<
      $Result.GetResult<
        Prisma.$CompanyUserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    orderDetail<T extends TransactionLog$orderDetailArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionLog$orderDetailArgs<ExtArgs>>,
    ): Prisma__OrderDetailClient<
      $Result.GetResult<
        Prisma.$OrderDetailPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
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
   * Fields of the TransactionLog model
   */
  interface TransactionLogFieldRefs {
    readonly id: FieldRef<'TransactionLog', 'Int'>;
    readonly companyId: FieldRef<'TransactionLog', 'Int'>;
    readonly companyUserId: FieldRef<'TransactionLog', 'Int'>;
    readonly productId: FieldRef<'TransactionLog', 'Int'>;
    readonly type: FieldRef<'TransactionLog', 'TransactionType'>;
    readonly quantity: FieldRef<'TransactionLog', 'Int'>;
    readonly orderDetailId: FieldRef<'TransactionLog', 'Int'>;
    readonly createdAt: FieldRef<'TransactionLog', 'DateTime'>;
    readonly transactionDate: FieldRef<'TransactionLog', 'DateTime'>;
    readonly deletedAt: FieldRef<'TransactionLog', 'DateTime'>;
    readonly remarks: FieldRef<'TransactionLog', 'String'>;
  }

  // Custom InputTypes
  /**
   * TransactionLog findUnique
   */
  export type TransactionLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionLog to fetch.
     */
    where: TransactionLogWhereUniqueInput;
  };

  /**
   * TransactionLog findUniqueOrThrow
   */
  export type TransactionLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionLog to fetch.
     */
    where: TransactionLogWhereUniqueInput;
  };

  /**
   * TransactionLog findFirst
   */
  export type TransactionLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionLog to fetch.
     */
    where?: TransactionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionLogs to fetch.
     */
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionLogs.
     */
    cursor?: TransactionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionLogs.
     */
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
  };

  /**
   * TransactionLog findFirstOrThrow
   */
  export type TransactionLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionLog to fetch.
     */
    where?: TransactionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionLogs to fetch.
     */
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionLogs.
     */
    cursor?: TransactionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionLogs.
     */
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
  };

  /**
   * TransactionLog findMany
   */
  export type TransactionLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionLogs to fetch.
     */
    where?: TransactionLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionLogs to fetch.
     */
    orderBy?:
      | TransactionLogOrderByWithRelationInput
      | TransactionLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TransactionLogs.
     */
    cursor?: TransactionLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionLogs.
     */
    skip?: number;
    distinct?: TransactionLogScalarFieldEnum | TransactionLogScalarFieldEnum[];
  };

  /**
   * TransactionLog create
   */
  export type TransactionLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a TransactionLog.
     */
    data: XOR<TransactionLogCreateInput, TransactionLogUncheckedCreateInput>;
  };

  /**
   * TransactionLog createMany
   */
  export type TransactionLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TransactionLogs.
     */
    data: TransactionLogCreateManyInput | TransactionLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TransactionLog createManyAndReturn
   */
  export type TransactionLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * The data used to create many TransactionLogs.
     */
    data: TransactionLogCreateManyInput | TransactionLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TransactionLog update
   */
  export type TransactionLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a TransactionLog.
     */
    data: XOR<TransactionLogUpdateInput, TransactionLogUncheckedUpdateInput>;
    /**
     * Choose, which TransactionLog to update.
     */
    where: TransactionLogWhereUniqueInput;
  };

  /**
   * TransactionLog updateMany
   */
  export type TransactionLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TransactionLogs.
     */
    data: XOR<
      TransactionLogUpdateManyMutationInput,
      TransactionLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which TransactionLogs to update
     */
    where?: TransactionLogWhereInput;
    /**
     * Limit how many TransactionLogs to update.
     */
    limit?: number;
  };

  /**
   * TransactionLog updateManyAndReturn
   */
  export type TransactionLogUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * The data used to update TransactionLogs.
     */
    data: XOR<
      TransactionLogUpdateManyMutationInput,
      TransactionLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which TransactionLogs to update
     */
    where?: TransactionLogWhereInput;
    /**
     * Limit how many TransactionLogs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TransactionLog upsert
   */
  export type TransactionLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the TransactionLog to update in case it exists.
     */
    where: TransactionLogWhereUniqueInput;
    /**
     * In case the TransactionLog found by the `where` argument doesn't exist, create a new TransactionLog with this data.
     */
    create: XOR<TransactionLogCreateInput, TransactionLogUncheckedCreateInput>;
    /**
     * In case the TransactionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionLogUpdateInput, TransactionLogUncheckedUpdateInput>;
  };

  /**
   * TransactionLog delete
   */
  export type TransactionLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
    /**
     * Filter which TransactionLog to delete.
     */
    where: TransactionLogWhereUniqueInput;
  };

  /**
   * TransactionLog deleteMany
   */
  export type TransactionLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionLogs to delete
     */
    where?: TransactionLogWhereInput;
    /**
     * Limit how many TransactionLogs to delete.
     */
    limit?: number;
  };

  /**
   * TransactionLog.companyUser
   */
  export type TransactionLog$companyUserArgs<
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
  };

  /**
   * TransactionLog.orderDetail
   */
  export type TransactionLog$orderDetailArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null;
    where?: OrderDetailWhereInput;
  };

  /**
   * TransactionLog without action
   */
  export type TransactionLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionLog
     */
    select?: TransactionLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionLog
     */
    omit?: TransactionLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionLogInclude<ExtArgs> | null;
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

  export const CategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    companyId: 'companyId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const ProductScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    price: 'price';
    qty: 'qty';
    qtyBooked: 'qtyBooked';
    qtySold: 'qtySold';
    image: 'image';
    categoryId: 'categoryId';
    companyId: 'companyId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const OrderScalarFieldEnum: {
    id: 'id';
    customerId: 'customerId';
    companyId: 'companyId';
    grandTotal: 'grandTotal';
    paymentStatus: 'paymentStatus';
    shippingStatus: 'shippingStatus';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type OrderScalarFieldEnum =
    (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

  export const OrderDetailScalarFieldEnum: {
    id: 'id';
    orderId: 'orderId';
    companyId: 'companyId';
    productId: 'productId';
    qty: 'qty';
    price: 'price';
    subTotal: 'subTotal';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    deletedAt: 'deletedAt';
  };

  export type OrderDetailScalarFieldEnum =
    (typeof OrderDetailScalarFieldEnum)[keyof typeof OrderDetailScalarFieldEnum];

  export const TransactionLogScalarFieldEnum: {
    id: 'id';
    companyId: 'companyId';
    companyUserId: 'companyUserId';
    productId: 'productId';
    type: 'type';
    quantity: 'quantity';
    orderDetailId: 'orderDetailId';
    createdAt: 'createdAt';
    transactionDate: 'transactionDate';
    deletedAt: 'deletedAt';
    remarks: 'remarks';
  };

  export type TransactionLogScalarFieldEnum =
    (typeof TransactionLogScalarFieldEnum)[keyof typeof TransactionLogScalarFieldEnum];

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
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentStatus'
  >;

  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;

  /**
   * Reference to a field of type 'ShippingStatus'
   */
  export type EnumShippingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ShippingStatus'
  >;

  /**
   * Reference to a field of type 'ShippingStatus[]'
   */
  export type ListEnumShippingStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ShippingStatus[]'>;

  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TransactionType'>;

  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TransactionType[]'>;

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
    category?: CategoryListRelationFilter;
    product?: ProductListRelationFilter;
    order?: OrderListRelationFilter;
    orderDetail?: OrderDetailListRelationFilter;
    transactionLog?: TransactionLogListRelationFilter;
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
    category?: CategoryOrderByRelationAggregateInput;
    product?: ProductOrderByRelationAggregateInput;
    order?: OrderOrderByRelationAggregateInput;
    orderDetail?: OrderDetailOrderByRelationAggregateInput;
    transactionLog?: TransactionLogOrderByRelationAggregateInput;
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
      category?: CategoryListRelationFilter;
      product?: ProductListRelationFilter;
      order?: OrderListRelationFilter;
      orderDetail?: OrderDetailListRelationFilter;
      transactionLog?: TransactionLogListRelationFilter;
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
    transactionLog?: TransactionLogListRelationFilter;
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
    transactionLog?: TransactionLogOrderByRelationAggregateInput;
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
      transactionLog?: TransactionLogListRelationFilter;
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
    order?: OrderListRelationFilter;
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
    order?: OrderOrderByRelationAggregateInput;
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
      order?: OrderListRelationFilter;
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

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: IntFilter<'Category'> | number;
    name?: StringFilter<'Category'> | string;
    companyId?: IntFilter<'Category'> | number;
    createdAt?: DateTimeFilter<'Category'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    product?: ProductListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    company?: CompanyOrderByWithRelationInput;
    product?: ProductOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      name?: StringFilter<'Category'> | string;
      companyId?: IntFilter<'Category'> | number;
      createdAt?: DateTimeFilter<'Category'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      product?: ProductListRelationFilter;
    },
    'id'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _avg?: CategoryAvgOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
    _sum?: CategorySumOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Category'> | number;
    name?: StringWithAggregatesFilter<'Category'> | string;
    companyId?: IntWithAggregatesFilter<'Category'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Category'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Category'>
      | Date
      | string
      | null;
  };

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[];
    OR?: ProductWhereInput[];
    NOT?: ProductWhereInput | ProductWhereInput[];
    id?: IntFilter<'Product'> | number;
    name?: StringFilter<'Product'> | string;
    description?: StringFilter<'Product'> | string;
    price?: FloatFilter<'Product'> | number;
    qty?: IntFilter<'Product'> | number;
    qtyBooked?: IntFilter<'Product'> | number;
    qtySold?: IntFilter<'Product'> | number;
    image?: StringNullableFilter<'Product'> | string | null;
    categoryId?: IntFilter<'Product'> | number;
    companyId?: IntFilter<'Product'> | number;
    createdAt?: DateTimeFilter<'Product'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Product'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Product'> | Date | string | null;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    orderDetail?: OrderDetailListRelationFilter;
    transactionLog?: TransactionLogListRelationFilter;
  };

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    image?: SortOrderInput | SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    category?: CategoryOrderByWithRelationInput;
    company?: CompanyOrderByWithRelationInput;
    orderDetail?: OrderDetailOrderByRelationAggregateInput;
    transactionLog?: TransactionLogOrderByRelationAggregateInput;
  };

  export type ProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ProductWhereInput | ProductWhereInput[];
      OR?: ProductWhereInput[];
      NOT?: ProductWhereInput | ProductWhereInput[];
      name?: StringFilter<'Product'> | string;
      description?: StringFilter<'Product'> | string;
      price?: FloatFilter<'Product'> | number;
      qty?: IntFilter<'Product'> | number;
      qtyBooked?: IntFilter<'Product'> | number;
      qtySold?: IntFilter<'Product'> | number;
      image?: StringNullableFilter<'Product'> | string | null;
      categoryId?: IntFilter<'Product'> | number;
      companyId?: IntFilter<'Product'> | number;
      createdAt?: DateTimeFilter<'Product'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'Product'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'Product'> | Date | string | null;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      orderDetail?: OrderDetailListRelationFilter;
      transactionLog?: TransactionLogListRelationFilter;
    },
    'id'
  >;

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    image?: SortOrderInput | SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: ProductCountOrderByAggregateInput;
    _avg?: ProductAvgOrderByAggregateInput;
    _max?: ProductMaxOrderByAggregateInput;
    _min?: ProductMinOrderByAggregateInput;
    _sum?: ProductSumOrderByAggregateInput;
  };

  export type ProductScalarWhereWithAggregatesInput = {
    AND?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    OR?: ProductScalarWhereWithAggregatesInput[];
    NOT?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Product'> | number;
    name?: StringWithAggregatesFilter<'Product'> | string;
    description?: StringWithAggregatesFilter<'Product'> | string;
    price?: FloatWithAggregatesFilter<'Product'> | number;
    qty?: IntWithAggregatesFilter<'Product'> | number;
    qtyBooked?: IntWithAggregatesFilter<'Product'> | number;
    qtySold?: IntWithAggregatesFilter<'Product'> | number;
    image?: StringNullableWithAggregatesFilter<'Product'> | string | null;
    categoryId?: IntWithAggregatesFilter<'Product'> | number;
    companyId?: IntWithAggregatesFilter<'Product'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Product'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Product'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Product'>
      | Date
      | string
      | null;
  };

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[];
    OR?: OrderWhereInput[];
    NOT?: OrderWhereInput | OrderWhereInput[];
    id?: IntFilter<'Order'> | number;
    customerId?: IntFilter<'Order'> | number;
    companyId?: IntFilter<'Order'> | number;
    grandTotal?: FloatFilter<'Order'> | number;
    paymentStatus?: EnumPaymentStatusFilter<'Order'> | $Enums.PaymentStatus;
    shippingStatus?:
      | EnumShippingStatusNullableFilter<'Order'>
      | $Enums.ShippingStatus
      | null;
    createdAt?: DateTimeFilter<'Order'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Order'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Order'> | Date | string | null;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>;
    orderDetail?: OrderDetailListRelationFilter;
  };

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
    paymentStatus?: SortOrder;
    shippingStatus?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    company?: CompanyOrderByWithRelationInput;
    customer?: CustomerOrderByWithRelationInput;
    orderDetail?: OrderDetailOrderByRelationAggregateInput;
  };

  export type OrderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: OrderWhereInput | OrderWhereInput[];
      OR?: OrderWhereInput[];
      NOT?: OrderWhereInput | OrderWhereInput[];
      customerId?: IntFilter<'Order'> | number;
      companyId?: IntFilter<'Order'> | number;
      grandTotal?: FloatFilter<'Order'> | number;
      paymentStatus?: EnumPaymentStatusFilter<'Order'> | $Enums.PaymentStatus;
      shippingStatus?:
        | EnumShippingStatusNullableFilter<'Order'>
        | $Enums.ShippingStatus
        | null;
      createdAt?: DateTimeFilter<'Order'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'Order'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'Order'> | Date | string | null;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>;
      orderDetail?: OrderDetailListRelationFilter;
    },
    'id'
  >;

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
    paymentStatus?: SortOrder;
    shippingStatus?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: OrderCountOrderByAggregateInput;
    _avg?: OrderAvgOrderByAggregateInput;
    _max?: OrderMaxOrderByAggregateInput;
    _min?: OrderMinOrderByAggregateInput;
    _sum?: OrderSumOrderByAggregateInput;
  };

  export type OrderScalarWhereWithAggregatesInput = {
    AND?:
      | OrderScalarWhereWithAggregatesInput
      | OrderScalarWhereWithAggregatesInput[];
    OR?: OrderScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderScalarWhereWithAggregatesInput
      | OrderScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Order'> | number;
    customerId?: IntWithAggregatesFilter<'Order'> | number;
    companyId?: IntWithAggregatesFilter<'Order'> | number;
    grandTotal?: FloatWithAggregatesFilter<'Order'> | number;
    paymentStatus?:
      | EnumPaymentStatusWithAggregatesFilter<'Order'>
      | $Enums.PaymentStatus;
    shippingStatus?:
      | EnumShippingStatusNullableWithAggregatesFilter<'Order'>
      | $Enums.ShippingStatus
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'Order'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'Order'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'Order'>
      | Date
      | string
      | null;
  };

  export type OrderDetailWhereInput = {
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[];
    OR?: OrderDetailWhereInput[];
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[];
    id?: IntFilter<'OrderDetail'> | number;
    orderId?: IntFilter<'OrderDetail'> | number;
    companyId?: IntFilter<'OrderDetail'> | number;
    productId?: IntFilter<'OrderDetail'> | number;
    qty?: IntFilter<'OrderDetail'> | number;
    price?: FloatFilter<'OrderDetail'> | number;
    subTotal?: FloatFilter<'OrderDetail'> | number;
    createdAt?: DateTimeFilter<'OrderDetail'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'OrderDetail'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'OrderDetail'> | Date | string | null;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    transactionLog?: TransactionLogListRelationFilter;
  };

  export type OrderDetailOrderByWithRelationInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    company?: CompanyOrderByWithRelationInput;
    order?: OrderOrderByWithRelationInput;
    product?: ProductOrderByWithRelationInput;
    transactionLog?: TransactionLogOrderByRelationAggregateInput;
  };

  export type OrderDetailWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: OrderDetailWhereInput | OrderDetailWhereInput[];
      OR?: OrderDetailWhereInput[];
      NOT?: OrderDetailWhereInput | OrderDetailWhereInput[];
      orderId?: IntFilter<'OrderDetail'> | number;
      companyId?: IntFilter<'OrderDetail'> | number;
      productId?: IntFilter<'OrderDetail'> | number;
      qty?: IntFilter<'OrderDetail'> | number;
      price?: FloatFilter<'OrderDetail'> | number;
      subTotal?: FloatFilter<'OrderDetail'> | number;
      createdAt?: DateTimeFilter<'OrderDetail'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'OrderDetail'> | Date | string | null;
      deletedAt?: DateTimeNullableFilter<'OrderDetail'> | Date | string | null;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
      transactionLog?: TransactionLogListRelationFilter;
    },
    'id'
  >;

  export type OrderDetailOrderByWithAggregationInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    _count?: OrderDetailCountOrderByAggregateInput;
    _avg?: OrderDetailAvgOrderByAggregateInput;
    _max?: OrderDetailMaxOrderByAggregateInput;
    _min?: OrderDetailMinOrderByAggregateInput;
    _sum?: OrderDetailSumOrderByAggregateInput;
  };

  export type OrderDetailScalarWhereWithAggregatesInput = {
    AND?:
      | OrderDetailScalarWhereWithAggregatesInput
      | OrderDetailScalarWhereWithAggregatesInput[];
    OR?: OrderDetailScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderDetailScalarWhereWithAggregatesInput
      | OrderDetailScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'OrderDetail'> | number;
    orderId?: IntWithAggregatesFilter<'OrderDetail'> | number;
    companyId?: IntWithAggregatesFilter<'OrderDetail'> | number;
    productId?: IntWithAggregatesFilter<'OrderDetail'> | number;
    qty?: IntWithAggregatesFilter<'OrderDetail'> | number;
    price?: FloatWithAggregatesFilter<'OrderDetail'> | number;
    subTotal?: FloatWithAggregatesFilter<'OrderDetail'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'OrderDetail'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'OrderDetail'>
      | Date
      | string
      | null;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'OrderDetail'>
      | Date
      | string
      | null;
  };

  export type TransactionLogWhereInput = {
    AND?: TransactionLogWhereInput | TransactionLogWhereInput[];
    OR?: TransactionLogWhereInput[];
    NOT?: TransactionLogWhereInput | TransactionLogWhereInput[];
    id?: IntFilter<'TransactionLog'> | number;
    companyId?: IntFilter<'TransactionLog'> | number;
    companyUserId?: IntNullableFilter<'TransactionLog'> | number | null;
    productId?: IntFilter<'TransactionLog'> | number;
    type?: EnumTransactionTypeFilter<'TransactionLog'> | $Enums.TransactionType;
    quantity?: IntFilter<'TransactionLog'> | number;
    orderDetailId?: IntNullableFilter<'TransactionLog'> | number | null;
    createdAt?: DateTimeFilter<'TransactionLog'> | Date | string;
    transactionDate?: DateTimeFilter<'TransactionLog'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'TransactionLog'> | Date | string | null;
    remarks?: StringFilter<'TransactionLog'> | string;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    companyUser?: XOR<
      CompanyUserNullableScalarRelationFilter,
      CompanyUserWhereInput
    > | null;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    orderDetail?: XOR<
      OrderDetailNullableScalarRelationFilter,
      OrderDetailWhereInput
    > | null;
  };

  export type TransactionLogOrderByWithRelationInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrderInput | SortOrder;
    productId?: SortOrder;
    type?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    transactionDate?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    remarks?: SortOrder;
    company?: CompanyOrderByWithRelationInput;
    companyUser?: CompanyUserOrderByWithRelationInput;
    product?: ProductOrderByWithRelationInput;
    orderDetail?: OrderDetailOrderByWithRelationInput;
  };

  export type TransactionLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: TransactionLogWhereInput | TransactionLogWhereInput[];
      OR?: TransactionLogWhereInput[];
      NOT?: TransactionLogWhereInput | TransactionLogWhereInput[];
      companyId?: IntFilter<'TransactionLog'> | number;
      companyUserId?: IntNullableFilter<'TransactionLog'> | number | null;
      productId?: IntFilter<'TransactionLog'> | number;
      type?:
        | EnumTransactionTypeFilter<'TransactionLog'>
        | $Enums.TransactionType;
      quantity?: IntFilter<'TransactionLog'> | number;
      orderDetailId?: IntNullableFilter<'TransactionLog'> | number | null;
      createdAt?: DateTimeFilter<'TransactionLog'> | Date | string;
      transactionDate?: DateTimeFilter<'TransactionLog'> | Date | string;
      deletedAt?:
        | DateTimeNullableFilter<'TransactionLog'>
        | Date
        | string
        | null;
      remarks?: StringFilter<'TransactionLog'> | string;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      companyUser?: XOR<
        CompanyUserNullableScalarRelationFilter,
        CompanyUserWhereInput
      > | null;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
      orderDetail?: XOR<
        OrderDetailNullableScalarRelationFilter,
        OrderDetailWhereInput
      > | null;
    },
    'id'
  >;

  export type TransactionLogOrderByWithAggregationInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrderInput | SortOrder;
    productId?: SortOrder;
    type?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    transactionDate?: SortOrder;
    deletedAt?: SortOrderInput | SortOrder;
    remarks?: SortOrder;
    _count?: TransactionLogCountOrderByAggregateInput;
    _avg?: TransactionLogAvgOrderByAggregateInput;
    _max?: TransactionLogMaxOrderByAggregateInput;
    _min?: TransactionLogMinOrderByAggregateInput;
    _sum?: TransactionLogSumOrderByAggregateInput;
  };

  export type TransactionLogScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionLogScalarWhereWithAggregatesInput
      | TransactionLogScalarWhereWithAggregatesInput[];
    OR?: TransactionLogScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionLogScalarWhereWithAggregatesInput
      | TransactionLogScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'TransactionLog'> | number;
    companyId?: IntWithAggregatesFilter<'TransactionLog'> | number;
    companyUserId?:
      | IntNullableWithAggregatesFilter<'TransactionLog'>
      | number
      | null;
    productId?: IntWithAggregatesFilter<'TransactionLog'> | number;
    type?:
      | EnumTransactionTypeWithAggregatesFilter<'TransactionLog'>
      | $Enums.TransactionType;
    quantity?: IntWithAggregatesFilter<'TransactionLog'> | number;
    orderDetailId?:
      | IntNullableWithAggregatesFilter<'TransactionLog'>
      | number
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'TransactionLog'> | Date | string;
    transactionDate?:
      | DateTimeWithAggregatesFilter<'TransactionLog'>
      | Date
      | string;
    deletedAt?:
      | DateTimeNullableWithAggregatesFilter<'TransactionLog'>
      | Date
      | string
      | null;
    remarks?: StringWithAggregatesFilter<'TransactionLog'> | string;
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
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
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
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
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
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyUserInput;
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
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyUserInput;
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
    transactionLog?: TransactionLogUpdateManyWithoutCompanyUserNestedInput;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyUserNestedInput;
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
    order?: OrderCreateNestedManyWithoutCustomerInput;
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
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput;
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
    order?: OrderUpdateManyWithoutCustomerNestedInput;
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
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput;
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

  export type CategoryCreateInput = {
    name: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutCategoryInput;
    product?: ProductCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: number;
    name: string;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
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
    company?: CompanyUpdateOneRequiredWithoutCategoryNestedInput;
    product?: ProductUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
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
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: number;
    name: string;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
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

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
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

  export type ProductCreateInput = {
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    category: CategoryCreateNestedOneWithoutProductInput;
    company: CompanyCreateNestedOneWithoutProductInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutProductInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    categoryId: number;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
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
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput;
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutProductNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateManyInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    categoryId: number;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
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

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
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

  export type OrderCreateInput = {
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderInput;
    customer: CustomerCreateNestedOneWithoutOrderInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateInput = {
    id?: number;
    customerId: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderUpdateInput = {
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    company?: CompanyUpdateOneRequiredWithoutOrderNestedInput;
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderCreateManyInput = {
    id?: number;
    customerId: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderUpdateManyMutationInput = {
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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

  export type OrderDetailCreateInput = {
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderDetailInput;
    order: OrderCreateNestedOneWithoutOrderDetailInput;
    product: ProductCreateNestedOneWithoutOrderDetailInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailUncheckedCreateInput = {
    id?: number;
    orderId: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    company?: CompanyUpdateOneRequiredWithoutOrderDetailNestedInput;
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput;
    product?: ProductUpdateOneRequiredWithoutOrderDetailNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailCreateManyInput = {
    id?: number;
    orderId: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderDetailUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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

  export type OrderDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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

  export type TransactionLogCreateInput = {
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
    company: CompanyCreateNestedOneWithoutTransactionLogInput;
    companyUser?: CompanyUserCreateNestedOneWithoutTransactionLogInput;
    product: ProductCreateNestedOneWithoutTransactionLogInput;
    orderDetail?: OrderDetailCreateNestedOneWithoutTransactionLogInput;
  };

  export type TransactionLogUncheckedCreateInput = {
    id?: number;
    companyId: number;
    companyUserId?: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogUpdateInput = {
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
    company?: CompanyUpdateOneRequiredWithoutTransactionLogNestedInput;
    companyUser?: CompanyUserUpdateOneWithoutTransactionLogNestedInput;
    product?: ProductUpdateOneRequiredWithoutTransactionLogNestedInput;
    orderDetail?: OrderDetailUpdateOneWithoutTransactionLogNestedInput;
  };

  export type TransactionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogCreateManyInput = {
    id?: number;
    companyId: number;
    companyUserId?: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogUpdateManyMutationInput = {
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
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

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput;
    some?: CategoryWhereInput;
    none?: CategoryWhereInput;
  };

  export type ProductListRelationFilter = {
    every?: ProductWhereInput;
    some?: ProductWhereInput;
    none?: ProductWhereInput;
  };

  export type OrderListRelationFilter = {
    every?: OrderWhereInput;
    some?: OrderWhereInput;
    none?: OrderWhereInput;
  };

  export type OrderDetailListRelationFilter = {
    every?: OrderDetailWhereInput;
    some?: OrderDetailWhereInput;
    none?: OrderDetailWhereInput;
  };

  export type TransactionLogListRelationFilter = {
    every?: TransactionLogWhereInput;
    some?: TransactionLogWhereInput;
    none?: TransactionLogWhereInput;
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

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TransactionLogOrderByRelationAggregateInput = {
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    image?: SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
  };

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    image?: SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    image?: SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    qty?: SortOrder;
    qtyBooked?: SortOrder;
    qtySold?: SortOrder;
    categoryId?: SortOrder;
    companyId?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type EnumShippingStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ShippingStatus
      | EnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumShippingStatusNullableFilter<$PrismaModel>
      | $Enums.ShippingStatus
      | null;
  };

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
    paymentStatus?: SortOrder;
    shippingStatus?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
  };

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
    paymentStatus?: SortOrder;
    shippingStatus?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
    paymentStatus?: SortOrder;
    shippingStatus?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder;
    customerId?: SortOrder;
    companyId?: SortOrder;
    grandTotal?: SortOrder;
  };

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type EnumShippingStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ShippingStatus
      | EnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumShippingStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.ShippingStatus
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumShippingStatusNullableFilter<$PrismaModel>;
    _max?: NestedEnumShippingStatusNullableFilter<$PrismaModel>;
  };

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput;
    isNot?: OrderWhereInput;
  };

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput;
    isNot?: ProductWhereInput;
  };

  export type OrderDetailCountOrderByAggregateInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type OrderDetailAvgOrderByAggregateInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
  };

  export type OrderDetailMaxOrderByAggregateInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type OrderDetailMinOrderByAggregateInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    deletedAt?: SortOrder;
  };

  export type OrderDetailSumOrderByAggregateInput = {
    id?: SortOrder;
    orderId?: SortOrder;
    companyId?: SortOrder;
    productId?: SortOrder;
    qty?: SortOrder;
    price?: SortOrder;
    subTotal?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeFilter<$PrismaModel>
      | $Enums.TransactionType;
  };

  export type CompanyUserNullableScalarRelationFilter = {
    is?: CompanyUserWhereInput | null;
    isNot?: CompanyUserWhereInput | null;
  };

  export type OrderDetailNullableScalarRelationFilter = {
    is?: OrderDetailWhereInput | null;
    isNot?: OrderDetailWhereInput | null;
  };

  export type TransactionLogCountOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrder;
    productId?: SortOrder;
    type?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrder;
    createdAt?: SortOrder;
    transactionDate?: SortOrder;
    deletedAt?: SortOrder;
    remarks?: SortOrder;
  };

  export type TransactionLogAvgOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrder;
  };

  export type TransactionLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrder;
    productId?: SortOrder;
    type?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrder;
    createdAt?: SortOrder;
    transactionDate?: SortOrder;
    deletedAt?: SortOrder;
    remarks?: SortOrder;
  };

  export type TransactionLogMinOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrder;
    productId?: SortOrder;
    type?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrder;
    createdAt?: SortOrder;
    transactionDate?: SortOrder;
    deletedAt?: SortOrder;
    remarks?: SortOrder;
  };

  export type TransactionLogSumOrderByAggregateInput = {
    id?: SortOrder;
    companyId?: SortOrder;
    companyUserId?: SortOrder;
    productId?: SortOrder;
    quantity?: SortOrder;
    orderDetailId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
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

  export type CategoryCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          CategoryCreateWithoutCompanyInput,
          CategoryUncheckedCreateWithoutCompanyInput
        >
      | CategoryCreateWithoutCompanyInput[]
      | CategoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutCompanyInput
      | CategoryCreateOrConnectWithoutCompanyInput[];
    createMany?: CategoryCreateManyCompanyInputEnvelope;
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
  };

  export type ProductCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          ProductCreateWithoutCompanyInput,
          ProductUncheckedCreateWithoutCompanyInput
        >
      | ProductCreateWithoutCompanyInput[]
      | ProductUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCompanyInput
      | ProductCreateOrConnectWithoutCompanyInput[];
    createMany?: ProductCreateManyCompanyInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type OrderCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          OrderCreateWithoutCompanyInput,
          OrderUncheckedCreateWithoutCompanyInput
        >
      | OrderCreateWithoutCompanyInput[]
      | OrderUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCompanyInput
      | OrderCreateOrConnectWithoutCompanyInput[];
    createMany?: OrderCreateManyCompanyInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type OrderDetailCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutCompanyInput,
          OrderDetailUncheckedCreateWithoutCompanyInput
        >
      | OrderDetailCreateWithoutCompanyInput[]
      | OrderDetailUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutCompanyInput
      | OrderDetailCreateOrConnectWithoutCompanyInput[];
    createMany?: OrderDetailCreateManyCompanyInputEnvelope;
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
  };

  export type TransactionLogCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyInput,
          TransactionLogUncheckedCreateWithoutCompanyInput
        >
      | TransactionLogCreateWithoutCompanyInput[]
      | TransactionLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyInput
      | TransactionLogCreateOrConnectWithoutCompanyInput[];
    createMany?: TransactionLogCreateManyCompanyInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
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

  export type CategoryUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          CategoryCreateWithoutCompanyInput,
          CategoryUncheckedCreateWithoutCompanyInput
        >
      | CategoryCreateWithoutCompanyInput[]
      | CategoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutCompanyInput
      | CategoryCreateOrConnectWithoutCompanyInput[];
    createMany?: CategoryCreateManyCompanyInputEnvelope;
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
  };

  export type ProductUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          ProductCreateWithoutCompanyInput,
          ProductUncheckedCreateWithoutCompanyInput
        >
      | ProductCreateWithoutCompanyInput[]
      | ProductUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCompanyInput
      | ProductCreateOrConnectWithoutCompanyInput[];
    createMany?: ProductCreateManyCompanyInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type OrderUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          OrderCreateWithoutCompanyInput,
          OrderUncheckedCreateWithoutCompanyInput
        >
      | OrderCreateWithoutCompanyInput[]
      | OrderUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCompanyInput
      | OrderCreateOrConnectWithoutCompanyInput[];
    createMany?: OrderCreateManyCompanyInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type OrderDetailUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutCompanyInput,
          OrderDetailUncheckedCreateWithoutCompanyInput
        >
      | OrderDetailCreateWithoutCompanyInput[]
      | OrderDetailUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutCompanyInput
      | OrderDetailCreateOrConnectWithoutCompanyInput[];
    createMany?: OrderDetailCreateManyCompanyInputEnvelope;
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
  };

  export type TransactionLogUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyInput,
          TransactionLogUncheckedCreateWithoutCompanyInput
        >
      | TransactionLogCreateWithoutCompanyInput[]
      | TransactionLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyInput
      | TransactionLogCreateOrConnectWithoutCompanyInput[];
    createMany?: TransactionLogCreateManyCompanyInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
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

  export type CategoryUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          CategoryCreateWithoutCompanyInput,
          CategoryUncheckedCreateWithoutCompanyInput
        >
      | CategoryCreateWithoutCompanyInput[]
      | CategoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutCompanyInput
      | CategoryCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | CategoryUpsertWithWhereUniqueWithoutCompanyInput
      | CategoryUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: CategoryCreateManyCompanyInputEnvelope;
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    update?:
      | CategoryUpdateWithWhereUniqueWithoutCompanyInput
      | CategoryUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | CategoryUpdateManyWithWhereWithoutCompanyInput
      | CategoryUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
  };

  export type ProductUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutCompanyInput,
          ProductUncheckedCreateWithoutCompanyInput
        >
      | ProductCreateWithoutCompanyInput[]
      | ProductUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCompanyInput
      | ProductCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutCompanyInput
      | ProductUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ProductCreateManyCompanyInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutCompanyInput
      | ProductUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutCompanyInput
      | ProductUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type OrderUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          OrderCreateWithoutCompanyInput,
          OrderUncheckedCreateWithoutCompanyInput
        >
      | OrderCreateWithoutCompanyInput[]
      | OrderUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCompanyInput
      | OrderCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutCompanyInput
      | OrderUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: OrderCreateManyCompanyInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutCompanyInput
      | OrderUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | OrderUpdateManyWithWhereWithoutCompanyInput
      | OrderUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type OrderDetailUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutCompanyInput,
          OrderDetailUncheckedCreateWithoutCompanyInput
        >
      | OrderDetailCreateWithoutCompanyInput[]
      | OrderDetailUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutCompanyInput
      | OrderDetailCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | OrderDetailUpsertWithWhereUniqueWithoutCompanyInput
      | OrderDetailUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: OrderDetailCreateManyCompanyInputEnvelope;
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    update?:
      | OrderDetailUpdateWithWhereUniqueWithoutCompanyInput
      | OrderDetailUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | OrderDetailUpdateManyWithWhereWithoutCompanyInput
      | OrderDetailUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
  };

  export type TransactionLogUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyInput,
          TransactionLogUncheckedCreateWithoutCompanyInput
        >
      | TransactionLogCreateWithoutCompanyInput[]
      | TransactionLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyInput
      | TransactionLogCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyInput
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: TransactionLogCreateManyCompanyInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyInput
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutCompanyInput
      | TransactionLogUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
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

  export type CategoryUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          CategoryCreateWithoutCompanyInput,
          CategoryUncheckedCreateWithoutCompanyInput
        >
      | CategoryCreateWithoutCompanyInput[]
      | CategoryUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutCompanyInput
      | CategoryCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | CategoryUpsertWithWhereUniqueWithoutCompanyInput
      | CategoryUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: CategoryCreateManyCompanyInputEnvelope;
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    update?:
      | CategoryUpdateWithWhereUniqueWithoutCompanyInput
      | CategoryUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | CategoryUpdateManyWithWhereWithoutCompanyInput
      | CategoryUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
  };

  export type ProductUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutCompanyInput,
          ProductUncheckedCreateWithoutCompanyInput
        >
      | ProductCreateWithoutCompanyInput[]
      | ProductUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCompanyInput
      | ProductCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutCompanyInput
      | ProductUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ProductCreateManyCompanyInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutCompanyInput
      | ProductUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutCompanyInput
      | ProductUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type OrderUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          OrderCreateWithoutCompanyInput,
          OrderUncheckedCreateWithoutCompanyInput
        >
      | OrderCreateWithoutCompanyInput[]
      | OrderUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCompanyInput
      | OrderCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutCompanyInput
      | OrderUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: OrderCreateManyCompanyInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutCompanyInput
      | OrderUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | OrderUpdateManyWithWhereWithoutCompanyInput
      | OrderUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutCompanyInput,
          OrderDetailUncheckedCreateWithoutCompanyInput
        >
      | OrderDetailCreateWithoutCompanyInput[]
      | OrderDetailUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutCompanyInput
      | OrderDetailCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | OrderDetailUpsertWithWhereUniqueWithoutCompanyInput
      | OrderDetailUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: OrderDetailCreateManyCompanyInputEnvelope;
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    update?:
      | OrderDetailUpdateWithWhereUniqueWithoutCompanyInput
      | OrderDetailUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | OrderDetailUpdateManyWithWhereWithoutCompanyInput
      | OrderDetailUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
  };

  export type TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyInput,
          TransactionLogUncheckedCreateWithoutCompanyInput
        >
      | TransactionLogCreateWithoutCompanyInput[]
      | TransactionLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyInput
      | TransactionLogCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyInput
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: TransactionLogCreateManyCompanyInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyInput
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutCompanyInput
      | TransactionLogUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
  };

  export type CompanyCreateNestedOneWithoutCompanyUsersInput = {
    create?: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyUsersInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type TransactionLogCreateNestedManyWithoutCompanyUserInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyUserInput,
          TransactionLogUncheckedCreateWithoutCompanyUserInput
        >
      | TransactionLogCreateWithoutCompanyUserInput[]
      | TransactionLogUncheckedCreateWithoutCompanyUserInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyUserInput
      | TransactionLogCreateOrConnectWithoutCompanyUserInput[];
    createMany?: TransactionLogCreateManyCompanyUserInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
  };

  export type TransactionLogUncheckedCreateNestedManyWithoutCompanyUserInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyUserInput,
          TransactionLogUncheckedCreateWithoutCompanyUserInput
        >
      | TransactionLogCreateWithoutCompanyUserInput[]
      | TransactionLogUncheckedCreateWithoutCompanyUserInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyUserInput
      | TransactionLogCreateOrConnectWithoutCompanyUserInput[];
    createMany?: TransactionLogCreateManyCompanyUserInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
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

  export type TransactionLogUpdateManyWithoutCompanyUserNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyUserInput,
          TransactionLogUncheckedCreateWithoutCompanyUserInput
        >
      | TransactionLogCreateWithoutCompanyUserInput[]
      | TransactionLogUncheckedCreateWithoutCompanyUserInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyUserInput
      | TransactionLogCreateOrConnectWithoutCompanyUserInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyUserInput
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyUserInput[];
    createMany?: TransactionLogCreateManyCompanyUserInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyUserInput
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyUserInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutCompanyUserInput
      | TransactionLogUpdateManyWithWhereWithoutCompanyUserInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
  };

  export type TransactionLogUncheckedUpdateManyWithoutCompanyUserNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutCompanyUserInput,
          TransactionLogUncheckedCreateWithoutCompanyUserInput
        >
      | TransactionLogCreateWithoutCompanyUserInput[]
      | TransactionLogUncheckedCreateWithoutCompanyUserInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutCompanyUserInput
      | TransactionLogCreateOrConnectWithoutCompanyUserInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyUserInput
      | TransactionLogUpsertWithWhereUniqueWithoutCompanyUserInput[];
    createMany?: TransactionLogCreateManyCompanyUserInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyUserInput
      | TransactionLogUpdateWithWhereUniqueWithoutCompanyUserInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutCompanyUserInput
      | TransactionLogUpdateManyWithWhereWithoutCompanyUserInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
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

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<
          OrderCreateWithoutCustomerInput,
          OrderUncheckedCreateWithoutCustomerInput
        >
      | OrderCreateWithoutCustomerInput[]
      | OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCustomerInput
      | OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: OrderCreateManyCustomerInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
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

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<
          OrderCreateWithoutCustomerInput,
          OrderUncheckedCreateWithoutCustomerInput
        >
      | OrderCreateWithoutCustomerInput[]
      | OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCustomerInput
      | OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: OrderCreateManyCustomerInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
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

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<
          OrderCreateWithoutCustomerInput,
          OrderUncheckedCreateWithoutCustomerInput
        >
      | OrderCreateWithoutCustomerInput[]
      | OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCustomerInput
      | OrderCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutCustomerInput
      | OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: OrderCreateManyCustomerInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutCustomerInput
      | OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | OrderUpdateManyWithWhereWithoutCustomerInput
      | OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
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

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<
          OrderCreateWithoutCustomerInput,
          OrderUncheckedCreateWithoutCustomerInput
        >
      | OrderCreateWithoutCustomerInput[]
      | OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutCustomerInput
      | OrderCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutCustomerInput
      | OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: OrderCreateManyCustomerInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutCustomerInput
      | OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | OrderUpdateManyWithWhereWithoutCustomerInput
      | OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
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

  export type CompanyCreateNestedOneWithoutCategoryInput = {
    create?: XOR<
      CompanyCreateWithoutCategoryInput,
      CompanyUncheckedCreateWithoutCategoryInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCategoryInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ProductCreateWithoutCategoryInput,
          ProductUncheckedCreateWithoutCategoryInput
        >
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCategoryInput
      | ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ProductCreateWithoutCategoryInput,
          ProductUncheckedCreateWithoutCategoryInput
        >
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCategoryInput
      | ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type CompanyUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<
      CompanyCreateWithoutCategoryInput,
      CompanyUncheckedCreateWithoutCategoryInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutCategoryInput;
    upsert?: CompanyUpsertWithoutCategoryInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutCategoryInput,
        CompanyUpdateWithoutCategoryInput
      >,
      CompanyUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutCategoryInput,
          ProductUncheckedCreateWithoutCategoryInput
        >
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCategoryInput
      | ProductCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutCategoryInput
      | ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutCategoryInput
      | ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutCategoryInput
      | ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutCategoryInput,
          ProductUncheckedCreateWithoutCategoryInput
        >
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutCategoryInput
      | ProductCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutCategoryInput
      | ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutCategoryInput
      | ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutCategoryInput
      | ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<
      CategoryCreateWithoutProductInput,
      CategoryUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type CompanyCreateNestedOneWithoutProductInput = {
    create?: XOR<
      CompanyCreateWithoutProductInput,
      CompanyUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutProductInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type OrderDetailCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutProductInput,
          OrderDetailUncheckedCreateWithoutProductInput
        >
      | OrderDetailCreateWithoutProductInput[]
      | OrderDetailUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutProductInput
      | OrderDetailCreateOrConnectWithoutProductInput[];
    createMany?: OrderDetailCreateManyProductInputEnvelope;
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
  };

  export type TransactionLogCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutProductInput,
          TransactionLogUncheckedCreateWithoutProductInput
        >
      | TransactionLogCreateWithoutProductInput[]
      | TransactionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutProductInput
      | TransactionLogCreateOrConnectWithoutProductInput[];
    createMany?: TransactionLogCreateManyProductInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
  };

  export type OrderDetailUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutProductInput,
          OrderDetailUncheckedCreateWithoutProductInput
        >
      | OrderDetailCreateWithoutProductInput[]
      | OrderDetailUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutProductInput
      | OrderDetailCreateOrConnectWithoutProductInput[];
    createMany?: OrderDetailCreateManyProductInputEnvelope;
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
  };

  export type TransactionLogUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutProductInput,
          TransactionLogUncheckedCreateWithoutProductInput
        >
      | TransactionLogCreateWithoutProductInput[]
      | TransactionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutProductInput
      | TransactionLogCreateOrConnectWithoutProductInput[];
    createMany?: TransactionLogCreateManyProductInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<
      CategoryCreateWithoutProductInput,
      CategoryUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput;
    upsert?: CategoryUpsertWithoutProductInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutProductInput,
        CategoryUpdateWithoutProductInput
      >,
      CategoryUncheckedUpdateWithoutProductInput
    >;
  };

  export type CompanyUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<
      CompanyCreateWithoutProductInput,
      CompanyUncheckedCreateWithoutProductInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutProductInput;
    upsert?: CompanyUpsertWithoutProductInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutProductInput,
        CompanyUpdateWithoutProductInput
      >,
      CompanyUncheckedUpdateWithoutProductInput
    >;
  };

  export type OrderDetailUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutProductInput,
          OrderDetailUncheckedCreateWithoutProductInput
        >
      | OrderDetailCreateWithoutProductInput[]
      | OrderDetailUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutProductInput
      | OrderDetailCreateOrConnectWithoutProductInput[];
    upsert?:
      | OrderDetailUpsertWithWhereUniqueWithoutProductInput
      | OrderDetailUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: OrderDetailCreateManyProductInputEnvelope;
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    update?:
      | OrderDetailUpdateWithWhereUniqueWithoutProductInput
      | OrderDetailUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | OrderDetailUpdateManyWithWhereWithoutProductInput
      | OrderDetailUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
  };

  export type TransactionLogUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutProductInput,
          TransactionLogUncheckedCreateWithoutProductInput
        >
      | TransactionLogCreateWithoutProductInput[]
      | TransactionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutProductInput
      | TransactionLogCreateOrConnectWithoutProductInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutProductInput
      | TransactionLogUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: TransactionLogCreateManyProductInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutProductInput
      | TransactionLogUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutProductInput
      | TransactionLogUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
  };

  export type OrderDetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutProductInput,
          OrderDetailUncheckedCreateWithoutProductInput
        >
      | OrderDetailCreateWithoutProductInput[]
      | OrderDetailUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutProductInput
      | OrderDetailCreateOrConnectWithoutProductInput[];
    upsert?:
      | OrderDetailUpsertWithWhereUniqueWithoutProductInput
      | OrderDetailUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: OrderDetailCreateManyProductInputEnvelope;
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    update?:
      | OrderDetailUpdateWithWhereUniqueWithoutProductInput
      | OrderDetailUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | OrderDetailUpdateManyWithWhereWithoutProductInput
      | OrderDetailUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
  };

  export type TransactionLogUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutProductInput,
          TransactionLogUncheckedCreateWithoutProductInput
        >
      | TransactionLogCreateWithoutProductInput[]
      | TransactionLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutProductInput
      | TransactionLogCreateOrConnectWithoutProductInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutProductInput
      | TransactionLogUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: TransactionLogCreateManyProductInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutProductInput
      | TransactionLogUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutProductInput
      | TransactionLogUpdateManyWithWhereWithoutProductInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
  };

  export type CompanyCreateNestedOneWithoutOrderInput = {
    create?: XOR<
      CompanyCreateWithoutOrderInput,
      CompanyUncheckedCreateWithoutOrderInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type CustomerCreateNestedOneWithoutOrderInput = {
    create?: XOR<
      CustomerCreateWithoutOrderInput,
      CustomerUncheckedCreateWithoutOrderInput
    >;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput;
    connect?: CustomerWhereUniqueInput;
  };

  export type OrderDetailCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutOrderInput,
          OrderDetailUncheckedCreateWithoutOrderInput
        >
      | OrderDetailCreateWithoutOrderInput[]
      | OrderDetailUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutOrderInput
      | OrderDetailCreateOrConnectWithoutOrderInput[];
    createMany?: OrderDetailCreateManyOrderInputEnvelope;
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
  };

  export type OrderDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutOrderInput,
          OrderDetailUncheckedCreateWithoutOrderInput
        >
      | OrderDetailCreateWithoutOrderInput[]
      | OrderDetailUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutOrderInput
      | OrderDetailCreateOrConnectWithoutOrderInput[];
    createMany?: OrderDetailCreateManyOrderInputEnvelope;
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
  };

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
  };

  export type NullableEnumShippingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShippingStatus | null;
  };

  export type CompanyUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<
      CompanyCreateWithoutOrderInput,
      CompanyUncheckedCreateWithoutOrderInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderInput;
    upsert?: CompanyUpsertWithoutOrderInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutOrderInput,
        CompanyUpdateWithoutOrderInput
      >,
      CompanyUncheckedUpdateWithoutOrderInput
    >;
  };

  export type CustomerUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<
      CustomerCreateWithoutOrderInput,
      CustomerUncheckedCreateWithoutOrderInput
    >;
    connectOrCreate?: CustomerCreateOrConnectWithoutOrderInput;
    upsert?: CustomerUpsertWithoutOrderInput;
    connect?: CustomerWhereUniqueInput;
    update?: XOR<
      XOR<
        CustomerUpdateToOneWithWhereWithoutOrderInput,
        CustomerUpdateWithoutOrderInput
      >,
      CustomerUncheckedUpdateWithoutOrderInput
    >;
  };

  export type OrderDetailUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutOrderInput,
          OrderDetailUncheckedCreateWithoutOrderInput
        >
      | OrderDetailCreateWithoutOrderInput[]
      | OrderDetailUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutOrderInput
      | OrderDetailCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderDetailUpsertWithWhereUniqueWithoutOrderInput
      | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderDetailCreateManyOrderInputEnvelope;
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    update?:
      | OrderDetailUpdateWithWhereUniqueWithoutOrderInput
      | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderDetailUpdateManyWithWhereWithoutOrderInput
      | OrderDetailUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
  };

  export type OrderDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderDetailCreateWithoutOrderInput,
          OrderDetailUncheckedCreateWithoutOrderInput
        >
      | OrderDetailCreateWithoutOrderInput[]
      | OrderDetailUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderDetailCreateOrConnectWithoutOrderInput
      | OrderDetailCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderDetailUpsertWithWhereUniqueWithoutOrderInput
      | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderDetailCreateManyOrderInputEnvelope;
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[];
    update?:
      | OrderDetailUpdateWithWhereUniqueWithoutOrderInput
      | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderDetailUpdateManyWithWhereWithoutOrderInput
      | OrderDetailUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
  };

  export type CompanyCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<
      CompanyCreateWithoutOrderDetailInput,
      CompanyUncheckedCreateWithoutOrderDetailInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderDetailInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type OrderCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<
      OrderCreateWithoutOrderDetailInput,
      OrderUncheckedCreateWithoutOrderDetailInput
    >;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput;
    connect?: OrderWhereUniqueInput;
  };

  export type ProductCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<
      ProductCreateWithoutOrderDetailInput,
      ProductUncheckedCreateWithoutOrderDetailInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailInput;
    connect?: ProductWhereUniqueInput;
  };

  export type TransactionLogCreateNestedManyWithoutOrderDetailInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutOrderDetailInput,
          TransactionLogUncheckedCreateWithoutOrderDetailInput
        >
      | TransactionLogCreateWithoutOrderDetailInput[]
      | TransactionLogUncheckedCreateWithoutOrderDetailInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutOrderDetailInput
      | TransactionLogCreateOrConnectWithoutOrderDetailInput[];
    createMany?: TransactionLogCreateManyOrderDetailInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
  };

  export type TransactionLogUncheckedCreateNestedManyWithoutOrderDetailInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutOrderDetailInput,
          TransactionLogUncheckedCreateWithoutOrderDetailInput
        >
      | TransactionLogCreateWithoutOrderDetailInput[]
      | TransactionLogUncheckedCreateWithoutOrderDetailInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutOrderDetailInput
      | TransactionLogCreateOrConnectWithoutOrderDetailInput[];
    createMany?: TransactionLogCreateManyOrderDetailInputEnvelope;
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
  };

  export type CompanyUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<
      CompanyCreateWithoutOrderDetailInput,
      CompanyUncheckedCreateWithoutOrderDetailInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutOrderDetailInput;
    upsert?: CompanyUpsertWithoutOrderDetailInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutOrderDetailInput,
        CompanyUpdateWithoutOrderDetailInput
      >,
      CompanyUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type OrderUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<
      OrderCreateWithoutOrderDetailInput,
      OrderUncheckedCreateWithoutOrderDetailInput
    >;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput;
    upsert?: OrderUpsertWithoutOrderDetailInput;
    connect?: OrderWhereUniqueInput;
    update?: XOR<
      XOR<
        OrderUpdateToOneWithWhereWithoutOrderDetailInput,
        OrderUpdateWithoutOrderDetailInput
      >,
      OrderUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type ProductUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<
      ProductCreateWithoutOrderDetailInput,
      ProductUncheckedCreateWithoutOrderDetailInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailInput;
    upsert?: ProductUpsertWithoutOrderDetailInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutOrderDetailInput,
        ProductUpdateWithoutOrderDetailInput
      >,
      ProductUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type TransactionLogUpdateManyWithoutOrderDetailNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutOrderDetailInput,
          TransactionLogUncheckedCreateWithoutOrderDetailInput
        >
      | TransactionLogCreateWithoutOrderDetailInput[]
      | TransactionLogUncheckedCreateWithoutOrderDetailInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutOrderDetailInput
      | TransactionLogCreateOrConnectWithoutOrderDetailInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutOrderDetailInput
      | TransactionLogUpsertWithWhereUniqueWithoutOrderDetailInput[];
    createMany?: TransactionLogCreateManyOrderDetailInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutOrderDetailInput
      | TransactionLogUpdateWithWhereUniqueWithoutOrderDetailInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutOrderDetailInput
      | TransactionLogUpdateManyWithWhereWithoutOrderDetailInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
  };

  export type TransactionLogUncheckedUpdateManyWithoutOrderDetailNestedInput = {
    create?:
      | XOR<
          TransactionLogCreateWithoutOrderDetailInput,
          TransactionLogUncheckedCreateWithoutOrderDetailInput
        >
      | TransactionLogCreateWithoutOrderDetailInput[]
      | TransactionLogUncheckedCreateWithoutOrderDetailInput[];
    connectOrCreate?:
      | TransactionLogCreateOrConnectWithoutOrderDetailInput
      | TransactionLogCreateOrConnectWithoutOrderDetailInput[];
    upsert?:
      | TransactionLogUpsertWithWhereUniqueWithoutOrderDetailInput
      | TransactionLogUpsertWithWhereUniqueWithoutOrderDetailInput[];
    createMany?: TransactionLogCreateManyOrderDetailInputEnvelope;
    set?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    disconnect?:
      | TransactionLogWhereUniqueInput
      | TransactionLogWhereUniqueInput[];
    delete?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    connect?: TransactionLogWhereUniqueInput | TransactionLogWhereUniqueInput[];
    update?:
      | TransactionLogUpdateWithWhereUniqueWithoutOrderDetailInput
      | TransactionLogUpdateWithWhereUniqueWithoutOrderDetailInput[];
    updateMany?:
      | TransactionLogUpdateManyWithWhereWithoutOrderDetailInput
      | TransactionLogUpdateManyWithWhereWithoutOrderDetailInput[];
    deleteMany?:
      | TransactionLogScalarWhereInput
      | TransactionLogScalarWhereInput[];
  };

  export type CompanyCreateNestedOneWithoutTransactionLogInput = {
    create?: XOR<
      CompanyCreateWithoutTransactionLogInput,
      CompanyUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionLogInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type CompanyUserCreateNestedOneWithoutTransactionLogInput = {
    create?: XOR<
      CompanyUserCreateWithoutTransactionLogInput,
      CompanyUserUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: CompanyUserCreateOrConnectWithoutTransactionLogInput;
    connect?: CompanyUserWhereUniqueInput;
  };

  export type ProductCreateNestedOneWithoutTransactionLogInput = {
    create?: XOR<
      ProductCreateWithoutTransactionLogInput,
      ProductUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionLogInput;
    connect?: ProductWhereUniqueInput;
  };

  export type OrderDetailCreateNestedOneWithoutTransactionLogInput = {
    create?: XOR<
      OrderDetailCreateWithoutTransactionLogInput,
      OrderDetailUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTransactionLogInput;
    connect?: OrderDetailWhereUniqueInput;
  };

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
  };

  export type CompanyUpdateOneRequiredWithoutTransactionLogNestedInput = {
    create?: XOR<
      CompanyCreateWithoutTransactionLogInput,
      CompanyUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutTransactionLogInput;
    upsert?: CompanyUpsertWithoutTransactionLogInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutTransactionLogInput,
        CompanyUpdateWithoutTransactionLogInput
      >,
      CompanyUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type CompanyUserUpdateOneWithoutTransactionLogNestedInput = {
    create?: XOR<
      CompanyUserCreateWithoutTransactionLogInput,
      CompanyUserUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: CompanyUserCreateOrConnectWithoutTransactionLogInput;
    upsert?: CompanyUserUpsertWithoutTransactionLogInput;
    disconnect?: CompanyUserWhereInput | boolean;
    delete?: CompanyUserWhereInput | boolean;
    connect?: CompanyUserWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUserUpdateToOneWithWhereWithoutTransactionLogInput,
        CompanyUserUpdateWithoutTransactionLogInput
      >,
      CompanyUserUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type ProductUpdateOneRequiredWithoutTransactionLogNestedInput = {
    create?: XOR<
      ProductCreateWithoutTransactionLogInput,
      ProductUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionLogInput;
    upsert?: ProductUpsertWithoutTransactionLogInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutTransactionLogInput,
        ProductUpdateWithoutTransactionLogInput
      >,
      ProductUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type OrderDetailUpdateOneWithoutTransactionLogNestedInput = {
    create?: XOR<
      OrderDetailCreateWithoutTransactionLogInput,
      OrderDetailUncheckedCreateWithoutTransactionLogInput
    >;
    connectOrCreate?: OrderDetailCreateOrConnectWithoutTransactionLogInput;
    upsert?: OrderDetailUpsertWithoutTransactionLogInput;
    disconnect?: OrderDetailWhereInput | boolean;
    delete?: OrderDetailWhereInput | boolean;
    connect?: OrderDetailWhereUniqueInput;
    update?: XOR<
      XOR<
        OrderDetailUpdateToOneWithWhereWithoutTransactionLogInput,
        OrderDetailUpdateWithoutTransactionLogInput
      >,
      OrderDetailUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type NestedEnumShippingStatusNullableFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ShippingStatus
      | EnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumShippingStatusNullableFilter<$PrismaModel>
      | $Enums.ShippingStatus
      | null;
  };

  export type NestedEnumPaymentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type NestedEnumShippingStatusNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ShippingStatus
      | EnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    in?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | $Enums.ShippingStatus[]
      | ListEnumShippingStatusFieldRefInput<$PrismaModel>
      | null;
    not?:
      | NestedEnumShippingStatusNullableWithAggregatesFilter<$PrismaModel>
      | $Enums.ShippingStatus
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumShippingStatusNullableFilter<$PrismaModel>;
    _max?: NestedEnumShippingStatusNullableFilter<$PrismaModel>;
  };

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeFilter<$PrismaModel>
      | $Enums.TransactionType;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumTransactionTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TransactionType
      | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TransactionType[]
      | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
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
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyUserInput;
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
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyUserInput;
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
    order?: OrderCreateNestedManyWithoutCustomerInput;
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
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput;
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

  export type CategoryCreateWithoutCompanyInput = {
    name: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    product?: ProductCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateWithoutCompanyInput = {
    id?: number;
    name: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryCreateOrConnectWithoutCompanyInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutCompanyInput,
      CategoryUncheckedCreateWithoutCompanyInput
    >;
  };

  export type CategoryCreateManyCompanyInputEnvelope = {
    data: CategoryCreateManyCompanyInput | CategoryCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type ProductCreateWithoutCompanyInput = {
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    category: CategoryCreateNestedOneWithoutProductInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutProductInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutCompanyInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    categoryId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutCompanyInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutCompanyInput,
      ProductUncheckedCreateWithoutCompanyInput
    >;
  };

  export type ProductCreateManyCompanyInputEnvelope = {
    data: ProductCreateManyCompanyInput | ProductCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type OrderCreateWithoutCompanyInput = {
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    customer: CustomerCreateNestedOneWithoutOrderInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateWithoutCompanyInput = {
    id?: number;
    customerId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderCreateOrConnectWithoutCompanyInput = {
    where: OrderWhereUniqueInput;
    create: XOR<
      OrderCreateWithoutCompanyInput,
      OrderUncheckedCreateWithoutCompanyInput
    >;
  };

  export type OrderCreateManyCompanyInputEnvelope = {
    data: OrderCreateManyCompanyInput | OrderCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type OrderDetailCreateWithoutCompanyInput = {
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    order: OrderCreateNestedOneWithoutOrderDetailInput;
    product: ProductCreateNestedOneWithoutOrderDetailInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailUncheckedCreateWithoutCompanyInput = {
    id?: number;
    orderId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailCreateOrConnectWithoutCompanyInput = {
    where: OrderDetailWhereUniqueInput;
    create: XOR<
      OrderDetailCreateWithoutCompanyInput,
      OrderDetailUncheckedCreateWithoutCompanyInput
    >;
  };

  export type OrderDetailCreateManyCompanyInputEnvelope = {
    data:
      | OrderDetailCreateManyCompanyInput
      | OrderDetailCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionLogCreateWithoutCompanyInput = {
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
    companyUser?: CompanyUserCreateNestedOneWithoutTransactionLogInput;
    product: ProductCreateNestedOneWithoutTransactionLogInput;
    orderDetail?: OrderDetailCreateNestedOneWithoutTransactionLogInput;
  };

  export type TransactionLogUncheckedCreateWithoutCompanyInput = {
    id?: number;
    companyUserId?: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogCreateOrConnectWithoutCompanyInput = {
    where: TransactionLogWhereUniqueInput;
    create: XOR<
      TransactionLogCreateWithoutCompanyInput,
      TransactionLogUncheckedCreateWithoutCompanyInput
    >;
  };

  export type TransactionLogCreateManyCompanyInputEnvelope = {
    data:
      | TransactionLogCreateManyCompanyInput
      | TransactionLogCreateManyCompanyInput[];
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

  export type CategoryUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CategoryWhereUniqueInput;
    update: XOR<
      CategoryUpdateWithoutCompanyInput,
      CategoryUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      CategoryCreateWithoutCompanyInput,
      CategoryUncheckedCreateWithoutCompanyInput
    >;
  };

  export type CategoryUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CategoryWhereUniqueInput;
    data: XOR<
      CategoryUpdateWithoutCompanyInput,
      CategoryUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type CategoryUpdateManyWithWhereWithoutCompanyInput = {
    where: CategoryScalarWhereInput;
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
    OR?: CategoryScalarWhereInput[];
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
    id?: IntFilter<'Category'> | number;
    name?: StringFilter<'Category'> | string;
    companyId?: IntFilter<'Category'> | number;
    createdAt?: DateTimeFilter<'Category'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Category'> | Date | string | null;
  };

  export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput;
    update: XOR<
      ProductUpdateWithoutCompanyInput,
      ProductUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      ProductCreateWithoutCompanyInput,
      ProductUncheckedCreateWithoutCompanyInput
    >;
  };

  export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput;
    data: XOR<
      ProductUpdateWithoutCompanyInput,
      ProductUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type ProductUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductScalarWhereInput;
    data: XOR<
      ProductUpdateManyMutationInput,
      ProductUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[];
    OR?: ProductScalarWhereInput[];
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[];
    id?: IntFilter<'Product'> | number;
    name?: StringFilter<'Product'> | string;
    description?: StringFilter<'Product'> | string;
    price?: FloatFilter<'Product'> | number;
    qty?: IntFilter<'Product'> | number;
    qtyBooked?: IntFilter<'Product'> | number;
    qtySold?: IntFilter<'Product'> | number;
    image?: StringNullableFilter<'Product'> | string | null;
    categoryId?: IntFilter<'Product'> | number;
    companyId?: IntFilter<'Product'> | number;
    createdAt?: DateTimeFilter<'Product'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Product'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Product'> | Date | string | null;
  };

  export type OrderUpsertWithWhereUniqueWithoutCompanyInput = {
    where: OrderWhereUniqueInput;
    update: XOR<
      OrderUpdateWithoutCompanyInput,
      OrderUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      OrderCreateWithoutCompanyInput,
      OrderUncheckedCreateWithoutCompanyInput
    >;
  };

  export type OrderUpdateWithWhereUniqueWithoutCompanyInput = {
    where: OrderWhereUniqueInput;
    data: XOR<
      OrderUpdateWithoutCompanyInput,
      OrderUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type OrderUpdateManyWithWhereWithoutCompanyInput = {
    where: OrderScalarWhereInput;
    data: XOR<
      OrderUpdateManyMutationInput,
      OrderUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[];
    OR?: OrderScalarWhereInput[];
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[];
    id?: IntFilter<'Order'> | number;
    customerId?: IntFilter<'Order'> | number;
    companyId?: IntFilter<'Order'> | number;
    grandTotal?: FloatFilter<'Order'> | number;
    paymentStatus?: EnumPaymentStatusFilter<'Order'> | $Enums.PaymentStatus;
    shippingStatus?:
      | EnumShippingStatusNullableFilter<'Order'>
      | $Enums.ShippingStatus
      | null;
    createdAt?: DateTimeFilter<'Order'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'Order'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'Order'> | Date | string | null;
  };

  export type OrderDetailUpsertWithWhereUniqueWithoutCompanyInput = {
    where: OrderDetailWhereUniqueInput;
    update: XOR<
      OrderDetailUpdateWithoutCompanyInput,
      OrderDetailUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      OrderDetailCreateWithoutCompanyInput,
      OrderDetailUncheckedCreateWithoutCompanyInput
    >;
  };

  export type OrderDetailUpdateWithWhereUniqueWithoutCompanyInput = {
    where: OrderDetailWhereUniqueInput;
    data: XOR<
      OrderDetailUpdateWithoutCompanyInput,
      OrderDetailUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type OrderDetailUpdateManyWithWhereWithoutCompanyInput = {
    where: OrderDetailScalarWhereInput;
    data: XOR<
      OrderDetailUpdateManyMutationInput,
      OrderDetailUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type OrderDetailScalarWhereInput = {
    AND?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
    OR?: OrderDetailScalarWhereInput[];
    NOT?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[];
    id?: IntFilter<'OrderDetail'> | number;
    orderId?: IntFilter<'OrderDetail'> | number;
    companyId?: IntFilter<'OrderDetail'> | number;
    productId?: IntFilter<'OrderDetail'> | number;
    qty?: IntFilter<'OrderDetail'> | number;
    price?: FloatFilter<'OrderDetail'> | number;
    subTotal?: FloatFilter<'OrderDetail'> | number;
    createdAt?: DateTimeFilter<'OrderDetail'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'OrderDetail'> | Date | string | null;
    deletedAt?: DateTimeNullableFilter<'OrderDetail'> | Date | string | null;
  };

  export type TransactionLogUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TransactionLogWhereUniqueInput;
    update: XOR<
      TransactionLogUpdateWithoutCompanyInput,
      TransactionLogUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      TransactionLogCreateWithoutCompanyInput,
      TransactionLogUncheckedCreateWithoutCompanyInput
    >;
  };

  export type TransactionLogUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TransactionLogWhereUniqueInput;
    data: XOR<
      TransactionLogUpdateWithoutCompanyInput,
      TransactionLogUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type TransactionLogUpdateManyWithWhereWithoutCompanyInput = {
    where: TransactionLogScalarWhereInput;
    data: XOR<
      TransactionLogUpdateManyMutationInput,
      TransactionLogUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type TransactionLogScalarWhereInput = {
    AND?: TransactionLogScalarWhereInput | TransactionLogScalarWhereInput[];
    OR?: TransactionLogScalarWhereInput[];
    NOT?: TransactionLogScalarWhereInput | TransactionLogScalarWhereInput[];
    id?: IntFilter<'TransactionLog'> | number;
    companyId?: IntFilter<'TransactionLog'> | number;
    companyUserId?: IntNullableFilter<'TransactionLog'> | number | null;
    productId?: IntFilter<'TransactionLog'> | number;
    type?: EnumTransactionTypeFilter<'TransactionLog'> | $Enums.TransactionType;
    quantity?: IntFilter<'TransactionLog'> | number;
    orderDetailId?: IntNullableFilter<'TransactionLog'> | number | null;
    createdAt?: DateTimeFilter<'TransactionLog'> | Date | string;
    transactionDate?: DateTimeFilter<'TransactionLog'> | Date | string;
    deletedAt?: DateTimeNullableFilter<'TransactionLog'> | Date | string | null;
    remarks?: StringFilter<'TransactionLog'> | string;
  };

  export type CompanyCreateWithoutCompanyUsersInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
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
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutCompanyUsersInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutCompanyUsersInput,
      CompanyUncheckedCreateWithoutCompanyUsersInput
    >;
  };

  export type TransactionLogCreateWithoutCompanyUserInput = {
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
    company: CompanyCreateNestedOneWithoutTransactionLogInput;
    product: ProductCreateNestedOneWithoutTransactionLogInput;
    orderDetail?: OrderDetailCreateNestedOneWithoutTransactionLogInput;
  };

  export type TransactionLogUncheckedCreateWithoutCompanyUserInput = {
    id?: number;
    companyId: number;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogCreateOrConnectWithoutCompanyUserInput = {
    where: TransactionLogWhereUniqueInput;
    create: XOR<
      TransactionLogCreateWithoutCompanyUserInput,
      TransactionLogUncheckedCreateWithoutCompanyUserInput
    >;
  };

  export type TransactionLogCreateManyCompanyUserInputEnvelope = {
    data:
      | TransactionLogCreateManyCompanyUserInput
      | TransactionLogCreateManyCompanyUserInput[];
    skipDuplicates?: boolean;
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type TransactionLogUpsertWithWhereUniqueWithoutCompanyUserInput = {
    where: TransactionLogWhereUniqueInput;
    update: XOR<
      TransactionLogUpdateWithoutCompanyUserInput,
      TransactionLogUncheckedUpdateWithoutCompanyUserInput
    >;
    create: XOR<
      TransactionLogCreateWithoutCompanyUserInput,
      TransactionLogUncheckedCreateWithoutCompanyUserInput
    >;
  };

  export type TransactionLogUpdateWithWhereUniqueWithoutCompanyUserInput = {
    where: TransactionLogWhereUniqueInput;
    data: XOR<
      TransactionLogUpdateWithoutCompanyUserInput,
      TransactionLogUncheckedUpdateWithoutCompanyUserInput
    >;
  };

  export type TransactionLogUpdateManyWithWhereWithoutCompanyUserInput = {
    where: TransactionLogScalarWhereInput;
    data: XOR<
      TransactionLogUpdateManyMutationInput,
      TransactionLogUncheckedUpdateManyWithoutCompanyUserInput
    >;
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
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
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
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutCustomerInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutCustomerInput,
      CompanyUncheckedCreateWithoutCustomerInput
    >;
  };

  export type OrderCreateWithoutCustomerInput = {
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput;
    create: XOR<
      OrderCreateWithoutCustomerInput,
      OrderUncheckedCreateWithoutCustomerInput
    >;
  };

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput;
    update: XOR<
      OrderUpdateWithoutCustomerInput,
      OrderUncheckedUpdateWithoutCustomerInput
    >;
    create: XOR<
      OrderCreateWithoutCustomerInput,
      OrderUncheckedCreateWithoutCustomerInput
    >;
  };

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput;
    data: XOR<
      OrderUpdateWithoutCustomerInput,
      OrderUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput;
    data: XOR<
      OrderUpdateManyMutationInput,
      OrderUncheckedUpdateManyWithoutCustomerInput
    >;
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
    order?: OrderCreateNestedManyWithoutCustomerInput;
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
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput;
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
    order?: OrderUpdateManyWithoutCustomerNestedInput;
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
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type CompanyCreateWithoutCategoryInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutCategoryInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutCategoryInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutCategoryInput,
      CompanyUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ProductCreateWithoutCategoryInput = {
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutProductInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutProductInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutCategoryInput,
      ProductUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type CompanyUpsertWithoutCategoryInput = {
    update: XOR<
      CompanyUpdateWithoutCategoryInput,
      CompanyUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      CompanyCreateWithoutCategoryInput,
      CompanyUncheckedCreateWithoutCategoryInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutCategoryInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutCategoryInput,
      CompanyUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type CompanyUpdateWithoutCategoryInput = {
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
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutCategoryInput = {
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
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput;
    update: XOR<
      ProductUpdateWithoutCategoryInput,
      ProductUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      ProductCreateWithoutCategoryInput,
      ProductUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput;
    data: XOR<
      ProductUpdateWithoutCategoryInput,
      ProductUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput;
    data: XOR<
      ProductUpdateManyMutationInput,
      ProductUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type CategoryCreateWithoutProductInput = {
    name: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: number;
    name: string;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutProductInput,
      CategoryUncheckedCreateWithoutProductInput
    >;
  };

  export type CompanyCreateWithoutProductInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutProductInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutProductInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutProductInput,
      CompanyUncheckedCreateWithoutProductInput
    >;
  };

  export type OrderDetailCreateWithoutProductInput = {
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderDetailInput;
    order: OrderCreateNestedOneWithoutOrderDetailInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailUncheckedCreateWithoutProductInput = {
    id?: number;
    orderId: number;
    companyId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailCreateOrConnectWithoutProductInput = {
    where: OrderDetailWhereUniqueInput;
    create: XOR<
      OrderDetailCreateWithoutProductInput,
      OrderDetailUncheckedCreateWithoutProductInput
    >;
  };

  export type OrderDetailCreateManyProductInputEnvelope = {
    data:
      | OrderDetailCreateManyProductInput
      | OrderDetailCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionLogCreateWithoutProductInput = {
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
    company: CompanyCreateNestedOneWithoutTransactionLogInput;
    companyUser?: CompanyUserCreateNestedOneWithoutTransactionLogInput;
    orderDetail?: OrderDetailCreateNestedOneWithoutTransactionLogInput;
  };

  export type TransactionLogUncheckedCreateWithoutProductInput = {
    id?: number;
    companyId: number;
    companyUserId?: number | null;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogCreateOrConnectWithoutProductInput = {
    where: TransactionLogWhereUniqueInput;
    create: XOR<
      TransactionLogCreateWithoutProductInput,
      TransactionLogUncheckedCreateWithoutProductInput
    >;
  };

  export type TransactionLogCreateManyProductInputEnvelope = {
    data:
      | TransactionLogCreateManyProductInput
      | TransactionLogCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<
      CategoryUpdateWithoutProductInput,
      CategoryUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      CategoryCreateWithoutProductInput,
      CategoryUncheckedCreateWithoutProductInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutProductInput,
      CategoryUncheckedUpdateWithoutProductInput
    >;
  };

  export type CategoryUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string;
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
    company?: CompanyUpdateOneRequiredWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    companyId?: IntFieldUpdateOperationsInput | number;
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

  export type CompanyUpsertWithoutProductInput = {
    update: XOR<
      CompanyUpdateWithoutProductInput,
      CompanyUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      CompanyCreateWithoutProductInput,
      CompanyUncheckedCreateWithoutProductInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutProductInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutProductInput,
      CompanyUncheckedUpdateWithoutProductInput
    >;
  };

  export type CompanyUpdateWithoutProductInput = {
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutProductInput = {
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type OrderDetailUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderDetailWhereUniqueInput;
    update: XOR<
      OrderDetailUpdateWithoutProductInput,
      OrderDetailUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      OrderDetailCreateWithoutProductInput,
      OrderDetailUncheckedCreateWithoutProductInput
    >;
  };

  export type OrderDetailUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderDetailWhereUniqueInput;
    data: XOR<
      OrderDetailUpdateWithoutProductInput,
      OrderDetailUncheckedUpdateWithoutProductInput
    >;
  };

  export type OrderDetailUpdateManyWithWhereWithoutProductInput = {
    where: OrderDetailScalarWhereInput;
    data: XOR<
      OrderDetailUpdateManyMutationInput,
      OrderDetailUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type TransactionLogUpsertWithWhereUniqueWithoutProductInput = {
    where: TransactionLogWhereUniqueInput;
    update: XOR<
      TransactionLogUpdateWithoutProductInput,
      TransactionLogUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      TransactionLogCreateWithoutProductInput,
      TransactionLogUncheckedCreateWithoutProductInput
    >;
  };

  export type TransactionLogUpdateWithWhereUniqueWithoutProductInput = {
    where: TransactionLogWhereUniqueInput;
    data: XOR<
      TransactionLogUpdateWithoutProductInput,
      TransactionLogUncheckedUpdateWithoutProductInput
    >;
  };

  export type TransactionLogUpdateManyWithWhereWithoutProductInput = {
    where: TransactionLogScalarWhereInput;
    data: XOR<
      TransactionLogUpdateManyMutationInput,
      TransactionLogUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type CompanyCreateWithoutOrderInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutOrderInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutOrderInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutOrderInput,
      CompanyUncheckedCreateWithoutOrderInput
    >;
  };

  export type CustomerCreateWithoutOrderInput = {
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

  export type CustomerUncheckedCreateWithoutOrderInput = {
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

  export type CustomerCreateOrConnectWithoutOrderInput = {
    where: CustomerWhereUniqueInput;
    create: XOR<
      CustomerCreateWithoutOrderInput,
      CustomerUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderDetailCreateWithoutOrderInput = {
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderDetailInput;
    product: ProductCreateNestedOneWithoutOrderDetailInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailUncheckedCreateWithoutOrderInput = {
    id?: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutOrderDetailInput;
  };

  export type OrderDetailCreateOrConnectWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput;
    create: XOR<
      OrderDetailCreateWithoutOrderInput,
      OrderDetailUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderDetailCreateManyOrderInputEnvelope = {
    data: OrderDetailCreateManyOrderInput | OrderDetailCreateManyOrderInput[];
    skipDuplicates?: boolean;
  };

  export type CompanyUpsertWithoutOrderInput = {
    update: XOR<
      CompanyUpdateWithoutOrderInput,
      CompanyUncheckedUpdateWithoutOrderInput
    >;
    create: XOR<
      CompanyCreateWithoutOrderInput,
      CompanyUncheckedCreateWithoutOrderInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutOrderInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutOrderInput,
      CompanyUncheckedUpdateWithoutOrderInput
    >;
  };

  export type CompanyUpdateWithoutOrderInput = {
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutOrderInput = {
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CustomerUpsertWithoutOrderInput = {
    update: XOR<
      CustomerUpdateWithoutOrderInput,
      CustomerUncheckedUpdateWithoutOrderInput
    >;
    create: XOR<
      CustomerCreateWithoutOrderInput,
      CustomerUncheckedCreateWithoutOrderInput
    >;
    where?: CustomerWhereInput;
  };

  export type CustomerUpdateToOneWithWhereWithoutOrderInput = {
    where?: CustomerWhereInput;
    data: XOR<
      CustomerUpdateWithoutOrderInput,
      CustomerUncheckedUpdateWithoutOrderInput
    >;
  };

  export type CustomerUpdateWithoutOrderInput = {
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

  export type CustomerUncheckedUpdateWithoutOrderInput = {
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

  export type OrderDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput;
    update: XOR<
      OrderDetailUpdateWithoutOrderInput,
      OrderDetailUncheckedUpdateWithoutOrderInput
    >;
    create: XOR<
      OrderDetailCreateWithoutOrderInput,
      OrderDetailUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput;
    data: XOR<
      OrderDetailUpdateWithoutOrderInput,
      OrderDetailUncheckedUpdateWithoutOrderInput
    >;
  };

  export type OrderDetailUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailScalarWhereInput;
    data: XOR<
      OrderDetailUpdateManyMutationInput,
      OrderDetailUncheckedUpdateManyWithoutOrderInput
    >;
  };

  export type CompanyCreateWithoutOrderDetailInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutOrderDetailInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutOrderDetailInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutOrderDetailInput,
      CompanyUncheckedCreateWithoutOrderDetailInput
    >;
  };

  export type OrderCreateWithoutOrderDetailInput = {
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderInput;
    customer: CustomerCreateNestedOneWithoutOrderInput;
  };

  export type OrderUncheckedCreateWithoutOrderDetailInput = {
    id?: number;
    customerId: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderCreateOrConnectWithoutOrderDetailInput = {
    where: OrderWhereUniqueInput;
    create: XOR<
      OrderCreateWithoutOrderDetailInput,
      OrderUncheckedCreateWithoutOrderDetailInput
    >;
  };

  export type ProductCreateWithoutOrderDetailInput = {
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    category: CategoryCreateNestedOneWithoutProductInput;
    company: CompanyCreateNestedOneWithoutProductInput;
    transactionLog?: TransactionLogCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutOrderDetailInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    categoryId: number;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    transactionLog?: TransactionLogUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutOrderDetailInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutOrderDetailInput,
      ProductUncheckedCreateWithoutOrderDetailInput
    >;
  };

  export type TransactionLogCreateWithoutOrderDetailInput = {
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
    company: CompanyCreateNestedOneWithoutTransactionLogInput;
    companyUser?: CompanyUserCreateNestedOneWithoutTransactionLogInput;
    product: ProductCreateNestedOneWithoutTransactionLogInput;
  };

  export type TransactionLogUncheckedCreateWithoutOrderDetailInput = {
    id?: number;
    companyId: number;
    companyUserId?: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogCreateOrConnectWithoutOrderDetailInput = {
    where: TransactionLogWhereUniqueInput;
    create: XOR<
      TransactionLogCreateWithoutOrderDetailInput,
      TransactionLogUncheckedCreateWithoutOrderDetailInput
    >;
  };

  export type TransactionLogCreateManyOrderDetailInputEnvelope = {
    data:
      | TransactionLogCreateManyOrderDetailInput
      | TransactionLogCreateManyOrderDetailInput[];
    skipDuplicates?: boolean;
  };

  export type CompanyUpsertWithoutOrderDetailInput = {
    update: XOR<
      CompanyUpdateWithoutOrderDetailInput,
      CompanyUncheckedUpdateWithoutOrderDetailInput
    >;
    create: XOR<
      CompanyCreateWithoutOrderDetailInput,
      CompanyUncheckedCreateWithoutOrderDetailInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutOrderDetailInput,
      CompanyUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type CompanyUpdateWithoutOrderDetailInput = {
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutOrderDetailInput = {
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type OrderUpsertWithoutOrderDetailInput = {
    update: XOR<
      OrderUpdateWithoutOrderDetailInput,
      OrderUncheckedUpdateWithoutOrderDetailInput
    >;
    create: XOR<
      OrderCreateWithoutOrderDetailInput,
      OrderUncheckedCreateWithoutOrderDetailInput
    >;
    where?: OrderWhereInput;
  };

  export type OrderUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: OrderWhereInput;
    data: XOR<
      OrderUpdateWithoutOrderDetailInput,
      OrderUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type OrderUpdateWithoutOrderDetailInput = {
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    company?: CompanyUpdateOneRequiredWithoutOrderNestedInput;
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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

  export type ProductUpsertWithoutOrderDetailInput = {
    update: XOR<
      ProductUpdateWithoutOrderDetailInput,
      ProductUncheckedUpdateWithoutOrderDetailInput
    >;
    create: XOR<
      ProductCreateWithoutOrderDetailInput,
      ProductUncheckedCreateWithoutOrderDetailInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutOrderDetailInput,
      ProductUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type ProductUpdateWithoutOrderDetailInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
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
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput;
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type TransactionLogUpsertWithWhereUniqueWithoutOrderDetailInput = {
    where: TransactionLogWhereUniqueInput;
    update: XOR<
      TransactionLogUpdateWithoutOrderDetailInput,
      TransactionLogUncheckedUpdateWithoutOrderDetailInput
    >;
    create: XOR<
      TransactionLogCreateWithoutOrderDetailInput,
      TransactionLogUncheckedCreateWithoutOrderDetailInput
    >;
  };

  export type TransactionLogUpdateWithWhereUniqueWithoutOrderDetailInput = {
    where: TransactionLogWhereUniqueInput;
    data: XOR<
      TransactionLogUpdateWithoutOrderDetailInput,
      TransactionLogUncheckedUpdateWithoutOrderDetailInput
    >;
  };

  export type TransactionLogUpdateManyWithWhereWithoutOrderDetailInput = {
    where: TransactionLogScalarWhereInput;
    data: XOR<
      TransactionLogUpdateManyMutationInput,
      TransactionLogUncheckedUpdateManyWithoutOrderDetailInput
    >;
  };

  export type CompanyCreateWithoutTransactionLogInput = {
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserCreateNestedManyWithoutCompanyInput;
    customer?: CustomerCreateNestedManyWithoutCompanyInput;
    category?: CategoryCreateNestedManyWithoutCompanyInput;
    product?: ProductCreateNestedManyWithoutCompanyInput;
    order?: OrderCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutTransactionLogInput = {
    id?: number;
    name: string;
    email: string;
    status?: boolean;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    companyUsers?: CompanyUserUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: CustomerUncheckedCreateNestedManyWithoutCompanyInput;
    category?: CategoryUncheckedCreateNestedManyWithoutCompanyInput;
    product?: ProductUncheckedCreateNestedManyWithoutCompanyInput;
    order?: OrderUncheckedCreateNestedManyWithoutCompanyInput;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutTransactionLogInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutTransactionLogInput,
      CompanyUncheckedCreateWithoutTransactionLogInput
    >;
  };

  export type CompanyUserCreateWithoutTransactionLogInput = {
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

  export type CompanyUserUncheckedCreateWithoutTransactionLogInput = {
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

  export type CompanyUserCreateOrConnectWithoutTransactionLogInput = {
    where: CompanyUserWhereUniqueInput;
    create: XOR<
      CompanyUserCreateWithoutTransactionLogInput,
      CompanyUserUncheckedCreateWithoutTransactionLogInput
    >;
  };

  export type ProductCreateWithoutTransactionLogInput = {
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    category: CategoryCreateNestedOneWithoutProductInput;
    company: CompanyCreateNestedOneWithoutProductInput;
    orderDetail?: OrderDetailCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutTransactionLogInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    categoryId: number;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutTransactionLogInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutTransactionLogInput,
      ProductUncheckedCreateWithoutTransactionLogInput
    >;
  };

  export type OrderDetailCreateWithoutTransactionLogInput = {
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
    company: CompanyCreateNestedOneWithoutOrderDetailInput;
    order: OrderCreateNestedOneWithoutOrderDetailInput;
    product: ProductCreateNestedOneWithoutOrderDetailInput;
  };

  export type OrderDetailUncheckedCreateWithoutTransactionLogInput = {
    id?: number;
    orderId: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderDetailCreateOrConnectWithoutTransactionLogInput = {
    where: OrderDetailWhereUniqueInput;
    create: XOR<
      OrderDetailCreateWithoutTransactionLogInput,
      OrderDetailUncheckedCreateWithoutTransactionLogInput
    >;
  };

  export type CompanyUpsertWithoutTransactionLogInput = {
    update: XOR<
      CompanyUpdateWithoutTransactionLogInput,
      CompanyUncheckedUpdateWithoutTransactionLogInput
    >;
    create: XOR<
      CompanyCreateWithoutTransactionLogInput,
      CompanyUncheckedCreateWithoutTransactionLogInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutTransactionLogInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutTransactionLogInput,
      CompanyUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type CompanyUpdateWithoutTransactionLogInput = {
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
    category?: CategoryUpdateManyWithoutCompanyNestedInput;
    product?: ProductUpdateManyWithoutCompanyNestedInput;
    order?: OrderUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutTransactionLogInput = {
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
    category?: CategoryUncheckedUpdateManyWithoutCompanyNestedInput;
    product?: ProductUncheckedUpdateManyWithoutCompanyNestedInput;
    order?: OrderUncheckedUpdateManyWithoutCompanyNestedInput;
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUserUpsertWithoutTransactionLogInput = {
    update: XOR<
      CompanyUserUpdateWithoutTransactionLogInput,
      CompanyUserUncheckedUpdateWithoutTransactionLogInput
    >;
    create: XOR<
      CompanyUserCreateWithoutTransactionLogInput,
      CompanyUserUncheckedCreateWithoutTransactionLogInput
    >;
    where?: CompanyUserWhereInput;
  };

  export type CompanyUserUpdateToOneWithWhereWithoutTransactionLogInput = {
    where?: CompanyUserWhereInput;
    data: XOR<
      CompanyUserUpdateWithoutTransactionLogInput,
      CompanyUserUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type CompanyUserUpdateWithoutTransactionLogInput = {
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

  export type CompanyUserUncheckedUpdateWithoutTransactionLogInput = {
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

  export type ProductUpsertWithoutTransactionLogInput = {
    update: XOR<
      ProductUpdateWithoutTransactionLogInput,
      ProductUncheckedUpdateWithoutTransactionLogInput
    >;
    create: XOR<
      ProductCreateWithoutTransactionLogInput,
      ProductUncheckedCreateWithoutTransactionLogInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutTransactionLogInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutTransactionLogInput,
      ProductUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type ProductUpdateWithoutTransactionLogInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
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
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput;
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutTransactionLogInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type OrderDetailUpsertWithoutTransactionLogInput = {
    update: XOR<
      OrderDetailUpdateWithoutTransactionLogInput,
      OrderDetailUncheckedUpdateWithoutTransactionLogInput
    >;
    create: XOR<
      OrderDetailCreateWithoutTransactionLogInput,
      OrderDetailUncheckedCreateWithoutTransactionLogInput
    >;
    where?: OrderDetailWhereInput;
  };

  export type OrderDetailUpdateToOneWithWhereWithoutTransactionLogInput = {
    where?: OrderDetailWhereInput;
    data: XOR<
      OrderDetailUpdateWithoutTransactionLogInput,
      OrderDetailUncheckedUpdateWithoutTransactionLogInput
    >;
  };

  export type OrderDetailUpdateWithoutTransactionLogInput = {
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    company?: CompanyUpdateOneRequiredWithoutOrderDetailNestedInput;
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput;
    product?: ProductUpdateOneRequiredWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateWithoutTransactionLogInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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

  export type CategoryCreateManyCompanyInput = {
    id?: number;
    name: string;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type ProductCreateManyCompanyInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    categoryId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderCreateManyCompanyInput = {
    id?: number;
    customerId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderDetailCreateManyCompanyInput = {
    id?: number;
    orderId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type TransactionLogCreateManyCompanyInput = {
    id?: number;
    companyUserId?: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
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
    transactionLog?: TransactionLogUpdateManyWithoutCompanyUserNestedInput;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutCompanyUserNestedInput;
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
    order?: OrderUpdateManyWithoutCustomerNestedInput;
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
    order?: OrderUncheckedUpdateManyWithoutCustomerNestedInput;
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

  export type CategoryUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string;
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
    product?: ProductUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
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
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
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

  export type ProductUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
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
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutProductNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: IntFieldUpdateOperationsInput | number;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: IntFieldUpdateOperationsInput | number;
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

  export type OrderUpdateWithoutCompanyInput = {
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    customer?: CustomerUpdateOneRequiredWithoutOrderNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    customerId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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

  export type OrderDetailUpdateWithoutCompanyInput = {
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput;
    product?: ProductUpdateOneRequiredWithoutOrderDetailNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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

  export type TransactionLogUpdateWithoutCompanyInput = {
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
    companyUser?: CompanyUserUpdateOneWithoutTransactionLogNestedInput;
    product?: ProductUpdateOneRequiredWithoutTransactionLogNestedInput;
    orderDetail?: OrderDetailUpdateOneWithoutTransactionLogNestedInput;
  };

  export type TransactionLogUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogCreateManyCompanyUserInput = {
    id?: number;
    companyId: number;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogUpdateWithoutCompanyUserInput = {
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
    company?: CompanyUpdateOneRequiredWithoutTransactionLogNestedInput;
    product?: ProductUpdateOneRequiredWithoutTransactionLogNestedInput;
    orderDetail?: OrderDetailUpdateOneWithoutTransactionLogNestedInput;
  };

  export type TransactionLogUncheckedUpdateWithoutCompanyUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogUncheckedUpdateManyWithoutCompanyUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
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

  export type OrderCreateManyCustomerInput = {
    id?: number;
    companyId: number;
    grandTotal: number;
    paymentStatus: $Enums.PaymentStatus;
    shippingStatus?: $Enums.ShippingStatus | null;
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

  export type OrderUpdateWithoutCustomerInput = {
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    company?: CompanyUpdateOneRequiredWithoutOrderNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    grandTotal?: FloatFieldUpdateOperationsInput | number;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    shippingStatus?:
      | NullableEnumShippingStatusFieldUpdateOperationsInput
      | $Enums.ShippingStatus
      | null;
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

  export type ProductCreateManyCategoryInput = {
    id?: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    qtyBooked?: number;
    qtySold?: number;
    image?: string | null;
    companyId: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
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
    company?: CompanyUpdateOneRequiredWithoutProductNestedInput;
    orderDetail?: OrderDetailUpdateManyWithoutProductNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: IntFieldUpdateOperationsInput | number;
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
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductNestedInput;
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    qtyBooked?: IntFieldUpdateOperationsInput | number;
    qtySold?: IntFieldUpdateOperationsInput | number;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    companyId?: IntFieldUpdateOperationsInput | number;
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

  export type OrderDetailCreateManyProductInput = {
    id?: number;
    orderId: number;
    companyId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type TransactionLogCreateManyProductInput = {
    id?: number;
    companyId: number;
    companyUserId?: number | null;
    type: $Enums.TransactionType;
    quantity: number;
    orderDetailId?: number | null;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type OrderDetailUpdateWithoutProductInput = {
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    company?: CompanyUpdateOneRequiredWithoutOrderDetailNestedInput;
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    orderId?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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

  export type TransactionLogUpdateWithoutProductInput = {
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
    company?: CompanyUpdateOneRequiredWithoutTransactionLogNestedInput;
    companyUser?: CompanyUserUpdateOneWithoutTransactionLogNestedInput;
    orderDetail?: OrderDetailUpdateOneWithoutTransactionLogNestedInput;
  };

  export type TransactionLogUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderDetailId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type OrderDetailCreateManyOrderInput = {
    id?: number;
    companyId: number;
    productId: number;
    qty: number;
    price: number;
    subTotal: number;
    createdAt: Date | string;
    updatedAt?: Date | string | null;
    deletedAt?: Date | string | null;
  };

  export type OrderDetailUpdateWithoutOrderInput = {
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    company?: CompanyUpdateOneRequiredWithoutOrderDetailNestedInput;
    product?: ProductUpdateOneRequiredWithoutOrderDetailNestedInput;
    transactionLog?: TransactionLogUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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
    transactionLog?: TransactionLogUncheckedUpdateManyWithoutOrderDetailNestedInput;
  };

  export type OrderDetailUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    productId?: IntFieldUpdateOperationsInput | number;
    qty?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    subTotal?: FloatFieldUpdateOperationsInput | number;
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

  export type TransactionLogCreateManyOrderDetailInput = {
    id?: number;
    companyId: number;
    companyUserId?: number | null;
    productId: number;
    type: $Enums.TransactionType;
    quantity: number;
    createdAt?: Date | string;
    transactionDate: Date | string;
    deletedAt?: Date | string | null;
    remarks: string;
  };

  export type TransactionLogUpdateWithoutOrderDetailInput = {
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
    company?: CompanyUpdateOneRequiredWithoutTransactionLogNestedInput;
    companyUser?: CompanyUserUpdateOneWithoutTransactionLogNestedInput;
    product?: ProductUpdateOneRequiredWithoutTransactionLogNestedInput;
  };

  export type TransactionLogUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
  };

  export type TransactionLogUncheckedUpdateManyWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    companyId?: IntFieldUpdateOperationsInput | number;
    companyUserId?: NullableIntFieldUpdateOperationsInput | number | null;
    productId?: IntFieldUpdateOperationsInput | number;
    type?:
      | EnumTransactionTypeFieldUpdateOperationsInput
      | $Enums.TransactionType;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    remarks?: StringFieldUpdateOperationsInput | string;
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

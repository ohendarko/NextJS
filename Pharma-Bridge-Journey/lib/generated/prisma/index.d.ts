
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DocumentCategory
 * 
 */
export type DocumentCategory = $Result.DefaultSelection<Prisma.$DocumentCategoryPayload>
/**
 * Model Documents
 * 
 */
export type Documents = $Result.DefaultSelection<Prisma.$DocumentsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PackageSelection
 * 
 */
export type PackageSelection = $Result.DefaultSelection<Prisma.$PackageSelectionPayload>
/**
 * Model Consultation
 * 
 */
export type Consultation = $Result.DefaultSelection<Prisma.$ConsultationPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageSelection`: Exposes CRUD operations for the **PackageSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageSelections
    * const packageSelections = await prisma.packageSelection.findMany()
    * ```
    */
  get packageSelection(): Prisma.PackageSelectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultation`: Exposes CRUD operations for the **Consultation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultations
    * const consultations = await prisma.consultation.findMany()
    * ```
    */
  get consultation(): Prisma.ConsultationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PackageSelection: 'PackageSelection',
    Consultation: 'Consultation',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Document: 'Document'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "packageSelection" | "consultation" | "account" | "session" | "verificationToken" | "document"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PackageSelection: {
        payload: Prisma.$PackageSelectionPayload<ExtArgs>
        fields: Prisma.PackageSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>
          }
          findFirst: {
            args: Prisma.PackageSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>
          }
          findMany: {
            args: Prisma.PackageSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>[]
          }
          create: {
            args: Prisma.PackageSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>
          }
          createMany: {
            args: Prisma.PackageSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>
          }
          update: {
            args: Prisma.PackageSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>
          }
          deleteMany: {
            args: Prisma.PackageSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageSelectionPayload>
          }
          aggregate: {
            args: Prisma.PackageSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageSelection>
          }
          groupBy: {
            args: Prisma.PackageSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageSelectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PackageSelectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PackageSelectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PackageSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<PackageSelectionCountAggregateOutputType> | number
          }
        }
      }
      Consultation: {
        payload: Prisma.$ConsultationPayload<ExtArgs>
        fields: Prisma.ConsultationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findFirst: {
            args: Prisma.ConsultationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findMany: {
            args: Prisma.ConsultationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          create: {
            args: Prisma.ConsultationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          createMany: {
            args: Prisma.ConsultationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConsultationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          update: {
            args: Prisma.ConsultationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          aggregate: {
            args: Prisma.ConsultationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultation>
          }
          groupBy: {
            args: Prisma.ConsultationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConsultationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConsultationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConsultationCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DocumentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DocumentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    packageSelection?: PackageSelectionOmit
    consultation?: ConsultationOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    document?: DocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    documents: number
    packageSelections: number
    consultations: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    packageSelections?: boolean | UserCountOutputTypeCountPackageSelectionsArgs
    consultations?: boolean | UserCountOutputTypeCountConsultationsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPackageSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageSelectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DocumentCategory
   */





  export type DocumentCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    documents?: boolean | DocumentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCategory"]>



  export type DocumentCategorySelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type DocumentCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "documents", ExtArgs["result"]["documentCategory"]>
  export type DocumentCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentCategoryPayload = {
    name: "DocumentCategory"
    objects: {}
    scalars: {
      id: string
      title: string
    }
    composites: {
      documents: Prisma.$DocumentsPayload[]
    }
  }

  type DocumentCategoryGetPayload<S extends boolean | null | undefined | DocumentCategoryDefaultArgs> = $Result.GetResult<Prisma.$DocumentCategoryPayload, S>





  /**
   * Fields of the DocumentCategory model
   */
  interface DocumentCategoryFieldRefs {
    readonly id: FieldRef<"DocumentCategory", 'String'>
    readonly title: FieldRef<"DocumentCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentCategory without action
   */
  export type DocumentCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategory
     */
    select?: DocumentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategory
     */
    omit?: DocumentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Documents
   */





  export type DocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    uploadDate?: boolean
    size?: boolean
    notes?: boolean
  }, ExtArgs["result"]["documents"]>



  export type DocumentsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    uploadDate?: boolean
    size?: boolean
    notes?: boolean
  }

  export type DocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "uploadDate" | "size" | "notes", ExtArgs["result"]["documents"]>

  export type $DocumentsPayload = {
    name: "Documents"
    objects: {}
    scalars: {
      id: string
      name: string
      type: string
      status: string
      uploadDate: string | null
      size: string | null
      notes: string | null
    }
    composites: {}
  }

  type DocumentsGetPayload<S extends boolean | null | undefined | DocumentsDefaultArgs> = $Result.GetResult<Prisma.$DocumentsPayload, S>





  /**
   * Fields of the Documents model
   */
  interface DocumentsFieldRefs {
    readonly id: FieldRef<"Documents", 'String'>
    readonly name: FieldRef<"Documents", 'String'>
    readonly type: FieldRef<"Documents", 'String'>
    readonly status: FieldRef<"Documents", 'String'>
    readonly uploadDate: FieldRef<"Documents", 'String'>
    readonly size: FieldRef<"Documents", 'String'>
    readonly notes: FieldRef<"Documents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Documents without action
   */
  export type DocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents
     */
    select?: DocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documents
     */
    omit?: DocumentsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    profileImage: string | null
    admin: boolean | null
    verified: boolean | null
    hasCompletedOnboarding: boolean | null
    fpgeeFormSubmitted: boolean | null
    fpgecApplicationSubmitted: boolean | null
    fpgeePassed: boolean | null
    fpgecCertficateIssued: boolean | null
    stateBoardApplicationCompleted: boolean | null
    passportScanSubmitted: boolean | null
    passportPhotoSubmitted: boolean | null
    pharmacyLicenseSubmitted: boolean | null
    goodStandingLetterSubmitted: boolean | null
    eceApplicationCompleted: boolean | null
    officialTranscriptsSent: boolean | null
    courseDescriptionsSubmitted: boolean | null
    eceEvaluationFeeePaid: boolean | null
    toeflTestRegistered: boolean | null
    toeflTestCompleted: boolean | null
    toeflScoresSent: boolean | null
    naplexEligibilityConfirmed: boolean | null
    naplexTestRegistered: boolean | null
    naplexPreparationCompleted: boolean | null
    naplexCompleted: boolean | null
    mpjeEligibilityConfirmed: boolean | null
    mpjePreparationCompleted: boolean | null
    mpjeTestRegistered: boolean | null
    mpjeTestCompleted: boolean | null
    internshipHoursCompleted: boolean | null
    pharmacyLicenseObtained: boolean | null
    maintainLicensure: boolean | null
    boardSpecialization: boolean | null
    dateOfBirth: Date | null
    gender: string | null
    phoneNumber: string | null
    timezone: string | null
    countryOfDegree: string | null
    degreeType: string | null
    graduationYear: string | null
    degreeFile: string | null
    passportFile: string | null
    licenseFile: string | null
    hasVisa: boolean | null
    visaType: string | null
    arrivalDate: Date | null
    preferredState: string | null
    selectedPackage: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    profileImage: string | null
    admin: boolean | null
    verified: boolean | null
    hasCompletedOnboarding: boolean | null
    fpgeeFormSubmitted: boolean | null
    fpgecApplicationSubmitted: boolean | null
    fpgeePassed: boolean | null
    fpgecCertficateIssued: boolean | null
    stateBoardApplicationCompleted: boolean | null
    passportScanSubmitted: boolean | null
    passportPhotoSubmitted: boolean | null
    pharmacyLicenseSubmitted: boolean | null
    goodStandingLetterSubmitted: boolean | null
    eceApplicationCompleted: boolean | null
    officialTranscriptsSent: boolean | null
    courseDescriptionsSubmitted: boolean | null
    eceEvaluationFeeePaid: boolean | null
    toeflTestRegistered: boolean | null
    toeflTestCompleted: boolean | null
    toeflScoresSent: boolean | null
    naplexEligibilityConfirmed: boolean | null
    naplexTestRegistered: boolean | null
    naplexPreparationCompleted: boolean | null
    naplexCompleted: boolean | null
    mpjeEligibilityConfirmed: boolean | null
    mpjePreparationCompleted: boolean | null
    mpjeTestRegistered: boolean | null
    mpjeTestCompleted: boolean | null
    internshipHoursCompleted: boolean | null
    pharmacyLicenseObtained: boolean | null
    maintainLicensure: boolean | null
    boardSpecialization: boolean | null
    dateOfBirth: Date | null
    gender: string | null
    phoneNumber: string | null
    timezone: string | null
    countryOfDegree: string | null
    degreeType: string | null
    graduationYear: string | null
    degreeFile: string | null
    passportFile: string | null
    licenseFile: string | null
    hasVisa: boolean | null
    visaType: string | null
    arrivalDate: Date | null
    preferredState: string | null
    selectedPackage: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    profileImage: number
    admin: number
    verified: number
    hasCompletedOnboarding: number
    fpgeeFormSubmitted: number
    fpgecApplicationSubmitted: number
    fpgeePassed: number
    fpgecCertficateIssued: number
    stateBoardApplicationCompleted: number
    passportScanSubmitted: number
    passportPhotoSubmitted: number
    pharmacyLicenseSubmitted: number
    goodStandingLetterSubmitted: number
    eceApplicationCompleted: number
    officialTranscriptsSent: number
    courseDescriptionsSubmitted: number
    eceEvaluationFeeePaid: number
    toeflTestRegistered: number
    toeflTestCompleted: number
    toeflScoresSent: number
    naplexEligibilityConfirmed: number
    naplexTestRegistered: number
    naplexPreparationCompleted: number
    naplexCompleted: number
    mpjeEligibilityConfirmed: number
    mpjePreparationCompleted: number
    mpjeTestRegistered: number
    mpjeTestCompleted: number
    internshipHoursCompleted: number
    pharmacyLicenseObtained: number
    maintainLicensure: number
    boardSpecialization: number
    dateOfBirth: number
    gender: number
    phoneNumber: number
    timezone: number
    countryOfDegree: number
    degreeType: number
    graduationYear: number
    degreeFile: number
    passportFile: number
    licenseFile: number
    hasVisa: number
    visaType: number
    arrivalDate: number
    preferredState: number
    selectedPackage: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    profileImage?: true
    admin?: true
    verified?: true
    hasCompletedOnboarding?: true
    fpgeeFormSubmitted?: true
    fpgecApplicationSubmitted?: true
    fpgeePassed?: true
    fpgecCertficateIssued?: true
    stateBoardApplicationCompleted?: true
    passportScanSubmitted?: true
    passportPhotoSubmitted?: true
    pharmacyLicenseSubmitted?: true
    goodStandingLetterSubmitted?: true
    eceApplicationCompleted?: true
    officialTranscriptsSent?: true
    courseDescriptionsSubmitted?: true
    eceEvaluationFeeePaid?: true
    toeflTestRegistered?: true
    toeflTestCompleted?: true
    toeflScoresSent?: true
    naplexEligibilityConfirmed?: true
    naplexTestRegistered?: true
    naplexPreparationCompleted?: true
    naplexCompleted?: true
    mpjeEligibilityConfirmed?: true
    mpjePreparationCompleted?: true
    mpjeTestRegistered?: true
    mpjeTestCompleted?: true
    internshipHoursCompleted?: true
    pharmacyLicenseObtained?: true
    maintainLicensure?: true
    boardSpecialization?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    timezone?: true
    countryOfDegree?: true
    degreeType?: true
    graduationYear?: true
    degreeFile?: true
    passportFile?: true
    licenseFile?: true
    hasVisa?: true
    visaType?: true
    arrivalDate?: true
    preferredState?: true
    selectedPackage?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    profileImage?: true
    admin?: true
    verified?: true
    hasCompletedOnboarding?: true
    fpgeeFormSubmitted?: true
    fpgecApplicationSubmitted?: true
    fpgeePassed?: true
    fpgecCertficateIssued?: true
    stateBoardApplicationCompleted?: true
    passportScanSubmitted?: true
    passportPhotoSubmitted?: true
    pharmacyLicenseSubmitted?: true
    goodStandingLetterSubmitted?: true
    eceApplicationCompleted?: true
    officialTranscriptsSent?: true
    courseDescriptionsSubmitted?: true
    eceEvaluationFeeePaid?: true
    toeflTestRegistered?: true
    toeflTestCompleted?: true
    toeflScoresSent?: true
    naplexEligibilityConfirmed?: true
    naplexTestRegistered?: true
    naplexPreparationCompleted?: true
    naplexCompleted?: true
    mpjeEligibilityConfirmed?: true
    mpjePreparationCompleted?: true
    mpjeTestRegistered?: true
    mpjeTestCompleted?: true
    internshipHoursCompleted?: true
    pharmacyLicenseObtained?: true
    maintainLicensure?: true
    boardSpecialization?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    timezone?: true
    countryOfDegree?: true
    degreeType?: true
    graduationYear?: true
    degreeFile?: true
    passportFile?: true
    licenseFile?: true
    hasVisa?: true
    visaType?: true
    arrivalDate?: true
    preferredState?: true
    selectedPackage?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    profileImage?: true
    admin?: true
    verified?: true
    hasCompletedOnboarding?: true
    fpgeeFormSubmitted?: true
    fpgecApplicationSubmitted?: true
    fpgeePassed?: true
    fpgecCertficateIssued?: true
    stateBoardApplicationCompleted?: true
    passportScanSubmitted?: true
    passportPhotoSubmitted?: true
    pharmacyLicenseSubmitted?: true
    goodStandingLetterSubmitted?: true
    eceApplicationCompleted?: true
    officialTranscriptsSent?: true
    courseDescriptionsSubmitted?: true
    eceEvaluationFeeePaid?: true
    toeflTestRegistered?: true
    toeflTestCompleted?: true
    toeflScoresSent?: true
    naplexEligibilityConfirmed?: true
    naplexTestRegistered?: true
    naplexPreparationCompleted?: true
    naplexCompleted?: true
    mpjeEligibilityConfirmed?: true
    mpjePreparationCompleted?: true
    mpjeTestRegistered?: true
    mpjeTestCompleted?: true
    internshipHoursCompleted?: true
    pharmacyLicenseObtained?: true
    maintainLicensure?: true
    boardSpecialization?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    timezone?: true
    countryOfDegree?: true
    degreeType?: true
    graduationYear?: true
    degreeFile?: true
    passportFile?: true
    licenseFile?: true
    hasVisa?: true
    visaType?: true
    arrivalDate?: true
    preferredState?: true
    selectedPackage?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string | null
    createdAt: Date
    profileImage: string | null
    admin: boolean
    verified: boolean
    hasCompletedOnboarding: boolean
    fpgeeFormSubmitted: boolean
    fpgecApplicationSubmitted: boolean
    fpgeePassed: boolean
    fpgecCertficateIssued: boolean
    stateBoardApplicationCompleted: boolean
    passportScanSubmitted: boolean
    passportPhotoSubmitted: boolean
    pharmacyLicenseSubmitted: boolean
    goodStandingLetterSubmitted: boolean
    eceApplicationCompleted: boolean
    officialTranscriptsSent: boolean
    courseDescriptionsSubmitted: boolean
    eceEvaluationFeeePaid: boolean
    toeflTestRegistered: boolean
    toeflTestCompleted: boolean
    toeflScoresSent: boolean
    naplexEligibilityConfirmed: boolean
    naplexTestRegistered: boolean
    naplexPreparationCompleted: boolean
    naplexCompleted: boolean
    mpjeEligibilityConfirmed: boolean
    mpjePreparationCompleted: boolean
    mpjeTestRegistered: boolean
    mpjeTestCompleted: boolean
    internshipHoursCompleted: boolean
    pharmacyLicenseObtained: boolean
    maintainLicensure: boolean
    boardSpecialization: boolean
    dateOfBirth: Date | null
    gender: string | null
    phoneNumber: string | null
    timezone: string | null
    countryOfDegree: string | null
    degreeType: string | null
    graduationYear: string | null
    degreeFile: string | null
    passportFile: string | null
    licenseFile: string | null
    hasVisa: boolean | null
    visaType: string | null
    arrivalDate: Date | null
    preferredState: string | null
    selectedPackage: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    profileImage?: boolean
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    timezone?: boolean
    countryOfDegree?: boolean
    degreeType?: boolean
    graduationYear?: boolean
    degreeFile?: boolean
    passportFile?: boolean
    licenseFile?: boolean
    hasVisa?: boolean
    visaType?: boolean
    arrivalDate?: boolean
    preferredState?: boolean
    selectedPackage?: boolean
    documentCategories?: boolean | DocumentCategoryDefaultArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    packageSelections?: boolean | User$packageSelectionsArgs<ExtArgs>
    consultations?: boolean | User$consultationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    profileImage?: boolean
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    timezone?: boolean
    countryOfDegree?: boolean
    degreeType?: boolean
    graduationYear?: boolean
    degreeFile?: boolean
    passportFile?: boolean
    licenseFile?: boolean
    hasVisa?: boolean
    visaType?: boolean
    arrivalDate?: boolean
    preferredState?: boolean
    selectedPackage?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "profileImage" | "admin" | "verified" | "hasCompletedOnboarding" | "fpgeeFormSubmitted" | "fpgecApplicationSubmitted" | "fpgeePassed" | "fpgecCertficateIssued" | "stateBoardApplicationCompleted" | "passportScanSubmitted" | "passportPhotoSubmitted" | "pharmacyLicenseSubmitted" | "goodStandingLetterSubmitted" | "eceApplicationCompleted" | "officialTranscriptsSent" | "courseDescriptionsSubmitted" | "eceEvaluationFeeePaid" | "toeflTestRegistered" | "toeflTestCompleted" | "toeflScoresSent" | "naplexEligibilityConfirmed" | "naplexTestRegistered" | "naplexPreparationCompleted" | "naplexCompleted" | "mpjeEligibilityConfirmed" | "mpjePreparationCompleted" | "mpjeTestRegistered" | "mpjeTestCompleted" | "internshipHoursCompleted" | "pharmacyLicenseObtained" | "maintainLicensure" | "boardSpecialization" | "dateOfBirth" | "gender" | "phoneNumber" | "timezone" | "countryOfDegree" | "degreeType" | "graduationYear" | "degreeFile" | "passportFile" | "licenseFile" | "hasVisa" | "visaType" | "arrivalDate" | "preferredState" | "selectedPackage" | "documentCategories", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | User$documentsArgs<ExtArgs>
    packageSelections?: boolean | User$packageSelectionsArgs<ExtArgs>
    consultations?: boolean | User$consultationsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      packageSelections: Prisma.$PackageSelectionPayload<ExtArgs>[]
      consultations: Prisma.$ConsultationPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string | null
      createdAt: Date
      profileImage: string | null
      admin: boolean
      verified: boolean
      hasCompletedOnboarding: boolean
      fpgeeFormSubmitted: boolean
      fpgecApplicationSubmitted: boolean
      fpgeePassed: boolean
      fpgecCertficateIssued: boolean
      stateBoardApplicationCompleted: boolean
      passportScanSubmitted: boolean
      passportPhotoSubmitted: boolean
      pharmacyLicenseSubmitted: boolean
      goodStandingLetterSubmitted: boolean
      eceApplicationCompleted: boolean
      officialTranscriptsSent: boolean
      courseDescriptionsSubmitted: boolean
      eceEvaluationFeeePaid: boolean
      toeflTestRegistered: boolean
      toeflTestCompleted: boolean
      toeflScoresSent: boolean
      naplexEligibilityConfirmed: boolean
      naplexTestRegistered: boolean
      naplexPreparationCompleted: boolean
      naplexCompleted: boolean
      mpjeEligibilityConfirmed: boolean
      mpjePreparationCompleted: boolean
      mpjeTestRegistered: boolean
      mpjeTestCompleted: boolean
      internshipHoursCompleted: boolean
      pharmacyLicenseObtained: boolean
      maintainLicensure: boolean
      boardSpecialization: boolean
      dateOfBirth: Date | null
      gender: string | null
      phoneNumber: string | null
      timezone: string | null
      countryOfDegree: string | null
      degreeType: string | null
      graduationYear: string | null
      degreeFile: string | null
      passportFile: string | null
      licenseFile: string | null
      hasVisa: boolean | null
      visaType: string | null
      arrivalDate: Date | null
      preferredState: string | null
      selectedPackage: string | null
    }, ExtArgs["result"]["user"]>
    composites: {
      documentCategories: Prisma.$DocumentCategoryPayload[]
    }
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packageSelections<T extends User$packageSelectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$packageSelectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultations<T extends User$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, User$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly hasCompletedOnboarding: FieldRef<"User", 'Boolean'>
    readonly fpgeeFormSubmitted: FieldRef<"User", 'Boolean'>
    readonly fpgecApplicationSubmitted: FieldRef<"User", 'Boolean'>
    readonly fpgeePassed: FieldRef<"User", 'Boolean'>
    readonly fpgecCertficateIssued: FieldRef<"User", 'Boolean'>
    readonly stateBoardApplicationCompleted: FieldRef<"User", 'Boolean'>
    readonly passportScanSubmitted: FieldRef<"User", 'Boolean'>
    readonly passportPhotoSubmitted: FieldRef<"User", 'Boolean'>
    readonly pharmacyLicenseSubmitted: FieldRef<"User", 'Boolean'>
    readonly goodStandingLetterSubmitted: FieldRef<"User", 'Boolean'>
    readonly eceApplicationCompleted: FieldRef<"User", 'Boolean'>
    readonly officialTranscriptsSent: FieldRef<"User", 'Boolean'>
    readonly courseDescriptionsSubmitted: FieldRef<"User", 'Boolean'>
    readonly eceEvaluationFeeePaid: FieldRef<"User", 'Boolean'>
    readonly toeflTestRegistered: FieldRef<"User", 'Boolean'>
    readonly toeflTestCompleted: FieldRef<"User", 'Boolean'>
    readonly toeflScoresSent: FieldRef<"User", 'Boolean'>
    readonly naplexEligibilityConfirmed: FieldRef<"User", 'Boolean'>
    readonly naplexTestRegistered: FieldRef<"User", 'Boolean'>
    readonly naplexPreparationCompleted: FieldRef<"User", 'Boolean'>
    readonly naplexCompleted: FieldRef<"User", 'Boolean'>
    readonly mpjeEligibilityConfirmed: FieldRef<"User", 'Boolean'>
    readonly mpjePreparationCompleted: FieldRef<"User", 'Boolean'>
    readonly mpjeTestRegistered: FieldRef<"User", 'Boolean'>
    readonly mpjeTestCompleted: FieldRef<"User", 'Boolean'>
    readonly internshipHoursCompleted: FieldRef<"User", 'Boolean'>
    readonly pharmacyLicenseObtained: FieldRef<"User", 'Boolean'>
    readonly maintainLicensure: FieldRef<"User", 'Boolean'>
    readonly boardSpecialization: FieldRef<"User", 'Boolean'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly countryOfDegree: FieldRef<"User", 'String'>
    readonly degreeType: FieldRef<"User", 'String'>
    readonly graduationYear: FieldRef<"User", 'String'>
    readonly degreeFile: FieldRef<"User", 'String'>
    readonly passportFile: FieldRef<"User", 'String'>
    readonly licenseFile: FieldRef<"User", 'String'>
    readonly hasVisa: FieldRef<"User", 'Boolean'>
    readonly visaType: FieldRef<"User", 'String'>
    readonly arrivalDate: FieldRef<"User", 'DateTime'>
    readonly preferredState: FieldRef<"User", 'String'>
    readonly selectedPackage: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.packageSelections
   */
  export type User$packageSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    where?: PackageSelectionWhereInput
    orderBy?: PackageSelectionOrderByWithRelationInput | PackageSelectionOrderByWithRelationInput[]
    cursor?: PackageSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageSelectionScalarFieldEnum | PackageSelectionScalarFieldEnum[]
  }

  /**
   * User.consultations
   */
  export type User$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PackageSelection
   */

  export type AggregatePackageSelection = {
    _count: PackageSelectionCountAggregateOutputType | null
    _min: PackageSelectionMinAggregateOutputType | null
    _max: PackageSelectionMaxAggregateOutputType | null
  }

  export type PackageSelectionMinAggregateOutputType = {
    id: string | null
    packageName: string | null
    isPaid: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type PackageSelectionMaxAggregateOutputType = {
    id: string | null
    packageName: string | null
    isPaid: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type PackageSelectionCountAggregateOutputType = {
    id: number
    packageName: number
    isPaid: number
    isActive: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PackageSelectionMinAggregateInputType = {
    id?: true
    packageName?: true
    isPaid?: true
    isActive?: true
    createdAt?: true
    userId?: true
  }

  export type PackageSelectionMaxAggregateInputType = {
    id?: true
    packageName?: true
    isPaid?: true
    isActive?: true
    createdAt?: true
    userId?: true
  }

  export type PackageSelectionCountAggregateInputType = {
    id?: true
    packageName?: true
    isPaid?: true
    isActive?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PackageSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageSelection to aggregate.
     */
    where?: PackageSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageSelections to fetch.
     */
    orderBy?: PackageSelectionOrderByWithRelationInput | PackageSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageSelections
    **/
    _count?: true | PackageSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageSelectionMaxAggregateInputType
  }

  export type GetPackageSelectionAggregateType<T extends PackageSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageSelection[P]>
      : GetScalarType<T[P], AggregatePackageSelection[P]>
  }




  export type PackageSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageSelectionWhereInput
    orderBy?: PackageSelectionOrderByWithAggregationInput | PackageSelectionOrderByWithAggregationInput[]
    by: PackageSelectionScalarFieldEnum[] | PackageSelectionScalarFieldEnum
    having?: PackageSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageSelectionCountAggregateInputType | true
    _min?: PackageSelectionMinAggregateInputType
    _max?: PackageSelectionMaxAggregateInputType
  }

  export type PackageSelectionGroupByOutputType = {
    id: string
    packageName: string
    isPaid: boolean
    isActive: boolean
    createdAt: Date
    userId: string
    _count: PackageSelectionCountAggregateOutputType | null
    _min: PackageSelectionMinAggregateOutputType | null
    _max: PackageSelectionMaxAggregateOutputType | null
  }

  type GetPackageSelectionGroupByPayload<T extends PackageSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], PackageSelectionGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageName?: boolean
    isPaid?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageSelection"]>



  export type PackageSelectionSelectScalar = {
    id?: boolean
    packageName?: boolean
    isPaid?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type PackageSelectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "packageName" | "isPaid" | "isActive" | "createdAt" | "userId", ExtArgs["result"]["packageSelection"]>
  export type PackageSelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PackageSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageSelection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      packageName: string
      isPaid: boolean
      isActive: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["packageSelection"]>
    composites: {}
  }

  type PackageSelectionGetPayload<S extends boolean | null | undefined | PackageSelectionDefaultArgs> = $Result.GetResult<Prisma.$PackageSelectionPayload, S>

  type PackageSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageSelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageSelectionCountAggregateInputType | true
    }

  export interface PackageSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageSelection'], meta: { name: 'PackageSelection' } }
    /**
     * Find zero or one PackageSelection that matches the filter.
     * @param {PackageSelectionFindUniqueArgs} args - Arguments to find a PackageSelection
     * @example
     * // Get one PackageSelection
     * const packageSelection = await prisma.packageSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageSelectionFindUniqueArgs>(args: SelectSubset<T, PackageSelectionFindUniqueArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageSelection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageSelectionFindUniqueOrThrowArgs} args - Arguments to find a PackageSelection
     * @example
     * // Get one PackageSelection
     * const packageSelection = await prisma.packageSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionFindFirstArgs} args - Arguments to find a PackageSelection
     * @example
     * // Get one PackageSelection
     * const packageSelection = await prisma.packageSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageSelectionFindFirstArgs>(args?: SelectSubset<T, PackageSelectionFindFirstArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionFindFirstOrThrowArgs} args - Arguments to find a PackageSelection
     * @example
     * // Get one PackageSelection
     * const packageSelection = await prisma.packageSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageSelections
     * const packageSelections = await prisma.packageSelection.findMany()
     * 
     * // Get first 10 PackageSelections
     * const packageSelections = await prisma.packageSelection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageSelectionWithIdOnly = await prisma.packageSelection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageSelectionFindManyArgs>(args?: SelectSubset<T, PackageSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageSelection.
     * @param {PackageSelectionCreateArgs} args - Arguments to create a PackageSelection.
     * @example
     * // Create one PackageSelection
     * const PackageSelection = await prisma.packageSelection.create({
     *   data: {
     *     // ... data to create a PackageSelection
     *   }
     * })
     * 
     */
    create<T extends PackageSelectionCreateArgs>(args: SelectSubset<T, PackageSelectionCreateArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageSelections.
     * @param {PackageSelectionCreateManyArgs} args - Arguments to create many PackageSelections.
     * @example
     * // Create many PackageSelections
     * const packageSelection = await prisma.packageSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageSelectionCreateManyArgs>(args?: SelectSubset<T, PackageSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackageSelection.
     * @param {PackageSelectionDeleteArgs} args - Arguments to delete one PackageSelection.
     * @example
     * // Delete one PackageSelection
     * const PackageSelection = await prisma.packageSelection.delete({
     *   where: {
     *     // ... filter to delete one PackageSelection
     *   }
     * })
     * 
     */
    delete<T extends PackageSelectionDeleteArgs>(args: SelectSubset<T, PackageSelectionDeleteArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageSelection.
     * @param {PackageSelectionUpdateArgs} args - Arguments to update one PackageSelection.
     * @example
     * // Update one PackageSelection
     * const packageSelection = await prisma.packageSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageSelectionUpdateArgs>(args: SelectSubset<T, PackageSelectionUpdateArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageSelections.
     * @param {PackageSelectionDeleteManyArgs} args - Arguments to filter PackageSelections to delete.
     * @example
     * // Delete a few PackageSelections
     * const { count } = await prisma.packageSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageSelectionDeleteManyArgs>(args?: SelectSubset<T, PackageSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageSelections
     * const packageSelection = await prisma.packageSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageSelectionUpdateManyArgs>(args: SelectSubset<T, PackageSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackageSelection.
     * @param {PackageSelectionUpsertArgs} args - Arguments to update or create a PackageSelection.
     * @example
     * // Update or create a PackageSelection
     * const packageSelection = await prisma.packageSelection.upsert({
     *   create: {
     *     // ... data to create a PackageSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageSelection we want to update
     *   }
     * })
     */
    upsert<T extends PackageSelectionUpsertArgs>(args: SelectSubset<T, PackageSelectionUpsertArgs<ExtArgs>>): Prisma__PackageSelectionClient<$Result.GetResult<Prisma.$PackageSelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageSelections that matches the filter.
     * @param {PackageSelectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const packageSelection = await prisma.packageSelection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PackageSelectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PackageSelection.
     * @param {PackageSelectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const packageSelection = await prisma.packageSelection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PackageSelectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PackageSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionCountArgs} args - Arguments to filter PackageSelections to count.
     * @example
     * // Count the number of PackageSelections
     * const count = await prisma.packageSelection.count({
     *   where: {
     *     // ... the filter for the PackageSelections we want to count
     *   }
     * })
    **/
    count<T extends PackageSelectionCountArgs>(
      args?: Subset<T, PackageSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageSelectionAggregateArgs>(args: Subset<T, PackageSelectionAggregateArgs>): Prisma.PrismaPromise<GetPackageSelectionAggregateType<T>>

    /**
     * Group by PackageSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageSelectionGroupByArgs} args - Group by arguments.
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
      T extends PackageSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageSelectionGroupByArgs['orderBy'] }
        : { orderBy?: PackageSelectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackageSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageSelection model
   */
  readonly fields: PackageSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PackageSelection model
   */
  interface PackageSelectionFieldRefs {
    readonly id: FieldRef<"PackageSelection", 'String'>
    readonly packageName: FieldRef<"PackageSelection", 'String'>
    readonly isPaid: FieldRef<"PackageSelection", 'Boolean'>
    readonly isActive: FieldRef<"PackageSelection", 'Boolean'>
    readonly createdAt: FieldRef<"PackageSelection", 'DateTime'>
    readonly userId: FieldRef<"PackageSelection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackageSelection findUnique
   */
  export type PackageSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * Filter, which PackageSelection to fetch.
     */
    where: PackageSelectionWhereUniqueInput
  }

  /**
   * PackageSelection findUniqueOrThrow
   */
  export type PackageSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * Filter, which PackageSelection to fetch.
     */
    where: PackageSelectionWhereUniqueInput
  }

  /**
   * PackageSelection findFirst
   */
  export type PackageSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * Filter, which PackageSelection to fetch.
     */
    where?: PackageSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageSelections to fetch.
     */
    orderBy?: PackageSelectionOrderByWithRelationInput | PackageSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageSelections.
     */
    cursor?: PackageSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageSelections.
     */
    distinct?: PackageSelectionScalarFieldEnum | PackageSelectionScalarFieldEnum[]
  }

  /**
   * PackageSelection findFirstOrThrow
   */
  export type PackageSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * Filter, which PackageSelection to fetch.
     */
    where?: PackageSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageSelections to fetch.
     */
    orderBy?: PackageSelectionOrderByWithRelationInput | PackageSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageSelections.
     */
    cursor?: PackageSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageSelections.
     */
    distinct?: PackageSelectionScalarFieldEnum | PackageSelectionScalarFieldEnum[]
  }

  /**
   * PackageSelection findMany
   */
  export type PackageSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * Filter, which PackageSelections to fetch.
     */
    where?: PackageSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageSelections to fetch.
     */
    orderBy?: PackageSelectionOrderByWithRelationInput | PackageSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageSelections.
     */
    cursor?: PackageSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageSelections.
     */
    skip?: number
    distinct?: PackageSelectionScalarFieldEnum | PackageSelectionScalarFieldEnum[]
  }

  /**
   * PackageSelection create
   */
  export type PackageSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageSelection.
     */
    data: XOR<PackageSelectionCreateInput, PackageSelectionUncheckedCreateInput>
  }

  /**
   * PackageSelection createMany
   */
  export type PackageSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageSelections.
     */
    data: PackageSelectionCreateManyInput | PackageSelectionCreateManyInput[]
  }

  /**
   * PackageSelection update
   */
  export type PackageSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageSelection.
     */
    data: XOR<PackageSelectionUpdateInput, PackageSelectionUncheckedUpdateInput>
    /**
     * Choose, which PackageSelection to update.
     */
    where: PackageSelectionWhereUniqueInput
  }

  /**
   * PackageSelection updateMany
   */
  export type PackageSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageSelections.
     */
    data: XOR<PackageSelectionUpdateManyMutationInput, PackageSelectionUncheckedUpdateManyInput>
    /**
     * Filter which PackageSelections to update
     */
    where?: PackageSelectionWhereInput
    /**
     * Limit how many PackageSelections to update.
     */
    limit?: number
  }

  /**
   * PackageSelection upsert
   */
  export type PackageSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageSelection to update in case it exists.
     */
    where: PackageSelectionWhereUniqueInput
    /**
     * In case the PackageSelection found by the `where` argument doesn't exist, create a new PackageSelection with this data.
     */
    create: XOR<PackageSelectionCreateInput, PackageSelectionUncheckedCreateInput>
    /**
     * In case the PackageSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageSelectionUpdateInput, PackageSelectionUncheckedUpdateInput>
  }

  /**
   * PackageSelection delete
   */
  export type PackageSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
    /**
     * Filter which PackageSelection to delete.
     */
    where: PackageSelectionWhereUniqueInput
  }

  /**
   * PackageSelection deleteMany
   */
  export type PackageSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageSelections to delete
     */
    where?: PackageSelectionWhereInput
    /**
     * Limit how many PackageSelections to delete.
     */
    limit?: number
  }

  /**
   * PackageSelection findRaw
   */
  export type PackageSelectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PackageSelection aggregateRaw
   */
  export type PackageSelectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PackageSelection without action
   */
  export type PackageSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageSelection
     */
    select?: PackageSelectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageSelection
     */
    omit?: PackageSelectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageSelectionInclude<ExtArgs> | null
  }


  /**
   * Model Consultation
   */

  export type AggregateConsultation = {
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  export type ConsultationMinAggregateOutputType = {
    id: string | null
    date: Date | null
    isPaid: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type ConsultationMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    isPaid: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type ConsultationCountAggregateOutputType = {
    id: number
    date: number
    isPaid: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ConsultationMinAggregateInputType = {
    id?: true
    date?: true
    isPaid?: true
    createdAt?: true
    userId?: true
  }

  export type ConsultationMaxAggregateInputType = {
    id?: true
    date?: true
    isPaid?: true
    createdAt?: true
    userId?: true
  }

  export type ConsultationCountAggregateInputType = {
    id?: true
    date?: true
    isPaid?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ConsultationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultation to aggregate.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultations
    **/
    _count?: true | ConsultationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMaxAggregateInputType
  }

  export type GetConsultationAggregateType<T extends ConsultationAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultation[P]>
      : GetScalarType<T[P], AggregateConsultation[P]>
  }




  export type ConsultationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithAggregationInput | ConsultationOrderByWithAggregationInput[]
    by: ConsultationScalarFieldEnum[] | ConsultationScalarFieldEnum
    having?: ConsultationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationCountAggregateInputType | true
    _min?: ConsultationMinAggregateInputType
    _max?: ConsultationMaxAggregateInputType
  }

  export type ConsultationGroupByOutputType = {
    id: string
    date: Date
    isPaid: boolean
    createdAt: Date
    userId: string
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  type GetConsultationGroupByPayload<T extends ConsultationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    isPaid?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>



  export type ConsultationSelectScalar = {
    id?: boolean
    date?: boolean
    isPaid?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ConsultationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "isPaid" | "createdAt" | "userId", ExtArgs["result"]["consultation"]>
  export type ConsultationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsultationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      isPaid: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["consultation"]>
    composites: {}
  }

  type ConsultationGetPayload<S extends boolean | null | undefined | ConsultationDefaultArgs> = $Result.GetResult<Prisma.$ConsultationPayload, S>

  type ConsultationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationCountAggregateInputType | true
    }

  export interface ConsultationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultation'], meta: { name: 'Consultation' } }
    /**
     * Find zero or one Consultation that matches the filter.
     * @param {ConsultationFindUniqueArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationFindUniqueArgs>(args: SelectSubset<T, ConsultationFindUniqueArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationFindUniqueOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationFindFirstArgs>(args?: SelectSubset<T, ConsultationFindFirstArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultation.findMany()
     * 
     * // Get first 10 Consultations
     * const consultations = await prisma.consultation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationWithIdOnly = await prisma.consultation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationFindManyArgs>(args?: SelectSubset<T, ConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultation.
     * @param {ConsultationCreateArgs} args - Arguments to create a Consultation.
     * @example
     * // Create one Consultation
     * const Consultation = await prisma.consultation.create({
     *   data: {
     *     // ... data to create a Consultation
     *   }
     * })
     * 
     */
    create<T extends ConsultationCreateArgs>(args: SelectSubset<T, ConsultationCreateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultations.
     * @param {ConsultationCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationCreateManyArgs>(args?: SelectSubset<T, ConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Consultation.
     * @param {ConsultationDeleteArgs} args - Arguments to delete one Consultation.
     * @example
     * // Delete one Consultation
     * const Consultation = await prisma.consultation.delete({
     *   where: {
     *     // ... filter to delete one Consultation
     *   }
     * })
     * 
     */
    delete<T extends ConsultationDeleteArgs>(args: SelectSubset<T, ConsultationDeleteArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultation.
     * @param {ConsultationUpdateArgs} args - Arguments to update one Consultation.
     * @example
     * // Update one Consultation
     * const consultation = await prisma.consultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationUpdateArgs>(args: SelectSubset<T, ConsultationUpdateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultations.
     * @param {ConsultationDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationDeleteManyArgs>(args?: SelectSubset<T, ConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationUpdateManyArgs>(args: SelectSubset<T, ConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consultation.
     * @param {ConsultationUpsertArgs} args - Arguments to update or create a Consultation.
     * @example
     * // Update or create a Consultation
     * const consultation = await prisma.consultation.upsert({
     *   create: {
     *     // ... data to create a Consultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultation we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationUpsertArgs>(args: SelectSubset<T, ConsultationUpsertArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * @param {ConsultationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const consultation = await prisma.consultation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConsultationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Consultation.
     * @param {ConsultationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const consultation = await prisma.consultation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConsultationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultation.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCountArgs>(
      args?: Subset<T, ConsultationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultationAggregateArgs>(args: Subset<T, ConsultationAggregateArgs>): Prisma.PrismaPromise<GetConsultationAggregateType<T>>

    /**
     * Group by Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationGroupByArgs} args - Group by arguments.
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
      T extends ConsultationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultation model
   */
  readonly fields: ConsultationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultation model
   */
  interface ConsultationFieldRefs {
    readonly id: FieldRef<"Consultation", 'String'>
    readonly date: FieldRef<"Consultation", 'DateTime'>
    readonly isPaid: FieldRef<"Consultation", 'Boolean'>
    readonly createdAt: FieldRef<"Consultation", 'DateTime'>
    readonly userId: FieldRef<"Consultation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Consultation findUnique
   */
  export type ConsultationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findUniqueOrThrow
   */
  export type ConsultationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findFirst
   */
  export type ConsultationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findFirstOrThrow
   */
  export type ConsultationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findMany
   */
  export type ConsultationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation create
   */
  export type ConsultationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultation.
     */
    data: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
  }

  /**
   * Consultation createMany
   */
  export type ConsultationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
  }

  /**
   * Consultation update
   */
  export type ConsultationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultation.
     */
    data: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
    /**
     * Choose, which Consultation to update.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation updateMany
   */
  export type ConsultationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultation upsert
   */
  export type ConsultationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultation to update in case it exists.
     */
    where: ConsultationWhereUniqueInput
    /**
     * In case the Consultation found by the `where` argument doesn't exist, create a new Consultation with this data.
     */
    create: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
    /**
     * In case the Consultation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
  }

  /**
   * Consultation delete
   */
  export type ConsultationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter which Consultation to delete.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation deleteMany
   */
  export type ConsultationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number
  }

  /**
   * Consultation findRaw
   */
  export type ConsultationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Consultation aggregateRaw
   */
  export type ConsultationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Consultation without action
   */
  export type ConsultationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * @param {VerificationTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VerificationToken.
     * @param {VerificationTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verificationToken = await prisma.verificationToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken findRaw
   */
  export type VerificationTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken aggregateRaw
   */
  export type VerificationTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ownerName: string | null
    ownerEmail: string | null
    name: string | null
    type: string | null
    status: string | null
    uploadDate: Date | null
    size: string | null
    url: string | null
    notes: string | null
    category: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ownerName: string | null
    ownerEmail: string | null
    name: string | null
    type: string | null
    status: string | null
    uploadDate: Date | null
    size: string | null
    url: string | null
    notes: string | null
    category: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    userId: number
    ownerName: number
    ownerEmail: number
    name: number
    type: number
    status: number
    uploadDate: number
    size: number
    url: number
    notes: number
    category: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    userId?: true
    ownerName?: true
    ownerEmail?: true
    name?: true
    type?: true
    status?: true
    uploadDate?: true
    size?: true
    url?: true
    notes?: true
    category?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    ownerName?: true
    ownerEmail?: true
    name?: true
    type?: true
    status?: true
    uploadDate?: true
    size?: true
    url?: true
    notes?: true
    category?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    userId?: true
    ownerName?: true
    ownerEmail?: true
    name?: true
    type?: true
    status?: true
    uploadDate?: true
    size?: true
    url?: true
    notes?: true
    category?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    userId: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate: Date
    size: string
    url: string
    notes: string | null
    category: string
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    uploadDate?: boolean
    size?: boolean
    url?: boolean
    notes?: boolean
    category?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>



  export type DocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    ownerName?: boolean
    ownerEmail?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    uploadDate?: boolean
    size?: boolean
    url?: boolean
    notes?: boolean
    category?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ownerName" | "ownerEmail" | "name" | "type" | "status" | "uploadDate" | "size" | "url" | "notes" | "category", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ownerName: string
      ownerEmail: string
      name: string
      type: string
      status: string
      uploadDate: Date
      size: string
      url: string
      notes: string | null
      category: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * @param {DocumentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const document = await prisma.document.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DocumentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Document.
     * @param {DocumentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const document = await prisma.document.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DocumentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly userId: FieldRef<"Document", 'String'>
    readonly ownerName: FieldRef<"Document", 'String'>
    readonly ownerEmail: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'String'>
    readonly uploadDate: FieldRef<"Document", 'DateTime'>
    readonly size: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly notes: FieldRef<"Document", 'String'>
    readonly category: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document findRaw
   */
  export type DocumentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Document aggregateRaw
   */
  export type DocumentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    profileImage: 'profileImage',
    admin: 'admin',
    verified: 'verified',
    hasCompletedOnboarding: 'hasCompletedOnboarding',
    fpgeeFormSubmitted: 'fpgeeFormSubmitted',
    fpgecApplicationSubmitted: 'fpgecApplicationSubmitted',
    fpgeePassed: 'fpgeePassed',
    fpgecCertficateIssued: 'fpgecCertficateIssued',
    stateBoardApplicationCompleted: 'stateBoardApplicationCompleted',
    passportScanSubmitted: 'passportScanSubmitted',
    passportPhotoSubmitted: 'passportPhotoSubmitted',
    pharmacyLicenseSubmitted: 'pharmacyLicenseSubmitted',
    goodStandingLetterSubmitted: 'goodStandingLetterSubmitted',
    eceApplicationCompleted: 'eceApplicationCompleted',
    officialTranscriptsSent: 'officialTranscriptsSent',
    courseDescriptionsSubmitted: 'courseDescriptionsSubmitted',
    eceEvaluationFeeePaid: 'eceEvaluationFeeePaid',
    toeflTestRegistered: 'toeflTestRegistered',
    toeflTestCompleted: 'toeflTestCompleted',
    toeflScoresSent: 'toeflScoresSent',
    naplexEligibilityConfirmed: 'naplexEligibilityConfirmed',
    naplexTestRegistered: 'naplexTestRegistered',
    naplexPreparationCompleted: 'naplexPreparationCompleted',
    naplexCompleted: 'naplexCompleted',
    mpjeEligibilityConfirmed: 'mpjeEligibilityConfirmed',
    mpjePreparationCompleted: 'mpjePreparationCompleted',
    mpjeTestRegistered: 'mpjeTestRegistered',
    mpjeTestCompleted: 'mpjeTestCompleted',
    internshipHoursCompleted: 'internshipHoursCompleted',
    pharmacyLicenseObtained: 'pharmacyLicenseObtained',
    maintainLicensure: 'maintainLicensure',
    boardSpecialization: 'boardSpecialization',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    timezone: 'timezone',
    countryOfDegree: 'countryOfDegree',
    degreeType: 'degreeType',
    graduationYear: 'graduationYear',
    degreeFile: 'degreeFile',
    passportFile: 'passportFile',
    licenseFile: 'licenseFile',
    hasVisa: 'hasVisa',
    visaType: 'visaType',
    arrivalDate: 'arrivalDate',
    preferredState: 'preferredState',
    selectedPackage: 'selectedPackage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PackageSelectionScalarFieldEnum: {
    id: 'id',
    packageName: 'packageName',
    isPaid: 'isPaid',
    isActive: 'isActive',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PackageSelectionScalarFieldEnum = (typeof PackageSelectionScalarFieldEnum)[keyof typeof PackageSelectionScalarFieldEnum]


  export const ConsultationScalarFieldEnum: {
    id: 'id',
    date: 'date',
    isPaid: 'isPaid',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ownerName: 'ownerName',
    ownerEmail: 'ownerEmail',
    name: 'name',
    type: 'type',
    status: 'status',
    uploadDate: 'uploadDate',
    size: 'size',
    url: 'url',
    notes: 'notes',
    category: 'category'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    profileImage?: StringNullableFilter<"User"> | string | null
    admin?: BoolFilter<"User"> | boolean
    verified?: BoolFilter<"User"> | boolean
    hasCompletedOnboarding?: BoolFilter<"User"> | boolean
    fpgeeFormSubmitted?: BoolFilter<"User"> | boolean
    fpgecApplicationSubmitted?: BoolFilter<"User"> | boolean
    fpgeePassed?: BoolFilter<"User"> | boolean
    fpgecCertficateIssued?: BoolFilter<"User"> | boolean
    stateBoardApplicationCompleted?: BoolFilter<"User"> | boolean
    passportScanSubmitted?: BoolFilter<"User"> | boolean
    passportPhotoSubmitted?: BoolFilter<"User"> | boolean
    pharmacyLicenseSubmitted?: BoolFilter<"User"> | boolean
    goodStandingLetterSubmitted?: BoolFilter<"User"> | boolean
    eceApplicationCompleted?: BoolFilter<"User"> | boolean
    officialTranscriptsSent?: BoolFilter<"User"> | boolean
    courseDescriptionsSubmitted?: BoolFilter<"User"> | boolean
    eceEvaluationFeeePaid?: BoolFilter<"User"> | boolean
    toeflTestRegistered?: BoolFilter<"User"> | boolean
    toeflTestCompleted?: BoolFilter<"User"> | boolean
    toeflScoresSent?: BoolFilter<"User"> | boolean
    naplexEligibilityConfirmed?: BoolFilter<"User"> | boolean
    naplexTestRegistered?: BoolFilter<"User"> | boolean
    naplexPreparationCompleted?: BoolFilter<"User"> | boolean
    naplexCompleted?: BoolFilter<"User"> | boolean
    mpjeEligibilityConfirmed?: BoolFilter<"User"> | boolean
    mpjePreparationCompleted?: BoolFilter<"User"> | boolean
    mpjeTestRegistered?: BoolFilter<"User"> | boolean
    mpjeTestCompleted?: BoolFilter<"User"> | boolean
    internshipHoursCompleted?: BoolFilter<"User"> | boolean
    pharmacyLicenseObtained?: BoolFilter<"User"> | boolean
    maintainLicensure?: BoolFilter<"User"> | boolean
    boardSpecialization?: BoolFilter<"User"> | boolean
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    countryOfDegree?: StringNullableFilter<"User"> | string | null
    degreeType?: StringNullableFilter<"User"> | string | null
    graduationYear?: StringNullableFilter<"User"> | string | null
    degreeFile?: StringNullableFilter<"User"> | string | null
    passportFile?: StringNullableFilter<"User"> | string | null
    licenseFile?: StringNullableFilter<"User"> | string | null
    hasVisa?: BoolNullableFilter<"User"> | boolean | null
    visaType?: StringNullableFilter<"User"> | string | null
    arrivalDate?: DateTimeNullableFilter<"User"> | Date | string | null
    preferredState?: StringNullableFilter<"User"> | string | null
    selectedPackage?: StringNullableFilter<"User"> | string | null
    documentCategories?: DocumentCategoryCompositeListFilter | DocumentCategoryObjectEqualityInput[]
    documents?: DocumentListRelationFilter
    packageSelections?: PackageSelectionListRelationFilter
    consultations?: ConsultationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    profileImage?: SortOrder
    admin?: SortOrder
    verified?: SortOrder
    hasCompletedOnboarding?: SortOrder
    fpgeeFormSubmitted?: SortOrder
    fpgecApplicationSubmitted?: SortOrder
    fpgeePassed?: SortOrder
    fpgecCertficateIssued?: SortOrder
    stateBoardApplicationCompleted?: SortOrder
    passportScanSubmitted?: SortOrder
    passportPhotoSubmitted?: SortOrder
    pharmacyLicenseSubmitted?: SortOrder
    goodStandingLetterSubmitted?: SortOrder
    eceApplicationCompleted?: SortOrder
    officialTranscriptsSent?: SortOrder
    courseDescriptionsSubmitted?: SortOrder
    eceEvaluationFeeePaid?: SortOrder
    toeflTestRegistered?: SortOrder
    toeflTestCompleted?: SortOrder
    toeflScoresSent?: SortOrder
    naplexEligibilityConfirmed?: SortOrder
    naplexTestRegistered?: SortOrder
    naplexPreparationCompleted?: SortOrder
    naplexCompleted?: SortOrder
    mpjeEligibilityConfirmed?: SortOrder
    mpjePreparationCompleted?: SortOrder
    mpjeTestRegistered?: SortOrder
    mpjeTestCompleted?: SortOrder
    internshipHoursCompleted?: SortOrder
    pharmacyLicenseObtained?: SortOrder
    maintainLicensure?: SortOrder
    boardSpecialization?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    timezone?: SortOrder
    countryOfDegree?: SortOrder
    degreeType?: SortOrder
    graduationYear?: SortOrder
    degreeFile?: SortOrder
    passportFile?: SortOrder
    licenseFile?: SortOrder
    hasVisa?: SortOrder
    visaType?: SortOrder
    arrivalDate?: SortOrder
    preferredState?: SortOrder
    selectedPackage?: SortOrder
    documentCategories?: DocumentCategoryOrderByCompositeAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    packageSelections?: PackageSelectionOrderByRelationAggregateInput
    consultations?: ConsultationOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    profileImage?: StringNullableFilter<"User"> | string | null
    admin?: BoolFilter<"User"> | boolean
    verified?: BoolFilter<"User"> | boolean
    hasCompletedOnboarding?: BoolFilter<"User"> | boolean
    fpgeeFormSubmitted?: BoolFilter<"User"> | boolean
    fpgecApplicationSubmitted?: BoolFilter<"User"> | boolean
    fpgeePassed?: BoolFilter<"User"> | boolean
    fpgecCertficateIssued?: BoolFilter<"User"> | boolean
    stateBoardApplicationCompleted?: BoolFilter<"User"> | boolean
    passportScanSubmitted?: BoolFilter<"User"> | boolean
    passportPhotoSubmitted?: BoolFilter<"User"> | boolean
    pharmacyLicenseSubmitted?: BoolFilter<"User"> | boolean
    goodStandingLetterSubmitted?: BoolFilter<"User"> | boolean
    eceApplicationCompleted?: BoolFilter<"User"> | boolean
    officialTranscriptsSent?: BoolFilter<"User"> | boolean
    courseDescriptionsSubmitted?: BoolFilter<"User"> | boolean
    eceEvaluationFeeePaid?: BoolFilter<"User"> | boolean
    toeflTestRegistered?: BoolFilter<"User"> | boolean
    toeflTestCompleted?: BoolFilter<"User"> | boolean
    toeflScoresSent?: BoolFilter<"User"> | boolean
    naplexEligibilityConfirmed?: BoolFilter<"User"> | boolean
    naplexTestRegistered?: BoolFilter<"User"> | boolean
    naplexPreparationCompleted?: BoolFilter<"User"> | boolean
    naplexCompleted?: BoolFilter<"User"> | boolean
    mpjeEligibilityConfirmed?: BoolFilter<"User"> | boolean
    mpjePreparationCompleted?: BoolFilter<"User"> | boolean
    mpjeTestRegistered?: BoolFilter<"User"> | boolean
    mpjeTestCompleted?: BoolFilter<"User"> | boolean
    internshipHoursCompleted?: BoolFilter<"User"> | boolean
    pharmacyLicenseObtained?: BoolFilter<"User"> | boolean
    maintainLicensure?: BoolFilter<"User"> | boolean
    boardSpecialization?: BoolFilter<"User"> | boolean
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    countryOfDegree?: StringNullableFilter<"User"> | string | null
    degreeType?: StringNullableFilter<"User"> | string | null
    graduationYear?: StringNullableFilter<"User"> | string | null
    degreeFile?: StringNullableFilter<"User"> | string | null
    passportFile?: StringNullableFilter<"User"> | string | null
    licenseFile?: StringNullableFilter<"User"> | string | null
    hasVisa?: BoolNullableFilter<"User"> | boolean | null
    visaType?: StringNullableFilter<"User"> | string | null
    arrivalDate?: DateTimeNullableFilter<"User"> | Date | string | null
    preferredState?: StringNullableFilter<"User"> | string | null
    selectedPackage?: StringNullableFilter<"User"> | string | null
    documentCategories?: DocumentCategoryCompositeListFilter | DocumentCategoryObjectEqualityInput[]
    documents?: DocumentListRelationFilter
    packageSelections?: PackageSelectionListRelationFilter
    consultations?: ConsultationListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    profileImage?: SortOrder
    admin?: SortOrder
    verified?: SortOrder
    hasCompletedOnboarding?: SortOrder
    fpgeeFormSubmitted?: SortOrder
    fpgecApplicationSubmitted?: SortOrder
    fpgeePassed?: SortOrder
    fpgecCertficateIssued?: SortOrder
    stateBoardApplicationCompleted?: SortOrder
    passportScanSubmitted?: SortOrder
    passportPhotoSubmitted?: SortOrder
    pharmacyLicenseSubmitted?: SortOrder
    goodStandingLetterSubmitted?: SortOrder
    eceApplicationCompleted?: SortOrder
    officialTranscriptsSent?: SortOrder
    courseDescriptionsSubmitted?: SortOrder
    eceEvaluationFeeePaid?: SortOrder
    toeflTestRegistered?: SortOrder
    toeflTestCompleted?: SortOrder
    toeflScoresSent?: SortOrder
    naplexEligibilityConfirmed?: SortOrder
    naplexTestRegistered?: SortOrder
    naplexPreparationCompleted?: SortOrder
    naplexCompleted?: SortOrder
    mpjeEligibilityConfirmed?: SortOrder
    mpjePreparationCompleted?: SortOrder
    mpjeTestRegistered?: SortOrder
    mpjeTestCompleted?: SortOrder
    internshipHoursCompleted?: SortOrder
    pharmacyLicenseObtained?: SortOrder
    maintainLicensure?: SortOrder
    boardSpecialization?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    timezone?: SortOrder
    countryOfDegree?: SortOrder
    degreeType?: SortOrder
    graduationYear?: SortOrder
    degreeFile?: SortOrder
    passportFile?: SortOrder
    licenseFile?: SortOrder
    hasVisa?: SortOrder
    visaType?: SortOrder
    arrivalDate?: SortOrder
    preferredState?: SortOrder
    selectedPackage?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    hasCompletedOnboarding?: BoolWithAggregatesFilter<"User"> | boolean
    fpgeeFormSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    fpgecApplicationSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    fpgeePassed?: BoolWithAggregatesFilter<"User"> | boolean
    fpgecCertficateIssued?: BoolWithAggregatesFilter<"User"> | boolean
    stateBoardApplicationCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    passportScanSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    passportPhotoSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    pharmacyLicenseSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    goodStandingLetterSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    eceApplicationCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    officialTranscriptsSent?: BoolWithAggregatesFilter<"User"> | boolean
    courseDescriptionsSubmitted?: BoolWithAggregatesFilter<"User"> | boolean
    eceEvaluationFeeePaid?: BoolWithAggregatesFilter<"User"> | boolean
    toeflTestRegistered?: BoolWithAggregatesFilter<"User"> | boolean
    toeflTestCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    toeflScoresSent?: BoolWithAggregatesFilter<"User"> | boolean
    naplexEligibilityConfirmed?: BoolWithAggregatesFilter<"User"> | boolean
    naplexTestRegistered?: BoolWithAggregatesFilter<"User"> | boolean
    naplexPreparationCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    naplexCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    mpjeEligibilityConfirmed?: BoolWithAggregatesFilter<"User"> | boolean
    mpjePreparationCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    mpjeTestRegistered?: BoolWithAggregatesFilter<"User"> | boolean
    mpjeTestCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    internshipHoursCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    pharmacyLicenseObtained?: BoolWithAggregatesFilter<"User"> | boolean
    maintainLicensure?: BoolWithAggregatesFilter<"User"> | boolean
    boardSpecialization?: BoolWithAggregatesFilter<"User"> | boolean
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"User"> | string | null
    countryOfDegree?: StringNullableWithAggregatesFilter<"User"> | string | null
    degreeType?: StringNullableWithAggregatesFilter<"User"> | string | null
    graduationYear?: StringNullableWithAggregatesFilter<"User"> | string | null
    degreeFile?: StringNullableWithAggregatesFilter<"User"> | string | null
    passportFile?: StringNullableWithAggregatesFilter<"User"> | string | null
    licenseFile?: StringNullableWithAggregatesFilter<"User"> | string | null
    hasVisa?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    visaType?: StringNullableWithAggregatesFilter<"User"> | string | null
    arrivalDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    preferredState?: StringNullableWithAggregatesFilter<"User"> | string | null
    selectedPackage?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PackageSelectionWhereInput = {
    AND?: PackageSelectionWhereInput | PackageSelectionWhereInput[]
    OR?: PackageSelectionWhereInput[]
    NOT?: PackageSelectionWhereInput | PackageSelectionWhereInput[]
    id?: StringFilter<"PackageSelection"> | string
    packageName?: StringFilter<"PackageSelection"> | string
    isPaid?: BoolFilter<"PackageSelection"> | boolean
    isActive?: BoolFilter<"PackageSelection"> | boolean
    createdAt?: DateTimeFilter<"PackageSelection"> | Date | string
    userId?: StringFilter<"PackageSelection"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PackageSelectionOrderByWithRelationInput = {
    id?: SortOrder
    packageName?: SortOrder
    isPaid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PackageSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageSelectionWhereInput | PackageSelectionWhereInput[]
    OR?: PackageSelectionWhereInput[]
    NOT?: PackageSelectionWhereInput | PackageSelectionWhereInput[]
    packageName?: StringFilter<"PackageSelection"> | string
    isPaid?: BoolFilter<"PackageSelection"> | boolean
    isActive?: BoolFilter<"PackageSelection"> | boolean
    createdAt?: DateTimeFilter<"PackageSelection"> | Date | string
    userId?: StringFilter<"PackageSelection"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PackageSelectionOrderByWithAggregationInput = {
    id?: SortOrder
    packageName?: SortOrder
    isPaid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: PackageSelectionCountOrderByAggregateInput
    _max?: PackageSelectionMaxOrderByAggregateInput
    _min?: PackageSelectionMinOrderByAggregateInput
  }

  export type PackageSelectionScalarWhereWithAggregatesInput = {
    AND?: PackageSelectionScalarWhereWithAggregatesInput | PackageSelectionScalarWhereWithAggregatesInput[]
    OR?: PackageSelectionScalarWhereWithAggregatesInput[]
    NOT?: PackageSelectionScalarWhereWithAggregatesInput | PackageSelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageSelection"> | string
    packageName?: StringWithAggregatesFilter<"PackageSelection"> | string
    isPaid?: BoolWithAggregatesFilter<"PackageSelection"> | boolean
    isActive?: BoolWithAggregatesFilter<"PackageSelection"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PackageSelection"> | Date | string
    userId?: StringWithAggregatesFilter<"PackageSelection"> | string
  }

  export type ConsultationWhereInput = {
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    id?: StringFilter<"Consultation"> | string
    date?: DateTimeFilter<"Consultation"> | Date | string
    isPaid?: BoolFilter<"Consultation"> | boolean
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    userId?: StringFilter<"Consultation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConsultationOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    date?: DateTimeFilter<"Consultation"> | Date | string
    isPaid?: BoolFilter<"Consultation"> | boolean
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    userId?: StringFilter<"Consultation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConsultationOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ConsultationCountOrderByAggregateInput
    _max?: ConsultationMaxOrderByAggregateInput
    _min?: ConsultationMinOrderByAggregateInput
  }

  export type ConsultationScalarWhereWithAggregatesInput = {
    AND?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    OR?: ConsultationScalarWhereWithAggregatesInput[]
    NOT?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultation"> | string
    date?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    isPaid?: BoolWithAggregatesFilter<"Consultation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    userId?: StringWithAggregatesFilter<"Consultation"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    ownerName?: StringFilter<"Document"> | string
    ownerEmail?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    size?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    notes?: StringNullableFilter<"Document"> | string | null
    category?: StringFilter<"Document"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    uploadDate?: SortOrder
    size?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    userId?: StringFilter<"Document"> | string
    ownerName?: StringFilter<"Document"> | string
    ownerEmail?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    size?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    notes?: StringNullableFilter<"Document"> | string | null
    category?: StringFilter<"Document"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    uploadDate?: SortOrder
    size?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    userId?: StringWithAggregatesFilter<"Document"> | string
    ownerName?: StringWithAggregatesFilter<"Document"> | string
    ownerEmail?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    status?: StringWithAggregatesFilter<"Document"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    size?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    notes?: StringNullableWithAggregatesFilter<"Document"> | string | null
    category?: StringWithAggregatesFilter<"Document"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionCreateNestedManyWithoutUserInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionUncheckedCreateNestedManyWithoutUserInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUncheckedUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
  }

  export type PackageSelectionCreateInput = {
    id?: string
    packageName: string
    isPaid?: boolean
    isActive?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPackageSelectionsInput
  }

  export type PackageSelectionUncheckedCreateInput = {
    id?: string
    packageName: string
    isPaid?: boolean
    isActive?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type PackageSelectionUpdateInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPackageSelectionsNestedInput
  }

  export type PackageSelectionUncheckedUpdateInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PackageSelectionCreateManyInput = {
    id?: string
    packageName: string
    isPaid?: boolean
    isActive?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type PackageSelectionUpdateManyMutationInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageSelectionUncheckedUpdateManyInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultationCreateInput = {
    id?: string
    date: Date | string
    isPaid?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateInput = {
    id?: string
    date: Date | string
    isPaid?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type ConsultationUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultationCreateManyInput = {
    id?: string
    date: Date | string
    isPaid?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type ConsultationUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate?: Date | string
    size: string
    url: string
    notes?: string | null
    category: string
    user: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    userId: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate?: Date | string
    size: string
    url: string
    notes?: string | null
    category: string
  }

  export type DocumentUpdateInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    userId: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate?: Date | string
    size: string
    url: string
    notes?: string | null
    category: string
  }

  export type DocumentUpdateManyMutationInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type DocumentCategoryCompositeListFilter = {
    equals?: DocumentCategoryObjectEqualityInput[]
    every?: DocumentCategoryWhereInput
    some?: DocumentCategoryWhereInput
    none?: DocumentCategoryWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type DocumentCategoryObjectEqualityInput = {
    id: string
    title: string
    documents?: DocumentsObjectEqualityInput[]
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type PackageSelectionListRelationFilter = {
    every?: PackageSelectionWhereInput
    some?: PackageSelectionWhereInput
    none?: PackageSelectionWhereInput
  }

  export type ConsultationListRelationFilter = {
    every?: ConsultationWhereInput
    some?: ConsultationWhereInput
    none?: ConsultationWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type DocumentCategoryOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageSelectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    profileImage?: SortOrder
    admin?: SortOrder
    verified?: SortOrder
    hasCompletedOnboarding?: SortOrder
    fpgeeFormSubmitted?: SortOrder
    fpgecApplicationSubmitted?: SortOrder
    fpgeePassed?: SortOrder
    fpgecCertficateIssued?: SortOrder
    stateBoardApplicationCompleted?: SortOrder
    passportScanSubmitted?: SortOrder
    passportPhotoSubmitted?: SortOrder
    pharmacyLicenseSubmitted?: SortOrder
    goodStandingLetterSubmitted?: SortOrder
    eceApplicationCompleted?: SortOrder
    officialTranscriptsSent?: SortOrder
    courseDescriptionsSubmitted?: SortOrder
    eceEvaluationFeeePaid?: SortOrder
    toeflTestRegistered?: SortOrder
    toeflTestCompleted?: SortOrder
    toeflScoresSent?: SortOrder
    naplexEligibilityConfirmed?: SortOrder
    naplexTestRegistered?: SortOrder
    naplexPreparationCompleted?: SortOrder
    naplexCompleted?: SortOrder
    mpjeEligibilityConfirmed?: SortOrder
    mpjePreparationCompleted?: SortOrder
    mpjeTestRegistered?: SortOrder
    mpjeTestCompleted?: SortOrder
    internshipHoursCompleted?: SortOrder
    pharmacyLicenseObtained?: SortOrder
    maintainLicensure?: SortOrder
    boardSpecialization?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    timezone?: SortOrder
    countryOfDegree?: SortOrder
    degreeType?: SortOrder
    graduationYear?: SortOrder
    degreeFile?: SortOrder
    passportFile?: SortOrder
    licenseFile?: SortOrder
    hasVisa?: SortOrder
    visaType?: SortOrder
    arrivalDate?: SortOrder
    preferredState?: SortOrder
    selectedPackage?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    profileImage?: SortOrder
    admin?: SortOrder
    verified?: SortOrder
    hasCompletedOnboarding?: SortOrder
    fpgeeFormSubmitted?: SortOrder
    fpgecApplicationSubmitted?: SortOrder
    fpgeePassed?: SortOrder
    fpgecCertficateIssued?: SortOrder
    stateBoardApplicationCompleted?: SortOrder
    passportScanSubmitted?: SortOrder
    passportPhotoSubmitted?: SortOrder
    pharmacyLicenseSubmitted?: SortOrder
    goodStandingLetterSubmitted?: SortOrder
    eceApplicationCompleted?: SortOrder
    officialTranscriptsSent?: SortOrder
    courseDescriptionsSubmitted?: SortOrder
    eceEvaluationFeeePaid?: SortOrder
    toeflTestRegistered?: SortOrder
    toeflTestCompleted?: SortOrder
    toeflScoresSent?: SortOrder
    naplexEligibilityConfirmed?: SortOrder
    naplexTestRegistered?: SortOrder
    naplexPreparationCompleted?: SortOrder
    naplexCompleted?: SortOrder
    mpjeEligibilityConfirmed?: SortOrder
    mpjePreparationCompleted?: SortOrder
    mpjeTestRegistered?: SortOrder
    mpjeTestCompleted?: SortOrder
    internshipHoursCompleted?: SortOrder
    pharmacyLicenseObtained?: SortOrder
    maintainLicensure?: SortOrder
    boardSpecialization?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    timezone?: SortOrder
    countryOfDegree?: SortOrder
    degreeType?: SortOrder
    graduationYear?: SortOrder
    degreeFile?: SortOrder
    passportFile?: SortOrder
    licenseFile?: SortOrder
    hasVisa?: SortOrder
    visaType?: SortOrder
    arrivalDate?: SortOrder
    preferredState?: SortOrder
    selectedPackage?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    profileImage?: SortOrder
    admin?: SortOrder
    verified?: SortOrder
    hasCompletedOnboarding?: SortOrder
    fpgeeFormSubmitted?: SortOrder
    fpgecApplicationSubmitted?: SortOrder
    fpgeePassed?: SortOrder
    fpgecCertficateIssued?: SortOrder
    stateBoardApplicationCompleted?: SortOrder
    passportScanSubmitted?: SortOrder
    passportPhotoSubmitted?: SortOrder
    pharmacyLicenseSubmitted?: SortOrder
    goodStandingLetterSubmitted?: SortOrder
    eceApplicationCompleted?: SortOrder
    officialTranscriptsSent?: SortOrder
    courseDescriptionsSubmitted?: SortOrder
    eceEvaluationFeeePaid?: SortOrder
    toeflTestRegistered?: SortOrder
    toeflTestCompleted?: SortOrder
    toeflScoresSent?: SortOrder
    naplexEligibilityConfirmed?: SortOrder
    naplexTestRegistered?: SortOrder
    naplexPreparationCompleted?: SortOrder
    naplexCompleted?: SortOrder
    mpjeEligibilityConfirmed?: SortOrder
    mpjePreparationCompleted?: SortOrder
    mpjeTestRegistered?: SortOrder
    mpjeTestCompleted?: SortOrder
    internshipHoursCompleted?: SortOrder
    pharmacyLicenseObtained?: SortOrder
    maintainLicensure?: SortOrder
    boardSpecialization?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    timezone?: SortOrder
    countryOfDegree?: SortOrder
    degreeType?: SortOrder
    graduationYear?: SortOrder
    degreeFile?: SortOrder
    passportFile?: SortOrder
    licenseFile?: SortOrder
    hasVisa?: SortOrder
    visaType?: SortOrder
    arrivalDate?: SortOrder
    preferredState?: SortOrder
    selectedPackage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PackageSelectionCountOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    isPaid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PackageSelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    isPaid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PackageSelectionMinOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    isPaid?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ConsultationCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ConsultationMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ConsultationMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    uploadDate?: SortOrder
    size?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    category?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    uploadDate?: SortOrder
    size?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    category?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ownerName?: SortOrder
    ownerEmail?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    uploadDate?: SortOrder
    size?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    category?: SortOrder
  }

  export type DocumentCategoryListCreateEnvelopeInput = {
    set?: DocumentCategoryCreateInput | DocumentCategoryCreateInput[]
  }

  export type DocumentCategoryCreateInput = {
    id: string
    title: string
    documents?: DocumentsCreateInput | DocumentsCreateInput[]
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type PackageSelectionCreateNestedManyWithoutUserInput = {
    create?: XOR<PackageSelectionCreateWithoutUserInput, PackageSelectionUncheckedCreateWithoutUserInput> | PackageSelectionCreateWithoutUserInput[] | PackageSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PackageSelectionCreateOrConnectWithoutUserInput | PackageSelectionCreateOrConnectWithoutUserInput[]
    createMany?: PackageSelectionCreateManyUserInputEnvelope
    connect?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
  }

  export type ConsultationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type PackageSelectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PackageSelectionCreateWithoutUserInput, PackageSelectionUncheckedCreateWithoutUserInput> | PackageSelectionCreateWithoutUserInput[] | PackageSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PackageSelectionCreateOrConnectWithoutUserInput | PackageSelectionCreateOrConnectWithoutUserInput[]
    createMany?: PackageSelectionCreateManyUserInputEnvelope
    connect?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type DocumentCategoryListUpdateEnvelopeInput = {
    set?: DocumentCategoryCreateInput | DocumentCategoryCreateInput[]
    push?: DocumentCategoryCreateInput | DocumentCategoryCreateInput[]
    updateMany?: DocumentCategoryUpdateManyInput
    deleteMany?: DocumentCategoryDeleteManyInput
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PackageSelectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PackageSelectionCreateWithoutUserInput, PackageSelectionUncheckedCreateWithoutUserInput> | PackageSelectionCreateWithoutUserInput[] | PackageSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PackageSelectionCreateOrConnectWithoutUserInput | PackageSelectionCreateOrConnectWithoutUserInput[]
    upsert?: PackageSelectionUpsertWithWhereUniqueWithoutUserInput | PackageSelectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PackageSelectionCreateManyUserInputEnvelope
    set?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    disconnect?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    delete?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    connect?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    update?: PackageSelectionUpdateWithWhereUniqueWithoutUserInput | PackageSelectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PackageSelectionUpdateManyWithWhereWithoutUserInput | PackageSelectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PackageSelectionScalarWhereInput | PackageSelectionScalarWhereInput[]
  }

  export type ConsultationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutUserInput | ConsultationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutUserInput | ConsultationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutUserInput | ConsultationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PackageSelectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PackageSelectionCreateWithoutUserInput, PackageSelectionUncheckedCreateWithoutUserInput> | PackageSelectionCreateWithoutUserInput[] | PackageSelectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PackageSelectionCreateOrConnectWithoutUserInput | PackageSelectionCreateOrConnectWithoutUserInput[]
    upsert?: PackageSelectionUpsertWithWhereUniqueWithoutUserInput | PackageSelectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PackageSelectionCreateManyUserInputEnvelope
    set?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    disconnect?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    delete?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    connect?: PackageSelectionWhereUniqueInput | PackageSelectionWhereUniqueInput[]
    update?: PackageSelectionUpdateWithWhereUniqueWithoutUserInput | PackageSelectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PackageSelectionUpdateManyWithWhereWithoutUserInput | PackageSelectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PackageSelectionScalarWhereInput | PackageSelectionScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput> | ConsultationCreateWithoutUserInput[] | ConsultationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutUserInput | ConsultationCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutUserInput | ConsultationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationCreateManyUserInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutUserInput | ConsultationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutUserInput | ConsultationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPackageSelectionsInput = {
    create?: XOR<UserCreateWithoutPackageSelectionsInput, UserUncheckedCreateWithoutPackageSelectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPackageSelectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPackageSelectionsNestedInput = {
    create?: XOR<UserCreateWithoutPackageSelectionsInput, UserUncheckedCreateWithoutPackageSelectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPackageSelectionsInput
    upsert?: UserUpsertWithoutPackageSelectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPackageSelectionsInput, UserUpdateWithoutPackageSelectionsInput>, UserUncheckedUpdateWithoutPackageSelectionsInput>
  }

  export type UserCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationsInput
    upsert?: UserUpsertWithoutConsultationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultationsInput, UserUpdateWithoutConsultationsInput>, UserUncheckedUpdateWithoutConsultationsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type DocumentCategoryWhereInput = {
    AND?: DocumentCategoryWhereInput | DocumentCategoryWhereInput[]
    OR?: DocumentCategoryWhereInput[]
    NOT?: DocumentCategoryWhereInput | DocumentCategoryWhereInput[]
    id?: StringFilter<"DocumentCategory"> | string
    title?: StringFilter<"DocumentCategory"> | string
    documents?: DocumentsCompositeListFilter | DocumentsObjectEqualityInput[]
  }

  export type DocumentsObjectEqualityInput = {
    id: string
    name: string
    type: string
    status: string
    uploadDate?: string | null
    size?: string | null
    notes?: string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DocumentsCreateInput = {
    id: string
    name: string
    type: string
    status: string
    uploadDate?: string | null
    size?: string | null
    notes?: string | null
  }

  export type DocumentCreateWithoutUserInput = {
    id?: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate?: Date | string
    size: string
    url: string
    notes?: string | null
    category: string
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate?: Date | string
    size: string
    url: string
    notes?: string | null
    category: string
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
  }

  export type PackageSelectionCreateWithoutUserInput = {
    id?: string
    packageName: string
    isPaid?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PackageSelectionUncheckedCreateWithoutUserInput = {
    id?: string
    packageName: string
    isPaid?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PackageSelectionCreateOrConnectWithoutUserInput = {
    where: PackageSelectionWhereUniqueInput
    create: XOR<PackageSelectionCreateWithoutUserInput, PackageSelectionUncheckedCreateWithoutUserInput>
  }

  export type PackageSelectionCreateManyUserInputEnvelope = {
    data: PackageSelectionCreateManyUserInput | PackageSelectionCreateManyUserInput[]
  }

  export type ConsultationCreateWithoutUserInput = {
    id?: string
    date: Date | string
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type ConsultationUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type ConsultationCreateOrConnectWithoutUserInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput>
  }

  export type ConsultationCreateManyUserInputEnvelope = {
    data: ConsultationCreateManyUserInput | ConsultationCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type DocumentCategoryUpdateManyInput = {
    where: DocumentCategoryWhereInput
    data: DocumentCategoryUpdateInput
  }

  export type DocumentCategoryDeleteManyInput = {
    where: DocumentCategoryWhereInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    ownerName?: StringFilter<"Document"> | string
    ownerEmail?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    size?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    notes?: StringNullableFilter<"Document"> | string | null
    category?: StringFilter<"Document"> | string
  }

  export type PackageSelectionUpsertWithWhereUniqueWithoutUserInput = {
    where: PackageSelectionWhereUniqueInput
    update: XOR<PackageSelectionUpdateWithoutUserInput, PackageSelectionUncheckedUpdateWithoutUserInput>
    create: XOR<PackageSelectionCreateWithoutUserInput, PackageSelectionUncheckedCreateWithoutUserInput>
  }

  export type PackageSelectionUpdateWithWhereUniqueWithoutUserInput = {
    where: PackageSelectionWhereUniqueInput
    data: XOR<PackageSelectionUpdateWithoutUserInput, PackageSelectionUncheckedUpdateWithoutUserInput>
  }

  export type PackageSelectionUpdateManyWithWhereWithoutUserInput = {
    where: PackageSelectionScalarWhereInput
    data: XOR<PackageSelectionUpdateManyMutationInput, PackageSelectionUncheckedUpdateManyWithoutUserInput>
  }

  export type PackageSelectionScalarWhereInput = {
    AND?: PackageSelectionScalarWhereInput | PackageSelectionScalarWhereInput[]
    OR?: PackageSelectionScalarWhereInput[]
    NOT?: PackageSelectionScalarWhereInput | PackageSelectionScalarWhereInput[]
    id?: StringFilter<"PackageSelection"> | string
    packageName?: StringFilter<"PackageSelection"> | string
    isPaid?: BoolFilter<"PackageSelection"> | boolean
    isActive?: BoolFilter<"PackageSelection"> | boolean
    createdAt?: DateTimeFilter<"PackageSelection"> | Date | string
    userId?: StringFilter<"PackageSelection"> | string
  }

  export type ConsultationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutUserInput, ConsultationUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultationCreateWithoutUserInput, ConsultationUncheckedCreateWithoutUserInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutUserInput, ConsultationUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutUserInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsultationScalarWhereInput = {
    AND?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    OR?: ConsultationScalarWhereInput[]
    NOT?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    id?: StringFilter<"Consultation"> | string
    date?: DateTimeFilter<"Consultation"> | Date | string
    isPaid?: BoolFilter<"Consultation"> | boolean
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    userId?: StringFilter<"Consultation"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutPackageSelectionsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentCreateNestedManyWithoutUserInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPackageSelectionsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPackageSelectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPackageSelectionsInput, UserUncheckedCreateWithoutPackageSelectionsInput>
  }

  export type UserUpsertWithoutPackageSelectionsInput = {
    update: XOR<UserUpdateWithoutPackageSelectionsInput, UserUncheckedUpdateWithoutPackageSelectionsInput>
    create: XOR<UserCreateWithoutPackageSelectionsInput, UserUncheckedCreateWithoutPackageSelectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPackageSelectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPackageSelectionsInput, UserUncheckedUpdateWithoutPackageSelectionsInput>
  }

  export type UserUpdateWithoutPackageSelectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPackageSelectionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConsultationsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsultationsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsultationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
  }

  export type UserUpsertWithoutConsultationsInput = {
    update: XOR<UserUpdateWithoutConsultationsInput, UserUncheckedUpdateWithoutConsultationsInput>
    create: XOR<UserCreateWithoutConsultationsInput, UserUncheckedCreateWithoutConsultationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultationsInput, UserUncheckedUpdateWithoutConsultationsInput>
  }

  export type UserUpdateWithoutConsultationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionCreateNestedManyWithoutUserInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionUncheckedCreateNestedManyWithoutUserInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUncheckedUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionCreateNestedManyWithoutUserInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    packageSelections?: PackageSelectionUncheckedCreateNestedManyWithoutUserInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    packageSelections?: PackageSelectionUncheckedUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    packageSelections?: PackageSelectionCreateNestedManyWithoutUserInput
    consultations?: ConsultationCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    createdAt?: Date | string
    profileImage?: string | null
    admin?: boolean
    verified?: boolean
    hasCompletedOnboarding?: boolean
    fpgeeFormSubmitted?: boolean
    fpgecApplicationSubmitted?: boolean
    fpgeePassed?: boolean
    fpgecCertficateIssued?: boolean
    stateBoardApplicationCompleted?: boolean
    passportScanSubmitted?: boolean
    passportPhotoSubmitted?: boolean
    pharmacyLicenseSubmitted?: boolean
    goodStandingLetterSubmitted?: boolean
    eceApplicationCompleted?: boolean
    officialTranscriptsSent?: boolean
    courseDescriptionsSubmitted?: boolean
    eceEvaluationFeeePaid?: boolean
    toeflTestRegistered?: boolean
    toeflTestCompleted?: boolean
    toeflScoresSent?: boolean
    naplexEligibilityConfirmed?: boolean
    naplexTestRegistered?: boolean
    naplexPreparationCompleted?: boolean
    naplexCompleted?: boolean
    mpjeEligibilityConfirmed?: boolean
    mpjePreparationCompleted?: boolean
    mpjeTestRegistered?: boolean
    mpjeTestCompleted?: boolean
    internshipHoursCompleted?: boolean
    pharmacyLicenseObtained?: boolean
    maintainLicensure?: boolean
    boardSpecialization?: boolean
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    timezone?: string | null
    countryOfDegree?: string | null
    degreeType?: string | null
    graduationYear?: string | null
    degreeFile?: string | null
    passportFile?: string | null
    licenseFile?: string | null
    hasVisa?: boolean | null
    visaType?: string | null
    arrivalDate?: Date | string | null
    preferredState?: string | null
    selectedPackage?: string | null
    documentCategories?: XOR<DocumentCategoryListCreateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    packageSelections?: PackageSelectionUncheckedCreateNestedManyWithoutUserInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    packageSelections?: PackageSelectionUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    hasCompletedOnboarding?: BoolFieldUpdateOperationsInput | boolean
    fpgeeFormSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgecApplicationSubmitted?: BoolFieldUpdateOperationsInput | boolean
    fpgeePassed?: BoolFieldUpdateOperationsInput | boolean
    fpgecCertficateIssued?: BoolFieldUpdateOperationsInput | boolean
    stateBoardApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    passportScanSubmitted?: BoolFieldUpdateOperationsInput | boolean
    passportPhotoSubmitted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseSubmitted?: BoolFieldUpdateOperationsInput | boolean
    goodStandingLetterSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceApplicationCompleted?: BoolFieldUpdateOperationsInput | boolean
    officialTranscriptsSent?: BoolFieldUpdateOperationsInput | boolean
    courseDescriptionsSubmitted?: BoolFieldUpdateOperationsInput | boolean
    eceEvaluationFeeePaid?: BoolFieldUpdateOperationsInput | boolean
    toeflTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    toeflTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    toeflScoresSent?: BoolFieldUpdateOperationsInput | boolean
    naplexEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    naplexTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    naplexPreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    naplexCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeEligibilityConfirmed?: BoolFieldUpdateOperationsInput | boolean
    mpjePreparationCompleted?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestRegistered?: BoolFieldUpdateOperationsInput | boolean
    mpjeTestCompleted?: BoolFieldUpdateOperationsInput | boolean
    internshipHoursCompleted?: BoolFieldUpdateOperationsInput | boolean
    pharmacyLicenseObtained?: BoolFieldUpdateOperationsInput | boolean
    maintainLicensure?: BoolFieldUpdateOperationsInput | boolean
    boardSpecialization?: BoolFieldUpdateOperationsInput | boolean
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfDegree?: NullableStringFieldUpdateOperationsInput | string | null
    degreeType?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    degreeFile?: NullableStringFieldUpdateOperationsInput | string | null
    passportFile?: NullableStringFieldUpdateOperationsInput | string | null
    licenseFile?: NullableStringFieldUpdateOperationsInput | string | null
    hasVisa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    visaType?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredState?: NullableStringFieldUpdateOperationsInput | string | null
    selectedPackage?: NullableStringFieldUpdateOperationsInput | string | null
    documentCategories?: XOR<DocumentCategoryListUpdateEnvelopeInput, DocumentCategoryCreateInput> | DocumentCategoryCreateInput[]
    packageSelections?: PackageSelectionUncheckedUpdateManyWithoutUserNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentsCompositeListFilter = {
    equals?: DocumentsObjectEqualityInput[]
    every?: DocumentsWhereInput
    some?: DocumentsWhereInput
    none?: DocumentsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type DocumentCreateManyUserInput = {
    id?: string
    ownerName: string
    ownerEmail: string
    name: string
    type: string
    status: string
    uploadDate?: Date | string
    size: string
    url: string
    notes?: string | null
    category: string
  }

  export type PackageSelectionCreateManyUserInput = {
    id?: string
    packageName: string
    isPaid?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ConsultationCreateManyUserInput = {
    id?: string
    date: Date | string
    isPaid?: boolean
    createdAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type DocumentCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    documents?: XOR<DocumentsListUpdateEnvelopeInput, DocumentsCreateInput> | DocumentsCreateInput[]
  }

  export type DocumentUpdateWithoutUserInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
  }

  export type PackageSelectionUpdateWithoutUserInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageSelectionUncheckedUpdateWithoutUserInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageSelectionUncheckedUpdateManyWithoutUserInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentsWhereInput = {
    AND?: DocumentsWhereInput | DocumentsWhereInput[]
    OR?: DocumentsWhereInput[]
    NOT?: DocumentsWhereInput | DocumentsWhereInput[]
    id?: StringFilter<"Documents"> | string
    name?: StringFilter<"Documents"> | string
    type?: StringFilter<"Documents"> | string
    status?: StringFilter<"Documents"> | string
    uploadDate?: StringNullableFilter<"Documents"> | string | null
    size?: StringNullableFilter<"Documents"> | string | null
    notes?: StringNullableFilter<"Documents"> | string | null
  }

  export type DocumentsListUpdateEnvelopeInput = {
    set?: DocumentsCreateInput | DocumentsCreateInput[]
    push?: DocumentsCreateInput | DocumentsCreateInput[]
    updateMany?: DocumentsUpdateManyInput
    deleteMany?: DocumentsDeleteManyInput
  }

  export type DocumentsUpdateManyInput = {
    where: DocumentsWhereInput
    data: DocumentsUpdateInput
  }

  export type DocumentsDeleteManyInput = {
    where: DocumentsWhereInput
  }

  export type DocumentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uploadDate?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
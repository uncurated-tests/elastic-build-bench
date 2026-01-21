'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11067<T> = T extends (infer U)[]
  ? DeepReadonlyArray11067<U>
  : T extends object
  ? DeepReadonlyObject11067<T>
  : T;

interface DeepReadonlyArray11067<T> extends ReadonlyArray<DeepReadonly11067<T>> {}

type DeepReadonlyObject11067<T> = {
  readonly [P in keyof T]: DeepReadonly11067<T[P]>;
};

type UnionToIntersection11067<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11067<T> = UnionToIntersection11067<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11067<T extends unknown[], V> = [...T, V];

type TuplifyUnion11067<T, L = LastOf11067<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11067<TuplifyUnion11067<Exclude<T, L>>, L>;

type DeepPartial11067<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11067<T[P]> }
  : T;

type Paths11067<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11067<K, Paths11067<T[K], Prev11067[D]>> : never }[keyof T]
  : never;

type Prev11067 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11067<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11067 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11067 = Paths11067<NestedConfig11067>;

interface HeavyProps11067 {
  config: DeepPartial11067<NestedConfig11067>;
  path?: ConfigPaths11067;
}

const HeavyComponent11067 = memo(function HeavyComponent11067({ config }: HeavyProps11067) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11067) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11067 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11067: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11067.displayName = 'HeavyComponent11067';
export default HeavyComponent11067;

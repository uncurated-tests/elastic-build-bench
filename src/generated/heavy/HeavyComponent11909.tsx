'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11909<T> = T extends (infer U)[]
  ? DeepReadonlyArray11909<U>
  : T extends object
  ? DeepReadonlyObject11909<T>
  : T;

interface DeepReadonlyArray11909<T> extends ReadonlyArray<DeepReadonly11909<T>> {}

type DeepReadonlyObject11909<T> = {
  readonly [P in keyof T]: DeepReadonly11909<T[P]>;
};

type UnionToIntersection11909<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11909<T> = UnionToIntersection11909<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11909<T extends unknown[], V> = [...T, V];

type TuplifyUnion11909<T, L = LastOf11909<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11909<TuplifyUnion11909<Exclude<T, L>>, L>;

type DeepPartial11909<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11909<T[P]> }
  : T;

type Paths11909<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11909<K, Paths11909<T[K], Prev11909[D]>> : never }[keyof T]
  : never;

type Prev11909 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11909<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11909 {
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

type ConfigPaths11909 = Paths11909<NestedConfig11909>;

interface HeavyProps11909 {
  config: DeepPartial11909<NestedConfig11909>;
  path?: ConfigPaths11909;
}

const HeavyComponent11909 = memo(function HeavyComponent11909({ config }: HeavyProps11909) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11909) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11909 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11909: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11909.displayName = 'HeavyComponent11909';
export default HeavyComponent11909;

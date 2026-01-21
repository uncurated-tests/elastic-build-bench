'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11243<T> = T extends (infer U)[]
  ? DeepReadonlyArray11243<U>
  : T extends object
  ? DeepReadonlyObject11243<T>
  : T;

interface DeepReadonlyArray11243<T> extends ReadonlyArray<DeepReadonly11243<T>> {}

type DeepReadonlyObject11243<T> = {
  readonly [P in keyof T]: DeepReadonly11243<T[P]>;
};

type UnionToIntersection11243<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11243<T> = UnionToIntersection11243<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11243<T extends unknown[], V> = [...T, V];

type TuplifyUnion11243<T, L = LastOf11243<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11243<TuplifyUnion11243<Exclude<T, L>>, L>;

type DeepPartial11243<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11243<T[P]> }
  : T;

type Paths11243<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11243<K, Paths11243<T[K], Prev11243[D]>> : never }[keyof T]
  : never;

type Prev11243 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11243<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11243 {
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

type ConfigPaths11243 = Paths11243<NestedConfig11243>;

interface HeavyProps11243 {
  config: DeepPartial11243<NestedConfig11243>;
  path?: ConfigPaths11243;
}

const HeavyComponent11243 = memo(function HeavyComponent11243({ config }: HeavyProps11243) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11243) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11243 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11243: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11243.displayName = 'HeavyComponent11243';
export default HeavyComponent11243;

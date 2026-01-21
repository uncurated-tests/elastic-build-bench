'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11696<T> = T extends (infer U)[]
  ? DeepReadonlyArray11696<U>
  : T extends object
  ? DeepReadonlyObject11696<T>
  : T;

interface DeepReadonlyArray11696<T> extends ReadonlyArray<DeepReadonly11696<T>> {}

type DeepReadonlyObject11696<T> = {
  readonly [P in keyof T]: DeepReadonly11696<T[P]>;
};

type UnionToIntersection11696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11696<T> = UnionToIntersection11696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11696<T extends unknown[], V> = [...T, V];

type TuplifyUnion11696<T, L = LastOf11696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11696<TuplifyUnion11696<Exclude<T, L>>, L>;

type DeepPartial11696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11696<T[P]> }
  : T;

type Paths11696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11696<K, Paths11696<T[K], Prev11696[D]>> : never }[keyof T]
  : never;

type Prev11696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11696 {
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

type ConfigPaths11696 = Paths11696<NestedConfig11696>;

interface HeavyProps11696 {
  config: DeepPartial11696<NestedConfig11696>;
  path?: ConfigPaths11696;
}

const HeavyComponent11696 = memo(function HeavyComponent11696({ config }: HeavyProps11696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11696.displayName = 'HeavyComponent11696';
export default HeavyComponent11696;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11026<T> = T extends (infer U)[]
  ? DeepReadonlyArray11026<U>
  : T extends object
  ? DeepReadonlyObject11026<T>
  : T;

interface DeepReadonlyArray11026<T> extends ReadonlyArray<DeepReadonly11026<T>> {}

type DeepReadonlyObject11026<T> = {
  readonly [P in keyof T]: DeepReadonly11026<T[P]>;
};

type UnionToIntersection11026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11026<T> = UnionToIntersection11026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11026<T extends unknown[], V> = [...T, V];

type TuplifyUnion11026<T, L = LastOf11026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11026<TuplifyUnion11026<Exclude<T, L>>, L>;

type DeepPartial11026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11026<T[P]> }
  : T;

type Paths11026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11026<K, Paths11026<T[K], Prev11026[D]>> : never }[keyof T]
  : never;

type Prev11026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11026 {
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

type ConfigPaths11026 = Paths11026<NestedConfig11026>;

interface HeavyProps11026 {
  config: DeepPartial11026<NestedConfig11026>;
  path?: ConfigPaths11026;
}

const HeavyComponent11026 = memo(function HeavyComponent11026({ config }: HeavyProps11026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11026.displayName = 'HeavyComponent11026';
export default HeavyComponent11026;

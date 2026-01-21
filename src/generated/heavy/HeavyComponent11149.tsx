'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11149<T> = T extends (infer U)[]
  ? DeepReadonlyArray11149<U>
  : T extends object
  ? DeepReadonlyObject11149<T>
  : T;

interface DeepReadonlyArray11149<T> extends ReadonlyArray<DeepReadonly11149<T>> {}

type DeepReadonlyObject11149<T> = {
  readonly [P in keyof T]: DeepReadonly11149<T[P]>;
};

type UnionToIntersection11149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11149<T> = UnionToIntersection11149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11149<T extends unknown[], V> = [...T, V];

type TuplifyUnion11149<T, L = LastOf11149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11149<TuplifyUnion11149<Exclude<T, L>>, L>;

type DeepPartial11149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11149<T[P]> }
  : T;

type Paths11149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11149<K, Paths11149<T[K], Prev11149[D]>> : never }[keyof T]
  : never;

type Prev11149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11149 {
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

type ConfigPaths11149 = Paths11149<NestedConfig11149>;

interface HeavyProps11149 {
  config: DeepPartial11149<NestedConfig11149>;
  path?: ConfigPaths11149;
}

const HeavyComponent11149 = memo(function HeavyComponent11149({ config }: HeavyProps11149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11149.displayName = 'HeavyComponent11149';
export default HeavyComponent11149;

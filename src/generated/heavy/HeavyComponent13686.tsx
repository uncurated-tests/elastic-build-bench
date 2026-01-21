'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13686<T> = T extends (infer U)[]
  ? DeepReadonlyArray13686<U>
  : T extends object
  ? DeepReadonlyObject13686<T>
  : T;

interface DeepReadonlyArray13686<T> extends ReadonlyArray<DeepReadonly13686<T>> {}

type DeepReadonlyObject13686<T> = {
  readonly [P in keyof T]: DeepReadonly13686<T[P]>;
};

type UnionToIntersection13686<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13686<T> = UnionToIntersection13686<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13686<T extends unknown[], V> = [...T, V];

type TuplifyUnion13686<T, L = LastOf13686<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13686<TuplifyUnion13686<Exclude<T, L>>, L>;

type DeepPartial13686<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13686<T[P]> }
  : T;

type Paths13686<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13686<K, Paths13686<T[K], Prev13686[D]>> : never }[keyof T]
  : never;

type Prev13686 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13686<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13686 {
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

type ConfigPaths13686 = Paths13686<NestedConfig13686>;

interface HeavyProps13686 {
  config: DeepPartial13686<NestedConfig13686>;
  path?: ConfigPaths13686;
}

const HeavyComponent13686 = memo(function HeavyComponent13686({ config }: HeavyProps13686) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13686) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13686 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13686: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13686.displayName = 'HeavyComponent13686';
export default HeavyComponent13686;

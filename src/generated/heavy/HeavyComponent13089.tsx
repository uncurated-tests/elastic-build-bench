'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13089<T> = T extends (infer U)[]
  ? DeepReadonlyArray13089<U>
  : T extends object
  ? DeepReadonlyObject13089<T>
  : T;

interface DeepReadonlyArray13089<T> extends ReadonlyArray<DeepReadonly13089<T>> {}

type DeepReadonlyObject13089<T> = {
  readonly [P in keyof T]: DeepReadonly13089<T[P]>;
};

type UnionToIntersection13089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13089<T> = UnionToIntersection13089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13089<T extends unknown[], V> = [...T, V];

type TuplifyUnion13089<T, L = LastOf13089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13089<TuplifyUnion13089<Exclude<T, L>>, L>;

type DeepPartial13089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13089<T[P]> }
  : T;

type Paths13089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13089<K, Paths13089<T[K], Prev13089[D]>> : never }[keyof T]
  : never;

type Prev13089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13089 {
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

type ConfigPaths13089 = Paths13089<NestedConfig13089>;

interface HeavyProps13089 {
  config: DeepPartial13089<NestedConfig13089>;
  path?: ConfigPaths13089;
}

const HeavyComponent13089 = memo(function HeavyComponent13089({ config }: HeavyProps13089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13089.displayName = 'HeavyComponent13089';
export default HeavyComponent13089;

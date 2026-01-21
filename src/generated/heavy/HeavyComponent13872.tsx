'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13872<T> = T extends (infer U)[]
  ? DeepReadonlyArray13872<U>
  : T extends object
  ? DeepReadonlyObject13872<T>
  : T;

interface DeepReadonlyArray13872<T> extends ReadonlyArray<DeepReadonly13872<T>> {}

type DeepReadonlyObject13872<T> = {
  readonly [P in keyof T]: DeepReadonly13872<T[P]>;
};

type UnionToIntersection13872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13872<T> = UnionToIntersection13872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13872<T extends unknown[], V> = [...T, V];

type TuplifyUnion13872<T, L = LastOf13872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13872<TuplifyUnion13872<Exclude<T, L>>, L>;

type DeepPartial13872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13872<T[P]> }
  : T;

type Paths13872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13872<K, Paths13872<T[K], Prev13872[D]>> : never }[keyof T]
  : never;

type Prev13872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13872 {
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

type ConfigPaths13872 = Paths13872<NestedConfig13872>;

interface HeavyProps13872 {
  config: DeepPartial13872<NestedConfig13872>;
  path?: ConfigPaths13872;
}

const HeavyComponent13872 = memo(function HeavyComponent13872({ config }: HeavyProps13872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13872.displayName = 'HeavyComponent13872';
export default HeavyComponent13872;

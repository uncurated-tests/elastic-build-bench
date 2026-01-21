'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13992<T> = T extends (infer U)[]
  ? DeepReadonlyArray13992<U>
  : T extends object
  ? DeepReadonlyObject13992<T>
  : T;

interface DeepReadonlyArray13992<T> extends ReadonlyArray<DeepReadonly13992<T>> {}

type DeepReadonlyObject13992<T> = {
  readonly [P in keyof T]: DeepReadonly13992<T[P]>;
};

type UnionToIntersection13992<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13992<T> = UnionToIntersection13992<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13992<T extends unknown[], V> = [...T, V];

type TuplifyUnion13992<T, L = LastOf13992<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13992<TuplifyUnion13992<Exclude<T, L>>, L>;

type DeepPartial13992<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13992<T[P]> }
  : T;

type Paths13992<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13992<K, Paths13992<T[K], Prev13992[D]>> : never }[keyof T]
  : never;

type Prev13992 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13992<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13992 {
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

type ConfigPaths13992 = Paths13992<NestedConfig13992>;

interface HeavyProps13992 {
  config: DeepPartial13992<NestedConfig13992>;
  path?: ConfigPaths13992;
}

const HeavyComponent13992 = memo(function HeavyComponent13992({ config }: HeavyProps13992) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13992) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13992 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13992: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13992.displayName = 'HeavyComponent13992';
export default HeavyComponent13992;

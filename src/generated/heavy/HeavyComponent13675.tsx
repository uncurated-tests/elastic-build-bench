'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13675<T> = T extends (infer U)[]
  ? DeepReadonlyArray13675<U>
  : T extends object
  ? DeepReadonlyObject13675<T>
  : T;

interface DeepReadonlyArray13675<T> extends ReadonlyArray<DeepReadonly13675<T>> {}

type DeepReadonlyObject13675<T> = {
  readonly [P in keyof T]: DeepReadonly13675<T[P]>;
};

type UnionToIntersection13675<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13675<T> = UnionToIntersection13675<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13675<T extends unknown[], V> = [...T, V];

type TuplifyUnion13675<T, L = LastOf13675<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13675<TuplifyUnion13675<Exclude<T, L>>, L>;

type DeepPartial13675<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13675<T[P]> }
  : T;

type Paths13675<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13675<K, Paths13675<T[K], Prev13675[D]>> : never }[keyof T]
  : never;

type Prev13675 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13675<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13675 {
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

type ConfigPaths13675 = Paths13675<NestedConfig13675>;

interface HeavyProps13675 {
  config: DeepPartial13675<NestedConfig13675>;
  path?: ConfigPaths13675;
}

const HeavyComponent13675 = memo(function HeavyComponent13675({ config }: HeavyProps13675) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13675) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13675 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13675: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13675.displayName = 'HeavyComponent13675';
export default HeavyComponent13675;

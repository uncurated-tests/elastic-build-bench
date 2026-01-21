'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13863<T> = T extends (infer U)[]
  ? DeepReadonlyArray13863<U>
  : T extends object
  ? DeepReadonlyObject13863<T>
  : T;

interface DeepReadonlyArray13863<T> extends ReadonlyArray<DeepReadonly13863<T>> {}

type DeepReadonlyObject13863<T> = {
  readonly [P in keyof T]: DeepReadonly13863<T[P]>;
};

type UnionToIntersection13863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13863<T> = UnionToIntersection13863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13863<T extends unknown[], V> = [...T, V];

type TuplifyUnion13863<T, L = LastOf13863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13863<TuplifyUnion13863<Exclude<T, L>>, L>;

type DeepPartial13863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13863<T[P]> }
  : T;

type Paths13863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13863<K, Paths13863<T[K], Prev13863[D]>> : never }[keyof T]
  : never;

type Prev13863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13863 {
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

type ConfigPaths13863 = Paths13863<NestedConfig13863>;

interface HeavyProps13863 {
  config: DeepPartial13863<NestedConfig13863>;
  path?: ConfigPaths13863;
}

const HeavyComponent13863 = memo(function HeavyComponent13863({ config }: HeavyProps13863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13863.displayName = 'HeavyComponent13863';
export default HeavyComponent13863;

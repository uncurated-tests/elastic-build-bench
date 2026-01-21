'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13155<T> = T extends (infer U)[]
  ? DeepReadonlyArray13155<U>
  : T extends object
  ? DeepReadonlyObject13155<T>
  : T;

interface DeepReadonlyArray13155<T> extends ReadonlyArray<DeepReadonly13155<T>> {}

type DeepReadonlyObject13155<T> = {
  readonly [P in keyof T]: DeepReadonly13155<T[P]>;
};

type UnionToIntersection13155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13155<T> = UnionToIntersection13155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13155<T extends unknown[], V> = [...T, V];

type TuplifyUnion13155<T, L = LastOf13155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13155<TuplifyUnion13155<Exclude<T, L>>, L>;

type DeepPartial13155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13155<T[P]> }
  : T;

type Paths13155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13155<K, Paths13155<T[K], Prev13155[D]>> : never }[keyof T]
  : never;

type Prev13155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13155 {
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

type ConfigPaths13155 = Paths13155<NestedConfig13155>;

interface HeavyProps13155 {
  config: DeepPartial13155<NestedConfig13155>;
  path?: ConfigPaths13155;
}

const HeavyComponent13155 = memo(function HeavyComponent13155({ config }: HeavyProps13155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13155.displayName = 'HeavyComponent13155';
export default HeavyComponent13155;

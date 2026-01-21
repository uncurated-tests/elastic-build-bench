'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13674<T> = T extends (infer U)[]
  ? DeepReadonlyArray13674<U>
  : T extends object
  ? DeepReadonlyObject13674<T>
  : T;

interface DeepReadonlyArray13674<T> extends ReadonlyArray<DeepReadonly13674<T>> {}

type DeepReadonlyObject13674<T> = {
  readonly [P in keyof T]: DeepReadonly13674<T[P]>;
};

type UnionToIntersection13674<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13674<T> = UnionToIntersection13674<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13674<T extends unknown[], V> = [...T, V];

type TuplifyUnion13674<T, L = LastOf13674<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13674<TuplifyUnion13674<Exclude<T, L>>, L>;

type DeepPartial13674<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13674<T[P]> }
  : T;

type Paths13674<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13674<K, Paths13674<T[K], Prev13674[D]>> : never }[keyof T]
  : never;

type Prev13674 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13674<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13674 {
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

type ConfigPaths13674 = Paths13674<NestedConfig13674>;

interface HeavyProps13674 {
  config: DeepPartial13674<NestedConfig13674>;
  path?: ConfigPaths13674;
}

const HeavyComponent13674 = memo(function HeavyComponent13674({ config }: HeavyProps13674) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13674) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13674 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13674: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13674.displayName = 'HeavyComponent13674';
export default HeavyComponent13674;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13850<T> = T extends (infer U)[]
  ? DeepReadonlyArray13850<U>
  : T extends object
  ? DeepReadonlyObject13850<T>
  : T;

interface DeepReadonlyArray13850<T> extends ReadonlyArray<DeepReadonly13850<T>> {}

type DeepReadonlyObject13850<T> = {
  readonly [P in keyof T]: DeepReadonly13850<T[P]>;
};

type UnionToIntersection13850<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13850<T> = UnionToIntersection13850<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13850<T extends unknown[], V> = [...T, V];

type TuplifyUnion13850<T, L = LastOf13850<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13850<TuplifyUnion13850<Exclude<T, L>>, L>;

type DeepPartial13850<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13850<T[P]> }
  : T;

type Paths13850<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13850<K, Paths13850<T[K], Prev13850[D]>> : never }[keyof T]
  : never;

type Prev13850 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13850<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13850 {
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

type ConfigPaths13850 = Paths13850<NestedConfig13850>;

interface HeavyProps13850 {
  config: DeepPartial13850<NestedConfig13850>;
  path?: ConfigPaths13850;
}

const HeavyComponent13850 = memo(function HeavyComponent13850({ config }: HeavyProps13850) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13850) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13850 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13850: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13850.displayName = 'HeavyComponent13850';
export default HeavyComponent13850;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13452<T> = T extends (infer U)[]
  ? DeepReadonlyArray13452<U>
  : T extends object
  ? DeepReadonlyObject13452<T>
  : T;

interface DeepReadonlyArray13452<T> extends ReadonlyArray<DeepReadonly13452<T>> {}

type DeepReadonlyObject13452<T> = {
  readonly [P in keyof T]: DeepReadonly13452<T[P]>;
};

type UnionToIntersection13452<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13452<T> = UnionToIntersection13452<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13452<T extends unknown[], V> = [...T, V];

type TuplifyUnion13452<T, L = LastOf13452<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13452<TuplifyUnion13452<Exclude<T, L>>, L>;

type DeepPartial13452<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13452<T[P]> }
  : T;

type Paths13452<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13452<K, Paths13452<T[K], Prev13452[D]>> : never }[keyof T]
  : never;

type Prev13452 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13452<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13452 {
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

type ConfigPaths13452 = Paths13452<NestedConfig13452>;

interface HeavyProps13452 {
  config: DeepPartial13452<NestedConfig13452>;
  path?: ConfigPaths13452;
}

const HeavyComponent13452 = memo(function HeavyComponent13452({ config }: HeavyProps13452) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13452) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13452 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13452: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13452.displayName = 'HeavyComponent13452';
export default HeavyComponent13452;

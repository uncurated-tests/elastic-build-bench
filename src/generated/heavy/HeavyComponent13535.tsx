'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13535<T> = T extends (infer U)[]
  ? DeepReadonlyArray13535<U>
  : T extends object
  ? DeepReadonlyObject13535<T>
  : T;

interface DeepReadonlyArray13535<T> extends ReadonlyArray<DeepReadonly13535<T>> {}

type DeepReadonlyObject13535<T> = {
  readonly [P in keyof T]: DeepReadonly13535<T[P]>;
};

type UnionToIntersection13535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13535<T> = UnionToIntersection13535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13535<T extends unknown[], V> = [...T, V];

type TuplifyUnion13535<T, L = LastOf13535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13535<TuplifyUnion13535<Exclude<T, L>>, L>;

type DeepPartial13535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13535<T[P]> }
  : T;

type Paths13535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13535<K, Paths13535<T[K], Prev13535[D]>> : never }[keyof T]
  : never;

type Prev13535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13535 {
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

type ConfigPaths13535 = Paths13535<NestedConfig13535>;

interface HeavyProps13535 {
  config: DeepPartial13535<NestedConfig13535>;
  path?: ConfigPaths13535;
}

const HeavyComponent13535 = memo(function HeavyComponent13535({ config }: HeavyProps13535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13535.displayName = 'HeavyComponent13535';
export default HeavyComponent13535;

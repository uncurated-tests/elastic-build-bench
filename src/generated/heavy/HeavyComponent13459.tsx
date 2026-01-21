'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13459<T> = T extends (infer U)[]
  ? DeepReadonlyArray13459<U>
  : T extends object
  ? DeepReadonlyObject13459<T>
  : T;

interface DeepReadonlyArray13459<T> extends ReadonlyArray<DeepReadonly13459<T>> {}

type DeepReadonlyObject13459<T> = {
  readonly [P in keyof T]: DeepReadonly13459<T[P]>;
};

type UnionToIntersection13459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13459<T> = UnionToIntersection13459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13459<T extends unknown[], V> = [...T, V];

type TuplifyUnion13459<T, L = LastOf13459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13459<TuplifyUnion13459<Exclude<T, L>>, L>;

type DeepPartial13459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13459<T[P]> }
  : T;

type Paths13459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13459<K, Paths13459<T[K], Prev13459[D]>> : never }[keyof T]
  : never;

type Prev13459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13459 {
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

type ConfigPaths13459 = Paths13459<NestedConfig13459>;

interface HeavyProps13459 {
  config: DeepPartial13459<NestedConfig13459>;
  path?: ConfigPaths13459;
}

const HeavyComponent13459 = memo(function HeavyComponent13459({ config }: HeavyProps13459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13459.displayName = 'HeavyComponent13459';
export default HeavyComponent13459;

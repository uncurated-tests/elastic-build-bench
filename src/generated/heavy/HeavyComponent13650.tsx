'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13650<T> = T extends (infer U)[]
  ? DeepReadonlyArray13650<U>
  : T extends object
  ? DeepReadonlyObject13650<T>
  : T;

interface DeepReadonlyArray13650<T> extends ReadonlyArray<DeepReadonly13650<T>> {}

type DeepReadonlyObject13650<T> = {
  readonly [P in keyof T]: DeepReadonly13650<T[P]>;
};

type UnionToIntersection13650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13650<T> = UnionToIntersection13650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13650<T extends unknown[], V> = [...T, V];

type TuplifyUnion13650<T, L = LastOf13650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13650<TuplifyUnion13650<Exclude<T, L>>, L>;

type DeepPartial13650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13650<T[P]> }
  : T;

type Paths13650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13650<K, Paths13650<T[K], Prev13650[D]>> : never }[keyof T]
  : never;

type Prev13650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13650 {
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

type ConfigPaths13650 = Paths13650<NestedConfig13650>;

interface HeavyProps13650 {
  config: DeepPartial13650<NestedConfig13650>;
  path?: ConfigPaths13650;
}

const HeavyComponent13650 = memo(function HeavyComponent13650({ config }: HeavyProps13650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13650.displayName = 'HeavyComponent13650';
export default HeavyComponent13650;

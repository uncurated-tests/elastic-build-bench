'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13318<T> = T extends (infer U)[]
  ? DeepReadonlyArray13318<U>
  : T extends object
  ? DeepReadonlyObject13318<T>
  : T;

interface DeepReadonlyArray13318<T> extends ReadonlyArray<DeepReadonly13318<T>> {}

type DeepReadonlyObject13318<T> = {
  readonly [P in keyof T]: DeepReadonly13318<T[P]>;
};

type UnionToIntersection13318<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13318<T> = UnionToIntersection13318<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13318<T extends unknown[], V> = [...T, V];

type TuplifyUnion13318<T, L = LastOf13318<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13318<TuplifyUnion13318<Exclude<T, L>>, L>;

type DeepPartial13318<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13318<T[P]> }
  : T;

type Paths13318<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13318<K, Paths13318<T[K], Prev13318[D]>> : never }[keyof T]
  : never;

type Prev13318 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13318<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13318 {
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

type ConfigPaths13318 = Paths13318<NestedConfig13318>;

interface HeavyProps13318 {
  config: DeepPartial13318<NestedConfig13318>;
  path?: ConfigPaths13318;
}

const HeavyComponent13318 = memo(function HeavyComponent13318({ config }: HeavyProps13318) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13318) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13318 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13318: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13318.displayName = 'HeavyComponent13318';
export default HeavyComponent13318;

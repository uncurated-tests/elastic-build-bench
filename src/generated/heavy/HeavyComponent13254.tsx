'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13254<T> = T extends (infer U)[]
  ? DeepReadonlyArray13254<U>
  : T extends object
  ? DeepReadonlyObject13254<T>
  : T;

interface DeepReadonlyArray13254<T> extends ReadonlyArray<DeepReadonly13254<T>> {}

type DeepReadonlyObject13254<T> = {
  readonly [P in keyof T]: DeepReadonly13254<T[P]>;
};

type UnionToIntersection13254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13254<T> = UnionToIntersection13254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13254<T extends unknown[], V> = [...T, V];

type TuplifyUnion13254<T, L = LastOf13254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13254<TuplifyUnion13254<Exclude<T, L>>, L>;

type DeepPartial13254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13254<T[P]> }
  : T;

type Paths13254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13254<K, Paths13254<T[K], Prev13254[D]>> : never }[keyof T]
  : never;

type Prev13254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13254 {
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

type ConfigPaths13254 = Paths13254<NestedConfig13254>;

interface HeavyProps13254 {
  config: DeepPartial13254<NestedConfig13254>;
  path?: ConfigPaths13254;
}

const HeavyComponent13254 = memo(function HeavyComponent13254({ config }: HeavyProps13254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13254.displayName = 'HeavyComponent13254';
export default HeavyComponent13254;

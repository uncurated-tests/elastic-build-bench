'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13585<T> = T extends (infer U)[]
  ? DeepReadonlyArray13585<U>
  : T extends object
  ? DeepReadonlyObject13585<T>
  : T;

interface DeepReadonlyArray13585<T> extends ReadonlyArray<DeepReadonly13585<T>> {}

type DeepReadonlyObject13585<T> = {
  readonly [P in keyof T]: DeepReadonly13585<T[P]>;
};

type UnionToIntersection13585<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13585<T> = UnionToIntersection13585<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13585<T extends unknown[], V> = [...T, V];

type TuplifyUnion13585<T, L = LastOf13585<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13585<TuplifyUnion13585<Exclude<T, L>>, L>;

type DeepPartial13585<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13585<T[P]> }
  : T;

type Paths13585<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13585<K, Paths13585<T[K], Prev13585[D]>> : never }[keyof T]
  : never;

type Prev13585 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13585<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13585 {
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

type ConfigPaths13585 = Paths13585<NestedConfig13585>;

interface HeavyProps13585 {
  config: DeepPartial13585<NestedConfig13585>;
  path?: ConfigPaths13585;
}

const HeavyComponent13585 = memo(function HeavyComponent13585({ config }: HeavyProps13585) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13585) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13585 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13585: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13585.displayName = 'HeavyComponent13585';
export default HeavyComponent13585;

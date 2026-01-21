'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13546<T> = T extends (infer U)[]
  ? DeepReadonlyArray13546<U>
  : T extends object
  ? DeepReadonlyObject13546<T>
  : T;

interface DeepReadonlyArray13546<T> extends ReadonlyArray<DeepReadonly13546<T>> {}

type DeepReadonlyObject13546<T> = {
  readonly [P in keyof T]: DeepReadonly13546<T[P]>;
};

type UnionToIntersection13546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13546<T> = UnionToIntersection13546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13546<T extends unknown[], V> = [...T, V];

type TuplifyUnion13546<T, L = LastOf13546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13546<TuplifyUnion13546<Exclude<T, L>>, L>;

type DeepPartial13546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13546<T[P]> }
  : T;

type Paths13546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13546<K, Paths13546<T[K], Prev13546[D]>> : never }[keyof T]
  : never;

type Prev13546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13546 {
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

type ConfigPaths13546 = Paths13546<NestedConfig13546>;

interface HeavyProps13546 {
  config: DeepPartial13546<NestedConfig13546>;
  path?: ConfigPaths13546;
}

const HeavyComponent13546 = memo(function HeavyComponent13546({ config }: HeavyProps13546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13546.displayName = 'HeavyComponent13546';
export default HeavyComponent13546;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13801<T> = T extends (infer U)[]
  ? DeepReadonlyArray13801<U>
  : T extends object
  ? DeepReadonlyObject13801<T>
  : T;

interface DeepReadonlyArray13801<T> extends ReadonlyArray<DeepReadonly13801<T>> {}

type DeepReadonlyObject13801<T> = {
  readonly [P in keyof T]: DeepReadonly13801<T[P]>;
};

type UnionToIntersection13801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13801<T> = UnionToIntersection13801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13801<T extends unknown[], V> = [...T, V];

type TuplifyUnion13801<T, L = LastOf13801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13801<TuplifyUnion13801<Exclude<T, L>>, L>;

type DeepPartial13801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13801<T[P]> }
  : T;

type Paths13801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13801<K, Paths13801<T[K], Prev13801[D]>> : never }[keyof T]
  : never;

type Prev13801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13801 {
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

type ConfigPaths13801 = Paths13801<NestedConfig13801>;

interface HeavyProps13801 {
  config: DeepPartial13801<NestedConfig13801>;
  path?: ConfigPaths13801;
}

const HeavyComponent13801 = memo(function HeavyComponent13801({ config }: HeavyProps13801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13801.displayName = 'HeavyComponent13801';
export default HeavyComponent13801;

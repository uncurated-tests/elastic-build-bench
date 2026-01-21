'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13733<T> = T extends (infer U)[]
  ? DeepReadonlyArray13733<U>
  : T extends object
  ? DeepReadonlyObject13733<T>
  : T;

interface DeepReadonlyArray13733<T> extends ReadonlyArray<DeepReadonly13733<T>> {}

type DeepReadonlyObject13733<T> = {
  readonly [P in keyof T]: DeepReadonly13733<T[P]>;
};

type UnionToIntersection13733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13733<T> = UnionToIntersection13733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13733<T extends unknown[], V> = [...T, V];

type TuplifyUnion13733<T, L = LastOf13733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13733<TuplifyUnion13733<Exclude<T, L>>, L>;

type DeepPartial13733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13733<T[P]> }
  : T;

type Paths13733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13733<K, Paths13733<T[K], Prev13733[D]>> : never }[keyof T]
  : never;

type Prev13733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13733 {
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

type ConfigPaths13733 = Paths13733<NestedConfig13733>;

interface HeavyProps13733 {
  config: DeepPartial13733<NestedConfig13733>;
  path?: ConfigPaths13733;
}

const HeavyComponent13733 = memo(function HeavyComponent13733({ config }: HeavyProps13733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13733.displayName = 'HeavyComponent13733';
export default HeavyComponent13733;

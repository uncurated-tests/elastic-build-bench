'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13611<T> = T extends (infer U)[]
  ? DeepReadonlyArray13611<U>
  : T extends object
  ? DeepReadonlyObject13611<T>
  : T;

interface DeepReadonlyArray13611<T> extends ReadonlyArray<DeepReadonly13611<T>> {}

type DeepReadonlyObject13611<T> = {
  readonly [P in keyof T]: DeepReadonly13611<T[P]>;
};

type UnionToIntersection13611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13611<T> = UnionToIntersection13611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13611<T extends unknown[], V> = [...T, V];

type TuplifyUnion13611<T, L = LastOf13611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13611<TuplifyUnion13611<Exclude<T, L>>, L>;

type DeepPartial13611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13611<T[P]> }
  : T;

type Paths13611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13611<K, Paths13611<T[K], Prev13611[D]>> : never }[keyof T]
  : never;

type Prev13611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13611 {
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

type ConfigPaths13611 = Paths13611<NestedConfig13611>;

interface HeavyProps13611 {
  config: DeepPartial13611<NestedConfig13611>;
  path?: ConfigPaths13611;
}

const HeavyComponent13611 = memo(function HeavyComponent13611({ config }: HeavyProps13611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13611.displayName = 'HeavyComponent13611';
export default HeavyComponent13611;

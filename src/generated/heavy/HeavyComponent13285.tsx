'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13285<T> = T extends (infer U)[]
  ? DeepReadonlyArray13285<U>
  : T extends object
  ? DeepReadonlyObject13285<T>
  : T;

interface DeepReadonlyArray13285<T> extends ReadonlyArray<DeepReadonly13285<T>> {}

type DeepReadonlyObject13285<T> = {
  readonly [P in keyof T]: DeepReadonly13285<T[P]>;
};

type UnionToIntersection13285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13285<T> = UnionToIntersection13285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13285<T extends unknown[], V> = [...T, V];

type TuplifyUnion13285<T, L = LastOf13285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13285<TuplifyUnion13285<Exclude<T, L>>, L>;

type DeepPartial13285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13285<T[P]> }
  : T;

type Paths13285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13285<K, Paths13285<T[K], Prev13285[D]>> : never }[keyof T]
  : never;

type Prev13285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13285 {
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

type ConfigPaths13285 = Paths13285<NestedConfig13285>;

interface HeavyProps13285 {
  config: DeepPartial13285<NestedConfig13285>;
  path?: ConfigPaths13285;
}

const HeavyComponent13285 = memo(function HeavyComponent13285({ config }: HeavyProps13285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13285.displayName = 'HeavyComponent13285';
export default HeavyComponent13285;

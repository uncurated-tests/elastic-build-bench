'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13458<T> = T extends (infer U)[]
  ? DeepReadonlyArray13458<U>
  : T extends object
  ? DeepReadonlyObject13458<T>
  : T;

interface DeepReadonlyArray13458<T> extends ReadonlyArray<DeepReadonly13458<T>> {}

type DeepReadonlyObject13458<T> = {
  readonly [P in keyof T]: DeepReadonly13458<T[P]>;
};

type UnionToIntersection13458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13458<T> = UnionToIntersection13458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13458<T extends unknown[], V> = [...T, V];

type TuplifyUnion13458<T, L = LastOf13458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13458<TuplifyUnion13458<Exclude<T, L>>, L>;

type DeepPartial13458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13458<T[P]> }
  : T;

type Paths13458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13458<K, Paths13458<T[K], Prev13458[D]>> : never }[keyof T]
  : never;

type Prev13458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13458 {
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

type ConfigPaths13458 = Paths13458<NestedConfig13458>;

interface HeavyProps13458 {
  config: DeepPartial13458<NestedConfig13458>;
  path?: ConfigPaths13458;
}

const HeavyComponent13458 = memo(function HeavyComponent13458({ config }: HeavyProps13458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13458.displayName = 'HeavyComponent13458';
export default HeavyComponent13458;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13700<T> = T extends (infer U)[]
  ? DeepReadonlyArray13700<U>
  : T extends object
  ? DeepReadonlyObject13700<T>
  : T;

interface DeepReadonlyArray13700<T> extends ReadonlyArray<DeepReadonly13700<T>> {}

type DeepReadonlyObject13700<T> = {
  readonly [P in keyof T]: DeepReadonly13700<T[P]>;
};

type UnionToIntersection13700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13700<T> = UnionToIntersection13700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13700<T extends unknown[], V> = [...T, V];

type TuplifyUnion13700<T, L = LastOf13700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13700<TuplifyUnion13700<Exclude<T, L>>, L>;

type DeepPartial13700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13700<T[P]> }
  : T;

type Paths13700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13700<K, Paths13700<T[K], Prev13700[D]>> : never }[keyof T]
  : never;

type Prev13700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13700 {
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

type ConfigPaths13700 = Paths13700<NestedConfig13700>;

interface HeavyProps13700 {
  config: DeepPartial13700<NestedConfig13700>;
  path?: ConfigPaths13700;
}

const HeavyComponent13700 = memo(function HeavyComponent13700({ config }: HeavyProps13700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13700.displayName = 'HeavyComponent13700';
export default HeavyComponent13700;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13300<T> = T extends (infer U)[]
  ? DeepReadonlyArray13300<U>
  : T extends object
  ? DeepReadonlyObject13300<T>
  : T;

interface DeepReadonlyArray13300<T> extends ReadonlyArray<DeepReadonly13300<T>> {}

type DeepReadonlyObject13300<T> = {
  readonly [P in keyof T]: DeepReadonly13300<T[P]>;
};

type UnionToIntersection13300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13300<T> = UnionToIntersection13300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13300<T extends unknown[], V> = [...T, V];

type TuplifyUnion13300<T, L = LastOf13300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13300<TuplifyUnion13300<Exclude<T, L>>, L>;

type DeepPartial13300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13300<T[P]> }
  : T;

type Paths13300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13300<K, Paths13300<T[K], Prev13300[D]>> : never }[keyof T]
  : never;

type Prev13300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13300 {
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

type ConfigPaths13300 = Paths13300<NestedConfig13300>;

interface HeavyProps13300 {
  config: DeepPartial13300<NestedConfig13300>;
  path?: ConfigPaths13300;
}

const HeavyComponent13300 = memo(function HeavyComponent13300({ config }: HeavyProps13300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13300.displayName = 'HeavyComponent13300';
export default HeavyComponent13300;

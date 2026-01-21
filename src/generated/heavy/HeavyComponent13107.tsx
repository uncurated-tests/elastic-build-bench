'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13107<T> = T extends (infer U)[]
  ? DeepReadonlyArray13107<U>
  : T extends object
  ? DeepReadonlyObject13107<T>
  : T;

interface DeepReadonlyArray13107<T> extends ReadonlyArray<DeepReadonly13107<T>> {}

type DeepReadonlyObject13107<T> = {
  readonly [P in keyof T]: DeepReadonly13107<T[P]>;
};

type UnionToIntersection13107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13107<T> = UnionToIntersection13107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13107<T extends unknown[], V> = [...T, V];

type TuplifyUnion13107<T, L = LastOf13107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13107<TuplifyUnion13107<Exclude<T, L>>, L>;

type DeepPartial13107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13107<T[P]> }
  : T;

type Paths13107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13107<K, Paths13107<T[K], Prev13107[D]>> : never }[keyof T]
  : never;

type Prev13107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13107 {
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

type ConfigPaths13107 = Paths13107<NestedConfig13107>;

interface HeavyProps13107 {
  config: DeepPartial13107<NestedConfig13107>;
  path?: ConfigPaths13107;
}

const HeavyComponent13107 = memo(function HeavyComponent13107({ config }: HeavyProps13107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13107.displayName = 'HeavyComponent13107';
export default HeavyComponent13107;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13369<T> = T extends (infer U)[]
  ? DeepReadonlyArray13369<U>
  : T extends object
  ? DeepReadonlyObject13369<T>
  : T;

interface DeepReadonlyArray13369<T> extends ReadonlyArray<DeepReadonly13369<T>> {}

type DeepReadonlyObject13369<T> = {
  readonly [P in keyof T]: DeepReadonly13369<T[P]>;
};

type UnionToIntersection13369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13369<T> = UnionToIntersection13369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13369<T extends unknown[], V> = [...T, V];

type TuplifyUnion13369<T, L = LastOf13369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13369<TuplifyUnion13369<Exclude<T, L>>, L>;

type DeepPartial13369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13369<T[P]> }
  : T;

type Paths13369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13369<K, Paths13369<T[K], Prev13369[D]>> : never }[keyof T]
  : never;

type Prev13369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13369 {
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

type ConfigPaths13369 = Paths13369<NestedConfig13369>;

interface HeavyProps13369 {
  config: DeepPartial13369<NestedConfig13369>;
  path?: ConfigPaths13369;
}

const HeavyComponent13369 = memo(function HeavyComponent13369({ config }: HeavyProps13369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13369.displayName = 'HeavyComponent13369';
export default HeavyComponent13369;

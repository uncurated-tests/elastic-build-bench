'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13606<T> = T extends (infer U)[]
  ? DeepReadonlyArray13606<U>
  : T extends object
  ? DeepReadonlyObject13606<T>
  : T;

interface DeepReadonlyArray13606<T> extends ReadonlyArray<DeepReadonly13606<T>> {}

type DeepReadonlyObject13606<T> = {
  readonly [P in keyof T]: DeepReadonly13606<T[P]>;
};

type UnionToIntersection13606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13606<T> = UnionToIntersection13606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13606<T extends unknown[], V> = [...T, V];

type TuplifyUnion13606<T, L = LastOf13606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13606<TuplifyUnion13606<Exclude<T, L>>, L>;

type DeepPartial13606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13606<T[P]> }
  : T;

type Paths13606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13606<K, Paths13606<T[K], Prev13606[D]>> : never }[keyof T]
  : never;

type Prev13606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13606 {
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

type ConfigPaths13606 = Paths13606<NestedConfig13606>;

interface HeavyProps13606 {
  config: DeepPartial13606<NestedConfig13606>;
  path?: ConfigPaths13606;
}

const HeavyComponent13606 = memo(function HeavyComponent13606({ config }: HeavyProps13606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13606.displayName = 'HeavyComponent13606';
export default HeavyComponent13606;

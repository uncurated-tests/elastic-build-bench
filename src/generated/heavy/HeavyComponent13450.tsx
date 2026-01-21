'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13450<T> = T extends (infer U)[]
  ? DeepReadonlyArray13450<U>
  : T extends object
  ? DeepReadonlyObject13450<T>
  : T;

interface DeepReadonlyArray13450<T> extends ReadonlyArray<DeepReadonly13450<T>> {}

type DeepReadonlyObject13450<T> = {
  readonly [P in keyof T]: DeepReadonly13450<T[P]>;
};

type UnionToIntersection13450<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13450<T> = UnionToIntersection13450<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13450<T extends unknown[], V> = [...T, V];

type TuplifyUnion13450<T, L = LastOf13450<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13450<TuplifyUnion13450<Exclude<T, L>>, L>;

type DeepPartial13450<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13450<T[P]> }
  : T;

type Paths13450<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13450<K, Paths13450<T[K], Prev13450[D]>> : never }[keyof T]
  : never;

type Prev13450 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13450<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13450 {
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

type ConfigPaths13450 = Paths13450<NestedConfig13450>;

interface HeavyProps13450 {
  config: DeepPartial13450<NestedConfig13450>;
  path?: ConfigPaths13450;
}

const HeavyComponent13450 = memo(function HeavyComponent13450({ config }: HeavyProps13450) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13450) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13450 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13450: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13450.displayName = 'HeavyComponent13450';
export default HeavyComponent13450;

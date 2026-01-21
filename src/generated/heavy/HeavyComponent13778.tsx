'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13778<T> = T extends (infer U)[]
  ? DeepReadonlyArray13778<U>
  : T extends object
  ? DeepReadonlyObject13778<T>
  : T;

interface DeepReadonlyArray13778<T> extends ReadonlyArray<DeepReadonly13778<T>> {}

type DeepReadonlyObject13778<T> = {
  readonly [P in keyof T]: DeepReadonly13778<T[P]>;
};

type UnionToIntersection13778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13778<T> = UnionToIntersection13778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13778<T extends unknown[], V> = [...T, V];

type TuplifyUnion13778<T, L = LastOf13778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13778<TuplifyUnion13778<Exclude<T, L>>, L>;

type DeepPartial13778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13778<T[P]> }
  : T;

type Paths13778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13778<K, Paths13778<T[K], Prev13778[D]>> : never }[keyof T]
  : never;

type Prev13778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13778 {
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

type ConfigPaths13778 = Paths13778<NestedConfig13778>;

interface HeavyProps13778 {
  config: DeepPartial13778<NestedConfig13778>;
  path?: ConfigPaths13778;
}

const HeavyComponent13778 = memo(function HeavyComponent13778({ config }: HeavyProps13778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13778.displayName = 'HeavyComponent13778';
export default HeavyComponent13778;

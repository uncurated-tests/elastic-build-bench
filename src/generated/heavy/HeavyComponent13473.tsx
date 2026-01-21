'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13473<T> = T extends (infer U)[]
  ? DeepReadonlyArray13473<U>
  : T extends object
  ? DeepReadonlyObject13473<T>
  : T;

interface DeepReadonlyArray13473<T> extends ReadonlyArray<DeepReadonly13473<T>> {}

type DeepReadonlyObject13473<T> = {
  readonly [P in keyof T]: DeepReadonly13473<T[P]>;
};

type UnionToIntersection13473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13473<T> = UnionToIntersection13473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13473<T extends unknown[], V> = [...T, V];

type TuplifyUnion13473<T, L = LastOf13473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13473<TuplifyUnion13473<Exclude<T, L>>, L>;

type DeepPartial13473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13473<T[P]> }
  : T;

type Paths13473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13473<K, Paths13473<T[K], Prev13473[D]>> : never }[keyof T]
  : never;

type Prev13473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13473 {
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

type ConfigPaths13473 = Paths13473<NestedConfig13473>;

interface HeavyProps13473 {
  config: DeepPartial13473<NestedConfig13473>;
  path?: ConfigPaths13473;
}

const HeavyComponent13473 = memo(function HeavyComponent13473({ config }: HeavyProps13473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13473.displayName = 'HeavyComponent13473';
export default HeavyComponent13473;

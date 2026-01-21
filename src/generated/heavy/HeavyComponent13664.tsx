'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13664<T> = T extends (infer U)[]
  ? DeepReadonlyArray13664<U>
  : T extends object
  ? DeepReadonlyObject13664<T>
  : T;

interface DeepReadonlyArray13664<T> extends ReadonlyArray<DeepReadonly13664<T>> {}

type DeepReadonlyObject13664<T> = {
  readonly [P in keyof T]: DeepReadonly13664<T[P]>;
};

type UnionToIntersection13664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13664<T> = UnionToIntersection13664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13664<T extends unknown[], V> = [...T, V];

type TuplifyUnion13664<T, L = LastOf13664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13664<TuplifyUnion13664<Exclude<T, L>>, L>;

type DeepPartial13664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13664<T[P]> }
  : T;

type Paths13664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13664<K, Paths13664<T[K], Prev13664[D]>> : never }[keyof T]
  : never;

type Prev13664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13664 {
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

type ConfigPaths13664 = Paths13664<NestedConfig13664>;

interface HeavyProps13664 {
  config: DeepPartial13664<NestedConfig13664>;
  path?: ConfigPaths13664;
}

const HeavyComponent13664 = memo(function HeavyComponent13664({ config }: HeavyProps13664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13664.displayName = 'HeavyComponent13664';
export default HeavyComponent13664;

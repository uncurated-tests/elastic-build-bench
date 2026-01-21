'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13510<T> = T extends (infer U)[]
  ? DeepReadonlyArray13510<U>
  : T extends object
  ? DeepReadonlyObject13510<T>
  : T;

interface DeepReadonlyArray13510<T> extends ReadonlyArray<DeepReadonly13510<T>> {}

type DeepReadonlyObject13510<T> = {
  readonly [P in keyof T]: DeepReadonly13510<T[P]>;
};

type UnionToIntersection13510<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13510<T> = UnionToIntersection13510<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13510<T extends unknown[], V> = [...T, V];

type TuplifyUnion13510<T, L = LastOf13510<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13510<TuplifyUnion13510<Exclude<T, L>>, L>;

type DeepPartial13510<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13510<T[P]> }
  : T;

type Paths13510<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13510<K, Paths13510<T[K], Prev13510[D]>> : never }[keyof T]
  : never;

type Prev13510 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13510<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13510 {
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

type ConfigPaths13510 = Paths13510<NestedConfig13510>;

interface HeavyProps13510 {
  config: DeepPartial13510<NestedConfig13510>;
  path?: ConfigPaths13510;
}

const HeavyComponent13510 = memo(function HeavyComponent13510({ config }: HeavyProps13510) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13510) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13510 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13510: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13510.displayName = 'HeavyComponent13510';
export default HeavyComponent13510;

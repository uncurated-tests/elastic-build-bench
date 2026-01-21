'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13562<T> = T extends (infer U)[]
  ? DeepReadonlyArray13562<U>
  : T extends object
  ? DeepReadonlyObject13562<T>
  : T;

interface DeepReadonlyArray13562<T> extends ReadonlyArray<DeepReadonly13562<T>> {}

type DeepReadonlyObject13562<T> = {
  readonly [P in keyof T]: DeepReadonly13562<T[P]>;
};

type UnionToIntersection13562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13562<T> = UnionToIntersection13562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13562<T extends unknown[], V> = [...T, V];

type TuplifyUnion13562<T, L = LastOf13562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13562<TuplifyUnion13562<Exclude<T, L>>, L>;

type DeepPartial13562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13562<T[P]> }
  : T;

type Paths13562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13562<K, Paths13562<T[K], Prev13562[D]>> : never }[keyof T]
  : never;

type Prev13562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13562 {
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

type ConfigPaths13562 = Paths13562<NestedConfig13562>;

interface HeavyProps13562 {
  config: DeepPartial13562<NestedConfig13562>;
  path?: ConfigPaths13562;
}

const HeavyComponent13562 = memo(function HeavyComponent13562({ config }: HeavyProps13562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13562.displayName = 'HeavyComponent13562';
export default HeavyComponent13562;

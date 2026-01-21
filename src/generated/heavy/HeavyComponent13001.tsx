'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13001<T> = T extends (infer U)[]
  ? DeepReadonlyArray13001<U>
  : T extends object
  ? DeepReadonlyObject13001<T>
  : T;

interface DeepReadonlyArray13001<T> extends ReadonlyArray<DeepReadonly13001<T>> {}

type DeepReadonlyObject13001<T> = {
  readonly [P in keyof T]: DeepReadonly13001<T[P]>;
};

type UnionToIntersection13001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13001<T> = UnionToIntersection13001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13001<T extends unknown[], V> = [...T, V];

type TuplifyUnion13001<T, L = LastOf13001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13001<TuplifyUnion13001<Exclude<T, L>>, L>;

type DeepPartial13001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13001<T[P]> }
  : T;

type Paths13001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13001<K, Paths13001<T[K], Prev13001[D]>> : never }[keyof T]
  : never;

type Prev13001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13001 {
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

type ConfigPaths13001 = Paths13001<NestedConfig13001>;

interface HeavyProps13001 {
  config: DeepPartial13001<NestedConfig13001>;
  path?: ConfigPaths13001;
}

const HeavyComponent13001 = memo(function HeavyComponent13001({ config }: HeavyProps13001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13001.displayName = 'HeavyComponent13001';
export default HeavyComponent13001;

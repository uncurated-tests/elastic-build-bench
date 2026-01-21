'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13899<T> = T extends (infer U)[]
  ? DeepReadonlyArray13899<U>
  : T extends object
  ? DeepReadonlyObject13899<T>
  : T;

interface DeepReadonlyArray13899<T> extends ReadonlyArray<DeepReadonly13899<T>> {}

type DeepReadonlyObject13899<T> = {
  readonly [P in keyof T]: DeepReadonly13899<T[P]>;
};

type UnionToIntersection13899<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13899<T> = UnionToIntersection13899<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13899<T extends unknown[], V> = [...T, V];

type TuplifyUnion13899<T, L = LastOf13899<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13899<TuplifyUnion13899<Exclude<T, L>>, L>;

type DeepPartial13899<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13899<T[P]> }
  : T;

type Paths13899<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13899<K, Paths13899<T[K], Prev13899[D]>> : never }[keyof T]
  : never;

type Prev13899 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13899<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13899 {
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

type ConfigPaths13899 = Paths13899<NestedConfig13899>;

interface HeavyProps13899 {
  config: DeepPartial13899<NestedConfig13899>;
  path?: ConfigPaths13899;
}

const HeavyComponent13899 = memo(function HeavyComponent13899({ config }: HeavyProps13899) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13899) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13899 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13899: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13899.displayName = 'HeavyComponent13899';
export default HeavyComponent13899;

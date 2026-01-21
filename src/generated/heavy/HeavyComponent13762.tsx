'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13762<T> = T extends (infer U)[]
  ? DeepReadonlyArray13762<U>
  : T extends object
  ? DeepReadonlyObject13762<T>
  : T;

interface DeepReadonlyArray13762<T> extends ReadonlyArray<DeepReadonly13762<T>> {}

type DeepReadonlyObject13762<T> = {
  readonly [P in keyof T]: DeepReadonly13762<T[P]>;
};

type UnionToIntersection13762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13762<T> = UnionToIntersection13762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13762<T extends unknown[], V> = [...T, V];

type TuplifyUnion13762<T, L = LastOf13762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13762<TuplifyUnion13762<Exclude<T, L>>, L>;

type DeepPartial13762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13762<T[P]> }
  : T;

type Paths13762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13762<K, Paths13762<T[K], Prev13762[D]>> : never }[keyof T]
  : never;

type Prev13762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13762 {
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

type ConfigPaths13762 = Paths13762<NestedConfig13762>;

interface HeavyProps13762 {
  config: DeepPartial13762<NestedConfig13762>;
  path?: ConfigPaths13762;
}

const HeavyComponent13762 = memo(function HeavyComponent13762({ config }: HeavyProps13762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13762.displayName = 'HeavyComponent13762';
export default HeavyComponent13762;

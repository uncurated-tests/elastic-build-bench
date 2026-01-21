'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13770<T> = T extends (infer U)[]
  ? DeepReadonlyArray13770<U>
  : T extends object
  ? DeepReadonlyObject13770<T>
  : T;

interface DeepReadonlyArray13770<T> extends ReadonlyArray<DeepReadonly13770<T>> {}

type DeepReadonlyObject13770<T> = {
  readonly [P in keyof T]: DeepReadonly13770<T[P]>;
};

type UnionToIntersection13770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13770<T> = UnionToIntersection13770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13770<T extends unknown[], V> = [...T, V];

type TuplifyUnion13770<T, L = LastOf13770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13770<TuplifyUnion13770<Exclude<T, L>>, L>;

type DeepPartial13770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13770<T[P]> }
  : T;

type Paths13770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13770<K, Paths13770<T[K], Prev13770[D]>> : never }[keyof T]
  : never;

type Prev13770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13770 {
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

type ConfigPaths13770 = Paths13770<NestedConfig13770>;

interface HeavyProps13770 {
  config: DeepPartial13770<NestedConfig13770>;
  path?: ConfigPaths13770;
}

const HeavyComponent13770 = memo(function HeavyComponent13770({ config }: HeavyProps13770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13770.displayName = 'HeavyComponent13770';
export default HeavyComponent13770;

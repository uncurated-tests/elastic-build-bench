'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13109<T> = T extends (infer U)[]
  ? DeepReadonlyArray13109<U>
  : T extends object
  ? DeepReadonlyObject13109<T>
  : T;

interface DeepReadonlyArray13109<T> extends ReadonlyArray<DeepReadonly13109<T>> {}

type DeepReadonlyObject13109<T> = {
  readonly [P in keyof T]: DeepReadonly13109<T[P]>;
};

type UnionToIntersection13109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13109<T> = UnionToIntersection13109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13109<T extends unknown[], V> = [...T, V];

type TuplifyUnion13109<T, L = LastOf13109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13109<TuplifyUnion13109<Exclude<T, L>>, L>;

type DeepPartial13109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13109<T[P]> }
  : T;

type Paths13109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13109<K, Paths13109<T[K], Prev13109[D]>> : never }[keyof T]
  : never;

type Prev13109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13109 {
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

type ConfigPaths13109 = Paths13109<NestedConfig13109>;

interface HeavyProps13109 {
  config: DeepPartial13109<NestedConfig13109>;
  path?: ConfigPaths13109;
}

const HeavyComponent13109 = memo(function HeavyComponent13109({ config }: HeavyProps13109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13109.displayName = 'HeavyComponent13109';
export default HeavyComponent13109;

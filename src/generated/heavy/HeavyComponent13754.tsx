'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13754<T> = T extends (infer U)[]
  ? DeepReadonlyArray13754<U>
  : T extends object
  ? DeepReadonlyObject13754<T>
  : T;

interface DeepReadonlyArray13754<T> extends ReadonlyArray<DeepReadonly13754<T>> {}

type DeepReadonlyObject13754<T> = {
  readonly [P in keyof T]: DeepReadonly13754<T[P]>;
};

type UnionToIntersection13754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13754<T> = UnionToIntersection13754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13754<T extends unknown[], V> = [...T, V];

type TuplifyUnion13754<T, L = LastOf13754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13754<TuplifyUnion13754<Exclude<T, L>>, L>;

type DeepPartial13754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13754<T[P]> }
  : T;

type Paths13754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13754<K, Paths13754<T[K], Prev13754[D]>> : never }[keyof T]
  : never;

type Prev13754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13754 {
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

type ConfigPaths13754 = Paths13754<NestedConfig13754>;

interface HeavyProps13754 {
  config: DeepPartial13754<NestedConfig13754>;
  path?: ConfigPaths13754;
}

const HeavyComponent13754 = memo(function HeavyComponent13754({ config }: HeavyProps13754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13754.displayName = 'HeavyComponent13754';
export default HeavyComponent13754;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13195<T> = T extends (infer U)[]
  ? DeepReadonlyArray13195<U>
  : T extends object
  ? DeepReadonlyObject13195<T>
  : T;

interface DeepReadonlyArray13195<T> extends ReadonlyArray<DeepReadonly13195<T>> {}

type DeepReadonlyObject13195<T> = {
  readonly [P in keyof T]: DeepReadonly13195<T[P]>;
};

type UnionToIntersection13195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13195<T> = UnionToIntersection13195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13195<T extends unknown[], V> = [...T, V];

type TuplifyUnion13195<T, L = LastOf13195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13195<TuplifyUnion13195<Exclude<T, L>>, L>;

type DeepPartial13195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13195<T[P]> }
  : T;

type Paths13195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13195<K, Paths13195<T[K], Prev13195[D]>> : never }[keyof T]
  : never;

type Prev13195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13195 {
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

type ConfigPaths13195 = Paths13195<NestedConfig13195>;

interface HeavyProps13195 {
  config: DeepPartial13195<NestedConfig13195>;
  path?: ConfigPaths13195;
}

const HeavyComponent13195 = memo(function HeavyComponent13195({ config }: HeavyProps13195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13195.displayName = 'HeavyComponent13195';
export default HeavyComponent13195;

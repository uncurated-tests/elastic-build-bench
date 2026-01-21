'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13898<T> = T extends (infer U)[]
  ? DeepReadonlyArray13898<U>
  : T extends object
  ? DeepReadonlyObject13898<T>
  : T;

interface DeepReadonlyArray13898<T> extends ReadonlyArray<DeepReadonly13898<T>> {}

type DeepReadonlyObject13898<T> = {
  readonly [P in keyof T]: DeepReadonly13898<T[P]>;
};

type UnionToIntersection13898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13898<T> = UnionToIntersection13898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13898<T extends unknown[], V> = [...T, V];

type TuplifyUnion13898<T, L = LastOf13898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13898<TuplifyUnion13898<Exclude<T, L>>, L>;

type DeepPartial13898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13898<T[P]> }
  : T;

type Paths13898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13898<K, Paths13898<T[K], Prev13898[D]>> : never }[keyof T]
  : never;

type Prev13898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13898 {
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

type ConfigPaths13898 = Paths13898<NestedConfig13898>;

interface HeavyProps13898 {
  config: DeepPartial13898<NestedConfig13898>;
  path?: ConfigPaths13898;
}

const HeavyComponent13898 = memo(function HeavyComponent13898({ config }: HeavyProps13898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13898.displayName = 'HeavyComponent13898';
export default HeavyComponent13898;

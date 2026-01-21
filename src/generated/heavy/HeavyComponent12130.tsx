'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12130<T> = T extends (infer U)[]
  ? DeepReadonlyArray12130<U>
  : T extends object
  ? DeepReadonlyObject12130<T>
  : T;

interface DeepReadonlyArray12130<T> extends ReadonlyArray<DeepReadonly12130<T>> {}

type DeepReadonlyObject12130<T> = {
  readonly [P in keyof T]: DeepReadonly12130<T[P]>;
};

type UnionToIntersection12130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12130<T> = UnionToIntersection12130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12130<T extends unknown[], V> = [...T, V];

type TuplifyUnion12130<T, L = LastOf12130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12130<TuplifyUnion12130<Exclude<T, L>>, L>;

type DeepPartial12130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12130<T[P]> }
  : T;

type Paths12130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12130<K, Paths12130<T[K], Prev12130[D]>> : never }[keyof T]
  : never;

type Prev12130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12130 {
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

type ConfigPaths12130 = Paths12130<NestedConfig12130>;

interface HeavyProps12130 {
  config: DeepPartial12130<NestedConfig12130>;
  path?: ConfigPaths12130;
}

const HeavyComponent12130 = memo(function HeavyComponent12130({ config }: HeavyProps12130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12130.displayName = 'HeavyComponent12130';
export default HeavyComponent12130;

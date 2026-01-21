'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12803<T> = T extends (infer U)[]
  ? DeepReadonlyArray12803<U>
  : T extends object
  ? DeepReadonlyObject12803<T>
  : T;

interface DeepReadonlyArray12803<T> extends ReadonlyArray<DeepReadonly12803<T>> {}

type DeepReadonlyObject12803<T> = {
  readonly [P in keyof T]: DeepReadonly12803<T[P]>;
};

type UnionToIntersection12803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12803<T> = UnionToIntersection12803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12803<T extends unknown[], V> = [...T, V];

type TuplifyUnion12803<T, L = LastOf12803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12803<TuplifyUnion12803<Exclude<T, L>>, L>;

type DeepPartial12803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12803<T[P]> }
  : T;

type Paths12803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12803<K, Paths12803<T[K], Prev12803[D]>> : never }[keyof T]
  : never;

type Prev12803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12803 {
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

type ConfigPaths12803 = Paths12803<NestedConfig12803>;

interface HeavyProps12803 {
  config: DeepPartial12803<NestedConfig12803>;
  path?: ConfigPaths12803;
}

const HeavyComponent12803 = memo(function HeavyComponent12803({ config }: HeavyProps12803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12803.displayName = 'HeavyComponent12803';
export default HeavyComponent12803;

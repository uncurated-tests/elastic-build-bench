'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12760<T> = T extends (infer U)[]
  ? DeepReadonlyArray12760<U>
  : T extends object
  ? DeepReadonlyObject12760<T>
  : T;

interface DeepReadonlyArray12760<T> extends ReadonlyArray<DeepReadonly12760<T>> {}

type DeepReadonlyObject12760<T> = {
  readonly [P in keyof T]: DeepReadonly12760<T[P]>;
};

type UnionToIntersection12760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12760<T> = UnionToIntersection12760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12760<T extends unknown[], V> = [...T, V];

type TuplifyUnion12760<T, L = LastOf12760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12760<TuplifyUnion12760<Exclude<T, L>>, L>;

type DeepPartial12760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12760<T[P]> }
  : T;

type Paths12760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12760<K, Paths12760<T[K], Prev12760[D]>> : never }[keyof T]
  : never;

type Prev12760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12760 {
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

type ConfigPaths12760 = Paths12760<NestedConfig12760>;

interface HeavyProps12760 {
  config: DeepPartial12760<NestedConfig12760>;
  path?: ConfigPaths12760;
}

const HeavyComponent12760 = memo(function HeavyComponent12760({ config }: HeavyProps12760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12760.displayName = 'HeavyComponent12760';
export default HeavyComponent12760;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12064<T> = T extends (infer U)[]
  ? DeepReadonlyArray12064<U>
  : T extends object
  ? DeepReadonlyObject12064<T>
  : T;

interface DeepReadonlyArray12064<T> extends ReadonlyArray<DeepReadonly12064<T>> {}

type DeepReadonlyObject12064<T> = {
  readonly [P in keyof T]: DeepReadonly12064<T[P]>;
};

type UnionToIntersection12064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12064<T> = UnionToIntersection12064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12064<T extends unknown[], V> = [...T, V];

type TuplifyUnion12064<T, L = LastOf12064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12064<TuplifyUnion12064<Exclude<T, L>>, L>;

type DeepPartial12064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12064<T[P]> }
  : T;

type Paths12064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12064<K, Paths12064<T[K], Prev12064[D]>> : never }[keyof T]
  : never;

type Prev12064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12064 {
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

type ConfigPaths12064 = Paths12064<NestedConfig12064>;

interface HeavyProps12064 {
  config: DeepPartial12064<NestedConfig12064>;
  path?: ConfigPaths12064;
}

const HeavyComponent12064 = memo(function HeavyComponent12064({ config }: HeavyProps12064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12064.displayName = 'HeavyComponent12064';
export default HeavyComponent12064;

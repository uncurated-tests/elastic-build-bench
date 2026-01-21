'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12620<T> = T extends (infer U)[]
  ? DeepReadonlyArray12620<U>
  : T extends object
  ? DeepReadonlyObject12620<T>
  : T;

interface DeepReadonlyArray12620<T> extends ReadonlyArray<DeepReadonly12620<T>> {}

type DeepReadonlyObject12620<T> = {
  readonly [P in keyof T]: DeepReadonly12620<T[P]>;
};

type UnionToIntersection12620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12620<T> = UnionToIntersection12620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12620<T extends unknown[], V> = [...T, V];

type TuplifyUnion12620<T, L = LastOf12620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12620<TuplifyUnion12620<Exclude<T, L>>, L>;

type DeepPartial12620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12620<T[P]> }
  : T;

type Paths12620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12620<K, Paths12620<T[K], Prev12620[D]>> : never }[keyof T]
  : never;

type Prev12620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12620 {
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

type ConfigPaths12620 = Paths12620<NestedConfig12620>;

interface HeavyProps12620 {
  config: DeepPartial12620<NestedConfig12620>;
  path?: ConfigPaths12620;
}

const HeavyComponent12620 = memo(function HeavyComponent12620({ config }: HeavyProps12620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12620.displayName = 'HeavyComponent12620';
export default HeavyComponent12620;

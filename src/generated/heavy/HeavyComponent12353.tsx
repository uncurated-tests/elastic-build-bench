'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12353<T> = T extends (infer U)[]
  ? DeepReadonlyArray12353<U>
  : T extends object
  ? DeepReadonlyObject12353<T>
  : T;

interface DeepReadonlyArray12353<T> extends ReadonlyArray<DeepReadonly12353<T>> {}

type DeepReadonlyObject12353<T> = {
  readonly [P in keyof T]: DeepReadonly12353<T[P]>;
};

type UnionToIntersection12353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12353<T> = UnionToIntersection12353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12353<T extends unknown[], V> = [...T, V];

type TuplifyUnion12353<T, L = LastOf12353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12353<TuplifyUnion12353<Exclude<T, L>>, L>;

type DeepPartial12353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12353<T[P]> }
  : T;

type Paths12353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12353<K, Paths12353<T[K], Prev12353[D]>> : never }[keyof T]
  : never;

type Prev12353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12353 {
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

type ConfigPaths12353 = Paths12353<NestedConfig12353>;

interface HeavyProps12353 {
  config: DeepPartial12353<NestedConfig12353>;
  path?: ConfigPaths12353;
}

const HeavyComponent12353 = memo(function HeavyComponent12353({ config }: HeavyProps12353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12353.displayName = 'HeavyComponent12353';
export default HeavyComponent12353;

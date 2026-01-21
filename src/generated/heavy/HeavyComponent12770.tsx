'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12770<T> = T extends (infer U)[]
  ? DeepReadonlyArray12770<U>
  : T extends object
  ? DeepReadonlyObject12770<T>
  : T;

interface DeepReadonlyArray12770<T> extends ReadonlyArray<DeepReadonly12770<T>> {}

type DeepReadonlyObject12770<T> = {
  readonly [P in keyof T]: DeepReadonly12770<T[P]>;
};

type UnionToIntersection12770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12770<T> = UnionToIntersection12770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12770<T extends unknown[], V> = [...T, V];

type TuplifyUnion12770<T, L = LastOf12770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12770<TuplifyUnion12770<Exclude<T, L>>, L>;

type DeepPartial12770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12770<T[P]> }
  : T;

type Paths12770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12770<K, Paths12770<T[K], Prev12770[D]>> : never }[keyof T]
  : never;

type Prev12770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12770 {
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

type ConfigPaths12770 = Paths12770<NestedConfig12770>;

interface HeavyProps12770 {
  config: DeepPartial12770<NestedConfig12770>;
  path?: ConfigPaths12770;
}

const HeavyComponent12770 = memo(function HeavyComponent12770({ config }: HeavyProps12770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12770.displayName = 'HeavyComponent12770';
export default HeavyComponent12770;

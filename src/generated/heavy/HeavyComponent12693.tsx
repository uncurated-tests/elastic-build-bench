'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12693<T> = T extends (infer U)[]
  ? DeepReadonlyArray12693<U>
  : T extends object
  ? DeepReadonlyObject12693<T>
  : T;

interface DeepReadonlyArray12693<T> extends ReadonlyArray<DeepReadonly12693<T>> {}

type DeepReadonlyObject12693<T> = {
  readonly [P in keyof T]: DeepReadonly12693<T[P]>;
};

type UnionToIntersection12693<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12693<T> = UnionToIntersection12693<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12693<T extends unknown[], V> = [...T, V];

type TuplifyUnion12693<T, L = LastOf12693<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12693<TuplifyUnion12693<Exclude<T, L>>, L>;

type DeepPartial12693<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12693<T[P]> }
  : T;

type Paths12693<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12693<K, Paths12693<T[K], Prev12693[D]>> : never }[keyof T]
  : never;

type Prev12693 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12693<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12693 {
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

type ConfigPaths12693 = Paths12693<NestedConfig12693>;

interface HeavyProps12693 {
  config: DeepPartial12693<NestedConfig12693>;
  path?: ConfigPaths12693;
}

const HeavyComponent12693 = memo(function HeavyComponent12693({ config }: HeavyProps12693) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12693) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12693 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12693: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12693.displayName = 'HeavyComponent12693';
export default HeavyComponent12693;

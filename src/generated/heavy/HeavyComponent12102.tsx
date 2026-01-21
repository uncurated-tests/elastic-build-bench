'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12102<T> = T extends (infer U)[]
  ? DeepReadonlyArray12102<U>
  : T extends object
  ? DeepReadonlyObject12102<T>
  : T;

interface DeepReadonlyArray12102<T> extends ReadonlyArray<DeepReadonly12102<T>> {}

type DeepReadonlyObject12102<T> = {
  readonly [P in keyof T]: DeepReadonly12102<T[P]>;
};

type UnionToIntersection12102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12102<T> = UnionToIntersection12102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12102<T extends unknown[], V> = [...T, V];

type TuplifyUnion12102<T, L = LastOf12102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12102<TuplifyUnion12102<Exclude<T, L>>, L>;

type DeepPartial12102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12102<T[P]> }
  : T;

type Paths12102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12102<K, Paths12102<T[K], Prev12102[D]>> : never }[keyof T]
  : never;

type Prev12102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12102 {
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

type ConfigPaths12102 = Paths12102<NestedConfig12102>;

interface HeavyProps12102 {
  config: DeepPartial12102<NestedConfig12102>;
  path?: ConfigPaths12102;
}

const HeavyComponent12102 = memo(function HeavyComponent12102({ config }: HeavyProps12102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12102.displayName = 'HeavyComponent12102';
export default HeavyComponent12102;

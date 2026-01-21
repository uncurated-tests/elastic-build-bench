'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12<T> = T extends (infer U)[]
  ? DeepReadonlyArray12<U>
  : T extends object
  ? DeepReadonlyObject12<T>
  : T;

interface DeepReadonlyArray12<T> extends ReadonlyArray<DeepReadonly12<T>> {}

type DeepReadonlyObject12<T> = {
  readonly [P in keyof T]: DeepReadonly12<T[P]>;
};

type UnionToIntersection12<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12<T> = UnionToIntersection12<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12<T extends unknown[], V> = [...T, V];

type TuplifyUnion12<T, L = LastOf12<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12<TuplifyUnion12<Exclude<T, L>>, L>;

type DeepPartial12<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12<T[P]> }
  : T;

type Paths12<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12<K, Paths12<T[K], Prev12[D]>> : never }[keyof T]
  : never;

type Prev12 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12 {
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

type ConfigPaths12 = Paths12<NestedConfig12>;

interface HeavyProps12 {
  config: DeepPartial12<NestedConfig12>;
  path?: ConfigPaths12;
}

const HeavyComponent12 = memo(function HeavyComponent12({ config }: HeavyProps12) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12.displayName = 'HeavyComponent12';
export default HeavyComponent12;

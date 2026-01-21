'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12767<T> = T extends (infer U)[]
  ? DeepReadonlyArray12767<U>
  : T extends object
  ? DeepReadonlyObject12767<T>
  : T;

interface DeepReadonlyArray12767<T> extends ReadonlyArray<DeepReadonly12767<T>> {}

type DeepReadonlyObject12767<T> = {
  readonly [P in keyof T]: DeepReadonly12767<T[P]>;
};

type UnionToIntersection12767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12767<T> = UnionToIntersection12767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12767<T extends unknown[], V> = [...T, V];

type TuplifyUnion12767<T, L = LastOf12767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12767<TuplifyUnion12767<Exclude<T, L>>, L>;

type DeepPartial12767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12767<T[P]> }
  : T;

type Paths12767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12767<K, Paths12767<T[K], Prev12767[D]>> : never }[keyof T]
  : never;

type Prev12767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12767 {
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

type ConfigPaths12767 = Paths12767<NestedConfig12767>;

interface HeavyProps12767 {
  config: DeepPartial12767<NestedConfig12767>;
  path?: ConfigPaths12767;
}

const HeavyComponent12767 = memo(function HeavyComponent12767({ config }: HeavyProps12767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12767.displayName = 'HeavyComponent12767';
export default HeavyComponent12767;

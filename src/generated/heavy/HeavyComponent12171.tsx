'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12171<T> = T extends (infer U)[]
  ? DeepReadonlyArray12171<U>
  : T extends object
  ? DeepReadonlyObject12171<T>
  : T;

interface DeepReadonlyArray12171<T> extends ReadonlyArray<DeepReadonly12171<T>> {}

type DeepReadonlyObject12171<T> = {
  readonly [P in keyof T]: DeepReadonly12171<T[P]>;
};

type UnionToIntersection12171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12171<T> = UnionToIntersection12171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12171<T extends unknown[], V> = [...T, V];

type TuplifyUnion12171<T, L = LastOf12171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12171<TuplifyUnion12171<Exclude<T, L>>, L>;

type DeepPartial12171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12171<T[P]> }
  : T;

type Paths12171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12171<K, Paths12171<T[K], Prev12171[D]>> : never }[keyof T]
  : never;

type Prev12171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12171 {
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

type ConfigPaths12171 = Paths12171<NestedConfig12171>;

interface HeavyProps12171 {
  config: DeepPartial12171<NestedConfig12171>;
  path?: ConfigPaths12171;
}

const HeavyComponent12171 = memo(function HeavyComponent12171({ config }: HeavyProps12171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12171.displayName = 'HeavyComponent12171';
export default HeavyComponent12171;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12715<T> = T extends (infer U)[]
  ? DeepReadonlyArray12715<U>
  : T extends object
  ? DeepReadonlyObject12715<T>
  : T;

interface DeepReadonlyArray12715<T> extends ReadonlyArray<DeepReadonly12715<T>> {}

type DeepReadonlyObject12715<T> = {
  readonly [P in keyof T]: DeepReadonly12715<T[P]>;
};

type UnionToIntersection12715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12715<T> = UnionToIntersection12715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12715<T extends unknown[], V> = [...T, V];

type TuplifyUnion12715<T, L = LastOf12715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12715<TuplifyUnion12715<Exclude<T, L>>, L>;

type DeepPartial12715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12715<T[P]> }
  : T;

type Paths12715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12715<K, Paths12715<T[K], Prev12715[D]>> : never }[keyof T]
  : never;

type Prev12715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12715 {
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

type ConfigPaths12715 = Paths12715<NestedConfig12715>;

interface HeavyProps12715 {
  config: DeepPartial12715<NestedConfig12715>;
  path?: ConfigPaths12715;
}

const HeavyComponent12715 = memo(function HeavyComponent12715({ config }: HeavyProps12715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12715.displayName = 'HeavyComponent12715';
export default HeavyComponent12715;

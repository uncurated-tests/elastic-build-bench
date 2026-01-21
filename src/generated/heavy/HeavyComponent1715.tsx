'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1715<T> = T extends (infer U)[]
  ? DeepReadonlyArray1715<U>
  : T extends object
  ? DeepReadonlyObject1715<T>
  : T;

interface DeepReadonlyArray1715<T> extends ReadonlyArray<DeepReadonly1715<T>> {}

type DeepReadonlyObject1715<T> = {
  readonly [P in keyof T]: DeepReadonly1715<T[P]>;
};

type UnionToIntersection1715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1715<T> = UnionToIntersection1715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1715<T extends unknown[], V> = [...T, V];

type TuplifyUnion1715<T, L = LastOf1715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1715<TuplifyUnion1715<Exclude<T, L>>, L>;

type DeepPartial1715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1715<T[P]> }
  : T;

type Paths1715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1715<K, Paths1715<T[K], Prev1715[D]>> : never }[keyof T]
  : never;

type Prev1715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1715 {
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

type ConfigPaths1715 = Paths1715<NestedConfig1715>;

interface HeavyProps1715 {
  config: DeepPartial1715<NestedConfig1715>;
  path?: ConfigPaths1715;
}

const HeavyComponent1715 = memo(function HeavyComponent1715({ config }: HeavyProps1715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1715.displayName = 'HeavyComponent1715';
export default HeavyComponent1715;

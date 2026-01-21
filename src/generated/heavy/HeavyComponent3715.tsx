'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3715<T> = T extends (infer U)[]
  ? DeepReadonlyArray3715<U>
  : T extends object
  ? DeepReadonlyObject3715<T>
  : T;

interface DeepReadonlyArray3715<T> extends ReadonlyArray<DeepReadonly3715<T>> {}

type DeepReadonlyObject3715<T> = {
  readonly [P in keyof T]: DeepReadonly3715<T[P]>;
};

type UnionToIntersection3715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3715<T> = UnionToIntersection3715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3715<T extends unknown[], V> = [...T, V];

type TuplifyUnion3715<T, L = LastOf3715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3715<TuplifyUnion3715<Exclude<T, L>>, L>;

type DeepPartial3715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3715<T[P]> }
  : T;

type Paths3715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3715<K, Paths3715<T[K], Prev3715[D]>> : never }[keyof T]
  : never;

type Prev3715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3715 {
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

type ConfigPaths3715 = Paths3715<NestedConfig3715>;

interface HeavyProps3715 {
  config: DeepPartial3715<NestedConfig3715>;
  path?: ConfigPaths3715;
}

const HeavyComponent3715 = memo(function HeavyComponent3715({ config }: HeavyProps3715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3715.displayName = 'HeavyComponent3715';
export default HeavyComponent3715;

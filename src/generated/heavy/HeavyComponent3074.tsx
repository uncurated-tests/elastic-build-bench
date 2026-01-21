'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3074<T> = T extends (infer U)[]
  ? DeepReadonlyArray3074<U>
  : T extends object
  ? DeepReadonlyObject3074<T>
  : T;

interface DeepReadonlyArray3074<T> extends ReadonlyArray<DeepReadonly3074<T>> {}

type DeepReadonlyObject3074<T> = {
  readonly [P in keyof T]: DeepReadonly3074<T[P]>;
};

type UnionToIntersection3074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3074<T> = UnionToIntersection3074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3074<T extends unknown[], V> = [...T, V];

type TuplifyUnion3074<T, L = LastOf3074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3074<TuplifyUnion3074<Exclude<T, L>>, L>;

type DeepPartial3074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3074<T[P]> }
  : T;

type Paths3074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3074<K, Paths3074<T[K], Prev3074[D]>> : never }[keyof T]
  : never;

type Prev3074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3074 {
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

type ConfigPaths3074 = Paths3074<NestedConfig3074>;

interface HeavyProps3074 {
  config: DeepPartial3074<NestedConfig3074>;
  path?: ConfigPaths3074;
}

const HeavyComponent3074 = memo(function HeavyComponent3074({ config }: HeavyProps3074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3074.displayName = 'HeavyComponent3074';
export default HeavyComponent3074;

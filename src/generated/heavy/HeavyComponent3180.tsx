'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3180<T> = T extends (infer U)[]
  ? DeepReadonlyArray3180<U>
  : T extends object
  ? DeepReadonlyObject3180<T>
  : T;

interface DeepReadonlyArray3180<T> extends ReadonlyArray<DeepReadonly3180<T>> {}

type DeepReadonlyObject3180<T> = {
  readonly [P in keyof T]: DeepReadonly3180<T[P]>;
};

type UnionToIntersection3180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3180<T> = UnionToIntersection3180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3180<T extends unknown[], V> = [...T, V];

type TuplifyUnion3180<T, L = LastOf3180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3180<TuplifyUnion3180<Exclude<T, L>>, L>;

type DeepPartial3180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3180<T[P]> }
  : T;

type Paths3180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3180<K, Paths3180<T[K], Prev3180[D]>> : never }[keyof T]
  : never;

type Prev3180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3180 {
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

type ConfigPaths3180 = Paths3180<NestedConfig3180>;

interface HeavyProps3180 {
  config: DeepPartial3180<NestedConfig3180>;
  path?: ConfigPaths3180;
}

const HeavyComponent3180 = memo(function HeavyComponent3180({ config }: HeavyProps3180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3180.displayName = 'HeavyComponent3180';
export default HeavyComponent3180;

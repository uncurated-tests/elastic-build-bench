'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3390<T> = T extends (infer U)[]
  ? DeepReadonlyArray3390<U>
  : T extends object
  ? DeepReadonlyObject3390<T>
  : T;

interface DeepReadonlyArray3390<T> extends ReadonlyArray<DeepReadonly3390<T>> {}

type DeepReadonlyObject3390<T> = {
  readonly [P in keyof T]: DeepReadonly3390<T[P]>;
};

type UnionToIntersection3390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3390<T> = UnionToIntersection3390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3390<T extends unknown[], V> = [...T, V];

type TuplifyUnion3390<T, L = LastOf3390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3390<TuplifyUnion3390<Exclude<T, L>>, L>;

type DeepPartial3390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3390<T[P]> }
  : T;

type Paths3390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3390<K, Paths3390<T[K], Prev3390[D]>> : never }[keyof T]
  : never;

type Prev3390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3390 {
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

type ConfigPaths3390 = Paths3390<NestedConfig3390>;

interface HeavyProps3390 {
  config: DeepPartial3390<NestedConfig3390>;
  path?: ConfigPaths3390;
}

const HeavyComponent3390 = memo(function HeavyComponent3390({ config }: HeavyProps3390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3390.displayName = 'HeavyComponent3390';
export default HeavyComponent3390;

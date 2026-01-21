'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3772<T> = T extends (infer U)[]
  ? DeepReadonlyArray3772<U>
  : T extends object
  ? DeepReadonlyObject3772<T>
  : T;

interface DeepReadonlyArray3772<T> extends ReadonlyArray<DeepReadonly3772<T>> {}

type DeepReadonlyObject3772<T> = {
  readonly [P in keyof T]: DeepReadonly3772<T[P]>;
};

type UnionToIntersection3772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3772<T> = UnionToIntersection3772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3772<T extends unknown[], V> = [...T, V];

type TuplifyUnion3772<T, L = LastOf3772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3772<TuplifyUnion3772<Exclude<T, L>>, L>;

type DeepPartial3772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3772<T[P]> }
  : T;

type Paths3772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3772<K, Paths3772<T[K], Prev3772[D]>> : never }[keyof T]
  : never;

type Prev3772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3772 {
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

type ConfigPaths3772 = Paths3772<NestedConfig3772>;

interface HeavyProps3772 {
  config: DeepPartial3772<NestedConfig3772>;
  path?: ConfigPaths3772;
}

const HeavyComponent3772 = memo(function HeavyComponent3772({ config }: HeavyProps3772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3772.displayName = 'HeavyComponent3772';
export default HeavyComponent3772;

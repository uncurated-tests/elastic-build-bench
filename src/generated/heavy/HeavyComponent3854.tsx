'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3854<T> = T extends (infer U)[]
  ? DeepReadonlyArray3854<U>
  : T extends object
  ? DeepReadonlyObject3854<T>
  : T;

interface DeepReadonlyArray3854<T> extends ReadonlyArray<DeepReadonly3854<T>> {}

type DeepReadonlyObject3854<T> = {
  readonly [P in keyof T]: DeepReadonly3854<T[P]>;
};

type UnionToIntersection3854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3854<T> = UnionToIntersection3854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3854<T extends unknown[], V> = [...T, V];

type TuplifyUnion3854<T, L = LastOf3854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3854<TuplifyUnion3854<Exclude<T, L>>, L>;

type DeepPartial3854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3854<T[P]> }
  : T;

type Paths3854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3854<K, Paths3854<T[K], Prev3854[D]>> : never }[keyof T]
  : never;

type Prev3854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3854 {
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

type ConfigPaths3854 = Paths3854<NestedConfig3854>;

interface HeavyProps3854 {
  config: DeepPartial3854<NestedConfig3854>;
  path?: ConfigPaths3854;
}

const HeavyComponent3854 = memo(function HeavyComponent3854({ config }: HeavyProps3854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3854.displayName = 'HeavyComponent3854';
export default HeavyComponent3854;

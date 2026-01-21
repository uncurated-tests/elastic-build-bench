'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3551<T> = T extends (infer U)[]
  ? DeepReadonlyArray3551<U>
  : T extends object
  ? DeepReadonlyObject3551<T>
  : T;

interface DeepReadonlyArray3551<T> extends ReadonlyArray<DeepReadonly3551<T>> {}

type DeepReadonlyObject3551<T> = {
  readonly [P in keyof T]: DeepReadonly3551<T[P]>;
};

type UnionToIntersection3551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3551<T> = UnionToIntersection3551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3551<T extends unknown[], V> = [...T, V];

type TuplifyUnion3551<T, L = LastOf3551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3551<TuplifyUnion3551<Exclude<T, L>>, L>;

type DeepPartial3551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3551<T[P]> }
  : T;

type Paths3551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3551<K, Paths3551<T[K], Prev3551[D]>> : never }[keyof T]
  : never;

type Prev3551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3551 {
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

type ConfigPaths3551 = Paths3551<NestedConfig3551>;

interface HeavyProps3551 {
  config: DeepPartial3551<NestedConfig3551>;
  path?: ConfigPaths3551;
}

const HeavyComponent3551 = memo(function HeavyComponent3551({ config }: HeavyProps3551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3551.displayName = 'HeavyComponent3551';
export default HeavyComponent3551;

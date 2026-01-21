'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3848<T> = T extends (infer U)[]
  ? DeepReadonlyArray3848<U>
  : T extends object
  ? DeepReadonlyObject3848<T>
  : T;

interface DeepReadonlyArray3848<T> extends ReadonlyArray<DeepReadonly3848<T>> {}

type DeepReadonlyObject3848<T> = {
  readonly [P in keyof T]: DeepReadonly3848<T[P]>;
};

type UnionToIntersection3848<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3848<T> = UnionToIntersection3848<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3848<T extends unknown[], V> = [...T, V];

type TuplifyUnion3848<T, L = LastOf3848<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3848<TuplifyUnion3848<Exclude<T, L>>, L>;

type DeepPartial3848<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3848<T[P]> }
  : T;

type Paths3848<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3848<K, Paths3848<T[K], Prev3848[D]>> : never }[keyof T]
  : never;

type Prev3848 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3848<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3848 {
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

type ConfigPaths3848 = Paths3848<NestedConfig3848>;

interface HeavyProps3848 {
  config: DeepPartial3848<NestedConfig3848>;
  path?: ConfigPaths3848;
}

const HeavyComponent3848 = memo(function HeavyComponent3848({ config }: HeavyProps3848) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3848) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3848 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3848: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3848.displayName = 'HeavyComponent3848';
export default HeavyComponent3848;

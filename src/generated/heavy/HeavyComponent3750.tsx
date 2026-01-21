'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3750<T> = T extends (infer U)[]
  ? DeepReadonlyArray3750<U>
  : T extends object
  ? DeepReadonlyObject3750<T>
  : T;

interface DeepReadonlyArray3750<T> extends ReadonlyArray<DeepReadonly3750<T>> {}

type DeepReadonlyObject3750<T> = {
  readonly [P in keyof T]: DeepReadonly3750<T[P]>;
};

type UnionToIntersection3750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3750<T> = UnionToIntersection3750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3750<T extends unknown[], V> = [...T, V];

type TuplifyUnion3750<T, L = LastOf3750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3750<TuplifyUnion3750<Exclude<T, L>>, L>;

type DeepPartial3750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3750<T[P]> }
  : T;

type Paths3750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3750<K, Paths3750<T[K], Prev3750[D]>> : never }[keyof T]
  : never;

type Prev3750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3750 {
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

type ConfigPaths3750 = Paths3750<NestedConfig3750>;

interface HeavyProps3750 {
  config: DeepPartial3750<NestedConfig3750>;
  path?: ConfigPaths3750;
}

const HeavyComponent3750 = memo(function HeavyComponent3750({ config }: HeavyProps3750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3750.displayName = 'HeavyComponent3750';
export default HeavyComponent3750;

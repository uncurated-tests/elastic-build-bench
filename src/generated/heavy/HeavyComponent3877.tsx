'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3877<T> = T extends (infer U)[]
  ? DeepReadonlyArray3877<U>
  : T extends object
  ? DeepReadonlyObject3877<T>
  : T;

interface DeepReadonlyArray3877<T> extends ReadonlyArray<DeepReadonly3877<T>> {}

type DeepReadonlyObject3877<T> = {
  readonly [P in keyof T]: DeepReadonly3877<T[P]>;
};

type UnionToIntersection3877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3877<T> = UnionToIntersection3877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3877<T extends unknown[], V> = [...T, V];

type TuplifyUnion3877<T, L = LastOf3877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3877<TuplifyUnion3877<Exclude<T, L>>, L>;

type DeepPartial3877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3877<T[P]> }
  : T;

type Paths3877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3877<K, Paths3877<T[K], Prev3877[D]>> : never }[keyof T]
  : never;

type Prev3877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3877 {
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

type ConfigPaths3877 = Paths3877<NestedConfig3877>;

interface HeavyProps3877 {
  config: DeepPartial3877<NestedConfig3877>;
  path?: ConfigPaths3877;
}

const HeavyComponent3877 = memo(function HeavyComponent3877({ config }: HeavyProps3877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3877.displayName = 'HeavyComponent3877';
export default HeavyComponent3877;

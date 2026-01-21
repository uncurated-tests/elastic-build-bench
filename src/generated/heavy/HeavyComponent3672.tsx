'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3672<T> = T extends (infer U)[]
  ? DeepReadonlyArray3672<U>
  : T extends object
  ? DeepReadonlyObject3672<T>
  : T;

interface DeepReadonlyArray3672<T> extends ReadonlyArray<DeepReadonly3672<T>> {}

type DeepReadonlyObject3672<T> = {
  readonly [P in keyof T]: DeepReadonly3672<T[P]>;
};

type UnionToIntersection3672<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3672<T> = UnionToIntersection3672<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3672<T extends unknown[], V> = [...T, V];

type TuplifyUnion3672<T, L = LastOf3672<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3672<TuplifyUnion3672<Exclude<T, L>>, L>;

type DeepPartial3672<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3672<T[P]> }
  : T;

type Paths3672<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3672<K, Paths3672<T[K], Prev3672[D]>> : never }[keyof T]
  : never;

type Prev3672 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3672<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3672 {
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

type ConfigPaths3672 = Paths3672<NestedConfig3672>;

interface HeavyProps3672 {
  config: DeepPartial3672<NestedConfig3672>;
  path?: ConfigPaths3672;
}

const HeavyComponent3672 = memo(function HeavyComponent3672({ config }: HeavyProps3672) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3672) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3672 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3672: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3672.displayName = 'HeavyComponent3672';
export default HeavyComponent3672;

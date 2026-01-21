'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3914<T> = T extends (infer U)[]
  ? DeepReadonlyArray3914<U>
  : T extends object
  ? DeepReadonlyObject3914<T>
  : T;

interface DeepReadonlyArray3914<T> extends ReadonlyArray<DeepReadonly3914<T>> {}

type DeepReadonlyObject3914<T> = {
  readonly [P in keyof T]: DeepReadonly3914<T[P]>;
};

type UnionToIntersection3914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3914<T> = UnionToIntersection3914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3914<T extends unknown[], V> = [...T, V];

type TuplifyUnion3914<T, L = LastOf3914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3914<TuplifyUnion3914<Exclude<T, L>>, L>;

type DeepPartial3914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3914<T[P]> }
  : T;

type Paths3914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3914<K, Paths3914<T[K], Prev3914[D]>> : never }[keyof T]
  : never;

type Prev3914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3914 {
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

type ConfigPaths3914 = Paths3914<NestedConfig3914>;

interface HeavyProps3914 {
  config: DeepPartial3914<NestedConfig3914>;
  path?: ConfigPaths3914;
}

const HeavyComponent3914 = memo(function HeavyComponent3914({ config }: HeavyProps3914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3914.displayName = 'HeavyComponent3914';
export default HeavyComponent3914;

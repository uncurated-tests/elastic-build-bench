'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3950<T> = T extends (infer U)[]
  ? DeepReadonlyArray3950<U>
  : T extends object
  ? DeepReadonlyObject3950<T>
  : T;

interface DeepReadonlyArray3950<T> extends ReadonlyArray<DeepReadonly3950<T>> {}

type DeepReadonlyObject3950<T> = {
  readonly [P in keyof T]: DeepReadonly3950<T[P]>;
};

type UnionToIntersection3950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3950<T> = UnionToIntersection3950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3950<T extends unknown[], V> = [...T, V];

type TuplifyUnion3950<T, L = LastOf3950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3950<TuplifyUnion3950<Exclude<T, L>>, L>;

type DeepPartial3950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3950<T[P]> }
  : T;

type Paths3950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3950<K, Paths3950<T[K], Prev3950[D]>> : never }[keyof T]
  : never;

type Prev3950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3950 {
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

type ConfigPaths3950 = Paths3950<NestedConfig3950>;

interface HeavyProps3950 {
  config: DeepPartial3950<NestedConfig3950>;
  path?: ConfigPaths3950;
}

const HeavyComponent3950 = memo(function HeavyComponent3950({ config }: HeavyProps3950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3950.displayName = 'HeavyComponent3950';
export default HeavyComponent3950;

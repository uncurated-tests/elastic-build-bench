'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3729<T> = T extends (infer U)[]
  ? DeepReadonlyArray3729<U>
  : T extends object
  ? DeepReadonlyObject3729<T>
  : T;

interface DeepReadonlyArray3729<T> extends ReadonlyArray<DeepReadonly3729<T>> {}

type DeepReadonlyObject3729<T> = {
  readonly [P in keyof T]: DeepReadonly3729<T[P]>;
};

type UnionToIntersection3729<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3729<T> = UnionToIntersection3729<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3729<T extends unknown[], V> = [...T, V];

type TuplifyUnion3729<T, L = LastOf3729<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3729<TuplifyUnion3729<Exclude<T, L>>, L>;

type DeepPartial3729<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3729<T[P]> }
  : T;

type Paths3729<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3729<K, Paths3729<T[K], Prev3729[D]>> : never }[keyof T]
  : never;

type Prev3729 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3729<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3729 {
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

type ConfigPaths3729 = Paths3729<NestedConfig3729>;

interface HeavyProps3729 {
  config: DeepPartial3729<NestedConfig3729>;
  path?: ConfigPaths3729;
}

const HeavyComponent3729 = memo(function HeavyComponent3729({ config }: HeavyProps3729) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3729) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3729 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3729: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3729.displayName = 'HeavyComponent3729';
export default HeavyComponent3729;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3674<T> = T extends (infer U)[]
  ? DeepReadonlyArray3674<U>
  : T extends object
  ? DeepReadonlyObject3674<T>
  : T;

interface DeepReadonlyArray3674<T> extends ReadonlyArray<DeepReadonly3674<T>> {}

type DeepReadonlyObject3674<T> = {
  readonly [P in keyof T]: DeepReadonly3674<T[P]>;
};

type UnionToIntersection3674<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3674<T> = UnionToIntersection3674<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3674<T extends unknown[], V> = [...T, V];

type TuplifyUnion3674<T, L = LastOf3674<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3674<TuplifyUnion3674<Exclude<T, L>>, L>;

type DeepPartial3674<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3674<T[P]> }
  : T;

type Paths3674<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3674<K, Paths3674<T[K], Prev3674[D]>> : never }[keyof T]
  : never;

type Prev3674 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3674<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3674 {
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

type ConfigPaths3674 = Paths3674<NestedConfig3674>;

interface HeavyProps3674 {
  config: DeepPartial3674<NestedConfig3674>;
  path?: ConfigPaths3674;
}

const HeavyComponent3674 = memo(function HeavyComponent3674({ config }: HeavyProps3674) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3674) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3674 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3674: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3674.displayName = 'HeavyComponent3674';
export default HeavyComponent3674;

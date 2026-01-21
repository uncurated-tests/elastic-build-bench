'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3847<T> = T extends (infer U)[]
  ? DeepReadonlyArray3847<U>
  : T extends object
  ? DeepReadonlyObject3847<T>
  : T;

interface DeepReadonlyArray3847<T> extends ReadonlyArray<DeepReadonly3847<T>> {}

type DeepReadonlyObject3847<T> = {
  readonly [P in keyof T]: DeepReadonly3847<T[P]>;
};

type UnionToIntersection3847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3847<T> = UnionToIntersection3847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3847<T extends unknown[], V> = [...T, V];

type TuplifyUnion3847<T, L = LastOf3847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3847<TuplifyUnion3847<Exclude<T, L>>, L>;

type DeepPartial3847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3847<T[P]> }
  : T;

type Paths3847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3847<K, Paths3847<T[K], Prev3847[D]>> : never }[keyof T]
  : never;

type Prev3847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3847 {
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

type ConfigPaths3847 = Paths3847<NestedConfig3847>;

interface HeavyProps3847 {
  config: DeepPartial3847<NestedConfig3847>;
  path?: ConfigPaths3847;
}

const HeavyComponent3847 = memo(function HeavyComponent3847({ config }: HeavyProps3847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3847.displayName = 'HeavyComponent3847';
export default HeavyComponent3847;

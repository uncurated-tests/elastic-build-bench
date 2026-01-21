'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3639<T> = T extends (infer U)[]
  ? DeepReadonlyArray3639<U>
  : T extends object
  ? DeepReadonlyObject3639<T>
  : T;

interface DeepReadonlyArray3639<T> extends ReadonlyArray<DeepReadonly3639<T>> {}

type DeepReadonlyObject3639<T> = {
  readonly [P in keyof T]: DeepReadonly3639<T[P]>;
};

type UnionToIntersection3639<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3639<T> = UnionToIntersection3639<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3639<T extends unknown[], V> = [...T, V];

type TuplifyUnion3639<T, L = LastOf3639<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3639<TuplifyUnion3639<Exclude<T, L>>, L>;

type DeepPartial3639<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3639<T[P]> }
  : T;

type Paths3639<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3639<K, Paths3639<T[K], Prev3639[D]>> : never }[keyof T]
  : never;

type Prev3639 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3639<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3639 {
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

type ConfigPaths3639 = Paths3639<NestedConfig3639>;

interface HeavyProps3639 {
  config: DeepPartial3639<NestedConfig3639>;
  path?: ConfigPaths3639;
}

const HeavyComponent3639 = memo(function HeavyComponent3639({ config }: HeavyProps3639) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3639) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3639 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3639: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3639.displayName = 'HeavyComponent3639';
export default HeavyComponent3639;

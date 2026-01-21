'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3565<T> = T extends (infer U)[]
  ? DeepReadonlyArray3565<U>
  : T extends object
  ? DeepReadonlyObject3565<T>
  : T;

interface DeepReadonlyArray3565<T> extends ReadonlyArray<DeepReadonly3565<T>> {}

type DeepReadonlyObject3565<T> = {
  readonly [P in keyof T]: DeepReadonly3565<T[P]>;
};

type UnionToIntersection3565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3565<T> = UnionToIntersection3565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3565<T extends unknown[], V> = [...T, V];

type TuplifyUnion3565<T, L = LastOf3565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3565<TuplifyUnion3565<Exclude<T, L>>, L>;

type DeepPartial3565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3565<T[P]> }
  : T;

type Paths3565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3565<K, Paths3565<T[K], Prev3565[D]>> : never }[keyof T]
  : never;

type Prev3565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3565 {
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

type ConfigPaths3565 = Paths3565<NestedConfig3565>;

interface HeavyProps3565 {
  config: DeepPartial3565<NestedConfig3565>;
  path?: ConfigPaths3565;
}

const HeavyComponent3565 = memo(function HeavyComponent3565({ config }: HeavyProps3565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3565.displayName = 'HeavyComponent3565';
export default HeavyComponent3565;

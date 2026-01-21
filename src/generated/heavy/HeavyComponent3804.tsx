'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3804<T> = T extends (infer U)[]
  ? DeepReadonlyArray3804<U>
  : T extends object
  ? DeepReadonlyObject3804<T>
  : T;

interface DeepReadonlyArray3804<T> extends ReadonlyArray<DeepReadonly3804<T>> {}

type DeepReadonlyObject3804<T> = {
  readonly [P in keyof T]: DeepReadonly3804<T[P]>;
};

type UnionToIntersection3804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3804<T> = UnionToIntersection3804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3804<T extends unknown[], V> = [...T, V];

type TuplifyUnion3804<T, L = LastOf3804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3804<TuplifyUnion3804<Exclude<T, L>>, L>;

type DeepPartial3804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3804<T[P]> }
  : T;

type Paths3804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3804<K, Paths3804<T[K], Prev3804[D]>> : never }[keyof T]
  : never;

type Prev3804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3804 {
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

type ConfigPaths3804 = Paths3804<NestedConfig3804>;

interface HeavyProps3804 {
  config: DeepPartial3804<NestedConfig3804>;
  path?: ConfigPaths3804;
}

const HeavyComponent3804 = memo(function HeavyComponent3804({ config }: HeavyProps3804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3804.displayName = 'HeavyComponent3804';
export default HeavyComponent3804;

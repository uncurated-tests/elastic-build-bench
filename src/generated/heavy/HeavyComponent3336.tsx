'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3336<T> = T extends (infer U)[]
  ? DeepReadonlyArray3336<U>
  : T extends object
  ? DeepReadonlyObject3336<T>
  : T;

interface DeepReadonlyArray3336<T> extends ReadonlyArray<DeepReadonly3336<T>> {}

type DeepReadonlyObject3336<T> = {
  readonly [P in keyof T]: DeepReadonly3336<T[P]>;
};

type UnionToIntersection3336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3336<T> = UnionToIntersection3336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3336<T extends unknown[], V> = [...T, V];

type TuplifyUnion3336<T, L = LastOf3336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3336<TuplifyUnion3336<Exclude<T, L>>, L>;

type DeepPartial3336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3336<T[P]> }
  : T;

type Paths3336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3336<K, Paths3336<T[K], Prev3336[D]>> : never }[keyof T]
  : never;

type Prev3336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3336 {
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

type ConfigPaths3336 = Paths3336<NestedConfig3336>;

interface HeavyProps3336 {
  config: DeepPartial3336<NestedConfig3336>;
  path?: ConfigPaths3336;
}

const HeavyComponent3336 = memo(function HeavyComponent3336({ config }: HeavyProps3336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3336.displayName = 'HeavyComponent3336';
export default HeavyComponent3336;

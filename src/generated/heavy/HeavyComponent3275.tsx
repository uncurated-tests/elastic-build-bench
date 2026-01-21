'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3275<T> = T extends (infer U)[]
  ? DeepReadonlyArray3275<U>
  : T extends object
  ? DeepReadonlyObject3275<T>
  : T;

interface DeepReadonlyArray3275<T> extends ReadonlyArray<DeepReadonly3275<T>> {}

type DeepReadonlyObject3275<T> = {
  readonly [P in keyof T]: DeepReadonly3275<T[P]>;
};

type UnionToIntersection3275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3275<T> = UnionToIntersection3275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3275<T extends unknown[], V> = [...T, V];

type TuplifyUnion3275<T, L = LastOf3275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3275<TuplifyUnion3275<Exclude<T, L>>, L>;

type DeepPartial3275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3275<T[P]> }
  : T;

type Paths3275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3275<K, Paths3275<T[K], Prev3275[D]>> : never }[keyof T]
  : never;

type Prev3275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3275 {
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

type ConfigPaths3275 = Paths3275<NestedConfig3275>;

interface HeavyProps3275 {
  config: DeepPartial3275<NestedConfig3275>;
  path?: ConfigPaths3275;
}

const HeavyComponent3275 = memo(function HeavyComponent3275({ config }: HeavyProps3275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3275.displayName = 'HeavyComponent3275';
export default HeavyComponent3275;

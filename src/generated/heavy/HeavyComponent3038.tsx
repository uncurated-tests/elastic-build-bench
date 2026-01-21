'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3038<T> = T extends (infer U)[]
  ? DeepReadonlyArray3038<U>
  : T extends object
  ? DeepReadonlyObject3038<T>
  : T;

interface DeepReadonlyArray3038<T> extends ReadonlyArray<DeepReadonly3038<T>> {}

type DeepReadonlyObject3038<T> = {
  readonly [P in keyof T]: DeepReadonly3038<T[P]>;
};

type UnionToIntersection3038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3038<T> = UnionToIntersection3038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3038<T extends unknown[], V> = [...T, V];

type TuplifyUnion3038<T, L = LastOf3038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3038<TuplifyUnion3038<Exclude<T, L>>, L>;

type DeepPartial3038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3038<T[P]> }
  : T;

type Paths3038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3038<K, Paths3038<T[K], Prev3038[D]>> : never }[keyof T]
  : never;

type Prev3038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3038 {
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

type ConfigPaths3038 = Paths3038<NestedConfig3038>;

interface HeavyProps3038 {
  config: DeepPartial3038<NestedConfig3038>;
  path?: ConfigPaths3038;
}

const HeavyComponent3038 = memo(function HeavyComponent3038({ config }: HeavyProps3038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3038.displayName = 'HeavyComponent3038';
export default HeavyComponent3038;

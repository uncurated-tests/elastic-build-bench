'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3174<T> = T extends (infer U)[]
  ? DeepReadonlyArray3174<U>
  : T extends object
  ? DeepReadonlyObject3174<T>
  : T;

interface DeepReadonlyArray3174<T> extends ReadonlyArray<DeepReadonly3174<T>> {}

type DeepReadonlyObject3174<T> = {
  readonly [P in keyof T]: DeepReadonly3174<T[P]>;
};

type UnionToIntersection3174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3174<T> = UnionToIntersection3174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3174<T extends unknown[], V> = [...T, V];

type TuplifyUnion3174<T, L = LastOf3174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3174<TuplifyUnion3174<Exclude<T, L>>, L>;

type DeepPartial3174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3174<T[P]> }
  : T;

type Paths3174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3174<K, Paths3174<T[K], Prev3174[D]>> : never }[keyof T]
  : never;

type Prev3174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3174 {
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

type ConfigPaths3174 = Paths3174<NestedConfig3174>;

interface HeavyProps3174 {
  config: DeepPartial3174<NestedConfig3174>;
  path?: ConfigPaths3174;
}

const HeavyComponent3174 = memo(function HeavyComponent3174({ config }: HeavyProps3174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3174.displayName = 'HeavyComponent3174';
export default HeavyComponent3174;

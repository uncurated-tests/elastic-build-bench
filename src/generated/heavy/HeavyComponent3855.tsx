'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3855<T> = T extends (infer U)[]
  ? DeepReadonlyArray3855<U>
  : T extends object
  ? DeepReadonlyObject3855<T>
  : T;

interface DeepReadonlyArray3855<T> extends ReadonlyArray<DeepReadonly3855<T>> {}

type DeepReadonlyObject3855<T> = {
  readonly [P in keyof T]: DeepReadonly3855<T[P]>;
};

type UnionToIntersection3855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3855<T> = UnionToIntersection3855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3855<T extends unknown[], V> = [...T, V];

type TuplifyUnion3855<T, L = LastOf3855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3855<TuplifyUnion3855<Exclude<T, L>>, L>;

type DeepPartial3855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3855<T[P]> }
  : T;

type Paths3855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3855<K, Paths3855<T[K], Prev3855[D]>> : never }[keyof T]
  : never;

type Prev3855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3855 {
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

type ConfigPaths3855 = Paths3855<NestedConfig3855>;

interface HeavyProps3855 {
  config: DeepPartial3855<NestedConfig3855>;
  path?: ConfigPaths3855;
}

const HeavyComponent3855 = memo(function HeavyComponent3855({ config }: HeavyProps3855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3855.displayName = 'HeavyComponent3855';
export default HeavyComponent3855;

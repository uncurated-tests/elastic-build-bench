'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3603<T> = T extends (infer U)[]
  ? DeepReadonlyArray3603<U>
  : T extends object
  ? DeepReadonlyObject3603<T>
  : T;

interface DeepReadonlyArray3603<T> extends ReadonlyArray<DeepReadonly3603<T>> {}

type DeepReadonlyObject3603<T> = {
  readonly [P in keyof T]: DeepReadonly3603<T[P]>;
};

type UnionToIntersection3603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3603<T> = UnionToIntersection3603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3603<T extends unknown[], V> = [...T, V];

type TuplifyUnion3603<T, L = LastOf3603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3603<TuplifyUnion3603<Exclude<T, L>>, L>;

type DeepPartial3603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3603<T[P]> }
  : T;

type Paths3603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3603<K, Paths3603<T[K], Prev3603[D]>> : never }[keyof T]
  : never;

type Prev3603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3603 {
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

type ConfigPaths3603 = Paths3603<NestedConfig3603>;

interface HeavyProps3603 {
  config: DeepPartial3603<NestedConfig3603>;
  path?: ConfigPaths3603;
}

const HeavyComponent3603 = memo(function HeavyComponent3603({ config }: HeavyProps3603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3603.displayName = 'HeavyComponent3603';
export default HeavyComponent3603;

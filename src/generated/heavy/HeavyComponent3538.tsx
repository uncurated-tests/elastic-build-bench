'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3538<T> = T extends (infer U)[]
  ? DeepReadonlyArray3538<U>
  : T extends object
  ? DeepReadonlyObject3538<T>
  : T;

interface DeepReadonlyArray3538<T> extends ReadonlyArray<DeepReadonly3538<T>> {}

type DeepReadonlyObject3538<T> = {
  readonly [P in keyof T]: DeepReadonly3538<T[P]>;
};

type UnionToIntersection3538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3538<T> = UnionToIntersection3538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3538<T extends unknown[], V> = [...T, V];

type TuplifyUnion3538<T, L = LastOf3538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3538<TuplifyUnion3538<Exclude<T, L>>, L>;

type DeepPartial3538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3538<T[P]> }
  : T;

type Paths3538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3538<K, Paths3538<T[K], Prev3538[D]>> : never }[keyof T]
  : never;

type Prev3538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3538 {
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

type ConfigPaths3538 = Paths3538<NestedConfig3538>;

interface HeavyProps3538 {
  config: DeepPartial3538<NestedConfig3538>;
  path?: ConfigPaths3538;
}

const HeavyComponent3538 = memo(function HeavyComponent3538({ config }: HeavyProps3538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3538.displayName = 'HeavyComponent3538';
export default HeavyComponent3538;

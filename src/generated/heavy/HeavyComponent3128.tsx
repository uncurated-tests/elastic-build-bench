'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3128<T> = T extends (infer U)[]
  ? DeepReadonlyArray3128<U>
  : T extends object
  ? DeepReadonlyObject3128<T>
  : T;

interface DeepReadonlyArray3128<T> extends ReadonlyArray<DeepReadonly3128<T>> {}

type DeepReadonlyObject3128<T> = {
  readonly [P in keyof T]: DeepReadonly3128<T[P]>;
};

type UnionToIntersection3128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3128<T> = UnionToIntersection3128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3128<T extends unknown[], V> = [...T, V];

type TuplifyUnion3128<T, L = LastOf3128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3128<TuplifyUnion3128<Exclude<T, L>>, L>;

type DeepPartial3128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3128<T[P]> }
  : T;

type Paths3128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3128<K, Paths3128<T[K], Prev3128[D]>> : never }[keyof T]
  : never;

type Prev3128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3128 {
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

type ConfigPaths3128 = Paths3128<NestedConfig3128>;

interface HeavyProps3128 {
  config: DeepPartial3128<NestedConfig3128>;
  path?: ConfigPaths3128;
}

const HeavyComponent3128 = memo(function HeavyComponent3128({ config }: HeavyProps3128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3128.displayName = 'HeavyComponent3128';
export default HeavyComponent3128;

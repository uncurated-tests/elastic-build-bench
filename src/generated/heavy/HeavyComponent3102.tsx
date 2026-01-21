'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3102<T> = T extends (infer U)[]
  ? DeepReadonlyArray3102<U>
  : T extends object
  ? DeepReadonlyObject3102<T>
  : T;

interface DeepReadonlyArray3102<T> extends ReadonlyArray<DeepReadonly3102<T>> {}

type DeepReadonlyObject3102<T> = {
  readonly [P in keyof T]: DeepReadonly3102<T[P]>;
};

type UnionToIntersection3102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3102<T> = UnionToIntersection3102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3102<T extends unknown[], V> = [...T, V];

type TuplifyUnion3102<T, L = LastOf3102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3102<TuplifyUnion3102<Exclude<T, L>>, L>;

type DeepPartial3102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3102<T[P]> }
  : T;

type Paths3102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3102<K, Paths3102<T[K], Prev3102[D]>> : never }[keyof T]
  : never;

type Prev3102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3102 {
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

type ConfigPaths3102 = Paths3102<NestedConfig3102>;

interface HeavyProps3102 {
  config: DeepPartial3102<NestedConfig3102>;
  path?: ConfigPaths3102;
}

const HeavyComponent3102 = memo(function HeavyComponent3102({ config }: HeavyProps3102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3102.displayName = 'HeavyComponent3102';
export default HeavyComponent3102;

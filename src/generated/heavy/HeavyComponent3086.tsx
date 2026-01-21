'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3086<T> = T extends (infer U)[]
  ? DeepReadonlyArray3086<U>
  : T extends object
  ? DeepReadonlyObject3086<T>
  : T;

interface DeepReadonlyArray3086<T> extends ReadonlyArray<DeepReadonly3086<T>> {}

type DeepReadonlyObject3086<T> = {
  readonly [P in keyof T]: DeepReadonly3086<T[P]>;
};

type UnionToIntersection3086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3086<T> = UnionToIntersection3086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3086<T extends unknown[], V> = [...T, V];

type TuplifyUnion3086<T, L = LastOf3086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3086<TuplifyUnion3086<Exclude<T, L>>, L>;

type DeepPartial3086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3086<T[P]> }
  : T;

type Paths3086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3086<K, Paths3086<T[K], Prev3086[D]>> : never }[keyof T]
  : never;

type Prev3086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3086 {
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

type ConfigPaths3086 = Paths3086<NestedConfig3086>;

interface HeavyProps3086 {
  config: DeepPartial3086<NestedConfig3086>;
  path?: ConfigPaths3086;
}

const HeavyComponent3086 = memo(function HeavyComponent3086({ config }: HeavyProps3086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3086.displayName = 'HeavyComponent3086';
export default HeavyComponent3086;

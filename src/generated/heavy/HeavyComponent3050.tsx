'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3050<T> = T extends (infer U)[]
  ? DeepReadonlyArray3050<U>
  : T extends object
  ? DeepReadonlyObject3050<T>
  : T;

interface DeepReadonlyArray3050<T> extends ReadonlyArray<DeepReadonly3050<T>> {}

type DeepReadonlyObject3050<T> = {
  readonly [P in keyof T]: DeepReadonly3050<T[P]>;
};

type UnionToIntersection3050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3050<T> = UnionToIntersection3050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3050<T extends unknown[], V> = [...T, V];

type TuplifyUnion3050<T, L = LastOf3050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3050<TuplifyUnion3050<Exclude<T, L>>, L>;

type DeepPartial3050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3050<T[P]> }
  : T;

type Paths3050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3050<K, Paths3050<T[K], Prev3050[D]>> : never }[keyof T]
  : never;

type Prev3050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3050 {
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

type ConfigPaths3050 = Paths3050<NestedConfig3050>;

interface HeavyProps3050 {
  config: DeepPartial3050<NestedConfig3050>;
  path?: ConfigPaths3050;
}

const HeavyComponent3050 = memo(function HeavyComponent3050({ config }: HeavyProps3050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3050.displayName = 'HeavyComponent3050';
export default HeavyComponent3050;

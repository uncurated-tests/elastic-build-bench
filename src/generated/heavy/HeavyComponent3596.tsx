'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3596<T> = T extends (infer U)[]
  ? DeepReadonlyArray3596<U>
  : T extends object
  ? DeepReadonlyObject3596<T>
  : T;

interface DeepReadonlyArray3596<T> extends ReadonlyArray<DeepReadonly3596<T>> {}

type DeepReadonlyObject3596<T> = {
  readonly [P in keyof T]: DeepReadonly3596<T[P]>;
};

type UnionToIntersection3596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3596<T> = UnionToIntersection3596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3596<T extends unknown[], V> = [...T, V];

type TuplifyUnion3596<T, L = LastOf3596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3596<TuplifyUnion3596<Exclude<T, L>>, L>;

type DeepPartial3596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3596<T[P]> }
  : T;

type Paths3596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3596<K, Paths3596<T[K], Prev3596[D]>> : never }[keyof T]
  : never;

type Prev3596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3596 {
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

type ConfigPaths3596 = Paths3596<NestedConfig3596>;

interface HeavyProps3596 {
  config: DeepPartial3596<NestedConfig3596>;
  path?: ConfigPaths3596;
}

const HeavyComponent3596 = memo(function HeavyComponent3596({ config }: HeavyProps3596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3596.displayName = 'HeavyComponent3596';
export default HeavyComponent3596;

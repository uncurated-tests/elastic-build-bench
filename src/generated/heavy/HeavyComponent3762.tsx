'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3762<T> = T extends (infer U)[]
  ? DeepReadonlyArray3762<U>
  : T extends object
  ? DeepReadonlyObject3762<T>
  : T;

interface DeepReadonlyArray3762<T> extends ReadonlyArray<DeepReadonly3762<T>> {}

type DeepReadonlyObject3762<T> = {
  readonly [P in keyof T]: DeepReadonly3762<T[P]>;
};

type UnionToIntersection3762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3762<T> = UnionToIntersection3762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3762<T extends unknown[], V> = [...T, V];

type TuplifyUnion3762<T, L = LastOf3762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3762<TuplifyUnion3762<Exclude<T, L>>, L>;

type DeepPartial3762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3762<T[P]> }
  : T;

type Paths3762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3762<K, Paths3762<T[K], Prev3762[D]>> : never }[keyof T]
  : never;

type Prev3762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3762 {
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

type ConfigPaths3762 = Paths3762<NestedConfig3762>;

interface HeavyProps3762 {
  config: DeepPartial3762<NestedConfig3762>;
  path?: ConfigPaths3762;
}

const HeavyComponent3762 = memo(function HeavyComponent3762({ config }: HeavyProps3762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3762.displayName = 'HeavyComponent3762';
export default HeavyComponent3762;

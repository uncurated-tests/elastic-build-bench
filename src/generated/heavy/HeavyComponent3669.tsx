'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3669<T> = T extends (infer U)[]
  ? DeepReadonlyArray3669<U>
  : T extends object
  ? DeepReadonlyObject3669<T>
  : T;

interface DeepReadonlyArray3669<T> extends ReadonlyArray<DeepReadonly3669<T>> {}

type DeepReadonlyObject3669<T> = {
  readonly [P in keyof T]: DeepReadonly3669<T[P]>;
};

type UnionToIntersection3669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3669<T> = UnionToIntersection3669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3669<T extends unknown[], V> = [...T, V];

type TuplifyUnion3669<T, L = LastOf3669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3669<TuplifyUnion3669<Exclude<T, L>>, L>;

type DeepPartial3669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3669<T[P]> }
  : T;

type Paths3669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3669<K, Paths3669<T[K], Prev3669[D]>> : never }[keyof T]
  : never;

type Prev3669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3669 {
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

type ConfigPaths3669 = Paths3669<NestedConfig3669>;

interface HeavyProps3669 {
  config: DeepPartial3669<NestedConfig3669>;
  path?: ConfigPaths3669;
}

const HeavyComponent3669 = memo(function HeavyComponent3669({ config }: HeavyProps3669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3669.displayName = 'HeavyComponent3669';
export default HeavyComponent3669;

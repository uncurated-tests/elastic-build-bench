'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3876<T> = T extends (infer U)[]
  ? DeepReadonlyArray3876<U>
  : T extends object
  ? DeepReadonlyObject3876<T>
  : T;

interface DeepReadonlyArray3876<T> extends ReadonlyArray<DeepReadonly3876<T>> {}

type DeepReadonlyObject3876<T> = {
  readonly [P in keyof T]: DeepReadonly3876<T[P]>;
};

type UnionToIntersection3876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3876<T> = UnionToIntersection3876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3876<T extends unknown[], V> = [...T, V];

type TuplifyUnion3876<T, L = LastOf3876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3876<TuplifyUnion3876<Exclude<T, L>>, L>;

type DeepPartial3876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3876<T[P]> }
  : T;

type Paths3876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3876<K, Paths3876<T[K], Prev3876[D]>> : never }[keyof T]
  : never;

type Prev3876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3876 {
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

type ConfigPaths3876 = Paths3876<NestedConfig3876>;

interface HeavyProps3876 {
  config: DeepPartial3876<NestedConfig3876>;
  path?: ConfigPaths3876;
}

const HeavyComponent3876 = memo(function HeavyComponent3876({ config }: HeavyProps3876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3876.displayName = 'HeavyComponent3876';
export default HeavyComponent3876;

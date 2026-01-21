'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3401<T> = T extends (infer U)[]
  ? DeepReadonlyArray3401<U>
  : T extends object
  ? DeepReadonlyObject3401<T>
  : T;

interface DeepReadonlyArray3401<T> extends ReadonlyArray<DeepReadonly3401<T>> {}

type DeepReadonlyObject3401<T> = {
  readonly [P in keyof T]: DeepReadonly3401<T[P]>;
};

type UnionToIntersection3401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3401<T> = UnionToIntersection3401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3401<T extends unknown[], V> = [...T, V];

type TuplifyUnion3401<T, L = LastOf3401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3401<TuplifyUnion3401<Exclude<T, L>>, L>;

type DeepPartial3401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3401<T[P]> }
  : T;

type Paths3401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3401<K, Paths3401<T[K], Prev3401[D]>> : never }[keyof T]
  : never;

type Prev3401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3401 {
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

type ConfigPaths3401 = Paths3401<NestedConfig3401>;

interface HeavyProps3401 {
  config: DeepPartial3401<NestedConfig3401>;
  path?: ConfigPaths3401;
}

const HeavyComponent3401 = memo(function HeavyComponent3401({ config }: HeavyProps3401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3401.displayName = 'HeavyComponent3401';
export default HeavyComponent3401;

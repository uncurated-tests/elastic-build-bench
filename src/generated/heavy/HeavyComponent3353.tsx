'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3353<T> = T extends (infer U)[]
  ? DeepReadonlyArray3353<U>
  : T extends object
  ? DeepReadonlyObject3353<T>
  : T;

interface DeepReadonlyArray3353<T> extends ReadonlyArray<DeepReadonly3353<T>> {}

type DeepReadonlyObject3353<T> = {
  readonly [P in keyof T]: DeepReadonly3353<T[P]>;
};

type UnionToIntersection3353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3353<T> = UnionToIntersection3353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3353<T extends unknown[], V> = [...T, V];

type TuplifyUnion3353<T, L = LastOf3353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3353<TuplifyUnion3353<Exclude<T, L>>, L>;

type DeepPartial3353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3353<T[P]> }
  : T;

type Paths3353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3353<K, Paths3353<T[K], Prev3353[D]>> : never }[keyof T]
  : never;

type Prev3353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3353 {
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

type ConfigPaths3353 = Paths3353<NestedConfig3353>;

interface HeavyProps3353 {
  config: DeepPartial3353<NestedConfig3353>;
  path?: ConfigPaths3353;
}

const HeavyComponent3353 = memo(function HeavyComponent3353({ config }: HeavyProps3353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3353.displayName = 'HeavyComponent3353';
export default HeavyComponent3353;

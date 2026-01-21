'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3686<T> = T extends (infer U)[]
  ? DeepReadonlyArray3686<U>
  : T extends object
  ? DeepReadonlyObject3686<T>
  : T;

interface DeepReadonlyArray3686<T> extends ReadonlyArray<DeepReadonly3686<T>> {}

type DeepReadonlyObject3686<T> = {
  readonly [P in keyof T]: DeepReadonly3686<T[P]>;
};

type UnionToIntersection3686<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3686<T> = UnionToIntersection3686<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3686<T extends unknown[], V> = [...T, V];

type TuplifyUnion3686<T, L = LastOf3686<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3686<TuplifyUnion3686<Exclude<T, L>>, L>;

type DeepPartial3686<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3686<T[P]> }
  : T;

type Paths3686<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3686<K, Paths3686<T[K], Prev3686[D]>> : never }[keyof T]
  : never;

type Prev3686 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3686<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3686 {
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

type ConfigPaths3686 = Paths3686<NestedConfig3686>;

interface HeavyProps3686 {
  config: DeepPartial3686<NestedConfig3686>;
  path?: ConfigPaths3686;
}

const HeavyComponent3686 = memo(function HeavyComponent3686({ config }: HeavyProps3686) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3686) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3686 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3686: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3686.displayName = 'HeavyComponent3686';
export default HeavyComponent3686;

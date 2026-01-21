'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3589<T> = T extends (infer U)[]
  ? DeepReadonlyArray3589<U>
  : T extends object
  ? DeepReadonlyObject3589<T>
  : T;

interface DeepReadonlyArray3589<T> extends ReadonlyArray<DeepReadonly3589<T>> {}

type DeepReadonlyObject3589<T> = {
  readonly [P in keyof T]: DeepReadonly3589<T[P]>;
};

type UnionToIntersection3589<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3589<T> = UnionToIntersection3589<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3589<T extends unknown[], V> = [...T, V];

type TuplifyUnion3589<T, L = LastOf3589<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3589<TuplifyUnion3589<Exclude<T, L>>, L>;

type DeepPartial3589<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3589<T[P]> }
  : T;

type Paths3589<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3589<K, Paths3589<T[K], Prev3589[D]>> : never }[keyof T]
  : never;

type Prev3589 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3589<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3589 {
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

type ConfigPaths3589 = Paths3589<NestedConfig3589>;

interface HeavyProps3589 {
  config: DeepPartial3589<NestedConfig3589>;
  path?: ConfigPaths3589;
}

const HeavyComponent3589 = memo(function HeavyComponent3589({ config }: HeavyProps3589) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3589) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3589 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3589: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3589.displayName = 'HeavyComponent3589';
export default HeavyComponent3589;

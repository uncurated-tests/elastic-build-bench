'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3426<T> = T extends (infer U)[]
  ? DeepReadonlyArray3426<U>
  : T extends object
  ? DeepReadonlyObject3426<T>
  : T;

interface DeepReadonlyArray3426<T> extends ReadonlyArray<DeepReadonly3426<T>> {}

type DeepReadonlyObject3426<T> = {
  readonly [P in keyof T]: DeepReadonly3426<T[P]>;
};

type UnionToIntersection3426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3426<T> = UnionToIntersection3426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3426<T extends unknown[], V> = [...T, V];

type TuplifyUnion3426<T, L = LastOf3426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3426<TuplifyUnion3426<Exclude<T, L>>, L>;

type DeepPartial3426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3426<T[P]> }
  : T;

type Paths3426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3426<K, Paths3426<T[K], Prev3426[D]>> : never }[keyof T]
  : never;

type Prev3426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3426 {
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

type ConfigPaths3426 = Paths3426<NestedConfig3426>;

interface HeavyProps3426 {
  config: DeepPartial3426<NestedConfig3426>;
  path?: ConfigPaths3426;
}

const HeavyComponent3426 = memo(function HeavyComponent3426({ config }: HeavyProps3426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3426.displayName = 'HeavyComponent3426';
export default HeavyComponent3426;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3330<T> = T extends (infer U)[]
  ? DeepReadonlyArray3330<U>
  : T extends object
  ? DeepReadonlyObject3330<T>
  : T;

interface DeepReadonlyArray3330<T> extends ReadonlyArray<DeepReadonly3330<T>> {}

type DeepReadonlyObject3330<T> = {
  readonly [P in keyof T]: DeepReadonly3330<T[P]>;
};

type UnionToIntersection3330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3330<T> = UnionToIntersection3330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3330<T extends unknown[], V> = [...T, V];

type TuplifyUnion3330<T, L = LastOf3330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3330<TuplifyUnion3330<Exclude<T, L>>, L>;

type DeepPartial3330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3330<T[P]> }
  : T;

type Paths3330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3330<K, Paths3330<T[K], Prev3330[D]>> : never }[keyof T]
  : never;

type Prev3330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3330 {
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

type ConfigPaths3330 = Paths3330<NestedConfig3330>;

interface HeavyProps3330 {
  config: DeepPartial3330<NestedConfig3330>;
  path?: ConfigPaths3330;
}

const HeavyComponent3330 = memo(function HeavyComponent3330({ config }: HeavyProps3330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3330.displayName = 'HeavyComponent3330';
export default HeavyComponent3330;

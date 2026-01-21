'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3130<T> = T extends (infer U)[]
  ? DeepReadonlyArray3130<U>
  : T extends object
  ? DeepReadonlyObject3130<T>
  : T;

interface DeepReadonlyArray3130<T> extends ReadonlyArray<DeepReadonly3130<T>> {}

type DeepReadonlyObject3130<T> = {
  readonly [P in keyof T]: DeepReadonly3130<T[P]>;
};

type UnionToIntersection3130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3130<T> = UnionToIntersection3130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3130<T extends unknown[], V> = [...T, V];

type TuplifyUnion3130<T, L = LastOf3130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3130<TuplifyUnion3130<Exclude<T, L>>, L>;

type DeepPartial3130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3130<T[P]> }
  : T;

type Paths3130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3130<K, Paths3130<T[K], Prev3130[D]>> : never }[keyof T]
  : never;

type Prev3130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3130 {
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

type ConfigPaths3130 = Paths3130<NestedConfig3130>;

interface HeavyProps3130 {
  config: DeepPartial3130<NestedConfig3130>;
  path?: ConfigPaths3130;
}

const HeavyComponent3130 = memo(function HeavyComponent3130({ config }: HeavyProps3130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3130.displayName = 'HeavyComponent3130';
export default HeavyComponent3130;

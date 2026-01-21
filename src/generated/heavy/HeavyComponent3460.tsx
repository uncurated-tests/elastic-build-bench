'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3460<T> = T extends (infer U)[]
  ? DeepReadonlyArray3460<U>
  : T extends object
  ? DeepReadonlyObject3460<T>
  : T;

interface DeepReadonlyArray3460<T> extends ReadonlyArray<DeepReadonly3460<T>> {}

type DeepReadonlyObject3460<T> = {
  readonly [P in keyof T]: DeepReadonly3460<T[P]>;
};

type UnionToIntersection3460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3460<T> = UnionToIntersection3460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3460<T extends unknown[], V> = [...T, V];

type TuplifyUnion3460<T, L = LastOf3460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3460<TuplifyUnion3460<Exclude<T, L>>, L>;

type DeepPartial3460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3460<T[P]> }
  : T;

type Paths3460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3460<K, Paths3460<T[K], Prev3460[D]>> : never }[keyof T]
  : never;

type Prev3460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3460 {
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

type ConfigPaths3460 = Paths3460<NestedConfig3460>;

interface HeavyProps3460 {
  config: DeepPartial3460<NestedConfig3460>;
  path?: ConfigPaths3460;
}

const HeavyComponent3460 = memo(function HeavyComponent3460({ config }: HeavyProps3460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3460.displayName = 'HeavyComponent3460';
export default HeavyComponent3460;

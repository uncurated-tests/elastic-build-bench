'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3171<T> = T extends (infer U)[]
  ? DeepReadonlyArray3171<U>
  : T extends object
  ? DeepReadonlyObject3171<T>
  : T;

interface DeepReadonlyArray3171<T> extends ReadonlyArray<DeepReadonly3171<T>> {}

type DeepReadonlyObject3171<T> = {
  readonly [P in keyof T]: DeepReadonly3171<T[P]>;
};

type UnionToIntersection3171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3171<T> = UnionToIntersection3171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3171<T extends unknown[], V> = [...T, V];

type TuplifyUnion3171<T, L = LastOf3171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3171<TuplifyUnion3171<Exclude<T, L>>, L>;

type DeepPartial3171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3171<T[P]> }
  : T;

type Paths3171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3171<K, Paths3171<T[K], Prev3171[D]>> : never }[keyof T]
  : never;

type Prev3171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3171 {
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

type ConfigPaths3171 = Paths3171<NestedConfig3171>;

interface HeavyProps3171 {
  config: DeepPartial3171<NestedConfig3171>;
  path?: ConfigPaths3171;
}

const HeavyComponent3171 = memo(function HeavyComponent3171({ config }: HeavyProps3171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3171.displayName = 'HeavyComponent3171';
export default HeavyComponent3171;

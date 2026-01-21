'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3148<T> = T extends (infer U)[]
  ? DeepReadonlyArray3148<U>
  : T extends object
  ? DeepReadonlyObject3148<T>
  : T;

interface DeepReadonlyArray3148<T> extends ReadonlyArray<DeepReadonly3148<T>> {}

type DeepReadonlyObject3148<T> = {
  readonly [P in keyof T]: DeepReadonly3148<T[P]>;
};

type UnionToIntersection3148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3148<T> = UnionToIntersection3148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3148<T extends unknown[], V> = [...T, V];

type TuplifyUnion3148<T, L = LastOf3148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3148<TuplifyUnion3148<Exclude<T, L>>, L>;

type DeepPartial3148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3148<T[P]> }
  : T;

type Paths3148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3148<K, Paths3148<T[K], Prev3148[D]>> : never }[keyof T]
  : never;

type Prev3148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3148 {
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

type ConfigPaths3148 = Paths3148<NestedConfig3148>;

interface HeavyProps3148 {
  config: DeepPartial3148<NestedConfig3148>;
  path?: ConfigPaths3148;
}

const HeavyComponent3148 = memo(function HeavyComponent3148({ config }: HeavyProps3148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3148.displayName = 'HeavyComponent3148';
export default HeavyComponent3148;

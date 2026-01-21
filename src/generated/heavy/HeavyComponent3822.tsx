'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3822<T> = T extends (infer U)[]
  ? DeepReadonlyArray3822<U>
  : T extends object
  ? DeepReadonlyObject3822<T>
  : T;

interface DeepReadonlyArray3822<T> extends ReadonlyArray<DeepReadonly3822<T>> {}

type DeepReadonlyObject3822<T> = {
  readonly [P in keyof T]: DeepReadonly3822<T[P]>;
};

type UnionToIntersection3822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3822<T> = UnionToIntersection3822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3822<T extends unknown[], V> = [...T, V];

type TuplifyUnion3822<T, L = LastOf3822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3822<TuplifyUnion3822<Exclude<T, L>>, L>;

type DeepPartial3822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3822<T[P]> }
  : T;

type Paths3822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3822<K, Paths3822<T[K], Prev3822[D]>> : never }[keyof T]
  : never;

type Prev3822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3822 {
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

type ConfigPaths3822 = Paths3822<NestedConfig3822>;

interface HeavyProps3822 {
  config: DeepPartial3822<NestedConfig3822>;
  path?: ConfigPaths3822;
}

const HeavyComponent3822 = memo(function HeavyComponent3822({ config }: HeavyProps3822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3822.displayName = 'HeavyComponent3822';
export default HeavyComponent3822;

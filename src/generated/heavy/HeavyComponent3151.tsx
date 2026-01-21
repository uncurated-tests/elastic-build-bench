'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3151<T> = T extends (infer U)[]
  ? DeepReadonlyArray3151<U>
  : T extends object
  ? DeepReadonlyObject3151<T>
  : T;

interface DeepReadonlyArray3151<T> extends ReadonlyArray<DeepReadonly3151<T>> {}

type DeepReadonlyObject3151<T> = {
  readonly [P in keyof T]: DeepReadonly3151<T[P]>;
};

type UnionToIntersection3151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3151<T> = UnionToIntersection3151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3151<T extends unknown[], V> = [...T, V];

type TuplifyUnion3151<T, L = LastOf3151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3151<TuplifyUnion3151<Exclude<T, L>>, L>;

type DeepPartial3151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3151<T[P]> }
  : T;

type Paths3151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3151<K, Paths3151<T[K], Prev3151[D]>> : never }[keyof T]
  : never;

type Prev3151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3151 {
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

type ConfigPaths3151 = Paths3151<NestedConfig3151>;

interface HeavyProps3151 {
  config: DeepPartial3151<NestedConfig3151>;
  path?: ConfigPaths3151;
}

const HeavyComponent3151 = memo(function HeavyComponent3151({ config }: HeavyProps3151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3151.displayName = 'HeavyComponent3151';
export default HeavyComponent3151;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3258<T> = T extends (infer U)[]
  ? DeepReadonlyArray3258<U>
  : T extends object
  ? DeepReadonlyObject3258<T>
  : T;

interface DeepReadonlyArray3258<T> extends ReadonlyArray<DeepReadonly3258<T>> {}

type DeepReadonlyObject3258<T> = {
  readonly [P in keyof T]: DeepReadonly3258<T[P]>;
};

type UnionToIntersection3258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3258<T> = UnionToIntersection3258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3258<T extends unknown[], V> = [...T, V];

type TuplifyUnion3258<T, L = LastOf3258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3258<TuplifyUnion3258<Exclude<T, L>>, L>;

type DeepPartial3258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3258<T[P]> }
  : T;

type Paths3258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3258<K, Paths3258<T[K], Prev3258[D]>> : never }[keyof T]
  : never;

type Prev3258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3258 {
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

type ConfigPaths3258 = Paths3258<NestedConfig3258>;

interface HeavyProps3258 {
  config: DeepPartial3258<NestedConfig3258>;
  path?: ConfigPaths3258;
}

const HeavyComponent3258 = memo(function HeavyComponent3258({ config }: HeavyProps3258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3258.displayName = 'HeavyComponent3258';
export default HeavyComponent3258;

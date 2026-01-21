'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3169<T> = T extends (infer U)[]
  ? DeepReadonlyArray3169<U>
  : T extends object
  ? DeepReadonlyObject3169<T>
  : T;

interface DeepReadonlyArray3169<T> extends ReadonlyArray<DeepReadonly3169<T>> {}

type DeepReadonlyObject3169<T> = {
  readonly [P in keyof T]: DeepReadonly3169<T[P]>;
};

type UnionToIntersection3169<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3169<T> = UnionToIntersection3169<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3169<T extends unknown[], V> = [...T, V];

type TuplifyUnion3169<T, L = LastOf3169<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3169<TuplifyUnion3169<Exclude<T, L>>, L>;

type DeepPartial3169<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3169<T[P]> }
  : T;

type Paths3169<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3169<K, Paths3169<T[K], Prev3169[D]>> : never }[keyof T]
  : never;

type Prev3169 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3169<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3169 {
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

type ConfigPaths3169 = Paths3169<NestedConfig3169>;

interface HeavyProps3169 {
  config: DeepPartial3169<NestedConfig3169>;
  path?: ConfigPaths3169;
}

const HeavyComponent3169 = memo(function HeavyComponent3169({ config }: HeavyProps3169) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3169) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3169 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3169: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3169.displayName = 'HeavyComponent3169';
export default HeavyComponent3169;

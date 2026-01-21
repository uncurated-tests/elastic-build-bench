'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3346<T> = T extends (infer U)[]
  ? DeepReadonlyArray3346<U>
  : T extends object
  ? DeepReadonlyObject3346<T>
  : T;

interface DeepReadonlyArray3346<T> extends ReadonlyArray<DeepReadonly3346<T>> {}

type DeepReadonlyObject3346<T> = {
  readonly [P in keyof T]: DeepReadonly3346<T[P]>;
};

type UnionToIntersection3346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3346<T> = UnionToIntersection3346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3346<T extends unknown[], V> = [...T, V];

type TuplifyUnion3346<T, L = LastOf3346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3346<TuplifyUnion3346<Exclude<T, L>>, L>;

type DeepPartial3346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3346<T[P]> }
  : T;

type Paths3346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3346<K, Paths3346<T[K], Prev3346[D]>> : never }[keyof T]
  : never;

type Prev3346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3346 {
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

type ConfigPaths3346 = Paths3346<NestedConfig3346>;

interface HeavyProps3346 {
  config: DeepPartial3346<NestedConfig3346>;
  path?: ConfigPaths3346;
}

const HeavyComponent3346 = memo(function HeavyComponent3346({ config }: HeavyProps3346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3346.displayName = 'HeavyComponent3346';
export default HeavyComponent3346;

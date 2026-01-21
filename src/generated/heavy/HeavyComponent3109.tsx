'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3109<T> = T extends (infer U)[]
  ? DeepReadonlyArray3109<U>
  : T extends object
  ? DeepReadonlyObject3109<T>
  : T;

interface DeepReadonlyArray3109<T> extends ReadonlyArray<DeepReadonly3109<T>> {}

type DeepReadonlyObject3109<T> = {
  readonly [P in keyof T]: DeepReadonly3109<T[P]>;
};

type UnionToIntersection3109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3109<T> = UnionToIntersection3109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3109<T extends unknown[], V> = [...T, V];

type TuplifyUnion3109<T, L = LastOf3109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3109<TuplifyUnion3109<Exclude<T, L>>, L>;

type DeepPartial3109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3109<T[P]> }
  : T;

type Paths3109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3109<K, Paths3109<T[K], Prev3109[D]>> : never }[keyof T]
  : never;

type Prev3109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3109 {
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

type ConfigPaths3109 = Paths3109<NestedConfig3109>;

interface HeavyProps3109 {
  config: DeepPartial3109<NestedConfig3109>;
  path?: ConfigPaths3109;
}

const HeavyComponent3109 = memo(function HeavyComponent3109({ config }: HeavyProps3109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3109.displayName = 'HeavyComponent3109';
export default HeavyComponent3109;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3648<T> = T extends (infer U)[]
  ? DeepReadonlyArray3648<U>
  : T extends object
  ? DeepReadonlyObject3648<T>
  : T;

interface DeepReadonlyArray3648<T> extends ReadonlyArray<DeepReadonly3648<T>> {}

type DeepReadonlyObject3648<T> = {
  readonly [P in keyof T]: DeepReadonly3648<T[P]>;
};

type UnionToIntersection3648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3648<T> = UnionToIntersection3648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3648<T extends unknown[], V> = [...T, V];

type TuplifyUnion3648<T, L = LastOf3648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3648<TuplifyUnion3648<Exclude<T, L>>, L>;

type DeepPartial3648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3648<T[P]> }
  : T;

type Paths3648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3648<K, Paths3648<T[K], Prev3648[D]>> : never }[keyof T]
  : never;

type Prev3648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3648 {
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

type ConfigPaths3648 = Paths3648<NestedConfig3648>;

interface HeavyProps3648 {
  config: DeepPartial3648<NestedConfig3648>;
  path?: ConfigPaths3648;
}

const HeavyComponent3648 = memo(function HeavyComponent3648({ config }: HeavyProps3648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3648.displayName = 'HeavyComponent3648';
export default HeavyComponent3648;

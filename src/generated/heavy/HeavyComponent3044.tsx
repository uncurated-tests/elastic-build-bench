'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3044<T> = T extends (infer U)[]
  ? DeepReadonlyArray3044<U>
  : T extends object
  ? DeepReadonlyObject3044<T>
  : T;

interface DeepReadonlyArray3044<T> extends ReadonlyArray<DeepReadonly3044<T>> {}

type DeepReadonlyObject3044<T> = {
  readonly [P in keyof T]: DeepReadonly3044<T[P]>;
};

type UnionToIntersection3044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3044<T> = UnionToIntersection3044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3044<T extends unknown[], V> = [...T, V];

type TuplifyUnion3044<T, L = LastOf3044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3044<TuplifyUnion3044<Exclude<T, L>>, L>;

type DeepPartial3044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3044<T[P]> }
  : T;

type Paths3044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3044<K, Paths3044<T[K], Prev3044[D]>> : never }[keyof T]
  : never;

type Prev3044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3044 {
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

type ConfigPaths3044 = Paths3044<NestedConfig3044>;

interface HeavyProps3044 {
  config: DeepPartial3044<NestedConfig3044>;
  path?: ConfigPaths3044;
}

const HeavyComponent3044 = memo(function HeavyComponent3044({ config }: HeavyProps3044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3044.displayName = 'HeavyComponent3044';
export default HeavyComponent3044;

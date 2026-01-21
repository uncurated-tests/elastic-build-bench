'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3276<T> = T extends (infer U)[]
  ? DeepReadonlyArray3276<U>
  : T extends object
  ? DeepReadonlyObject3276<T>
  : T;

interface DeepReadonlyArray3276<T> extends ReadonlyArray<DeepReadonly3276<T>> {}

type DeepReadonlyObject3276<T> = {
  readonly [P in keyof T]: DeepReadonly3276<T[P]>;
};

type UnionToIntersection3276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3276<T> = UnionToIntersection3276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3276<T extends unknown[], V> = [...T, V];

type TuplifyUnion3276<T, L = LastOf3276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3276<TuplifyUnion3276<Exclude<T, L>>, L>;

type DeepPartial3276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3276<T[P]> }
  : T;

type Paths3276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3276<K, Paths3276<T[K], Prev3276[D]>> : never }[keyof T]
  : never;

type Prev3276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3276 {
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

type ConfigPaths3276 = Paths3276<NestedConfig3276>;

interface HeavyProps3276 {
  config: DeepPartial3276<NestedConfig3276>;
  path?: ConfigPaths3276;
}

const HeavyComponent3276 = memo(function HeavyComponent3276({ config }: HeavyProps3276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3276.displayName = 'HeavyComponent3276';
export default HeavyComponent3276;

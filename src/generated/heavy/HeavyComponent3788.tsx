'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3788<T> = T extends (infer U)[]
  ? DeepReadonlyArray3788<U>
  : T extends object
  ? DeepReadonlyObject3788<T>
  : T;

interface DeepReadonlyArray3788<T> extends ReadonlyArray<DeepReadonly3788<T>> {}

type DeepReadonlyObject3788<T> = {
  readonly [P in keyof T]: DeepReadonly3788<T[P]>;
};

type UnionToIntersection3788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3788<T> = UnionToIntersection3788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3788<T extends unknown[], V> = [...T, V];

type TuplifyUnion3788<T, L = LastOf3788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3788<TuplifyUnion3788<Exclude<T, L>>, L>;

type DeepPartial3788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3788<T[P]> }
  : T;

type Paths3788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3788<K, Paths3788<T[K], Prev3788[D]>> : never }[keyof T]
  : never;

type Prev3788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3788 {
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

type ConfigPaths3788 = Paths3788<NestedConfig3788>;

interface HeavyProps3788 {
  config: DeepPartial3788<NestedConfig3788>;
  path?: ConfigPaths3788;
}

const HeavyComponent3788 = memo(function HeavyComponent3788({ config }: HeavyProps3788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3788.displayName = 'HeavyComponent3788';
export default HeavyComponent3788;

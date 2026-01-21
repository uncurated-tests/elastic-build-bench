'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3770<T> = T extends (infer U)[]
  ? DeepReadonlyArray3770<U>
  : T extends object
  ? DeepReadonlyObject3770<T>
  : T;

interface DeepReadonlyArray3770<T> extends ReadonlyArray<DeepReadonly3770<T>> {}

type DeepReadonlyObject3770<T> = {
  readonly [P in keyof T]: DeepReadonly3770<T[P]>;
};

type UnionToIntersection3770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3770<T> = UnionToIntersection3770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3770<T extends unknown[], V> = [...T, V];

type TuplifyUnion3770<T, L = LastOf3770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3770<TuplifyUnion3770<Exclude<T, L>>, L>;

type DeepPartial3770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3770<T[P]> }
  : T;

type Paths3770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3770<K, Paths3770<T[K], Prev3770[D]>> : never }[keyof T]
  : never;

type Prev3770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3770 {
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

type ConfigPaths3770 = Paths3770<NestedConfig3770>;

interface HeavyProps3770 {
  config: DeepPartial3770<NestedConfig3770>;
  path?: ConfigPaths3770;
}

const HeavyComponent3770 = memo(function HeavyComponent3770({ config }: HeavyProps3770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3770.displayName = 'HeavyComponent3770';
export default HeavyComponent3770;

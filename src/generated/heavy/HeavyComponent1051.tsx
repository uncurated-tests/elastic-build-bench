'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1051<T> = T extends (infer U)[]
  ? DeepReadonlyArray1051<U>
  : T extends object
  ? DeepReadonlyObject1051<T>
  : T;

interface DeepReadonlyArray1051<T> extends ReadonlyArray<DeepReadonly1051<T>> {}

type DeepReadonlyObject1051<T> = {
  readonly [P in keyof T]: DeepReadonly1051<T[P]>;
};

type UnionToIntersection1051<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1051<T> = UnionToIntersection1051<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1051<T extends unknown[], V> = [...T, V];

type TuplifyUnion1051<T, L = LastOf1051<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1051<TuplifyUnion1051<Exclude<T, L>>, L>;

type DeepPartial1051<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1051<T[P]> }
  : T;

type Paths1051<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1051<K, Paths1051<T[K], Prev1051[D]>> : never }[keyof T]
  : never;

type Prev1051 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1051<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1051 {
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

type ConfigPaths1051 = Paths1051<NestedConfig1051>;

interface HeavyProps1051 {
  config: DeepPartial1051<NestedConfig1051>;
  path?: ConfigPaths1051;
}

const HeavyComponent1051 = memo(function HeavyComponent1051({ config }: HeavyProps1051) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1051) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1051 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1051: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1051.displayName = 'HeavyComponent1051';
export default HeavyComponent1051;

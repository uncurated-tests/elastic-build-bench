'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1777<T> = T extends (infer U)[]
  ? DeepReadonlyArray1777<U>
  : T extends object
  ? DeepReadonlyObject1777<T>
  : T;

interface DeepReadonlyArray1777<T> extends ReadonlyArray<DeepReadonly1777<T>> {}

type DeepReadonlyObject1777<T> = {
  readonly [P in keyof T]: DeepReadonly1777<T[P]>;
};

type UnionToIntersection1777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1777<T> = UnionToIntersection1777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1777<T extends unknown[], V> = [...T, V];

type TuplifyUnion1777<T, L = LastOf1777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1777<TuplifyUnion1777<Exclude<T, L>>, L>;

type DeepPartial1777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1777<T[P]> }
  : T;

type Paths1777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1777<K, Paths1777<T[K], Prev1777[D]>> : never }[keyof T]
  : never;

type Prev1777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1777 {
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

type ConfigPaths1777 = Paths1777<NestedConfig1777>;

interface HeavyProps1777 {
  config: DeepPartial1777<NestedConfig1777>;
  path?: ConfigPaths1777;
}

const HeavyComponent1777 = memo(function HeavyComponent1777({ config }: HeavyProps1777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1777.displayName = 'HeavyComponent1777';
export default HeavyComponent1777;

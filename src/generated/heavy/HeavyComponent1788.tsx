'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1788<T> = T extends (infer U)[]
  ? DeepReadonlyArray1788<U>
  : T extends object
  ? DeepReadonlyObject1788<T>
  : T;

interface DeepReadonlyArray1788<T> extends ReadonlyArray<DeepReadonly1788<T>> {}

type DeepReadonlyObject1788<T> = {
  readonly [P in keyof T]: DeepReadonly1788<T[P]>;
};

type UnionToIntersection1788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1788<T> = UnionToIntersection1788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1788<T extends unknown[], V> = [...T, V];

type TuplifyUnion1788<T, L = LastOf1788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1788<TuplifyUnion1788<Exclude<T, L>>, L>;

type DeepPartial1788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1788<T[P]> }
  : T;

type Paths1788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1788<K, Paths1788<T[K], Prev1788[D]>> : never }[keyof T]
  : never;

type Prev1788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1788 {
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

type ConfigPaths1788 = Paths1788<NestedConfig1788>;

interface HeavyProps1788 {
  config: DeepPartial1788<NestedConfig1788>;
  path?: ConfigPaths1788;
}

const HeavyComponent1788 = memo(function HeavyComponent1788({ config }: HeavyProps1788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1788.displayName = 'HeavyComponent1788';
export default HeavyComponent1788;

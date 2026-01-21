'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1825<T> = T extends (infer U)[]
  ? DeepReadonlyArray1825<U>
  : T extends object
  ? DeepReadonlyObject1825<T>
  : T;

interface DeepReadonlyArray1825<T> extends ReadonlyArray<DeepReadonly1825<T>> {}

type DeepReadonlyObject1825<T> = {
  readonly [P in keyof T]: DeepReadonly1825<T[P]>;
};

type UnionToIntersection1825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1825<T> = UnionToIntersection1825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1825<T extends unknown[], V> = [...T, V];

type TuplifyUnion1825<T, L = LastOf1825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1825<TuplifyUnion1825<Exclude<T, L>>, L>;

type DeepPartial1825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1825<T[P]> }
  : T;

type Paths1825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1825<K, Paths1825<T[K], Prev1825[D]>> : never }[keyof T]
  : never;

type Prev1825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1825 {
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

type ConfigPaths1825 = Paths1825<NestedConfig1825>;

interface HeavyProps1825 {
  config: DeepPartial1825<NestedConfig1825>;
  path?: ConfigPaths1825;
}

const HeavyComponent1825 = memo(function HeavyComponent1825({ config }: HeavyProps1825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1825.displayName = 'HeavyComponent1825';
export default HeavyComponent1825;

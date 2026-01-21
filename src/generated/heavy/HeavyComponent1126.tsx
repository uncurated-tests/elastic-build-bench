'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1126<T> = T extends (infer U)[]
  ? DeepReadonlyArray1126<U>
  : T extends object
  ? DeepReadonlyObject1126<T>
  : T;

interface DeepReadonlyArray1126<T> extends ReadonlyArray<DeepReadonly1126<T>> {}

type DeepReadonlyObject1126<T> = {
  readonly [P in keyof T]: DeepReadonly1126<T[P]>;
};

type UnionToIntersection1126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1126<T> = UnionToIntersection1126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1126<T extends unknown[], V> = [...T, V];

type TuplifyUnion1126<T, L = LastOf1126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1126<TuplifyUnion1126<Exclude<T, L>>, L>;

type DeepPartial1126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1126<T[P]> }
  : T;

type Paths1126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1126<K, Paths1126<T[K], Prev1126[D]>> : never }[keyof T]
  : never;

type Prev1126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1126 {
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

type ConfigPaths1126 = Paths1126<NestedConfig1126>;

interface HeavyProps1126 {
  config: DeepPartial1126<NestedConfig1126>;
  path?: ConfigPaths1126;
}

const HeavyComponent1126 = memo(function HeavyComponent1126({ config }: HeavyProps1126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1126.displayName = 'HeavyComponent1126';
export default HeavyComponent1126;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1221<T> = T extends (infer U)[]
  ? DeepReadonlyArray1221<U>
  : T extends object
  ? DeepReadonlyObject1221<T>
  : T;

interface DeepReadonlyArray1221<T> extends ReadonlyArray<DeepReadonly1221<T>> {}

type DeepReadonlyObject1221<T> = {
  readonly [P in keyof T]: DeepReadonly1221<T[P]>;
};

type UnionToIntersection1221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1221<T> = UnionToIntersection1221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1221<T extends unknown[], V> = [...T, V];

type TuplifyUnion1221<T, L = LastOf1221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1221<TuplifyUnion1221<Exclude<T, L>>, L>;

type DeepPartial1221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1221<T[P]> }
  : T;

type Paths1221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1221<K, Paths1221<T[K], Prev1221[D]>> : never }[keyof T]
  : never;

type Prev1221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1221 {
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

type ConfigPaths1221 = Paths1221<NestedConfig1221>;

interface HeavyProps1221 {
  config: DeepPartial1221<NestedConfig1221>;
  path?: ConfigPaths1221;
}

const HeavyComponent1221 = memo(function HeavyComponent1221({ config }: HeavyProps1221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1221.displayName = 'HeavyComponent1221';
export default HeavyComponent1221;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1941<T> = T extends (infer U)[]
  ? DeepReadonlyArray1941<U>
  : T extends object
  ? DeepReadonlyObject1941<T>
  : T;

interface DeepReadonlyArray1941<T> extends ReadonlyArray<DeepReadonly1941<T>> {}

type DeepReadonlyObject1941<T> = {
  readonly [P in keyof T]: DeepReadonly1941<T[P]>;
};

type UnionToIntersection1941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1941<T> = UnionToIntersection1941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1941<T extends unknown[], V> = [...T, V];

type TuplifyUnion1941<T, L = LastOf1941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1941<TuplifyUnion1941<Exclude<T, L>>, L>;

type DeepPartial1941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1941<T[P]> }
  : T;

type Paths1941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1941<K, Paths1941<T[K], Prev1941[D]>> : never }[keyof T]
  : never;

type Prev1941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1941 {
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

type ConfigPaths1941 = Paths1941<NestedConfig1941>;

interface HeavyProps1941 {
  config: DeepPartial1941<NestedConfig1941>;
  path?: ConfigPaths1941;
}

const HeavyComponent1941 = memo(function HeavyComponent1941({ config }: HeavyProps1941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1941.displayName = 'HeavyComponent1941';
export default HeavyComponent1941;

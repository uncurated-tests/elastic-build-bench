'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1229<T> = T extends (infer U)[]
  ? DeepReadonlyArray1229<U>
  : T extends object
  ? DeepReadonlyObject1229<T>
  : T;

interface DeepReadonlyArray1229<T> extends ReadonlyArray<DeepReadonly1229<T>> {}

type DeepReadonlyObject1229<T> = {
  readonly [P in keyof T]: DeepReadonly1229<T[P]>;
};

type UnionToIntersection1229<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1229<T> = UnionToIntersection1229<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1229<T extends unknown[], V> = [...T, V];

type TuplifyUnion1229<T, L = LastOf1229<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1229<TuplifyUnion1229<Exclude<T, L>>, L>;

type DeepPartial1229<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1229<T[P]> }
  : T;

type Paths1229<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1229<K, Paths1229<T[K], Prev1229[D]>> : never }[keyof T]
  : never;

type Prev1229 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1229<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1229 {
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

type ConfigPaths1229 = Paths1229<NestedConfig1229>;

interface HeavyProps1229 {
  config: DeepPartial1229<NestedConfig1229>;
  path?: ConfigPaths1229;
}

const HeavyComponent1229 = memo(function HeavyComponent1229({ config }: HeavyProps1229) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1229) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1229 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1229: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1229.displayName = 'HeavyComponent1229';
export default HeavyComponent1229;

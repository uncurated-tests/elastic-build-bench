'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1117<T> = T extends (infer U)[]
  ? DeepReadonlyArray1117<U>
  : T extends object
  ? DeepReadonlyObject1117<T>
  : T;

interface DeepReadonlyArray1117<T> extends ReadonlyArray<DeepReadonly1117<T>> {}

type DeepReadonlyObject1117<T> = {
  readonly [P in keyof T]: DeepReadonly1117<T[P]>;
};

type UnionToIntersection1117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1117<T> = UnionToIntersection1117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1117<T extends unknown[], V> = [...T, V];

type TuplifyUnion1117<T, L = LastOf1117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1117<TuplifyUnion1117<Exclude<T, L>>, L>;

type DeepPartial1117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1117<T[P]> }
  : T;

type Paths1117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1117<K, Paths1117<T[K], Prev1117[D]>> : never }[keyof T]
  : never;

type Prev1117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1117 {
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

type ConfigPaths1117 = Paths1117<NestedConfig1117>;

interface HeavyProps1117 {
  config: DeepPartial1117<NestedConfig1117>;
  path?: ConfigPaths1117;
}

const HeavyComponent1117 = memo(function HeavyComponent1117({ config }: HeavyProps1117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1117.displayName = 'HeavyComponent1117';
export default HeavyComponent1117;

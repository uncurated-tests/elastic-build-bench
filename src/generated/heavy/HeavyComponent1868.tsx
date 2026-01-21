'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1868<T> = T extends (infer U)[]
  ? DeepReadonlyArray1868<U>
  : T extends object
  ? DeepReadonlyObject1868<T>
  : T;

interface DeepReadonlyArray1868<T> extends ReadonlyArray<DeepReadonly1868<T>> {}

type DeepReadonlyObject1868<T> = {
  readonly [P in keyof T]: DeepReadonly1868<T[P]>;
};

type UnionToIntersection1868<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1868<T> = UnionToIntersection1868<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1868<T extends unknown[], V> = [...T, V];

type TuplifyUnion1868<T, L = LastOf1868<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1868<TuplifyUnion1868<Exclude<T, L>>, L>;

type DeepPartial1868<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1868<T[P]> }
  : T;

type Paths1868<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1868<K, Paths1868<T[K], Prev1868[D]>> : never }[keyof T]
  : never;

type Prev1868 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1868<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1868 {
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

type ConfigPaths1868 = Paths1868<NestedConfig1868>;

interface HeavyProps1868 {
  config: DeepPartial1868<NestedConfig1868>;
  path?: ConfigPaths1868;
}

const HeavyComponent1868 = memo(function HeavyComponent1868({ config }: HeavyProps1868) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1868) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1868 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1868: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1868.displayName = 'HeavyComponent1868';
export default HeavyComponent1868;

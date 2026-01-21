'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1144<T> = T extends (infer U)[]
  ? DeepReadonlyArray1144<U>
  : T extends object
  ? DeepReadonlyObject1144<T>
  : T;

interface DeepReadonlyArray1144<T> extends ReadonlyArray<DeepReadonly1144<T>> {}

type DeepReadonlyObject1144<T> = {
  readonly [P in keyof T]: DeepReadonly1144<T[P]>;
};

type UnionToIntersection1144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1144<T> = UnionToIntersection1144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1144<T extends unknown[], V> = [...T, V];

type TuplifyUnion1144<T, L = LastOf1144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1144<TuplifyUnion1144<Exclude<T, L>>, L>;

type DeepPartial1144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1144<T[P]> }
  : T;

type Paths1144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1144<K, Paths1144<T[K], Prev1144[D]>> : never }[keyof T]
  : never;

type Prev1144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1144 {
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

type ConfigPaths1144 = Paths1144<NestedConfig1144>;

interface HeavyProps1144 {
  config: DeepPartial1144<NestedConfig1144>;
  path?: ConfigPaths1144;
}

const HeavyComponent1144 = memo(function HeavyComponent1144({ config }: HeavyProps1144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1144.displayName = 'HeavyComponent1144';
export default HeavyComponent1144;

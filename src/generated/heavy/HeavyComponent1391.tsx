'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1391<T> = T extends (infer U)[]
  ? DeepReadonlyArray1391<U>
  : T extends object
  ? DeepReadonlyObject1391<T>
  : T;

interface DeepReadonlyArray1391<T> extends ReadonlyArray<DeepReadonly1391<T>> {}

type DeepReadonlyObject1391<T> = {
  readonly [P in keyof T]: DeepReadonly1391<T[P]>;
};

type UnionToIntersection1391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1391<T> = UnionToIntersection1391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1391<T extends unknown[], V> = [...T, V];

type TuplifyUnion1391<T, L = LastOf1391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1391<TuplifyUnion1391<Exclude<T, L>>, L>;

type DeepPartial1391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1391<T[P]> }
  : T;

type Paths1391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1391<K, Paths1391<T[K], Prev1391[D]>> : never }[keyof T]
  : never;

type Prev1391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1391 {
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

type ConfigPaths1391 = Paths1391<NestedConfig1391>;

interface HeavyProps1391 {
  config: DeepPartial1391<NestedConfig1391>;
  path?: ConfigPaths1391;
}

const HeavyComponent1391 = memo(function HeavyComponent1391({ config }: HeavyProps1391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1391.displayName = 'HeavyComponent1391';
export default HeavyComponent1391;

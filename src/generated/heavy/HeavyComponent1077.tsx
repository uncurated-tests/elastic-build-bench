'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1077<T> = T extends (infer U)[]
  ? DeepReadonlyArray1077<U>
  : T extends object
  ? DeepReadonlyObject1077<T>
  : T;

interface DeepReadonlyArray1077<T> extends ReadonlyArray<DeepReadonly1077<T>> {}

type DeepReadonlyObject1077<T> = {
  readonly [P in keyof T]: DeepReadonly1077<T[P]>;
};

type UnionToIntersection1077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1077<T> = UnionToIntersection1077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1077<T extends unknown[], V> = [...T, V];

type TuplifyUnion1077<T, L = LastOf1077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1077<TuplifyUnion1077<Exclude<T, L>>, L>;

type DeepPartial1077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1077<T[P]> }
  : T;

type Paths1077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1077<K, Paths1077<T[K], Prev1077[D]>> : never }[keyof T]
  : never;

type Prev1077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1077 {
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

type ConfigPaths1077 = Paths1077<NestedConfig1077>;

interface HeavyProps1077 {
  config: DeepPartial1077<NestedConfig1077>;
  path?: ConfigPaths1077;
}

const HeavyComponent1077 = memo(function HeavyComponent1077({ config }: HeavyProps1077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1077.displayName = 'HeavyComponent1077';
export default HeavyComponent1077;

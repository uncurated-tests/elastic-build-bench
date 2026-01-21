'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1404<T> = T extends (infer U)[]
  ? DeepReadonlyArray1404<U>
  : T extends object
  ? DeepReadonlyObject1404<T>
  : T;

interface DeepReadonlyArray1404<T> extends ReadonlyArray<DeepReadonly1404<T>> {}

type DeepReadonlyObject1404<T> = {
  readonly [P in keyof T]: DeepReadonly1404<T[P]>;
};

type UnionToIntersection1404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1404<T> = UnionToIntersection1404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1404<T extends unknown[], V> = [...T, V];

type TuplifyUnion1404<T, L = LastOf1404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1404<TuplifyUnion1404<Exclude<T, L>>, L>;

type DeepPartial1404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1404<T[P]> }
  : T;

type Paths1404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1404<K, Paths1404<T[K], Prev1404[D]>> : never }[keyof T]
  : never;

type Prev1404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1404 {
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

type ConfigPaths1404 = Paths1404<NestedConfig1404>;

interface HeavyProps1404 {
  config: DeepPartial1404<NestedConfig1404>;
  path?: ConfigPaths1404;
}

const HeavyComponent1404 = memo(function HeavyComponent1404({ config }: HeavyProps1404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1404.displayName = 'HeavyComponent1404';
export default HeavyComponent1404;

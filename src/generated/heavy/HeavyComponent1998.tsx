'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1998<T> = T extends (infer U)[]
  ? DeepReadonlyArray1998<U>
  : T extends object
  ? DeepReadonlyObject1998<T>
  : T;

interface DeepReadonlyArray1998<T> extends ReadonlyArray<DeepReadonly1998<T>> {}

type DeepReadonlyObject1998<T> = {
  readonly [P in keyof T]: DeepReadonly1998<T[P]>;
};

type UnionToIntersection1998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1998<T> = UnionToIntersection1998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1998<T extends unknown[], V> = [...T, V];

type TuplifyUnion1998<T, L = LastOf1998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1998<TuplifyUnion1998<Exclude<T, L>>, L>;

type DeepPartial1998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1998<T[P]> }
  : T;

type Paths1998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1998<K, Paths1998<T[K], Prev1998[D]>> : never }[keyof T]
  : never;

type Prev1998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1998 {
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

type ConfigPaths1998 = Paths1998<NestedConfig1998>;

interface HeavyProps1998 {
  config: DeepPartial1998<NestedConfig1998>;
  path?: ConfigPaths1998;
}

const HeavyComponent1998 = memo(function HeavyComponent1998({ config }: HeavyProps1998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1998.displayName = 'HeavyComponent1998';
export default HeavyComponent1998;

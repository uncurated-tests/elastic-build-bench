'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1996<T> = T extends (infer U)[]
  ? DeepReadonlyArray1996<U>
  : T extends object
  ? DeepReadonlyObject1996<T>
  : T;

interface DeepReadonlyArray1996<T> extends ReadonlyArray<DeepReadonly1996<T>> {}

type DeepReadonlyObject1996<T> = {
  readonly [P in keyof T]: DeepReadonly1996<T[P]>;
};

type UnionToIntersection1996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1996<T> = UnionToIntersection1996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1996<T extends unknown[], V> = [...T, V];

type TuplifyUnion1996<T, L = LastOf1996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1996<TuplifyUnion1996<Exclude<T, L>>, L>;

type DeepPartial1996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1996<T[P]> }
  : T;

type Paths1996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1996<K, Paths1996<T[K], Prev1996[D]>> : never }[keyof T]
  : never;

type Prev1996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1996 {
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

type ConfigPaths1996 = Paths1996<NestedConfig1996>;

interface HeavyProps1996 {
  config: DeepPartial1996<NestedConfig1996>;
  path?: ConfigPaths1996;
}

const HeavyComponent1996 = memo(function HeavyComponent1996({ config }: HeavyProps1996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1996.displayName = 'HeavyComponent1996';
export default HeavyComponent1996;

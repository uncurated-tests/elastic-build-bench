'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1114<T> = T extends (infer U)[]
  ? DeepReadonlyArray1114<U>
  : T extends object
  ? DeepReadonlyObject1114<T>
  : T;

interface DeepReadonlyArray1114<T> extends ReadonlyArray<DeepReadonly1114<T>> {}

type DeepReadonlyObject1114<T> = {
  readonly [P in keyof T]: DeepReadonly1114<T[P]>;
};

type UnionToIntersection1114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1114<T> = UnionToIntersection1114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1114<T extends unknown[], V> = [...T, V];

type TuplifyUnion1114<T, L = LastOf1114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1114<TuplifyUnion1114<Exclude<T, L>>, L>;

type DeepPartial1114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1114<T[P]> }
  : T;

type Paths1114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1114<K, Paths1114<T[K], Prev1114[D]>> : never }[keyof T]
  : never;

type Prev1114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1114 {
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

type ConfigPaths1114 = Paths1114<NestedConfig1114>;

interface HeavyProps1114 {
  config: DeepPartial1114<NestedConfig1114>;
  path?: ConfigPaths1114;
}

const HeavyComponent1114 = memo(function HeavyComponent1114({ config }: HeavyProps1114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1114.displayName = 'HeavyComponent1114';
export default HeavyComponent1114;

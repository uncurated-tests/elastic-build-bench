'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1981<T> = T extends (infer U)[]
  ? DeepReadonlyArray1981<U>
  : T extends object
  ? DeepReadonlyObject1981<T>
  : T;

interface DeepReadonlyArray1981<T> extends ReadonlyArray<DeepReadonly1981<T>> {}

type DeepReadonlyObject1981<T> = {
  readonly [P in keyof T]: DeepReadonly1981<T[P]>;
};

type UnionToIntersection1981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1981<T> = UnionToIntersection1981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1981<T extends unknown[], V> = [...T, V];

type TuplifyUnion1981<T, L = LastOf1981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1981<TuplifyUnion1981<Exclude<T, L>>, L>;

type DeepPartial1981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1981<T[P]> }
  : T;

type Paths1981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1981<K, Paths1981<T[K], Prev1981[D]>> : never }[keyof T]
  : never;

type Prev1981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1981 {
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

type ConfigPaths1981 = Paths1981<NestedConfig1981>;

interface HeavyProps1981 {
  config: DeepPartial1981<NestedConfig1981>;
  path?: ConfigPaths1981;
}

const HeavyComponent1981 = memo(function HeavyComponent1981({ config }: HeavyProps1981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1981.displayName = 'HeavyComponent1981';
export default HeavyComponent1981;

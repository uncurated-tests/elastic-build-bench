'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1741<T> = T extends (infer U)[]
  ? DeepReadonlyArray1741<U>
  : T extends object
  ? DeepReadonlyObject1741<T>
  : T;

interface DeepReadonlyArray1741<T> extends ReadonlyArray<DeepReadonly1741<T>> {}

type DeepReadonlyObject1741<T> = {
  readonly [P in keyof T]: DeepReadonly1741<T[P]>;
};

type UnionToIntersection1741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1741<T> = UnionToIntersection1741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1741<T extends unknown[], V> = [...T, V];

type TuplifyUnion1741<T, L = LastOf1741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1741<TuplifyUnion1741<Exclude<T, L>>, L>;

type DeepPartial1741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1741<T[P]> }
  : T;

type Paths1741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1741<K, Paths1741<T[K], Prev1741[D]>> : never }[keyof T]
  : never;

type Prev1741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1741 {
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

type ConfigPaths1741 = Paths1741<NestedConfig1741>;

interface HeavyProps1741 {
  config: DeepPartial1741<NestedConfig1741>;
  path?: ConfigPaths1741;
}

const HeavyComponent1741 = memo(function HeavyComponent1741({ config }: HeavyProps1741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1741.displayName = 'HeavyComponent1741';
export default HeavyComponent1741;

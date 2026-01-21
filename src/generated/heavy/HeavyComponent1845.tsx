'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1845<T> = T extends (infer U)[]
  ? DeepReadonlyArray1845<U>
  : T extends object
  ? DeepReadonlyObject1845<T>
  : T;

interface DeepReadonlyArray1845<T> extends ReadonlyArray<DeepReadonly1845<T>> {}

type DeepReadonlyObject1845<T> = {
  readonly [P in keyof T]: DeepReadonly1845<T[P]>;
};

type UnionToIntersection1845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1845<T> = UnionToIntersection1845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1845<T extends unknown[], V> = [...T, V];

type TuplifyUnion1845<T, L = LastOf1845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1845<TuplifyUnion1845<Exclude<T, L>>, L>;

type DeepPartial1845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1845<T[P]> }
  : T;

type Paths1845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1845<K, Paths1845<T[K], Prev1845[D]>> : never }[keyof T]
  : never;

type Prev1845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1845 {
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

type ConfigPaths1845 = Paths1845<NestedConfig1845>;

interface HeavyProps1845 {
  config: DeepPartial1845<NestedConfig1845>;
  path?: ConfigPaths1845;
}

const HeavyComponent1845 = memo(function HeavyComponent1845({ config }: HeavyProps1845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1845.displayName = 'HeavyComponent1845';
export default HeavyComponent1845;

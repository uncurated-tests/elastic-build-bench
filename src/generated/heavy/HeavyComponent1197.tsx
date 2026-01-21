'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1197<T> = T extends (infer U)[]
  ? DeepReadonlyArray1197<U>
  : T extends object
  ? DeepReadonlyObject1197<T>
  : T;

interface DeepReadonlyArray1197<T> extends ReadonlyArray<DeepReadonly1197<T>> {}

type DeepReadonlyObject1197<T> = {
  readonly [P in keyof T]: DeepReadonly1197<T[P]>;
};

type UnionToIntersection1197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1197<T> = UnionToIntersection1197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1197<T extends unknown[], V> = [...T, V];

type TuplifyUnion1197<T, L = LastOf1197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1197<TuplifyUnion1197<Exclude<T, L>>, L>;

type DeepPartial1197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1197<T[P]> }
  : T;

type Paths1197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1197<K, Paths1197<T[K], Prev1197[D]>> : never }[keyof T]
  : never;

type Prev1197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1197 {
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

type ConfigPaths1197 = Paths1197<NestedConfig1197>;

interface HeavyProps1197 {
  config: DeepPartial1197<NestedConfig1197>;
  path?: ConfigPaths1197;
}

const HeavyComponent1197 = memo(function HeavyComponent1197({ config }: HeavyProps1197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1197.displayName = 'HeavyComponent1197';
export default HeavyComponent1197;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1262<T> = T extends (infer U)[]
  ? DeepReadonlyArray1262<U>
  : T extends object
  ? DeepReadonlyObject1262<T>
  : T;

interface DeepReadonlyArray1262<T> extends ReadonlyArray<DeepReadonly1262<T>> {}

type DeepReadonlyObject1262<T> = {
  readonly [P in keyof T]: DeepReadonly1262<T[P]>;
};

type UnionToIntersection1262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1262<T> = UnionToIntersection1262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1262<T extends unknown[], V> = [...T, V];

type TuplifyUnion1262<T, L = LastOf1262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1262<TuplifyUnion1262<Exclude<T, L>>, L>;

type DeepPartial1262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1262<T[P]> }
  : T;

type Paths1262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1262<K, Paths1262<T[K], Prev1262[D]>> : never }[keyof T]
  : never;

type Prev1262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1262 {
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

type ConfigPaths1262 = Paths1262<NestedConfig1262>;

interface HeavyProps1262 {
  config: DeepPartial1262<NestedConfig1262>;
  path?: ConfigPaths1262;
}

const HeavyComponent1262 = memo(function HeavyComponent1262({ config }: HeavyProps1262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1262.displayName = 'HeavyComponent1262';
export default HeavyComponent1262;

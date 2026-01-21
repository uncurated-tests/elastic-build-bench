'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1131<T> = T extends (infer U)[]
  ? DeepReadonlyArray1131<U>
  : T extends object
  ? DeepReadonlyObject1131<T>
  : T;

interface DeepReadonlyArray1131<T> extends ReadonlyArray<DeepReadonly1131<T>> {}

type DeepReadonlyObject1131<T> = {
  readonly [P in keyof T]: DeepReadonly1131<T[P]>;
};

type UnionToIntersection1131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1131<T> = UnionToIntersection1131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1131<T extends unknown[], V> = [...T, V];

type TuplifyUnion1131<T, L = LastOf1131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1131<TuplifyUnion1131<Exclude<T, L>>, L>;

type DeepPartial1131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1131<T[P]> }
  : T;

type Paths1131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1131<K, Paths1131<T[K], Prev1131[D]>> : never }[keyof T]
  : never;

type Prev1131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1131 {
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

type ConfigPaths1131 = Paths1131<NestedConfig1131>;

interface HeavyProps1131 {
  config: DeepPartial1131<NestedConfig1131>;
  path?: ConfigPaths1131;
}

const HeavyComponent1131 = memo(function HeavyComponent1131({ config }: HeavyProps1131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1131.displayName = 'HeavyComponent1131';
export default HeavyComponent1131;

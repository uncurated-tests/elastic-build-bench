'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1641<T> = T extends (infer U)[]
  ? DeepReadonlyArray1641<U>
  : T extends object
  ? DeepReadonlyObject1641<T>
  : T;

interface DeepReadonlyArray1641<T> extends ReadonlyArray<DeepReadonly1641<T>> {}

type DeepReadonlyObject1641<T> = {
  readonly [P in keyof T]: DeepReadonly1641<T[P]>;
};

type UnionToIntersection1641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1641<T> = UnionToIntersection1641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1641<T extends unknown[], V> = [...T, V];

type TuplifyUnion1641<T, L = LastOf1641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1641<TuplifyUnion1641<Exclude<T, L>>, L>;

type DeepPartial1641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1641<T[P]> }
  : T;

type Paths1641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1641<K, Paths1641<T[K], Prev1641[D]>> : never }[keyof T]
  : never;

type Prev1641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1641 {
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

type ConfigPaths1641 = Paths1641<NestedConfig1641>;

interface HeavyProps1641 {
  config: DeepPartial1641<NestedConfig1641>;
  path?: ConfigPaths1641;
}

const HeavyComponent1641 = memo(function HeavyComponent1641({ config }: HeavyProps1641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1641.displayName = 'HeavyComponent1641';
export default HeavyComponent1641;

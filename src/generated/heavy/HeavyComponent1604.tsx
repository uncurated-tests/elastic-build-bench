'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1604<T> = T extends (infer U)[]
  ? DeepReadonlyArray1604<U>
  : T extends object
  ? DeepReadonlyObject1604<T>
  : T;

interface DeepReadonlyArray1604<T> extends ReadonlyArray<DeepReadonly1604<T>> {}

type DeepReadonlyObject1604<T> = {
  readonly [P in keyof T]: DeepReadonly1604<T[P]>;
};

type UnionToIntersection1604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1604<T> = UnionToIntersection1604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1604<T extends unknown[], V> = [...T, V];

type TuplifyUnion1604<T, L = LastOf1604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1604<TuplifyUnion1604<Exclude<T, L>>, L>;

type DeepPartial1604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1604<T[P]> }
  : T;

type Paths1604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1604<K, Paths1604<T[K], Prev1604[D]>> : never }[keyof T]
  : never;

type Prev1604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1604 {
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

type ConfigPaths1604 = Paths1604<NestedConfig1604>;

interface HeavyProps1604 {
  config: DeepPartial1604<NestedConfig1604>;
  path?: ConfigPaths1604;
}

const HeavyComponent1604 = memo(function HeavyComponent1604({ config }: HeavyProps1604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1604.displayName = 'HeavyComponent1604';
export default HeavyComponent1604;

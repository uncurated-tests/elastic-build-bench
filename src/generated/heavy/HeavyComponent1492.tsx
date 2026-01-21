'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1492<T> = T extends (infer U)[]
  ? DeepReadonlyArray1492<U>
  : T extends object
  ? DeepReadonlyObject1492<T>
  : T;

interface DeepReadonlyArray1492<T> extends ReadonlyArray<DeepReadonly1492<T>> {}

type DeepReadonlyObject1492<T> = {
  readonly [P in keyof T]: DeepReadonly1492<T[P]>;
};

type UnionToIntersection1492<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1492<T> = UnionToIntersection1492<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1492<T extends unknown[], V> = [...T, V];

type TuplifyUnion1492<T, L = LastOf1492<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1492<TuplifyUnion1492<Exclude<T, L>>, L>;

type DeepPartial1492<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1492<T[P]> }
  : T;

type Paths1492<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1492<K, Paths1492<T[K], Prev1492[D]>> : never }[keyof T]
  : never;

type Prev1492 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1492<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1492 {
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

type ConfigPaths1492 = Paths1492<NestedConfig1492>;

interface HeavyProps1492 {
  config: DeepPartial1492<NestedConfig1492>;
  path?: ConfigPaths1492;
}

const HeavyComponent1492 = memo(function HeavyComponent1492({ config }: HeavyProps1492) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1492) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1492 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1492: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1492.displayName = 'HeavyComponent1492';
export default HeavyComponent1492;

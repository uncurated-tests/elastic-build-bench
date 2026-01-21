'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1547<T> = T extends (infer U)[]
  ? DeepReadonlyArray1547<U>
  : T extends object
  ? DeepReadonlyObject1547<T>
  : T;

interface DeepReadonlyArray1547<T> extends ReadonlyArray<DeepReadonly1547<T>> {}

type DeepReadonlyObject1547<T> = {
  readonly [P in keyof T]: DeepReadonly1547<T[P]>;
};

type UnionToIntersection1547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1547<T> = UnionToIntersection1547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1547<T extends unknown[], V> = [...T, V];

type TuplifyUnion1547<T, L = LastOf1547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1547<TuplifyUnion1547<Exclude<T, L>>, L>;

type DeepPartial1547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1547<T[P]> }
  : T;

type Paths1547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1547<K, Paths1547<T[K], Prev1547[D]>> : never }[keyof T]
  : never;

type Prev1547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1547 {
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

type ConfigPaths1547 = Paths1547<NestedConfig1547>;

interface HeavyProps1547 {
  config: DeepPartial1547<NestedConfig1547>;
  path?: ConfigPaths1547;
}

const HeavyComponent1547 = memo(function HeavyComponent1547({ config }: HeavyProps1547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1547.displayName = 'HeavyComponent1547';
export default HeavyComponent1547;

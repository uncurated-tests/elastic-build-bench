'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1780<T> = T extends (infer U)[]
  ? DeepReadonlyArray1780<U>
  : T extends object
  ? DeepReadonlyObject1780<T>
  : T;

interface DeepReadonlyArray1780<T> extends ReadonlyArray<DeepReadonly1780<T>> {}

type DeepReadonlyObject1780<T> = {
  readonly [P in keyof T]: DeepReadonly1780<T[P]>;
};

type UnionToIntersection1780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1780<T> = UnionToIntersection1780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1780<T extends unknown[], V> = [...T, V];

type TuplifyUnion1780<T, L = LastOf1780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1780<TuplifyUnion1780<Exclude<T, L>>, L>;

type DeepPartial1780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1780<T[P]> }
  : T;

type Paths1780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1780<K, Paths1780<T[K], Prev1780[D]>> : never }[keyof T]
  : never;

type Prev1780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1780 {
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

type ConfigPaths1780 = Paths1780<NestedConfig1780>;

interface HeavyProps1780 {
  config: DeepPartial1780<NestedConfig1780>;
  path?: ConfigPaths1780;
}

const HeavyComponent1780 = memo(function HeavyComponent1780({ config }: HeavyProps1780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1780.displayName = 'HeavyComponent1780';
export default HeavyComponent1780;

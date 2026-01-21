'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1646<T> = T extends (infer U)[]
  ? DeepReadonlyArray1646<U>
  : T extends object
  ? DeepReadonlyObject1646<T>
  : T;

interface DeepReadonlyArray1646<T> extends ReadonlyArray<DeepReadonly1646<T>> {}

type DeepReadonlyObject1646<T> = {
  readonly [P in keyof T]: DeepReadonly1646<T[P]>;
};

type UnionToIntersection1646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1646<T> = UnionToIntersection1646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1646<T extends unknown[], V> = [...T, V];

type TuplifyUnion1646<T, L = LastOf1646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1646<TuplifyUnion1646<Exclude<T, L>>, L>;

type DeepPartial1646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1646<T[P]> }
  : T;

type Paths1646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1646<K, Paths1646<T[K], Prev1646[D]>> : never }[keyof T]
  : never;

type Prev1646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1646 {
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

type ConfigPaths1646 = Paths1646<NestedConfig1646>;

interface HeavyProps1646 {
  config: DeepPartial1646<NestedConfig1646>;
  path?: ConfigPaths1646;
}

const HeavyComponent1646 = memo(function HeavyComponent1646({ config }: HeavyProps1646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1646.displayName = 'HeavyComponent1646';
export default HeavyComponent1646;

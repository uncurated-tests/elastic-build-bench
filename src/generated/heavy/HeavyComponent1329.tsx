'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1329<T> = T extends (infer U)[]
  ? DeepReadonlyArray1329<U>
  : T extends object
  ? DeepReadonlyObject1329<T>
  : T;

interface DeepReadonlyArray1329<T> extends ReadonlyArray<DeepReadonly1329<T>> {}

type DeepReadonlyObject1329<T> = {
  readonly [P in keyof T]: DeepReadonly1329<T[P]>;
};

type UnionToIntersection1329<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1329<T> = UnionToIntersection1329<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1329<T extends unknown[], V> = [...T, V];

type TuplifyUnion1329<T, L = LastOf1329<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1329<TuplifyUnion1329<Exclude<T, L>>, L>;

type DeepPartial1329<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1329<T[P]> }
  : T;

type Paths1329<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1329<K, Paths1329<T[K], Prev1329[D]>> : never }[keyof T]
  : never;

type Prev1329 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1329<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1329 {
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

type ConfigPaths1329 = Paths1329<NestedConfig1329>;

interface HeavyProps1329 {
  config: DeepPartial1329<NestedConfig1329>;
  path?: ConfigPaths1329;
}

const HeavyComponent1329 = memo(function HeavyComponent1329({ config }: HeavyProps1329) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1329) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1329 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1329: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1329.displayName = 'HeavyComponent1329';
export default HeavyComponent1329;

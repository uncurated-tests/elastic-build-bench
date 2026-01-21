'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1328<T> = T extends (infer U)[]
  ? DeepReadonlyArray1328<U>
  : T extends object
  ? DeepReadonlyObject1328<T>
  : T;

interface DeepReadonlyArray1328<T> extends ReadonlyArray<DeepReadonly1328<T>> {}

type DeepReadonlyObject1328<T> = {
  readonly [P in keyof T]: DeepReadonly1328<T[P]>;
};

type UnionToIntersection1328<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1328<T> = UnionToIntersection1328<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1328<T extends unknown[], V> = [...T, V];

type TuplifyUnion1328<T, L = LastOf1328<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1328<TuplifyUnion1328<Exclude<T, L>>, L>;

type DeepPartial1328<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1328<T[P]> }
  : T;

type Paths1328<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1328<K, Paths1328<T[K], Prev1328[D]>> : never }[keyof T]
  : never;

type Prev1328 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1328<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1328 {
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

type ConfigPaths1328 = Paths1328<NestedConfig1328>;

interface HeavyProps1328 {
  config: DeepPartial1328<NestedConfig1328>;
  path?: ConfigPaths1328;
}

const HeavyComponent1328 = memo(function HeavyComponent1328({ config }: HeavyProps1328) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1328) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1328 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1328: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1328.displayName = 'HeavyComponent1328';
export default HeavyComponent1328;

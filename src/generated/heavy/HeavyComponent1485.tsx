'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1485<T> = T extends (infer U)[]
  ? DeepReadonlyArray1485<U>
  : T extends object
  ? DeepReadonlyObject1485<T>
  : T;

interface DeepReadonlyArray1485<T> extends ReadonlyArray<DeepReadonly1485<T>> {}

type DeepReadonlyObject1485<T> = {
  readonly [P in keyof T]: DeepReadonly1485<T[P]>;
};

type UnionToIntersection1485<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1485<T> = UnionToIntersection1485<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1485<T extends unknown[], V> = [...T, V];

type TuplifyUnion1485<T, L = LastOf1485<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1485<TuplifyUnion1485<Exclude<T, L>>, L>;

type DeepPartial1485<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1485<T[P]> }
  : T;

type Paths1485<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1485<K, Paths1485<T[K], Prev1485[D]>> : never }[keyof T]
  : never;

type Prev1485 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1485<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1485 {
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

type ConfigPaths1485 = Paths1485<NestedConfig1485>;

interface HeavyProps1485 {
  config: DeepPartial1485<NestedConfig1485>;
  path?: ConfigPaths1485;
}

const HeavyComponent1485 = memo(function HeavyComponent1485({ config }: HeavyProps1485) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1485) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1485 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1485: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1485.displayName = 'HeavyComponent1485';
export default HeavyComponent1485;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1373<T> = T extends (infer U)[]
  ? DeepReadonlyArray1373<U>
  : T extends object
  ? DeepReadonlyObject1373<T>
  : T;

interface DeepReadonlyArray1373<T> extends ReadonlyArray<DeepReadonly1373<T>> {}

type DeepReadonlyObject1373<T> = {
  readonly [P in keyof T]: DeepReadonly1373<T[P]>;
};

type UnionToIntersection1373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1373<T> = UnionToIntersection1373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1373<T extends unknown[], V> = [...T, V];

type TuplifyUnion1373<T, L = LastOf1373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1373<TuplifyUnion1373<Exclude<T, L>>, L>;

type DeepPartial1373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1373<T[P]> }
  : T;

type Paths1373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1373<K, Paths1373<T[K], Prev1373[D]>> : never }[keyof T]
  : never;

type Prev1373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1373 {
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

type ConfigPaths1373 = Paths1373<NestedConfig1373>;

interface HeavyProps1373 {
  config: DeepPartial1373<NestedConfig1373>;
  path?: ConfigPaths1373;
}

const HeavyComponent1373 = memo(function HeavyComponent1373({ config }: HeavyProps1373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1373.displayName = 'HeavyComponent1373';
export default HeavyComponent1373;

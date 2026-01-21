'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1306<T> = T extends (infer U)[]
  ? DeepReadonlyArray1306<U>
  : T extends object
  ? DeepReadonlyObject1306<T>
  : T;

interface DeepReadonlyArray1306<T> extends ReadonlyArray<DeepReadonly1306<T>> {}

type DeepReadonlyObject1306<T> = {
  readonly [P in keyof T]: DeepReadonly1306<T[P]>;
};

type UnionToIntersection1306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1306<T> = UnionToIntersection1306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1306<T extends unknown[], V> = [...T, V];

type TuplifyUnion1306<T, L = LastOf1306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1306<TuplifyUnion1306<Exclude<T, L>>, L>;

type DeepPartial1306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1306<T[P]> }
  : T;

type Paths1306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1306<K, Paths1306<T[K], Prev1306[D]>> : never }[keyof T]
  : never;

type Prev1306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1306 {
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

type ConfigPaths1306 = Paths1306<NestedConfig1306>;

interface HeavyProps1306 {
  config: DeepPartial1306<NestedConfig1306>;
  path?: ConfigPaths1306;
}

const HeavyComponent1306 = memo(function HeavyComponent1306({ config }: HeavyProps1306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1306.displayName = 'HeavyComponent1306';
export default HeavyComponent1306;

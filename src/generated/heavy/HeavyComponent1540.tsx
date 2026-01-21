'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1540<T> = T extends (infer U)[]
  ? DeepReadonlyArray1540<U>
  : T extends object
  ? DeepReadonlyObject1540<T>
  : T;

interface DeepReadonlyArray1540<T> extends ReadonlyArray<DeepReadonly1540<T>> {}

type DeepReadonlyObject1540<T> = {
  readonly [P in keyof T]: DeepReadonly1540<T[P]>;
};

type UnionToIntersection1540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1540<T> = UnionToIntersection1540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1540<T extends unknown[], V> = [...T, V];

type TuplifyUnion1540<T, L = LastOf1540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1540<TuplifyUnion1540<Exclude<T, L>>, L>;

type DeepPartial1540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1540<T[P]> }
  : T;

type Paths1540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1540<K, Paths1540<T[K], Prev1540[D]>> : never }[keyof T]
  : never;

type Prev1540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1540 {
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

type ConfigPaths1540 = Paths1540<NestedConfig1540>;

interface HeavyProps1540 {
  config: DeepPartial1540<NestedConfig1540>;
  path?: ConfigPaths1540;
}

const HeavyComponent1540 = memo(function HeavyComponent1540({ config }: HeavyProps1540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1540.displayName = 'HeavyComponent1540';
export default HeavyComponent1540;

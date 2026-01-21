'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1469<T> = T extends (infer U)[]
  ? DeepReadonlyArray1469<U>
  : T extends object
  ? DeepReadonlyObject1469<T>
  : T;

interface DeepReadonlyArray1469<T> extends ReadonlyArray<DeepReadonly1469<T>> {}

type DeepReadonlyObject1469<T> = {
  readonly [P in keyof T]: DeepReadonly1469<T[P]>;
};

type UnionToIntersection1469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1469<T> = UnionToIntersection1469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1469<T extends unknown[], V> = [...T, V];

type TuplifyUnion1469<T, L = LastOf1469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1469<TuplifyUnion1469<Exclude<T, L>>, L>;

type DeepPartial1469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1469<T[P]> }
  : T;

type Paths1469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1469<K, Paths1469<T[K], Prev1469[D]>> : never }[keyof T]
  : never;

type Prev1469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1469 {
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

type ConfigPaths1469 = Paths1469<NestedConfig1469>;

interface HeavyProps1469 {
  config: DeepPartial1469<NestedConfig1469>;
  path?: ConfigPaths1469;
}

const HeavyComponent1469 = memo(function HeavyComponent1469({ config }: HeavyProps1469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1469.displayName = 'HeavyComponent1469';
export default HeavyComponent1469;

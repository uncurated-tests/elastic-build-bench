'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2469<T> = T extends (infer U)[]
  ? DeepReadonlyArray2469<U>
  : T extends object
  ? DeepReadonlyObject2469<T>
  : T;

interface DeepReadonlyArray2469<T> extends ReadonlyArray<DeepReadonly2469<T>> {}

type DeepReadonlyObject2469<T> = {
  readonly [P in keyof T]: DeepReadonly2469<T[P]>;
};

type UnionToIntersection2469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2469<T> = UnionToIntersection2469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2469<T extends unknown[], V> = [...T, V];

type TuplifyUnion2469<T, L = LastOf2469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2469<TuplifyUnion2469<Exclude<T, L>>, L>;

type DeepPartial2469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2469<T[P]> }
  : T;

type Paths2469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2469<K, Paths2469<T[K], Prev2469[D]>> : never }[keyof T]
  : never;

type Prev2469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2469 {
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

type ConfigPaths2469 = Paths2469<NestedConfig2469>;

interface HeavyProps2469 {
  config: DeepPartial2469<NestedConfig2469>;
  path?: ConfigPaths2469;
}

const HeavyComponent2469 = memo(function HeavyComponent2469({ config }: HeavyProps2469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2469.displayName = 'HeavyComponent2469';
export default HeavyComponent2469;

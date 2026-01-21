'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12469<T> = T extends (infer U)[]
  ? DeepReadonlyArray12469<U>
  : T extends object
  ? DeepReadonlyObject12469<T>
  : T;

interface DeepReadonlyArray12469<T> extends ReadonlyArray<DeepReadonly12469<T>> {}

type DeepReadonlyObject12469<T> = {
  readonly [P in keyof T]: DeepReadonly12469<T[P]>;
};

type UnionToIntersection12469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12469<T> = UnionToIntersection12469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12469<T extends unknown[], V> = [...T, V];

type TuplifyUnion12469<T, L = LastOf12469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12469<TuplifyUnion12469<Exclude<T, L>>, L>;

type DeepPartial12469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12469<T[P]> }
  : T;

type Paths12469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12469<K, Paths12469<T[K], Prev12469[D]>> : never }[keyof T]
  : never;

type Prev12469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12469 {
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

type ConfigPaths12469 = Paths12469<NestedConfig12469>;

interface HeavyProps12469 {
  config: DeepPartial12469<NestedConfig12469>;
  path?: ConfigPaths12469;
}

const HeavyComponent12469 = memo(function HeavyComponent12469({ config }: HeavyProps12469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12469.displayName = 'HeavyComponent12469';
export default HeavyComponent12469;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5469<T> = T extends (infer U)[]
  ? DeepReadonlyArray5469<U>
  : T extends object
  ? DeepReadonlyObject5469<T>
  : T;

interface DeepReadonlyArray5469<T> extends ReadonlyArray<DeepReadonly5469<T>> {}

type DeepReadonlyObject5469<T> = {
  readonly [P in keyof T]: DeepReadonly5469<T[P]>;
};

type UnionToIntersection5469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5469<T> = UnionToIntersection5469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5469<T extends unknown[], V> = [...T, V];

type TuplifyUnion5469<T, L = LastOf5469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5469<TuplifyUnion5469<Exclude<T, L>>, L>;

type DeepPartial5469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5469<T[P]> }
  : T;

type Paths5469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5469<K, Paths5469<T[K], Prev5469[D]>> : never }[keyof T]
  : never;

type Prev5469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5469 {
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

type ConfigPaths5469 = Paths5469<NestedConfig5469>;

interface HeavyProps5469 {
  config: DeepPartial5469<NestedConfig5469>;
  path?: ConfigPaths5469;
}

const HeavyComponent5469 = memo(function HeavyComponent5469({ config }: HeavyProps5469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5469.displayName = 'HeavyComponent5469';
export default HeavyComponent5469;

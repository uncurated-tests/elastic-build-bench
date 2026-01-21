'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8727<T> = T extends (infer U)[]
  ? DeepReadonlyArray8727<U>
  : T extends object
  ? DeepReadonlyObject8727<T>
  : T;

interface DeepReadonlyArray8727<T> extends ReadonlyArray<DeepReadonly8727<T>> {}

type DeepReadonlyObject8727<T> = {
  readonly [P in keyof T]: DeepReadonly8727<T[P]>;
};

type UnionToIntersection8727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8727<T> = UnionToIntersection8727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8727<T extends unknown[], V> = [...T, V];

type TuplifyUnion8727<T, L = LastOf8727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8727<TuplifyUnion8727<Exclude<T, L>>, L>;

type DeepPartial8727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8727<T[P]> }
  : T;

type Paths8727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8727<K, Paths8727<T[K], Prev8727[D]>> : never }[keyof T]
  : never;

type Prev8727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8727 {
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

type ConfigPaths8727 = Paths8727<NestedConfig8727>;

interface HeavyProps8727 {
  config: DeepPartial8727<NestedConfig8727>;
  path?: ConfigPaths8727;
}

const HeavyComponent8727 = memo(function HeavyComponent8727({ config }: HeavyProps8727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8727.displayName = 'HeavyComponent8727';
export default HeavyComponent8727;

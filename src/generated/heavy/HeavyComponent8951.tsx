'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8951<T> = T extends (infer U)[]
  ? DeepReadonlyArray8951<U>
  : T extends object
  ? DeepReadonlyObject8951<T>
  : T;

interface DeepReadonlyArray8951<T> extends ReadonlyArray<DeepReadonly8951<T>> {}

type DeepReadonlyObject8951<T> = {
  readonly [P in keyof T]: DeepReadonly8951<T[P]>;
};

type UnionToIntersection8951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8951<T> = UnionToIntersection8951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8951<T extends unknown[], V> = [...T, V];

type TuplifyUnion8951<T, L = LastOf8951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8951<TuplifyUnion8951<Exclude<T, L>>, L>;

type DeepPartial8951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8951<T[P]> }
  : T;

type Paths8951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8951<K, Paths8951<T[K], Prev8951[D]>> : never }[keyof T]
  : never;

type Prev8951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8951 {
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

type ConfigPaths8951 = Paths8951<NestedConfig8951>;

interface HeavyProps8951 {
  config: DeepPartial8951<NestedConfig8951>;
  path?: ConfigPaths8951;
}

const HeavyComponent8951 = memo(function HeavyComponent8951({ config }: HeavyProps8951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8951.displayName = 'HeavyComponent8951';
export default HeavyComponent8951;

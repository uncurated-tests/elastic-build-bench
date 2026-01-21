'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8140<T> = T extends (infer U)[]
  ? DeepReadonlyArray8140<U>
  : T extends object
  ? DeepReadonlyObject8140<T>
  : T;

interface DeepReadonlyArray8140<T> extends ReadonlyArray<DeepReadonly8140<T>> {}

type DeepReadonlyObject8140<T> = {
  readonly [P in keyof T]: DeepReadonly8140<T[P]>;
};

type UnionToIntersection8140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8140<T> = UnionToIntersection8140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8140<T extends unknown[], V> = [...T, V];

type TuplifyUnion8140<T, L = LastOf8140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8140<TuplifyUnion8140<Exclude<T, L>>, L>;

type DeepPartial8140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8140<T[P]> }
  : T;

type Paths8140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8140<K, Paths8140<T[K], Prev8140[D]>> : never }[keyof T]
  : never;

type Prev8140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8140 {
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

type ConfigPaths8140 = Paths8140<NestedConfig8140>;

interface HeavyProps8140 {
  config: DeepPartial8140<NestedConfig8140>;
  path?: ConfigPaths8140;
}

const HeavyComponent8140 = memo(function HeavyComponent8140({ config }: HeavyProps8140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8140.displayName = 'HeavyComponent8140';
export default HeavyComponent8140;

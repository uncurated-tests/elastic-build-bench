'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8814<T> = T extends (infer U)[]
  ? DeepReadonlyArray8814<U>
  : T extends object
  ? DeepReadonlyObject8814<T>
  : T;

interface DeepReadonlyArray8814<T> extends ReadonlyArray<DeepReadonly8814<T>> {}

type DeepReadonlyObject8814<T> = {
  readonly [P in keyof T]: DeepReadonly8814<T[P]>;
};

type UnionToIntersection8814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8814<T> = UnionToIntersection8814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8814<T extends unknown[], V> = [...T, V];

type TuplifyUnion8814<T, L = LastOf8814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8814<TuplifyUnion8814<Exclude<T, L>>, L>;

type DeepPartial8814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8814<T[P]> }
  : T;

type Paths8814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8814<K, Paths8814<T[K], Prev8814[D]>> : never }[keyof T]
  : never;

type Prev8814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8814 {
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

type ConfigPaths8814 = Paths8814<NestedConfig8814>;

interface HeavyProps8814 {
  config: DeepPartial8814<NestedConfig8814>;
  path?: ConfigPaths8814;
}

const HeavyComponent8814 = memo(function HeavyComponent8814({ config }: HeavyProps8814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8814.displayName = 'HeavyComponent8814';
export default HeavyComponent8814;

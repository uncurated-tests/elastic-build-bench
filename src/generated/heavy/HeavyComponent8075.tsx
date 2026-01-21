'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8075<T> = T extends (infer U)[]
  ? DeepReadonlyArray8075<U>
  : T extends object
  ? DeepReadonlyObject8075<T>
  : T;

interface DeepReadonlyArray8075<T> extends ReadonlyArray<DeepReadonly8075<T>> {}

type DeepReadonlyObject8075<T> = {
  readonly [P in keyof T]: DeepReadonly8075<T[P]>;
};

type UnionToIntersection8075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8075<T> = UnionToIntersection8075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8075<T extends unknown[], V> = [...T, V];

type TuplifyUnion8075<T, L = LastOf8075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8075<TuplifyUnion8075<Exclude<T, L>>, L>;

type DeepPartial8075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8075<T[P]> }
  : T;

type Paths8075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8075<K, Paths8075<T[K], Prev8075[D]>> : never }[keyof T]
  : never;

type Prev8075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8075 {
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

type ConfigPaths8075 = Paths8075<NestedConfig8075>;

interface HeavyProps8075 {
  config: DeepPartial8075<NestedConfig8075>;
  path?: ConfigPaths8075;
}

const HeavyComponent8075 = memo(function HeavyComponent8075({ config }: HeavyProps8075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8075.displayName = 'HeavyComponent8075';
export default HeavyComponent8075;

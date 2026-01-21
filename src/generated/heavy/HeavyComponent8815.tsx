'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8815<T> = T extends (infer U)[]
  ? DeepReadonlyArray8815<U>
  : T extends object
  ? DeepReadonlyObject8815<T>
  : T;

interface DeepReadonlyArray8815<T> extends ReadonlyArray<DeepReadonly8815<T>> {}

type DeepReadonlyObject8815<T> = {
  readonly [P in keyof T]: DeepReadonly8815<T[P]>;
};

type UnionToIntersection8815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8815<T> = UnionToIntersection8815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8815<T extends unknown[], V> = [...T, V];

type TuplifyUnion8815<T, L = LastOf8815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8815<TuplifyUnion8815<Exclude<T, L>>, L>;

type DeepPartial8815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8815<T[P]> }
  : T;

type Paths8815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8815<K, Paths8815<T[K], Prev8815[D]>> : never }[keyof T]
  : never;

type Prev8815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8815 {
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

type ConfigPaths8815 = Paths8815<NestedConfig8815>;

interface HeavyProps8815 {
  config: DeepPartial8815<NestedConfig8815>;
  path?: ConfigPaths8815;
}

const HeavyComponent8815 = memo(function HeavyComponent8815({ config }: HeavyProps8815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8815.displayName = 'HeavyComponent8815';
export default HeavyComponent8815;

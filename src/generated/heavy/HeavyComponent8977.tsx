'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8977<T> = T extends (infer U)[]
  ? DeepReadonlyArray8977<U>
  : T extends object
  ? DeepReadonlyObject8977<T>
  : T;

interface DeepReadonlyArray8977<T> extends ReadonlyArray<DeepReadonly8977<T>> {}

type DeepReadonlyObject8977<T> = {
  readonly [P in keyof T]: DeepReadonly8977<T[P]>;
};

type UnionToIntersection8977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8977<T> = UnionToIntersection8977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8977<T extends unknown[], V> = [...T, V];

type TuplifyUnion8977<T, L = LastOf8977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8977<TuplifyUnion8977<Exclude<T, L>>, L>;

type DeepPartial8977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8977<T[P]> }
  : T;

type Paths8977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8977<K, Paths8977<T[K], Prev8977[D]>> : never }[keyof T]
  : never;

type Prev8977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8977 {
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

type ConfigPaths8977 = Paths8977<NestedConfig8977>;

interface HeavyProps8977 {
  config: DeepPartial8977<NestedConfig8977>;
  path?: ConfigPaths8977;
}

const HeavyComponent8977 = memo(function HeavyComponent8977({ config }: HeavyProps8977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8977.displayName = 'HeavyComponent8977';
export default HeavyComponent8977;

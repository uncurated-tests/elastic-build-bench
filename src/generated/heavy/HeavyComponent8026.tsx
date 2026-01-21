'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8026<T> = T extends (infer U)[]
  ? DeepReadonlyArray8026<U>
  : T extends object
  ? DeepReadonlyObject8026<T>
  : T;

interface DeepReadonlyArray8026<T> extends ReadonlyArray<DeepReadonly8026<T>> {}

type DeepReadonlyObject8026<T> = {
  readonly [P in keyof T]: DeepReadonly8026<T[P]>;
};

type UnionToIntersection8026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8026<T> = UnionToIntersection8026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8026<T extends unknown[], V> = [...T, V];

type TuplifyUnion8026<T, L = LastOf8026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8026<TuplifyUnion8026<Exclude<T, L>>, L>;

type DeepPartial8026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8026<T[P]> }
  : T;

type Paths8026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8026<K, Paths8026<T[K], Prev8026[D]>> : never }[keyof T]
  : never;

type Prev8026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8026 {
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

type ConfigPaths8026 = Paths8026<NestedConfig8026>;

interface HeavyProps8026 {
  config: DeepPartial8026<NestedConfig8026>;
  path?: ConfigPaths8026;
}

const HeavyComponent8026 = memo(function HeavyComponent8026({ config }: HeavyProps8026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8026.displayName = 'HeavyComponent8026';
export default HeavyComponent8026;

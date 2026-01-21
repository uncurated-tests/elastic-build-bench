'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8936<T> = T extends (infer U)[]
  ? DeepReadonlyArray8936<U>
  : T extends object
  ? DeepReadonlyObject8936<T>
  : T;

interface DeepReadonlyArray8936<T> extends ReadonlyArray<DeepReadonly8936<T>> {}

type DeepReadonlyObject8936<T> = {
  readonly [P in keyof T]: DeepReadonly8936<T[P]>;
};

type UnionToIntersection8936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8936<T> = UnionToIntersection8936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8936<T extends unknown[], V> = [...T, V];

type TuplifyUnion8936<T, L = LastOf8936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8936<TuplifyUnion8936<Exclude<T, L>>, L>;

type DeepPartial8936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8936<T[P]> }
  : T;

type Paths8936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8936<K, Paths8936<T[K], Prev8936[D]>> : never }[keyof T]
  : never;

type Prev8936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8936 {
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

type ConfigPaths8936 = Paths8936<NestedConfig8936>;

interface HeavyProps8936 {
  config: DeepPartial8936<NestedConfig8936>;
  path?: ConfigPaths8936;
}

const HeavyComponent8936 = memo(function HeavyComponent8936({ config }: HeavyProps8936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8936.displayName = 'HeavyComponent8936';
export default HeavyComponent8936;

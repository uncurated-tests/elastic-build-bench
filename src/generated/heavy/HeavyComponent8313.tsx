'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8313<T> = T extends (infer U)[]
  ? DeepReadonlyArray8313<U>
  : T extends object
  ? DeepReadonlyObject8313<T>
  : T;

interface DeepReadonlyArray8313<T> extends ReadonlyArray<DeepReadonly8313<T>> {}

type DeepReadonlyObject8313<T> = {
  readonly [P in keyof T]: DeepReadonly8313<T[P]>;
};

type UnionToIntersection8313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8313<T> = UnionToIntersection8313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8313<T extends unknown[], V> = [...T, V];

type TuplifyUnion8313<T, L = LastOf8313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8313<TuplifyUnion8313<Exclude<T, L>>, L>;

type DeepPartial8313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8313<T[P]> }
  : T;

type Paths8313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8313<K, Paths8313<T[K], Prev8313[D]>> : never }[keyof T]
  : never;

type Prev8313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8313 {
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

type ConfigPaths8313 = Paths8313<NestedConfig8313>;

interface HeavyProps8313 {
  config: DeepPartial8313<NestedConfig8313>;
  path?: ConfigPaths8313;
}

const HeavyComponent8313 = memo(function HeavyComponent8313({ config }: HeavyProps8313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8313.displayName = 'HeavyComponent8313';
export default HeavyComponent8313;

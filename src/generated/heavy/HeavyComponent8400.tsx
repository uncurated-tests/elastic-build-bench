'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8400<T> = T extends (infer U)[]
  ? DeepReadonlyArray8400<U>
  : T extends object
  ? DeepReadonlyObject8400<T>
  : T;

interface DeepReadonlyArray8400<T> extends ReadonlyArray<DeepReadonly8400<T>> {}

type DeepReadonlyObject8400<T> = {
  readonly [P in keyof T]: DeepReadonly8400<T[P]>;
};

type UnionToIntersection8400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8400<T> = UnionToIntersection8400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8400<T extends unknown[], V> = [...T, V];

type TuplifyUnion8400<T, L = LastOf8400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8400<TuplifyUnion8400<Exclude<T, L>>, L>;

type DeepPartial8400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8400<T[P]> }
  : T;

type Paths8400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8400<K, Paths8400<T[K], Prev8400[D]>> : never }[keyof T]
  : never;

type Prev8400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8400 {
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

type ConfigPaths8400 = Paths8400<NestedConfig8400>;

interface HeavyProps8400 {
  config: DeepPartial8400<NestedConfig8400>;
  path?: ConfigPaths8400;
}

const HeavyComponent8400 = memo(function HeavyComponent8400({ config }: HeavyProps8400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8400.displayName = 'HeavyComponent8400';
export default HeavyComponent8400;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8473<T> = T extends (infer U)[]
  ? DeepReadonlyArray8473<U>
  : T extends object
  ? DeepReadonlyObject8473<T>
  : T;

interface DeepReadonlyArray8473<T> extends ReadonlyArray<DeepReadonly8473<T>> {}

type DeepReadonlyObject8473<T> = {
  readonly [P in keyof T]: DeepReadonly8473<T[P]>;
};

type UnionToIntersection8473<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8473<T> = UnionToIntersection8473<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8473<T extends unknown[], V> = [...T, V];

type TuplifyUnion8473<T, L = LastOf8473<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8473<TuplifyUnion8473<Exclude<T, L>>, L>;

type DeepPartial8473<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8473<T[P]> }
  : T;

type Paths8473<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8473<K, Paths8473<T[K], Prev8473[D]>> : never }[keyof T]
  : never;

type Prev8473 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8473<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8473 {
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

type ConfigPaths8473 = Paths8473<NestedConfig8473>;

interface HeavyProps8473 {
  config: DeepPartial8473<NestedConfig8473>;
  path?: ConfigPaths8473;
}

const HeavyComponent8473 = memo(function HeavyComponent8473({ config }: HeavyProps8473) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8473) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8473 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8473: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8473.displayName = 'HeavyComponent8473';
export default HeavyComponent8473;

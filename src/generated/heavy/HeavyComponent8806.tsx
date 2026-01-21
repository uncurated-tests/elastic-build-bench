'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8806<T> = T extends (infer U)[]
  ? DeepReadonlyArray8806<U>
  : T extends object
  ? DeepReadonlyObject8806<T>
  : T;

interface DeepReadonlyArray8806<T> extends ReadonlyArray<DeepReadonly8806<T>> {}

type DeepReadonlyObject8806<T> = {
  readonly [P in keyof T]: DeepReadonly8806<T[P]>;
};

type UnionToIntersection8806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8806<T> = UnionToIntersection8806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8806<T extends unknown[], V> = [...T, V];

type TuplifyUnion8806<T, L = LastOf8806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8806<TuplifyUnion8806<Exclude<T, L>>, L>;

type DeepPartial8806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8806<T[P]> }
  : T;

type Paths8806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8806<K, Paths8806<T[K], Prev8806[D]>> : never }[keyof T]
  : never;

type Prev8806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8806 {
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

type ConfigPaths8806 = Paths8806<NestedConfig8806>;

interface HeavyProps8806 {
  config: DeepPartial8806<NestedConfig8806>;
  path?: ConfigPaths8806;
}

const HeavyComponent8806 = memo(function HeavyComponent8806({ config }: HeavyProps8806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8806.displayName = 'HeavyComponent8806';
export default HeavyComponent8806;

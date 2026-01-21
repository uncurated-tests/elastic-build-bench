'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8372<T> = T extends (infer U)[]
  ? DeepReadonlyArray8372<U>
  : T extends object
  ? DeepReadonlyObject8372<T>
  : T;

interface DeepReadonlyArray8372<T> extends ReadonlyArray<DeepReadonly8372<T>> {}

type DeepReadonlyObject8372<T> = {
  readonly [P in keyof T]: DeepReadonly8372<T[P]>;
};

type UnionToIntersection8372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8372<T> = UnionToIntersection8372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8372<T extends unknown[], V> = [...T, V];

type TuplifyUnion8372<T, L = LastOf8372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8372<TuplifyUnion8372<Exclude<T, L>>, L>;

type DeepPartial8372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8372<T[P]> }
  : T;

type Paths8372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8372<K, Paths8372<T[K], Prev8372[D]>> : never }[keyof T]
  : never;

type Prev8372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8372 {
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

type ConfigPaths8372 = Paths8372<NestedConfig8372>;

interface HeavyProps8372 {
  config: DeepPartial8372<NestedConfig8372>;
  path?: ConfigPaths8372;
}

const HeavyComponent8372 = memo(function HeavyComponent8372({ config }: HeavyProps8372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8372.displayName = 'HeavyComponent8372';
export default HeavyComponent8372;

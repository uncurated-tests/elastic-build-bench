'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8481<T> = T extends (infer U)[]
  ? DeepReadonlyArray8481<U>
  : T extends object
  ? DeepReadonlyObject8481<T>
  : T;

interface DeepReadonlyArray8481<T> extends ReadonlyArray<DeepReadonly8481<T>> {}

type DeepReadonlyObject8481<T> = {
  readonly [P in keyof T]: DeepReadonly8481<T[P]>;
};

type UnionToIntersection8481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8481<T> = UnionToIntersection8481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8481<T extends unknown[], V> = [...T, V];

type TuplifyUnion8481<T, L = LastOf8481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8481<TuplifyUnion8481<Exclude<T, L>>, L>;

type DeepPartial8481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8481<T[P]> }
  : T;

type Paths8481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8481<K, Paths8481<T[K], Prev8481[D]>> : never }[keyof T]
  : never;

type Prev8481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8481 {
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

type ConfigPaths8481 = Paths8481<NestedConfig8481>;

interface HeavyProps8481 {
  config: DeepPartial8481<NestedConfig8481>;
  path?: ConfigPaths8481;
}

const HeavyComponent8481 = memo(function HeavyComponent8481({ config }: HeavyProps8481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8481.displayName = 'HeavyComponent8481';
export default HeavyComponent8481;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8116<T> = T extends (infer U)[]
  ? DeepReadonlyArray8116<U>
  : T extends object
  ? DeepReadonlyObject8116<T>
  : T;

interface DeepReadonlyArray8116<T> extends ReadonlyArray<DeepReadonly8116<T>> {}

type DeepReadonlyObject8116<T> = {
  readonly [P in keyof T]: DeepReadonly8116<T[P]>;
};

type UnionToIntersection8116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8116<T> = UnionToIntersection8116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8116<T extends unknown[], V> = [...T, V];

type TuplifyUnion8116<T, L = LastOf8116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8116<TuplifyUnion8116<Exclude<T, L>>, L>;

type DeepPartial8116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8116<T[P]> }
  : T;

type Paths8116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8116<K, Paths8116<T[K], Prev8116[D]>> : never }[keyof T]
  : never;

type Prev8116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8116 {
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

type ConfigPaths8116 = Paths8116<NestedConfig8116>;

interface HeavyProps8116 {
  config: DeepPartial8116<NestedConfig8116>;
  path?: ConfigPaths8116;
}

const HeavyComponent8116 = memo(function HeavyComponent8116({ config }: HeavyProps8116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8116.displayName = 'HeavyComponent8116';
export default HeavyComponent8116;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8477<T> = T extends (infer U)[]
  ? DeepReadonlyArray8477<U>
  : T extends object
  ? DeepReadonlyObject8477<T>
  : T;

interface DeepReadonlyArray8477<T> extends ReadonlyArray<DeepReadonly8477<T>> {}

type DeepReadonlyObject8477<T> = {
  readonly [P in keyof T]: DeepReadonly8477<T[P]>;
};

type UnionToIntersection8477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8477<T> = UnionToIntersection8477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8477<T extends unknown[], V> = [...T, V];

type TuplifyUnion8477<T, L = LastOf8477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8477<TuplifyUnion8477<Exclude<T, L>>, L>;

type DeepPartial8477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8477<T[P]> }
  : T;

type Paths8477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8477<K, Paths8477<T[K], Prev8477[D]>> : never }[keyof T]
  : never;

type Prev8477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8477 {
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

type ConfigPaths8477 = Paths8477<NestedConfig8477>;

interface HeavyProps8477 {
  config: DeepPartial8477<NestedConfig8477>;
  path?: ConfigPaths8477;
}

const HeavyComponent8477 = memo(function HeavyComponent8477({ config }: HeavyProps8477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8477.displayName = 'HeavyComponent8477';
export default HeavyComponent8477;

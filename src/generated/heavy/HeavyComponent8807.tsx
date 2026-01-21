'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8807<T> = T extends (infer U)[]
  ? DeepReadonlyArray8807<U>
  : T extends object
  ? DeepReadonlyObject8807<T>
  : T;

interface DeepReadonlyArray8807<T> extends ReadonlyArray<DeepReadonly8807<T>> {}

type DeepReadonlyObject8807<T> = {
  readonly [P in keyof T]: DeepReadonly8807<T[P]>;
};

type UnionToIntersection8807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8807<T> = UnionToIntersection8807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8807<T extends unknown[], V> = [...T, V];

type TuplifyUnion8807<T, L = LastOf8807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8807<TuplifyUnion8807<Exclude<T, L>>, L>;

type DeepPartial8807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8807<T[P]> }
  : T;

type Paths8807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8807<K, Paths8807<T[K], Prev8807[D]>> : never }[keyof T]
  : never;

type Prev8807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8807 {
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

type ConfigPaths8807 = Paths8807<NestedConfig8807>;

interface HeavyProps8807 {
  config: DeepPartial8807<NestedConfig8807>;
  path?: ConfigPaths8807;
}

const HeavyComponent8807 = memo(function HeavyComponent8807({ config }: HeavyProps8807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8807.displayName = 'HeavyComponent8807';
export default HeavyComponent8807;

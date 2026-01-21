'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8701<T> = T extends (infer U)[]
  ? DeepReadonlyArray8701<U>
  : T extends object
  ? DeepReadonlyObject8701<T>
  : T;

interface DeepReadonlyArray8701<T> extends ReadonlyArray<DeepReadonly8701<T>> {}

type DeepReadonlyObject8701<T> = {
  readonly [P in keyof T]: DeepReadonly8701<T[P]>;
};

type UnionToIntersection8701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8701<T> = UnionToIntersection8701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8701<T extends unknown[], V> = [...T, V];

type TuplifyUnion8701<T, L = LastOf8701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8701<TuplifyUnion8701<Exclude<T, L>>, L>;

type DeepPartial8701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8701<T[P]> }
  : T;

type Paths8701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8701<K, Paths8701<T[K], Prev8701[D]>> : never }[keyof T]
  : never;

type Prev8701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8701 {
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

type ConfigPaths8701 = Paths8701<NestedConfig8701>;

interface HeavyProps8701 {
  config: DeepPartial8701<NestedConfig8701>;
  path?: ConfigPaths8701;
}

const HeavyComponent8701 = memo(function HeavyComponent8701({ config }: HeavyProps8701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8701.displayName = 'HeavyComponent8701';
export default HeavyComponent8701;

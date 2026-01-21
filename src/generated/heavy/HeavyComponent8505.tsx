'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8505<T> = T extends (infer U)[]
  ? DeepReadonlyArray8505<U>
  : T extends object
  ? DeepReadonlyObject8505<T>
  : T;

interface DeepReadonlyArray8505<T> extends ReadonlyArray<DeepReadonly8505<T>> {}

type DeepReadonlyObject8505<T> = {
  readonly [P in keyof T]: DeepReadonly8505<T[P]>;
};

type UnionToIntersection8505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8505<T> = UnionToIntersection8505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8505<T extends unknown[], V> = [...T, V];

type TuplifyUnion8505<T, L = LastOf8505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8505<TuplifyUnion8505<Exclude<T, L>>, L>;

type DeepPartial8505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8505<T[P]> }
  : T;

type Paths8505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8505<K, Paths8505<T[K], Prev8505[D]>> : never }[keyof T]
  : never;

type Prev8505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8505 {
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

type ConfigPaths8505 = Paths8505<NestedConfig8505>;

interface HeavyProps8505 {
  config: DeepPartial8505<NestedConfig8505>;
  path?: ConfigPaths8505;
}

const HeavyComponent8505 = memo(function HeavyComponent8505({ config }: HeavyProps8505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8505.displayName = 'HeavyComponent8505';
export default HeavyComponent8505;

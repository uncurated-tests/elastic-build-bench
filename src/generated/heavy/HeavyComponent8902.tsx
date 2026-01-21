'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8902<T> = T extends (infer U)[]
  ? DeepReadonlyArray8902<U>
  : T extends object
  ? DeepReadonlyObject8902<T>
  : T;

interface DeepReadonlyArray8902<T> extends ReadonlyArray<DeepReadonly8902<T>> {}

type DeepReadonlyObject8902<T> = {
  readonly [P in keyof T]: DeepReadonly8902<T[P]>;
};

type UnionToIntersection8902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8902<T> = UnionToIntersection8902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8902<T extends unknown[], V> = [...T, V];

type TuplifyUnion8902<T, L = LastOf8902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8902<TuplifyUnion8902<Exclude<T, L>>, L>;

type DeepPartial8902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8902<T[P]> }
  : T;

type Paths8902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8902<K, Paths8902<T[K], Prev8902[D]>> : never }[keyof T]
  : never;

type Prev8902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8902 {
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

type ConfigPaths8902 = Paths8902<NestedConfig8902>;

interface HeavyProps8902 {
  config: DeepPartial8902<NestedConfig8902>;
  path?: ConfigPaths8902;
}

const HeavyComponent8902 = memo(function HeavyComponent8902({ config }: HeavyProps8902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8902.displayName = 'HeavyComponent8902';
export default HeavyComponent8902;

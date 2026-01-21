'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8563<T> = T extends (infer U)[]
  ? DeepReadonlyArray8563<U>
  : T extends object
  ? DeepReadonlyObject8563<T>
  : T;

interface DeepReadonlyArray8563<T> extends ReadonlyArray<DeepReadonly8563<T>> {}

type DeepReadonlyObject8563<T> = {
  readonly [P in keyof T]: DeepReadonly8563<T[P]>;
};

type UnionToIntersection8563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8563<T> = UnionToIntersection8563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8563<T extends unknown[], V> = [...T, V];

type TuplifyUnion8563<T, L = LastOf8563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8563<TuplifyUnion8563<Exclude<T, L>>, L>;

type DeepPartial8563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8563<T[P]> }
  : T;

type Paths8563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8563<K, Paths8563<T[K], Prev8563[D]>> : never }[keyof T]
  : never;

type Prev8563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8563 {
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

type ConfigPaths8563 = Paths8563<NestedConfig8563>;

interface HeavyProps8563 {
  config: DeepPartial8563<NestedConfig8563>;
  path?: ConfigPaths8563;
}

const HeavyComponent8563 = memo(function HeavyComponent8563({ config }: HeavyProps8563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8563.displayName = 'HeavyComponent8563';
export default HeavyComponent8563;

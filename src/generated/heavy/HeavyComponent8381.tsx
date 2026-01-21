'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8381<T> = T extends (infer U)[]
  ? DeepReadonlyArray8381<U>
  : T extends object
  ? DeepReadonlyObject8381<T>
  : T;

interface DeepReadonlyArray8381<T> extends ReadonlyArray<DeepReadonly8381<T>> {}

type DeepReadonlyObject8381<T> = {
  readonly [P in keyof T]: DeepReadonly8381<T[P]>;
};

type UnionToIntersection8381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8381<T> = UnionToIntersection8381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8381<T extends unknown[], V> = [...T, V];

type TuplifyUnion8381<T, L = LastOf8381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8381<TuplifyUnion8381<Exclude<T, L>>, L>;

type DeepPartial8381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8381<T[P]> }
  : T;

type Paths8381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8381<K, Paths8381<T[K], Prev8381[D]>> : never }[keyof T]
  : never;

type Prev8381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8381 {
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

type ConfigPaths8381 = Paths8381<NestedConfig8381>;

interface HeavyProps8381 {
  config: DeepPartial8381<NestedConfig8381>;
  path?: ConfigPaths8381;
}

const HeavyComponent8381 = memo(function HeavyComponent8381({ config }: HeavyProps8381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8381.displayName = 'HeavyComponent8381';
export default HeavyComponent8381;

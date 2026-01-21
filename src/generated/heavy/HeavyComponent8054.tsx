'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8054<T> = T extends (infer U)[]
  ? DeepReadonlyArray8054<U>
  : T extends object
  ? DeepReadonlyObject8054<T>
  : T;

interface DeepReadonlyArray8054<T> extends ReadonlyArray<DeepReadonly8054<T>> {}

type DeepReadonlyObject8054<T> = {
  readonly [P in keyof T]: DeepReadonly8054<T[P]>;
};

type UnionToIntersection8054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8054<T> = UnionToIntersection8054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8054<T extends unknown[], V> = [...T, V];

type TuplifyUnion8054<T, L = LastOf8054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8054<TuplifyUnion8054<Exclude<T, L>>, L>;

type DeepPartial8054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8054<T[P]> }
  : T;

type Paths8054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8054<K, Paths8054<T[K], Prev8054[D]>> : never }[keyof T]
  : never;

type Prev8054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8054 {
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

type ConfigPaths8054 = Paths8054<NestedConfig8054>;

interface HeavyProps8054 {
  config: DeepPartial8054<NestedConfig8054>;
  path?: ConfigPaths8054;
}

const HeavyComponent8054 = memo(function HeavyComponent8054({ config }: HeavyProps8054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8054.displayName = 'HeavyComponent8054';
export default HeavyComponent8054;

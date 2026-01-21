'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8415<T> = T extends (infer U)[]
  ? DeepReadonlyArray8415<U>
  : T extends object
  ? DeepReadonlyObject8415<T>
  : T;

interface DeepReadonlyArray8415<T> extends ReadonlyArray<DeepReadonly8415<T>> {}

type DeepReadonlyObject8415<T> = {
  readonly [P in keyof T]: DeepReadonly8415<T[P]>;
};

type UnionToIntersection8415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8415<T> = UnionToIntersection8415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8415<T extends unknown[], V> = [...T, V];

type TuplifyUnion8415<T, L = LastOf8415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8415<TuplifyUnion8415<Exclude<T, L>>, L>;

type DeepPartial8415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8415<T[P]> }
  : T;

type Paths8415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8415<K, Paths8415<T[K], Prev8415[D]>> : never }[keyof T]
  : never;

type Prev8415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8415 {
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

type ConfigPaths8415 = Paths8415<NestedConfig8415>;

interface HeavyProps8415 {
  config: DeepPartial8415<NestedConfig8415>;
  path?: ConfigPaths8415;
}

const HeavyComponent8415 = memo(function HeavyComponent8415({ config }: HeavyProps8415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8415.displayName = 'HeavyComponent8415';
export default HeavyComponent8415;

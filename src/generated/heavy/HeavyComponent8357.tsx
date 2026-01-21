'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8357<T> = T extends (infer U)[]
  ? DeepReadonlyArray8357<U>
  : T extends object
  ? DeepReadonlyObject8357<T>
  : T;

interface DeepReadonlyArray8357<T> extends ReadonlyArray<DeepReadonly8357<T>> {}

type DeepReadonlyObject8357<T> = {
  readonly [P in keyof T]: DeepReadonly8357<T[P]>;
};

type UnionToIntersection8357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8357<T> = UnionToIntersection8357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8357<T extends unknown[], V> = [...T, V];

type TuplifyUnion8357<T, L = LastOf8357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8357<TuplifyUnion8357<Exclude<T, L>>, L>;

type DeepPartial8357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8357<T[P]> }
  : T;

type Paths8357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8357<K, Paths8357<T[K], Prev8357[D]>> : never }[keyof T]
  : never;

type Prev8357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8357 {
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

type ConfigPaths8357 = Paths8357<NestedConfig8357>;

interface HeavyProps8357 {
  config: DeepPartial8357<NestedConfig8357>;
  path?: ConfigPaths8357;
}

const HeavyComponent8357 = memo(function HeavyComponent8357({ config }: HeavyProps8357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8357.displayName = 'HeavyComponent8357';
export default HeavyComponent8357;

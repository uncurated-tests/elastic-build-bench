'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8128<T> = T extends (infer U)[]
  ? DeepReadonlyArray8128<U>
  : T extends object
  ? DeepReadonlyObject8128<T>
  : T;

interface DeepReadonlyArray8128<T> extends ReadonlyArray<DeepReadonly8128<T>> {}

type DeepReadonlyObject8128<T> = {
  readonly [P in keyof T]: DeepReadonly8128<T[P]>;
};

type UnionToIntersection8128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8128<T> = UnionToIntersection8128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8128<T extends unknown[], V> = [...T, V];

type TuplifyUnion8128<T, L = LastOf8128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8128<TuplifyUnion8128<Exclude<T, L>>, L>;

type DeepPartial8128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8128<T[P]> }
  : T;

type Paths8128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8128<K, Paths8128<T[K], Prev8128[D]>> : never }[keyof T]
  : never;

type Prev8128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8128 {
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

type ConfigPaths8128 = Paths8128<NestedConfig8128>;

interface HeavyProps8128 {
  config: DeepPartial8128<NestedConfig8128>;
  path?: ConfigPaths8128;
}

const HeavyComponent8128 = memo(function HeavyComponent8128({ config }: HeavyProps8128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8128.displayName = 'HeavyComponent8128';
export default HeavyComponent8128;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8102<T> = T extends (infer U)[]
  ? DeepReadonlyArray8102<U>
  : T extends object
  ? DeepReadonlyObject8102<T>
  : T;

interface DeepReadonlyArray8102<T> extends ReadonlyArray<DeepReadonly8102<T>> {}

type DeepReadonlyObject8102<T> = {
  readonly [P in keyof T]: DeepReadonly8102<T[P]>;
};

type UnionToIntersection8102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8102<T> = UnionToIntersection8102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8102<T extends unknown[], V> = [...T, V];

type TuplifyUnion8102<T, L = LastOf8102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8102<TuplifyUnion8102<Exclude<T, L>>, L>;

type DeepPartial8102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8102<T[P]> }
  : T;

type Paths8102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8102<K, Paths8102<T[K], Prev8102[D]>> : never }[keyof T]
  : never;

type Prev8102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8102 {
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

type ConfigPaths8102 = Paths8102<NestedConfig8102>;

interface HeavyProps8102 {
  config: DeepPartial8102<NestedConfig8102>;
  path?: ConfigPaths8102;
}

const HeavyComponent8102 = memo(function HeavyComponent8102({ config }: HeavyProps8102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8102.displayName = 'HeavyComponent8102';
export default HeavyComponent8102;

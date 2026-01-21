'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8514<T> = T extends (infer U)[]
  ? DeepReadonlyArray8514<U>
  : T extends object
  ? DeepReadonlyObject8514<T>
  : T;

interface DeepReadonlyArray8514<T> extends ReadonlyArray<DeepReadonly8514<T>> {}

type DeepReadonlyObject8514<T> = {
  readonly [P in keyof T]: DeepReadonly8514<T[P]>;
};

type UnionToIntersection8514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8514<T> = UnionToIntersection8514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8514<T extends unknown[], V> = [...T, V];

type TuplifyUnion8514<T, L = LastOf8514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8514<TuplifyUnion8514<Exclude<T, L>>, L>;

type DeepPartial8514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8514<T[P]> }
  : T;

type Paths8514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8514<K, Paths8514<T[K], Prev8514[D]>> : never }[keyof T]
  : never;

type Prev8514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8514 {
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

type ConfigPaths8514 = Paths8514<NestedConfig8514>;

interface HeavyProps8514 {
  config: DeepPartial8514<NestedConfig8514>;
  path?: ConfigPaths8514;
}

const HeavyComponent8514 = memo(function HeavyComponent8514({ config }: HeavyProps8514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8514.displayName = 'HeavyComponent8514';
export default HeavyComponent8514;

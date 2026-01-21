'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8880<T> = T extends (infer U)[]
  ? DeepReadonlyArray8880<U>
  : T extends object
  ? DeepReadonlyObject8880<T>
  : T;

interface DeepReadonlyArray8880<T> extends ReadonlyArray<DeepReadonly8880<T>> {}

type DeepReadonlyObject8880<T> = {
  readonly [P in keyof T]: DeepReadonly8880<T[P]>;
};

type UnionToIntersection8880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8880<T> = UnionToIntersection8880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8880<T extends unknown[], V> = [...T, V];

type TuplifyUnion8880<T, L = LastOf8880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8880<TuplifyUnion8880<Exclude<T, L>>, L>;

type DeepPartial8880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8880<T[P]> }
  : T;

type Paths8880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8880<K, Paths8880<T[K], Prev8880[D]>> : never }[keyof T]
  : never;

type Prev8880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8880 {
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

type ConfigPaths8880 = Paths8880<NestedConfig8880>;

interface HeavyProps8880 {
  config: DeepPartial8880<NestedConfig8880>;
  path?: ConfigPaths8880;
}

const HeavyComponent8880 = memo(function HeavyComponent8880({ config }: HeavyProps8880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8880.displayName = 'HeavyComponent8880';
export default HeavyComponent8880;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8056<T> = T extends (infer U)[]
  ? DeepReadonlyArray8056<U>
  : T extends object
  ? DeepReadonlyObject8056<T>
  : T;

interface DeepReadonlyArray8056<T> extends ReadonlyArray<DeepReadonly8056<T>> {}

type DeepReadonlyObject8056<T> = {
  readonly [P in keyof T]: DeepReadonly8056<T[P]>;
};

type UnionToIntersection8056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8056<T> = UnionToIntersection8056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8056<T extends unknown[], V> = [...T, V];

type TuplifyUnion8056<T, L = LastOf8056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8056<TuplifyUnion8056<Exclude<T, L>>, L>;

type DeepPartial8056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8056<T[P]> }
  : T;

type Paths8056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8056<K, Paths8056<T[K], Prev8056[D]>> : never }[keyof T]
  : never;

type Prev8056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8056 {
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

type ConfigPaths8056 = Paths8056<NestedConfig8056>;

interface HeavyProps8056 {
  config: DeepPartial8056<NestedConfig8056>;
  path?: ConfigPaths8056;
}

const HeavyComponent8056 = memo(function HeavyComponent8056({ config }: HeavyProps8056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8056.displayName = 'HeavyComponent8056';
export default HeavyComponent8056;

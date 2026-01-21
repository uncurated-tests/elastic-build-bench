'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8876<T> = T extends (infer U)[]
  ? DeepReadonlyArray8876<U>
  : T extends object
  ? DeepReadonlyObject8876<T>
  : T;

interface DeepReadonlyArray8876<T> extends ReadonlyArray<DeepReadonly8876<T>> {}

type DeepReadonlyObject8876<T> = {
  readonly [P in keyof T]: DeepReadonly8876<T[P]>;
};

type UnionToIntersection8876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8876<T> = UnionToIntersection8876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8876<T extends unknown[], V> = [...T, V];

type TuplifyUnion8876<T, L = LastOf8876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8876<TuplifyUnion8876<Exclude<T, L>>, L>;

type DeepPartial8876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8876<T[P]> }
  : T;

type Paths8876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8876<K, Paths8876<T[K], Prev8876[D]>> : never }[keyof T]
  : never;

type Prev8876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8876 {
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

type ConfigPaths8876 = Paths8876<NestedConfig8876>;

interface HeavyProps8876 {
  config: DeepPartial8876<NestedConfig8876>;
  path?: ConfigPaths8876;
}

const HeavyComponent8876 = memo(function HeavyComponent8876({ config }: HeavyProps8876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8876.displayName = 'HeavyComponent8876';
export default HeavyComponent8876;

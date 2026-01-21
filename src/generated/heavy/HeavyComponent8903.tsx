'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8903<T> = T extends (infer U)[]
  ? DeepReadonlyArray8903<U>
  : T extends object
  ? DeepReadonlyObject8903<T>
  : T;

interface DeepReadonlyArray8903<T> extends ReadonlyArray<DeepReadonly8903<T>> {}

type DeepReadonlyObject8903<T> = {
  readonly [P in keyof T]: DeepReadonly8903<T[P]>;
};

type UnionToIntersection8903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8903<T> = UnionToIntersection8903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8903<T extends unknown[], V> = [...T, V];

type TuplifyUnion8903<T, L = LastOf8903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8903<TuplifyUnion8903<Exclude<T, L>>, L>;

type DeepPartial8903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8903<T[P]> }
  : T;

type Paths8903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8903<K, Paths8903<T[K], Prev8903[D]>> : never }[keyof T]
  : never;

type Prev8903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8903 {
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

type ConfigPaths8903 = Paths8903<NestedConfig8903>;

interface HeavyProps8903 {
  config: DeepPartial8903<NestedConfig8903>;
  path?: ConfigPaths8903;
}

const HeavyComponent8903 = memo(function HeavyComponent8903({ config }: HeavyProps8903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8903.displayName = 'HeavyComponent8903';
export default HeavyComponent8903;

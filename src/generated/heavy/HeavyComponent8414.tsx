'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8414<T> = T extends (infer U)[]
  ? DeepReadonlyArray8414<U>
  : T extends object
  ? DeepReadonlyObject8414<T>
  : T;

interface DeepReadonlyArray8414<T> extends ReadonlyArray<DeepReadonly8414<T>> {}

type DeepReadonlyObject8414<T> = {
  readonly [P in keyof T]: DeepReadonly8414<T[P]>;
};

type UnionToIntersection8414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8414<T> = UnionToIntersection8414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8414<T extends unknown[], V> = [...T, V];

type TuplifyUnion8414<T, L = LastOf8414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8414<TuplifyUnion8414<Exclude<T, L>>, L>;

type DeepPartial8414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8414<T[P]> }
  : T;

type Paths8414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8414<K, Paths8414<T[K], Prev8414[D]>> : never }[keyof T]
  : never;

type Prev8414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8414 {
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

type ConfigPaths8414 = Paths8414<NestedConfig8414>;

interface HeavyProps8414 {
  config: DeepPartial8414<NestedConfig8414>;
  path?: ConfigPaths8414;
}

const HeavyComponent8414 = memo(function HeavyComponent8414({ config }: HeavyProps8414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8414.displayName = 'HeavyComponent8414';
export default HeavyComponent8414;

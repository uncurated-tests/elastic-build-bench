'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8972<T> = T extends (infer U)[]
  ? DeepReadonlyArray8972<U>
  : T extends object
  ? DeepReadonlyObject8972<T>
  : T;

interface DeepReadonlyArray8972<T> extends ReadonlyArray<DeepReadonly8972<T>> {}

type DeepReadonlyObject8972<T> = {
  readonly [P in keyof T]: DeepReadonly8972<T[P]>;
};

type UnionToIntersection8972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8972<T> = UnionToIntersection8972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8972<T extends unknown[], V> = [...T, V];

type TuplifyUnion8972<T, L = LastOf8972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8972<TuplifyUnion8972<Exclude<T, L>>, L>;

type DeepPartial8972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8972<T[P]> }
  : T;

type Paths8972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8972<K, Paths8972<T[K], Prev8972[D]>> : never }[keyof T]
  : never;

type Prev8972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8972 {
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

type ConfigPaths8972 = Paths8972<NestedConfig8972>;

interface HeavyProps8972 {
  config: DeepPartial8972<NestedConfig8972>;
  path?: ConfigPaths8972;
}

const HeavyComponent8972 = memo(function HeavyComponent8972({ config }: HeavyProps8972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8972.displayName = 'HeavyComponent8972';
export default HeavyComponent8972;

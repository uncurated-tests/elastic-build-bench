'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8066<T> = T extends (infer U)[]
  ? DeepReadonlyArray8066<U>
  : T extends object
  ? DeepReadonlyObject8066<T>
  : T;

interface DeepReadonlyArray8066<T> extends ReadonlyArray<DeepReadonly8066<T>> {}

type DeepReadonlyObject8066<T> = {
  readonly [P in keyof T]: DeepReadonly8066<T[P]>;
};

type UnionToIntersection8066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8066<T> = UnionToIntersection8066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8066<T extends unknown[], V> = [...T, V];

type TuplifyUnion8066<T, L = LastOf8066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8066<TuplifyUnion8066<Exclude<T, L>>, L>;

type DeepPartial8066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8066<T[P]> }
  : T;

type Paths8066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8066<K, Paths8066<T[K], Prev8066[D]>> : never }[keyof T]
  : never;

type Prev8066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8066 {
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

type ConfigPaths8066 = Paths8066<NestedConfig8066>;

interface HeavyProps8066 {
  config: DeepPartial8066<NestedConfig8066>;
  path?: ConfigPaths8066;
}

const HeavyComponent8066 = memo(function HeavyComponent8066({ config }: HeavyProps8066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8066.displayName = 'HeavyComponent8066';
export default HeavyComponent8066;

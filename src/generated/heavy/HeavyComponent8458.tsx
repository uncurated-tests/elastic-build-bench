'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8458<T> = T extends (infer U)[]
  ? DeepReadonlyArray8458<U>
  : T extends object
  ? DeepReadonlyObject8458<T>
  : T;

interface DeepReadonlyArray8458<T> extends ReadonlyArray<DeepReadonly8458<T>> {}

type DeepReadonlyObject8458<T> = {
  readonly [P in keyof T]: DeepReadonly8458<T[P]>;
};

type UnionToIntersection8458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8458<T> = UnionToIntersection8458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8458<T extends unknown[], V> = [...T, V];

type TuplifyUnion8458<T, L = LastOf8458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8458<TuplifyUnion8458<Exclude<T, L>>, L>;

type DeepPartial8458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8458<T[P]> }
  : T;

type Paths8458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8458<K, Paths8458<T[K], Prev8458[D]>> : never }[keyof T]
  : never;

type Prev8458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8458 {
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

type ConfigPaths8458 = Paths8458<NestedConfig8458>;

interface HeavyProps8458 {
  config: DeepPartial8458<NestedConfig8458>;
  path?: ConfigPaths8458;
}

const HeavyComponent8458 = memo(function HeavyComponent8458({ config }: HeavyProps8458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8458.displayName = 'HeavyComponent8458';
export default HeavyComponent8458;

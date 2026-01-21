'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8797<T> = T extends (infer U)[]
  ? DeepReadonlyArray8797<U>
  : T extends object
  ? DeepReadonlyObject8797<T>
  : T;

interface DeepReadonlyArray8797<T> extends ReadonlyArray<DeepReadonly8797<T>> {}

type DeepReadonlyObject8797<T> = {
  readonly [P in keyof T]: DeepReadonly8797<T[P]>;
};

type UnionToIntersection8797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8797<T> = UnionToIntersection8797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8797<T extends unknown[], V> = [...T, V];

type TuplifyUnion8797<T, L = LastOf8797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8797<TuplifyUnion8797<Exclude<T, L>>, L>;

type DeepPartial8797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8797<T[P]> }
  : T;

type Paths8797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8797<K, Paths8797<T[K], Prev8797[D]>> : never }[keyof T]
  : never;

type Prev8797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8797 {
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

type ConfigPaths8797 = Paths8797<NestedConfig8797>;

interface HeavyProps8797 {
  config: DeepPartial8797<NestedConfig8797>;
  path?: ConfigPaths8797;
}

const HeavyComponent8797 = memo(function HeavyComponent8797({ config }: HeavyProps8797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8797.displayName = 'HeavyComponent8797';
export default HeavyComponent8797;

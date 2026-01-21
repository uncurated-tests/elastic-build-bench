'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8093<T> = T extends (infer U)[]
  ? DeepReadonlyArray8093<U>
  : T extends object
  ? DeepReadonlyObject8093<T>
  : T;

interface DeepReadonlyArray8093<T> extends ReadonlyArray<DeepReadonly8093<T>> {}

type DeepReadonlyObject8093<T> = {
  readonly [P in keyof T]: DeepReadonly8093<T[P]>;
};

type UnionToIntersection8093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8093<T> = UnionToIntersection8093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8093<T extends unknown[], V> = [...T, V];

type TuplifyUnion8093<T, L = LastOf8093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8093<TuplifyUnion8093<Exclude<T, L>>, L>;

type DeepPartial8093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8093<T[P]> }
  : T;

type Paths8093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8093<K, Paths8093<T[K], Prev8093[D]>> : never }[keyof T]
  : never;

type Prev8093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8093 {
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

type ConfigPaths8093 = Paths8093<NestedConfig8093>;

interface HeavyProps8093 {
  config: DeepPartial8093<NestedConfig8093>;
  path?: ConfigPaths8093;
}

const HeavyComponent8093 = memo(function HeavyComponent8093({ config }: HeavyProps8093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8093.displayName = 'HeavyComponent8093';
export default HeavyComponent8093;

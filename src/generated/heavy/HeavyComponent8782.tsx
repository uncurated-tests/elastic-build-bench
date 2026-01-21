'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8782<T> = T extends (infer U)[]
  ? DeepReadonlyArray8782<U>
  : T extends object
  ? DeepReadonlyObject8782<T>
  : T;

interface DeepReadonlyArray8782<T> extends ReadonlyArray<DeepReadonly8782<T>> {}

type DeepReadonlyObject8782<T> = {
  readonly [P in keyof T]: DeepReadonly8782<T[P]>;
};

type UnionToIntersection8782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8782<T> = UnionToIntersection8782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8782<T extends unknown[], V> = [...T, V];

type TuplifyUnion8782<T, L = LastOf8782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8782<TuplifyUnion8782<Exclude<T, L>>, L>;

type DeepPartial8782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8782<T[P]> }
  : T;

type Paths8782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8782<K, Paths8782<T[K], Prev8782[D]>> : never }[keyof T]
  : never;

type Prev8782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8782 {
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

type ConfigPaths8782 = Paths8782<NestedConfig8782>;

interface HeavyProps8782 {
  config: DeepPartial8782<NestedConfig8782>;
  path?: ConfigPaths8782;
}

const HeavyComponent8782 = memo(function HeavyComponent8782({ config }: HeavyProps8782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8782.displayName = 'HeavyComponent8782';
export default HeavyComponent8782;

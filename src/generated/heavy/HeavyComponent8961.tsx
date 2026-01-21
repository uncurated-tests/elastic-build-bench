'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8961<T> = T extends (infer U)[]
  ? DeepReadonlyArray8961<U>
  : T extends object
  ? DeepReadonlyObject8961<T>
  : T;

interface DeepReadonlyArray8961<T> extends ReadonlyArray<DeepReadonly8961<T>> {}

type DeepReadonlyObject8961<T> = {
  readonly [P in keyof T]: DeepReadonly8961<T[P]>;
};

type UnionToIntersection8961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8961<T> = UnionToIntersection8961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8961<T extends unknown[], V> = [...T, V];

type TuplifyUnion8961<T, L = LastOf8961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8961<TuplifyUnion8961<Exclude<T, L>>, L>;

type DeepPartial8961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8961<T[P]> }
  : T;

type Paths8961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8961<K, Paths8961<T[K], Prev8961[D]>> : never }[keyof T]
  : never;

type Prev8961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8961 {
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

type ConfigPaths8961 = Paths8961<NestedConfig8961>;

interface HeavyProps8961 {
  config: DeepPartial8961<NestedConfig8961>;
  path?: ConfigPaths8961;
}

const HeavyComponent8961 = memo(function HeavyComponent8961({ config }: HeavyProps8961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8961.displayName = 'HeavyComponent8961';
export default HeavyComponent8961;

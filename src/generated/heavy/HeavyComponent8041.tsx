'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8041<T> = T extends (infer U)[]
  ? DeepReadonlyArray8041<U>
  : T extends object
  ? DeepReadonlyObject8041<T>
  : T;

interface DeepReadonlyArray8041<T> extends ReadonlyArray<DeepReadonly8041<T>> {}

type DeepReadonlyObject8041<T> = {
  readonly [P in keyof T]: DeepReadonly8041<T[P]>;
};

type UnionToIntersection8041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8041<T> = UnionToIntersection8041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8041<T extends unknown[], V> = [...T, V];

type TuplifyUnion8041<T, L = LastOf8041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8041<TuplifyUnion8041<Exclude<T, L>>, L>;

type DeepPartial8041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8041<T[P]> }
  : T;

type Paths8041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8041<K, Paths8041<T[K], Prev8041[D]>> : never }[keyof T]
  : never;

type Prev8041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8041 {
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

type ConfigPaths8041 = Paths8041<NestedConfig8041>;

interface HeavyProps8041 {
  config: DeepPartial8041<NestedConfig8041>;
  path?: ConfigPaths8041;
}

const HeavyComponent8041 = memo(function HeavyComponent8041({ config }: HeavyProps8041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8041.displayName = 'HeavyComponent8041';
export default HeavyComponent8041;

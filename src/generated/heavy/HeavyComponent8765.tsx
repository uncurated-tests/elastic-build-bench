'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8765<T> = T extends (infer U)[]
  ? DeepReadonlyArray8765<U>
  : T extends object
  ? DeepReadonlyObject8765<T>
  : T;

interface DeepReadonlyArray8765<T> extends ReadonlyArray<DeepReadonly8765<T>> {}

type DeepReadonlyObject8765<T> = {
  readonly [P in keyof T]: DeepReadonly8765<T[P]>;
};

type UnionToIntersection8765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8765<T> = UnionToIntersection8765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8765<T extends unknown[], V> = [...T, V];

type TuplifyUnion8765<T, L = LastOf8765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8765<TuplifyUnion8765<Exclude<T, L>>, L>;

type DeepPartial8765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8765<T[P]> }
  : T;

type Paths8765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8765<K, Paths8765<T[K], Prev8765[D]>> : never }[keyof T]
  : never;

type Prev8765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8765 {
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

type ConfigPaths8765 = Paths8765<NestedConfig8765>;

interface HeavyProps8765 {
  config: DeepPartial8765<NestedConfig8765>;
  path?: ConfigPaths8765;
}

const HeavyComponent8765 = memo(function HeavyComponent8765({ config }: HeavyProps8765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8765.displayName = 'HeavyComponent8765';
export default HeavyComponent8765;

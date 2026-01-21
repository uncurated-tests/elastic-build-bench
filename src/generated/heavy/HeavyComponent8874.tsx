'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8874<T> = T extends (infer U)[]
  ? DeepReadonlyArray8874<U>
  : T extends object
  ? DeepReadonlyObject8874<T>
  : T;

interface DeepReadonlyArray8874<T> extends ReadonlyArray<DeepReadonly8874<T>> {}

type DeepReadonlyObject8874<T> = {
  readonly [P in keyof T]: DeepReadonly8874<T[P]>;
};

type UnionToIntersection8874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8874<T> = UnionToIntersection8874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8874<T extends unknown[], V> = [...T, V];

type TuplifyUnion8874<T, L = LastOf8874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8874<TuplifyUnion8874<Exclude<T, L>>, L>;

type DeepPartial8874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8874<T[P]> }
  : T;

type Paths8874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8874<K, Paths8874<T[K], Prev8874[D]>> : never }[keyof T]
  : never;

type Prev8874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8874 {
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

type ConfigPaths8874 = Paths8874<NestedConfig8874>;

interface HeavyProps8874 {
  config: DeepPartial8874<NestedConfig8874>;
  path?: ConfigPaths8874;
}

const HeavyComponent8874 = memo(function HeavyComponent8874({ config }: HeavyProps8874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8874.displayName = 'HeavyComponent8874';
export default HeavyComponent8874;

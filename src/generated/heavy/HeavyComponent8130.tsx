'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8130<T> = T extends (infer U)[]
  ? DeepReadonlyArray8130<U>
  : T extends object
  ? DeepReadonlyObject8130<T>
  : T;

interface DeepReadonlyArray8130<T> extends ReadonlyArray<DeepReadonly8130<T>> {}

type DeepReadonlyObject8130<T> = {
  readonly [P in keyof T]: DeepReadonly8130<T[P]>;
};

type UnionToIntersection8130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8130<T> = UnionToIntersection8130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8130<T extends unknown[], V> = [...T, V];

type TuplifyUnion8130<T, L = LastOf8130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8130<TuplifyUnion8130<Exclude<T, L>>, L>;

type DeepPartial8130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8130<T[P]> }
  : T;

type Paths8130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8130<K, Paths8130<T[K], Prev8130[D]>> : never }[keyof T]
  : never;

type Prev8130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8130 {
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

type ConfigPaths8130 = Paths8130<NestedConfig8130>;

interface HeavyProps8130 {
  config: DeepPartial8130<NestedConfig8130>;
  path?: ConfigPaths8130;
}

const HeavyComponent8130 = memo(function HeavyComponent8130({ config }: HeavyProps8130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8130.displayName = 'HeavyComponent8130';
export default HeavyComponent8130;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8600<T> = T extends (infer U)[]
  ? DeepReadonlyArray8600<U>
  : T extends object
  ? DeepReadonlyObject8600<T>
  : T;

interface DeepReadonlyArray8600<T> extends ReadonlyArray<DeepReadonly8600<T>> {}

type DeepReadonlyObject8600<T> = {
  readonly [P in keyof T]: DeepReadonly8600<T[P]>;
};

type UnionToIntersection8600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8600<T> = UnionToIntersection8600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8600<T extends unknown[], V> = [...T, V];

type TuplifyUnion8600<T, L = LastOf8600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8600<TuplifyUnion8600<Exclude<T, L>>, L>;

type DeepPartial8600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8600<T[P]> }
  : T;

type Paths8600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8600<K, Paths8600<T[K], Prev8600[D]>> : never }[keyof T]
  : never;

type Prev8600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8600 {
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

type ConfigPaths8600 = Paths8600<NestedConfig8600>;

interface HeavyProps8600 {
  config: DeepPartial8600<NestedConfig8600>;
  path?: ConfigPaths8600;
}

const HeavyComponent8600 = memo(function HeavyComponent8600({ config }: HeavyProps8600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8600.displayName = 'HeavyComponent8600';
export default HeavyComponent8600;

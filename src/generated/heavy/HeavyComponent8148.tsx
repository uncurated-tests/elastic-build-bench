'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8148<T> = T extends (infer U)[]
  ? DeepReadonlyArray8148<U>
  : T extends object
  ? DeepReadonlyObject8148<T>
  : T;

interface DeepReadonlyArray8148<T> extends ReadonlyArray<DeepReadonly8148<T>> {}

type DeepReadonlyObject8148<T> = {
  readonly [P in keyof T]: DeepReadonly8148<T[P]>;
};

type UnionToIntersection8148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8148<T> = UnionToIntersection8148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8148<T extends unknown[], V> = [...T, V];

type TuplifyUnion8148<T, L = LastOf8148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8148<TuplifyUnion8148<Exclude<T, L>>, L>;

type DeepPartial8148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8148<T[P]> }
  : T;

type Paths8148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8148<K, Paths8148<T[K], Prev8148[D]>> : never }[keyof T]
  : never;

type Prev8148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8148 {
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

type ConfigPaths8148 = Paths8148<NestedConfig8148>;

interface HeavyProps8148 {
  config: DeepPartial8148<NestedConfig8148>;
  path?: ConfigPaths8148;
}

const HeavyComponent8148 = memo(function HeavyComponent8148({ config }: HeavyProps8148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8148.displayName = 'HeavyComponent8148';
export default HeavyComponent8148;

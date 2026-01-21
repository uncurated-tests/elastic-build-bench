'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8565<T> = T extends (infer U)[]
  ? DeepReadonlyArray8565<U>
  : T extends object
  ? DeepReadonlyObject8565<T>
  : T;

interface DeepReadonlyArray8565<T> extends ReadonlyArray<DeepReadonly8565<T>> {}

type DeepReadonlyObject8565<T> = {
  readonly [P in keyof T]: DeepReadonly8565<T[P]>;
};

type UnionToIntersection8565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8565<T> = UnionToIntersection8565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8565<T extends unknown[], V> = [...T, V];

type TuplifyUnion8565<T, L = LastOf8565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8565<TuplifyUnion8565<Exclude<T, L>>, L>;

type DeepPartial8565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8565<T[P]> }
  : T;

type Paths8565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8565<K, Paths8565<T[K], Prev8565[D]>> : never }[keyof T]
  : never;

type Prev8565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8565 {
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

type ConfigPaths8565 = Paths8565<NestedConfig8565>;

interface HeavyProps8565 {
  config: DeepPartial8565<NestedConfig8565>;
  path?: ConfigPaths8565;
}

const HeavyComponent8565 = memo(function HeavyComponent8565({ config }: HeavyProps8565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8565.displayName = 'HeavyComponent8565';
export default HeavyComponent8565;

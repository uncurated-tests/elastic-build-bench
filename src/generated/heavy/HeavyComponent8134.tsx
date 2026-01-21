'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8134<T> = T extends (infer U)[]
  ? DeepReadonlyArray8134<U>
  : T extends object
  ? DeepReadonlyObject8134<T>
  : T;

interface DeepReadonlyArray8134<T> extends ReadonlyArray<DeepReadonly8134<T>> {}

type DeepReadonlyObject8134<T> = {
  readonly [P in keyof T]: DeepReadonly8134<T[P]>;
};

type UnionToIntersection8134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8134<T> = UnionToIntersection8134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8134<T extends unknown[], V> = [...T, V];

type TuplifyUnion8134<T, L = LastOf8134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8134<TuplifyUnion8134<Exclude<T, L>>, L>;

type DeepPartial8134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8134<T[P]> }
  : T;

type Paths8134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8134<K, Paths8134<T[K], Prev8134[D]>> : never }[keyof T]
  : never;

type Prev8134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8134 {
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

type ConfigPaths8134 = Paths8134<NestedConfig8134>;

interface HeavyProps8134 {
  config: DeepPartial8134<NestedConfig8134>;
  path?: ConfigPaths8134;
}

const HeavyComponent8134 = memo(function HeavyComponent8134({ config }: HeavyProps8134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8134.displayName = 'HeavyComponent8134';
export default HeavyComponent8134;

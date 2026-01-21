'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8353<T> = T extends (infer U)[]
  ? DeepReadonlyArray8353<U>
  : T extends object
  ? DeepReadonlyObject8353<T>
  : T;

interface DeepReadonlyArray8353<T> extends ReadonlyArray<DeepReadonly8353<T>> {}

type DeepReadonlyObject8353<T> = {
  readonly [P in keyof T]: DeepReadonly8353<T[P]>;
};

type UnionToIntersection8353<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8353<T> = UnionToIntersection8353<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8353<T extends unknown[], V> = [...T, V];

type TuplifyUnion8353<T, L = LastOf8353<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8353<TuplifyUnion8353<Exclude<T, L>>, L>;

type DeepPartial8353<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8353<T[P]> }
  : T;

type Paths8353<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8353<K, Paths8353<T[K], Prev8353[D]>> : never }[keyof T]
  : never;

type Prev8353 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8353<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8353 {
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

type ConfigPaths8353 = Paths8353<NestedConfig8353>;

interface HeavyProps8353 {
  config: DeepPartial8353<NestedConfig8353>;
  path?: ConfigPaths8353;
}

const HeavyComponent8353 = memo(function HeavyComponent8353({ config }: HeavyProps8353) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8353) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8353 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8353: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8353.displayName = 'HeavyComponent8353';
export default HeavyComponent8353;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8296<T> = T extends (infer U)[]
  ? DeepReadonlyArray8296<U>
  : T extends object
  ? DeepReadonlyObject8296<T>
  : T;

interface DeepReadonlyArray8296<T> extends ReadonlyArray<DeepReadonly8296<T>> {}

type DeepReadonlyObject8296<T> = {
  readonly [P in keyof T]: DeepReadonly8296<T[P]>;
};

type UnionToIntersection8296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8296<T> = UnionToIntersection8296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8296<T extends unknown[], V> = [...T, V];

type TuplifyUnion8296<T, L = LastOf8296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8296<TuplifyUnion8296<Exclude<T, L>>, L>;

type DeepPartial8296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8296<T[P]> }
  : T;

type Paths8296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8296<K, Paths8296<T[K], Prev8296[D]>> : never }[keyof T]
  : never;

type Prev8296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8296 {
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

type ConfigPaths8296 = Paths8296<NestedConfig8296>;

interface HeavyProps8296 {
  config: DeepPartial8296<NestedConfig8296>;
  path?: ConfigPaths8296;
}

const HeavyComponent8296 = memo(function HeavyComponent8296({ config }: HeavyProps8296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8296.displayName = 'HeavyComponent8296';
export default HeavyComponent8296;

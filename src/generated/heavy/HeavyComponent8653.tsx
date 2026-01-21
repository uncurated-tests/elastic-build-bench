'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8653<T> = T extends (infer U)[]
  ? DeepReadonlyArray8653<U>
  : T extends object
  ? DeepReadonlyObject8653<T>
  : T;

interface DeepReadonlyArray8653<T> extends ReadonlyArray<DeepReadonly8653<T>> {}

type DeepReadonlyObject8653<T> = {
  readonly [P in keyof T]: DeepReadonly8653<T[P]>;
};

type UnionToIntersection8653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8653<T> = UnionToIntersection8653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8653<T extends unknown[], V> = [...T, V];

type TuplifyUnion8653<T, L = LastOf8653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8653<TuplifyUnion8653<Exclude<T, L>>, L>;

type DeepPartial8653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8653<T[P]> }
  : T;

type Paths8653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8653<K, Paths8653<T[K], Prev8653[D]>> : never }[keyof T]
  : never;

type Prev8653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8653 {
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

type ConfigPaths8653 = Paths8653<NestedConfig8653>;

interface HeavyProps8653 {
  config: DeepPartial8653<NestedConfig8653>;
  path?: ConfigPaths8653;
}

const HeavyComponent8653 = memo(function HeavyComponent8653({ config }: HeavyProps8653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8653.displayName = 'HeavyComponent8653';
export default HeavyComponent8653;

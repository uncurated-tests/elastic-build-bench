'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8853<T> = T extends (infer U)[]
  ? DeepReadonlyArray8853<U>
  : T extends object
  ? DeepReadonlyObject8853<T>
  : T;

interface DeepReadonlyArray8853<T> extends ReadonlyArray<DeepReadonly8853<T>> {}

type DeepReadonlyObject8853<T> = {
  readonly [P in keyof T]: DeepReadonly8853<T[P]>;
};

type UnionToIntersection8853<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8853<T> = UnionToIntersection8853<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8853<T extends unknown[], V> = [...T, V];

type TuplifyUnion8853<T, L = LastOf8853<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8853<TuplifyUnion8853<Exclude<T, L>>, L>;

type DeepPartial8853<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8853<T[P]> }
  : T;

type Paths8853<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8853<K, Paths8853<T[K], Prev8853[D]>> : never }[keyof T]
  : never;

type Prev8853 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8853<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8853 {
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

type ConfigPaths8853 = Paths8853<NestedConfig8853>;

interface HeavyProps8853 {
  config: DeepPartial8853<NestedConfig8853>;
  path?: ConfigPaths8853;
}

const HeavyComponent8853 = memo(function HeavyComponent8853({ config }: HeavyProps8853) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8853) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8853 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8853: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8853.displayName = 'HeavyComponent8853';
export default HeavyComponent8853;

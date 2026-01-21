'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8851<T> = T extends (infer U)[]
  ? DeepReadonlyArray8851<U>
  : T extends object
  ? DeepReadonlyObject8851<T>
  : T;

interface DeepReadonlyArray8851<T> extends ReadonlyArray<DeepReadonly8851<T>> {}

type DeepReadonlyObject8851<T> = {
  readonly [P in keyof T]: DeepReadonly8851<T[P]>;
};

type UnionToIntersection8851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8851<T> = UnionToIntersection8851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8851<T extends unknown[], V> = [...T, V];

type TuplifyUnion8851<T, L = LastOf8851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8851<TuplifyUnion8851<Exclude<T, L>>, L>;

type DeepPartial8851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8851<T[P]> }
  : T;

type Paths8851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8851<K, Paths8851<T[K], Prev8851[D]>> : never }[keyof T]
  : never;

type Prev8851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8851 {
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

type ConfigPaths8851 = Paths8851<NestedConfig8851>;

interface HeavyProps8851 {
  config: DeepPartial8851<NestedConfig8851>;
  path?: ConfigPaths8851;
}

const HeavyComponent8851 = memo(function HeavyComponent8851({ config }: HeavyProps8851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8851.displayName = 'HeavyComponent8851';
export default HeavyComponent8851;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8369<T> = T extends (infer U)[]
  ? DeepReadonlyArray8369<U>
  : T extends object
  ? DeepReadonlyObject8369<T>
  : T;

interface DeepReadonlyArray8369<T> extends ReadonlyArray<DeepReadonly8369<T>> {}

type DeepReadonlyObject8369<T> = {
  readonly [P in keyof T]: DeepReadonly8369<T[P]>;
};

type UnionToIntersection8369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8369<T> = UnionToIntersection8369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8369<T extends unknown[], V> = [...T, V];

type TuplifyUnion8369<T, L = LastOf8369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8369<TuplifyUnion8369<Exclude<T, L>>, L>;

type DeepPartial8369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8369<T[P]> }
  : T;

type Paths8369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8369<K, Paths8369<T[K], Prev8369[D]>> : never }[keyof T]
  : never;

type Prev8369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8369 {
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

type ConfigPaths8369 = Paths8369<NestedConfig8369>;

interface HeavyProps8369 {
  config: DeepPartial8369<NestedConfig8369>;
  path?: ConfigPaths8369;
}

const HeavyComponent8369 = memo(function HeavyComponent8369({ config }: HeavyProps8369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8369.displayName = 'HeavyComponent8369';
export default HeavyComponent8369;

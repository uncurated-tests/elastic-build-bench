'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8783<T> = T extends (infer U)[]
  ? DeepReadonlyArray8783<U>
  : T extends object
  ? DeepReadonlyObject8783<T>
  : T;

interface DeepReadonlyArray8783<T> extends ReadonlyArray<DeepReadonly8783<T>> {}

type DeepReadonlyObject8783<T> = {
  readonly [P in keyof T]: DeepReadonly8783<T[P]>;
};

type UnionToIntersection8783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8783<T> = UnionToIntersection8783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8783<T extends unknown[], V> = [...T, V];

type TuplifyUnion8783<T, L = LastOf8783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8783<TuplifyUnion8783<Exclude<T, L>>, L>;

type DeepPartial8783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8783<T[P]> }
  : T;

type Paths8783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8783<K, Paths8783<T[K], Prev8783[D]>> : never }[keyof T]
  : never;

type Prev8783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8783 {
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

type ConfigPaths8783 = Paths8783<NestedConfig8783>;

interface HeavyProps8783 {
  config: DeepPartial8783<NestedConfig8783>;
  path?: ConfigPaths8783;
}

const HeavyComponent8783 = memo(function HeavyComponent8783({ config }: HeavyProps8783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8783.displayName = 'HeavyComponent8783';
export default HeavyComponent8783;

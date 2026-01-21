'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8048<T> = T extends (infer U)[]
  ? DeepReadonlyArray8048<U>
  : T extends object
  ? DeepReadonlyObject8048<T>
  : T;

interface DeepReadonlyArray8048<T> extends ReadonlyArray<DeepReadonly8048<T>> {}

type DeepReadonlyObject8048<T> = {
  readonly [P in keyof T]: DeepReadonly8048<T[P]>;
};

type UnionToIntersection8048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8048<T> = UnionToIntersection8048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8048<T extends unknown[], V> = [...T, V];

type TuplifyUnion8048<T, L = LastOf8048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8048<TuplifyUnion8048<Exclude<T, L>>, L>;

type DeepPartial8048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8048<T[P]> }
  : T;

type Paths8048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8048<K, Paths8048<T[K], Prev8048[D]>> : never }[keyof T]
  : never;

type Prev8048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8048 {
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

type ConfigPaths8048 = Paths8048<NestedConfig8048>;

interface HeavyProps8048 {
  config: DeepPartial8048<NestedConfig8048>;
  path?: ConfigPaths8048;
}

const HeavyComponent8048 = memo(function HeavyComponent8048({ config }: HeavyProps8048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8048.displayName = 'HeavyComponent8048';
export default HeavyComponent8048;

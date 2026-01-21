'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8770<T> = T extends (infer U)[]
  ? DeepReadonlyArray8770<U>
  : T extends object
  ? DeepReadonlyObject8770<T>
  : T;

interface DeepReadonlyArray8770<T> extends ReadonlyArray<DeepReadonly8770<T>> {}

type DeepReadonlyObject8770<T> = {
  readonly [P in keyof T]: DeepReadonly8770<T[P]>;
};

type UnionToIntersection8770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8770<T> = UnionToIntersection8770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8770<T extends unknown[], V> = [...T, V];

type TuplifyUnion8770<T, L = LastOf8770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8770<TuplifyUnion8770<Exclude<T, L>>, L>;

type DeepPartial8770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8770<T[P]> }
  : T;

type Paths8770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8770<K, Paths8770<T[K], Prev8770[D]>> : never }[keyof T]
  : never;

type Prev8770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8770 {
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

type ConfigPaths8770 = Paths8770<NestedConfig8770>;

interface HeavyProps8770 {
  config: DeepPartial8770<NestedConfig8770>;
  path?: ConfigPaths8770;
}

const HeavyComponent8770 = memo(function HeavyComponent8770({ config }: HeavyProps8770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8770.displayName = 'HeavyComponent8770';
export default HeavyComponent8770;

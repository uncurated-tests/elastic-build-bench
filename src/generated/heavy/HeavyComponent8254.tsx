'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8254<T> = T extends (infer U)[]
  ? DeepReadonlyArray8254<U>
  : T extends object
  ? DeepReadonlyObject8254<T>
  : T;

interface DeepReadonlyArray8254<T> extends ReadonlyArray<DeepReadonly8254<T>> {}

type DeepReadonlyObject8254<T> = {
  readonly [P in keyof T]: DeepReadonly8254<T[P]>;
};

type UnionToIntersection8254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8254<T> = UnionToIntersection8254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8254<T extends unknown[], V> = [...T, V];

type TuplifyUnion8254<T, L = LastOf8254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8254<TuplifyUnion8254<Exclude<T, L>>, L>;

type DeepPartial8254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8254<T[P]> }
  : T;

type Paths8254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8254<K, Paths8254<T[K], Prev8254[D]>> : never }[keyof T]
  : never;

type Prev8254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8254 {
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

type ConfigPaths8254 = Paths8254<NestedConfig8254>;

interface HeavyProps8254 {
  config: DeepPartial8254<NestedConfig8254>;
  path?: ConfigPaths8254;
}

const HeavyComponent8254 = memo(function HeavyComponent8254({ config }: HeavyProps8254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8254.displayName = 'HeavyComponent8254';
export default HeavyComponent8254;

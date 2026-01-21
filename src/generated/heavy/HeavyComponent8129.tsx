'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8129<T> = T extends (infer U)[]
  ? DeepReadonlyArray8129<U>
  : T extends object
  ? DeepReadonlyObject8129<T>
  : T;

interface DeepReadonlyArray8129<T> extends ReadonlyArray<DeepReadonly8129<T>> {}

type DeepReadonlyObject8129<T> = {
  readonly [P in keyof T]: DeepReadonly8129<T[P]>;
};

type UnionToIntersection8129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8129<T> = UnionToIntersection8129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8129<T extends unknown[], V> = [...T, V];

type TuplifyUnion8129<T, L = LastOf8129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8129<TuplifyUnion8129<Exclude<T, L>>, L>;

type DeepPartial8129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8129<T[P]> }
  : T;

type Paths8129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8129<K, Paths8129<T[K], Prev8129[D]>> : never }[keyof T]
  : never;

type Prev8129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8129 {
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

type ConfigPaths8129 = Paths8129<NestedConfig8129>;

interface HeavyProps8129 {
  config: DeepPartial8129<NestedConfig8129>;
  path?: ConfigPaths8129;
}

const HeavyComponent8129 = memo(function HeavyComponent8129({ config }: HeavyProps8129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8129.displayName = 'HeavyComponent8129';
export default HeavyComponent8129;
